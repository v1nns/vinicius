(() => {
  const $ = id => document.getElementById(id);
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const store = {
    get: k => { try { return localStorage.getItem(k); } catch { return null; } },
    set: (k, v) => { try { localStorage.setItem(k, v); } catch {} }
  };

  // ---------- boot screen: first visit only, skippable ----------
  const boot = $("boot");
  if (!reduce && !store.get("booted")) {
    store.set("booted", "1");
    const lines = [
      "LONGARAY BIOS v2.0  (c) 1993-" + new Date().getFullYear(),
      "Memory test ............ 640K <i>OK</i>",
      "Detecting toolchain .... <i>g++ / clang</i>",
      "Bringing up MPLS ....... <i>labels assigned</i>",
      "Loading playlist ....... <i>OK</i>",
      "Starting session for vinicius..."
    ];
    let i = 0;
    boot.hidden = false;
    const done = () => { clearInterval(timer); boot.hidden = true; };
    const timer = setInterval(() => {
      if (i < lines.length) boot.innerHTML += lines[i++] + "\n";
      else { clearInterval(timer); setTimeout(done, 250); }
    }, 150);
    boot.addEventListener("click", done);
    addEventListener("keydown", done, { once: true });
  }

  // ---------- clock ----------
  const clock = () => { $("clock").textContent = new Date().toTimeString().slice(0, 8); };
  clock(); setInterval(clock, 1000);

  // ---------- years in software, counted from the first job ----------
  const up = $("uptime"), [sy, sm] = up.dataset.since.split("-").map(Number), now = new Date();
  const months = (now.getFullYear() - sy) * 12 + (now.getMonth() + 1 - sm);
  up.textContent = `${Math.floor(months / 12)} years in software`;

  // ---------- CRT mode (remembered) ----------
  const setCrt = on => { document.body.classList.toggle("crt", on); store.set("crt", on ? "1" : ""); };
  setCrt(store.get("crt") === "1");

  // ---------- career diff: type the "+" lines in once, when scrolled into view ----------
  const diff = $("careerDiff");
  if (!reduce && "IntersectionObserver" in window) {
    let i = 0;
    diff.querySelectorAll(".dl:not(.hunk)").forEach(el => { el.style.setProperty("--i", el.classList.contains("del") ? i : i++); });
    diff.classList.add("ready");
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { diff.classList.add("play"); io.disconnect(); } }, { threshold: .6 });
    io.observe(diff);
  }

  // ---------- save point: "2P PRESS START" blinks a few times the first time contact scrolls into view ----------
  const p2 = document.querySelector(".p2");
  if (p2 && !reduce && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { p2.classList.add("on"); io.disconnect(); } }, { threshold: 1 });
    io.observe(p2);
  }

  // ---------- panels + command palette ----------
  const PANES = { about: "about", experience: "experience", diff: "diff", stack: "stack", projects: "projects", contact: "contact" };
  const KEYS = { a: "about", e: "experience", d: "diff", s: "stack", p: "projects", c: "contact" };
  const setKeys = on => { document.body.classList.toggle("nokeys", !on); store.set("keys", on ? "" : "off"); };
  setKeys(store.get("keys") !== "off");
  function jump(id) {
    const el = $(id);
    el.tabIndex = -1; el.focus({ preventScroll: true });
    el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    el.classList.add("flash"); setTimeout(() => el.classList.remove("flash"), 900);
  }
  const dlg = $("cmd"), out = $("out"), input = $("cmdIn"), opener = $("cmdOpen");
  const open = () => { if (!dlg.open) dlg.showModal(); input.focus(); };
  opener.hidden = false;
  opener.addEventListener("click", open);
  $("cmdClose").addEventListener("click", () => dlg.close());
  dlg.addEventListener("click", e => { if (e.target === dlg) dlg.close(); }); // backdrop
  const esc = s => s.replace(/[&<>]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" })[c]);
  // ---------- easter eggs: small ASCII animations inside the palette (not listed in help) ----------
  let anim = 0;
  // Adds a <pre> to the log and returns it with how many characters fit on one line.
  function screen(cls) {
    const pre = document.createElement("pre");
    pre.className = "viz " + cls; pre.setAttribute("aria-hidden", "true");
    out.append(pre);
    const probe = pre.appendChild(document.createElement("span"));
    probe.textContent = "█";
    const cw = probe.getBoundingClientRect().width || 8;
    probe.remove();
    out.scrollTop = out.scrollHeight;
    return { pre, cols: Math.floor(pre.clientWidth / cw), id: ++anim };
  }
  // Calls frame(t) every `ms` until it returns false (then removes the <pre>), the palette closes, or another animation starts.
  function play(s, ms, frame) {
    let last = 0;
    const tick = t => {
      if (s.id !== anim || !s.pre.isConnected || !dlg.open) return;
      if (t - last > ms) { last = t; if (frame(t) === false) return s.pre.remove(); }
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  // spectrum: a tiny take on the visualizer from the real project.
  function visualizer() {
    const s = screen("bars"), H = 8, BLK = " ▁▂▃▄▅▆▇█", n = Math.max(8, Math.floor(s.cols / 3));
    const v = new Array(n).fill(0), end = performance.now() + 7000;
    const draw = () => {
      let html = "";
      for (let r = H - 1; r >= 0; r--) {
        const cells = v.map(x => BLK[Math.max(0, Math.min(8, Math.round(x * H * 8) - r * 8))].repeat(2)).join(" ");
        html += `<span class="${r >= 6 ? "hi" : r >= 3 ? "mid" : "lo"}">${cells}</span>\n`;
      }
      s.pre.innerHTML = html;
    };
    if (reduce) { v.forEach((_, i) => { v[i] = .2 + .6 * Math.random() * (1 - i / n); }); return draw(); }
    play(s, 60, t => {
      const playing = t < end, beat = Math.sin(t / 140) > .6;
      v.forEach((x, i) => {
        const target = playing ? Math.min(1, (1 - i / n) * .5 + Math.random() * .45 + (beat && i < n / 4 ? .3 : 0)) : 0;
        v[i] = x * .55 + target * .45;
      });
      draw();
      return playing || v.some(x => x >= .01);
    });
  }

  // cmatrix: falling green characters. After 7 s no new streams start, and it ends once the last one falls off.
  function matrix() {
    const s = screen("rain"), H = 12, W = Math.max(10, s.cols), GLYPHS = "abcdefghijklmnopqrstuvwxyz0123456789$+-*/=%#_(){}[]|:;.?!~^";
    const rnd = () => GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
    const grid = Array.from({ length: W }, () => Array.from({ length: H }, rnd));
    const cols = Array.from({ length: W }, () => ({ y: -Math.random() * H * .6, speed: .5 + Math.random() * .7, len: 4 + Math.floor(Math.random() * 7) }));
    const end = performance.now() + 7000;
    const draw = () => {
      let html = "";
      for (let r = 0; r < H; r++) {
        for (let c = 0; c < W; c++) {
          const d = Math.floor(cols[c].y) - r, ch = grid[c][r];
          html += d === 0 ? `<b>${ch}</b>` : d > 0 && d < cols[c].len ? (d > cols[c].len * .6 ? `<i>${ch}</i>` : ch) : " ";
        }
        html += "\n";
      }
      s.pre.innerHTML = html;
    };
    if (reduce) { cols.forEach(c => { c.y = Math.random() * (H + 6); }); return draw(); }
    play(s, 70, t => {
      const going = t < end;
      cols.forEach((c, i) => {
        c.y += c.speed;
        if (c.y - c.len > H && going) Object.assign(c, { y: -Math.random() * H, speed: .5 + Math.random() * .7 });
        if (Math.random() < .3) grid[i][Math.floor(Math.random() * H)] = rnd();
      });
      draw();
      return going || cols.some(c => c.y - c.len <= H);
    });
  }

  // sl: what you get for typing ls backwards. An original little train drives right to left.
  const TRAIN = [
    ["     (  )  o  .         ", "    ( )  O   o          "],
    ["      ||                ", "      ||                "],
    ["  ____||__________  ___ ", "  ____||__________  ___ "],
    [" |  _   _   |  __ ||   |", " |  _   _   |  __ ||   |"],
    [" | |_| |_|  | |  |||   |", " | |_| |_|  | |  |||   |"],
    ["<|__________|_|__|||___|", "<|__________|_|__|||___|"],
    ["  -(O)--(O)-  (O)  (O)  ", "  =(O)==(O)=  (O)  (O)  "]
  ];
  function train() {
    const s = screen("train"), W = Math.max(30, s.cols), w = TRAIN[0][0].length;
    let x = W, f = 0;
    const draw = () => {
      s.pre.textContent = TRAIN.map(l => (" ".repeat(Math.max(0, x)) + l[f].slice(Math.max(0, -x))).slice(0, W)).join("\n");
    };
    if (reduce) { x = Math.max(0, Math.floor((W - w) / 2)); return draw(); }
    play(s, 45, () => { draw(); x--; f = (x >> 1) & 1; return x > -w; });
  }

  // ---------- secrets: hidden commands, counted per visitor (remembered in localStorage) ----------
  const SECRETS = ["spectrum", "matrix", "sl", "sudo", "editor"];
  const found = new Set((store.get("secrets") || "").split(",").filter(s => SECRETS.includes(s)));
  const counter = $("secrets");
  const showCount = () => {
    counter.hidden = false;
    counter.innerHTML = `secrets <b>${found.size}/${SECRETS.length}</b>`;
  };
  showCount();
  function secret(id) {
    if (found.has(id)) return;
    found.add(id); store.set("secrets", [...found].join(",")); showCount();
    const all = found.size === SECRETS.length;
    out.insertAdjacentHTML("beforeend", `<p><b>★ secret found · ${found.size}/${SECRETS.length}</b>${all ? `<br>all of them. you clearly read the manual. the <a href="#contact">save point</a> is at the bottom.` : ""}</p>`);
    out.scrollTop = out.scrollHeight;
  }

  function run(raw) {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;
    const say = html => {
      out.insertAdjacentHTML("beforeend", `<p><b>❯ ${esc(cmd)}</b><br>${html}</p>`);
      out.scrollTop = out.scrollHeight;
    };
    // Pane names, plus the commands their titles print, jump to the pane.
    const pane = PANES[cmd] || (cmd === "neofetch" ? "about" : cmd.startsWith("git log") ? "experience" : cmd.startsWith("git diff") ? "diff" : "");
    if (pane) { dlg.close(); return jump(pane); }
    switch (cmd) {
      case "help": case "?": case "man":
        return say("about · experience · diff · stack · projects · contact · music · cv · crt · keys · clear<br>RECRUITER TIP! You never need these. Everything is already on the page.");
      case "music": case "playlist":
        return say(`"You can understand someone's personality through their music." <a href="${$("playlist").href}" target="_blank" rel="noopener">open the playlist ↗</a>`);
      case "cv": location.href = "/cv/"; return say("opening cv...");
      case "crt": setCrt(!document.body.classList.contains("crt")); return say(`crt mode ${document.body.classList.contains("crt") ? "on" : "off"}`);
      case "keys": setKeys(document.body.classList.contains("nokeys")); return say(`single-key shortcuts ${document.body.classList.contains("nokeys") ? "off" : "on"}`);
      case "clear": out.textContent = ""; return;
      case "ls": return say("about/  experience/  diff/  stack/  projects/  contact/  cv.pdf  <b>spectrum*</b>");
      case "sl": say("you meant ls. all aboard anyway."); secret("sl"); return train();
      case "cmatrix": case "matrix": say("wake up, recruiter..."); secret("matrix"); return matrix();
      case "spectrum": case "./spectrum":
        say(`♪ spectrum, but tiny. the real one lives in your terminal: <a href="https://github.com/v1nns/spectrum" target="_blank" rel="noopener">v1nns/spectrum ↗</a>`);
        secret("spectrum");
        return visualizer();
      case "whoami": return say("vinicius: embedded software engineer, terminal enthusiast, RPG veteran");
      case "vim": case "nvim": say("good choice. (:q to exit. he promises.)"); return secret("editor");
      case "emacs": say("this warranty does not cover editor wars."); return secret("editor");
      case "exit": case "quit": case ":q": dlg.close(); return say("bye.");
      case "play": return say("overworld.exe isn't installed yet. coming in a future patch.");
    }
    if (cmd.startsWith("sudo")) { say("vinicius is not in the sudoers file. This incident will be reported."); return secret("sudo"); }
    if (cmd.startsWith("rm ")) return say("nice try.");
    say(`command not found: ${esc(cmd)}. try help`);
  }
  // In-page links inside the palette close it and jump to the pane.
  out.addEventListener("click", e => {
    const a = e.target.closest('a[href^="#"]');
    if (a) { e.preventDefault(); dlg.close(); jump(a.getAttribute("href").slice(1)); }
  });
  $("cmdForm").addEventListener("submit", e => { e.preventDefault(); run(input.value); input.value = ""; });
  addEventListener("keydown", e => {
    if (!boot.hidden || dlg.open) return;
    if (e.target.closest && e.target.closest("input, textarea, [contenteditable]")) return;
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    if (e.key === "/") { e.preventDefault(); open(); return; }
    if (document.body.classList.contains("nokeys")) return;
    if (KEYS[e.key]) return jump(KEYS[e.key]);
    // 1-5 pick a reply in the title-screen dialogue.
    const reply = /^[1-9]$/.test(e.key) && document.querySelectorAll(".replies a")[e.key - 1];
    if (reply) reply.hash ? jump(reply.hash.slice(1)) : reply.click();
  });
})();
