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

  return { dir: { input: "src" } };
}
