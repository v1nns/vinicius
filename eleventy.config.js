import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import yaml from "js-yaml";

export default function (config) {
  config.addDataExtension("yml", contents => yaml.load(contents));
  config.addPassthroughCopy({ "src/assets": "assets", "src/CNAME": "CNAME" });

  // Short, stable fake commit hash for the "git log" panel.
  config.addFilter("sha", text => {
    let h = 0x811c9dc5;
    for (const ch of String(text)) { h ^= ch.codePointAt(0); h = Math.imul(h, 0x01000193); }
    return (h >>> 0).toString(16).padStart(8, "0").slice(0, 7);
  });
  // "2019-01" -> "2019"; empty -> "now"
  config.addFilter("year", d => d ? String(d).slice(0, 4) : "now");
  // "2019-01" -> "Jan 2019"; empty -> "Present"
  config.addFilter("month", d => {
    if (!d) return "Present";
    const [y, m] = String(d).split("-");
    return new Date(Date.UTC(+y, +m - 1)).toLocaleString("en-US", { month: "short", timeZone: "UTC" }) + " " + y;
  });
  // Oldest job in the timeline (entries are newest first).
  config.addFilter("firstJob", timeline => timeline.filter(e => e.company).at(-1));
  config.addShortcode("year", () => String(new Date().getFullYear()));
  // "/assets/css/site.css" -> "/assets/css/site.css?v=<content hash>", so a deploy that changes the file
  // gets a new URL that Cloudflare and browsers haven't cached (they keep assets for 4 hours).
  config.addFilter("v", url => url + "?v=" + createHash("sha256").update(readFileSync("src" + url)).digest("hex").slice(0, 8));

  // Timeline (newest first) as git log --graph rows: jobs on main, each school on a side
  // branch that runs from its start up to the first job that began before it ended.
  config.addFilter("gitGraph", timeline => {
    const yr = d => parseInt(String(d), 10), LANE = ["var(--green)", "#bb9af7"];
    const branches = timeline.map((e, i) => ({ e, i })).filter(x => x.e.school).map((x, n) => ({
      top: Math.min(x.i, timeline.findIndex(e => yr(e.start) < yr(x.e.end))),
      at: x.i, color: LANE[n % LANE.length]
    }));
    const rows = [];
    timeline.forEach((entry, i) => {
      const b = branches.find(b => b.top <= i && i <= b.at);
      if (b && b.top === i) rows.push({ edge: "out", color: b.color });
      rows.push({ entry, side: !!b, color: b?.color, node: b && b.at === i ? 1 : 0 });
      if (b && b.at === i) rows.push({ edge: "in", color: b.color });
    });
    return rows;
  });

  // Live star counts, keyed by repo name, from one GitHub API call per build.
  // CI fails the build rather than deploy wrong numbers; local builds just warn.
  config.addGlobalData("stars", async () => {
    const headers = process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {};
    try {
      const res = await fetch("https://api.github.com/users/v1nns/repos?per_page=100", { headers });
      if (!res.ok) throw new Error(`GitHub API ${res.status}`);
      return Object.fromEntries((await res.json()).map(r => [r.name, r.stargazers_count]));
    } catch (err) {
      if (process.env.CI) throw err;
      console.warn(`[stars] ${err.message}; rendering without star counts`);
      return {};
    }
  });
  // htop-style meter: 10 cells, log scale against the most-starred repo, so 1 star still shows.
  config.addFilter("meter", (n, stars) => {
    const max = Math.max(1, ...Object.values(stars));
    const full = n ? Math.max(1, Math.round(10 * Math.log(n + 1) / Math.log(max + 1))) : 0;
    return `<b>${"|".repeat(full)}</b>${"·".repeat(10 - full)}`;
  });
  // Projects with their live stars, most starred first (ties keep file order).
  config.addFilter("byStars", (projects, stars) =>
    projects.map(p => ({ ...p, stars: stars[p.url.split("/").pop()] }))
      .sort((a, b) => (b.stars ?? -1) - (a.stars ?? -1)));

  return { dir: { input: "src" } };
}
