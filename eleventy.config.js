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
  // Projects with their live stars, most starred first (ties keep file order).
  config.addFilter("byStars", (projects, stars) =>
    projects.map(p => ({ ...p, stars: stars[p.url.split("/").pop()] }))
      .sort((a, b) => (b.stars ?? -1) - (a.stars ?? -1)));

  return { dir: { input: "src" } };
}
