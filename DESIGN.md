---
name: viniciuslongaray.dev
description: A late-night terminal session about an embedded engineer's career that opens on a 16-bit title screen, with a light printable CV beside it.
colors:
  night-floor: "#16161e"
  pane-navy: "#1a1b26"
  rule-slate: "#3b4261"
  moon-ink: "#c0caf5"
  dusk-gray: "#828bb8"
  headline-white: "#ffffff"
  prompt-amber: "#e0af68"
  link-cyan: "#7dcfff"
  shell-green: "#9ece6a"
  graph-pink: "#f7768e"
  deleted-wine: "#37222c"
  added-teal: "#20303b"
  row-rule: "#24283b"
  row-hover: "#292e42"
  boot-black: "#0d0e14"
  boot-ink: "#a9b1d6"
  rain-glint: "#d7f5b6"
  swatch-blue: "#7aa2f7"
  swatch-purple: "#bb9af7"
  crt-scanline: "#00000038"
  crt-vignette: "#00000080"
  scene-haze: "#202436"
  scene-street: "#1f2335"
  star-dim: "#565f89"
  moon-shade: "#c99a55"
  crystal-light: "#e6f7ff"
  crystal-shade: "#3f86b8"
  cv-desk: "#eef0f4"
  cv-paper: "#ffffff"
  cv-ink: "#1d2230"
  cv-link-blue: "#1f4fa8"
  cv-slate: "#4a5266"
  cv-label-gray: "#6a7286"
  cv-rule: "#dfe2ea"
typography:
  headline:
    fontFamily: "JetBrains Mono, ui-monospace, Cascadia Mono, DejaVu Sans Mono, monospace"
    fontSize: "18px"
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: "JetBrains Mono, ui-monospace, Cascadia Mono, DejaVu Sans Mono, monospace"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.6
  body-dense:
    fontFamily: "JetBrains Mono, ui-monospace, Cascadia Mono, DejaVu Sans Mono, monospace"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "JetBrains Mono, ui-monospace, Cascadia Mono, DejaVu Sans Mono, monospace"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.6
  alert:
    fontFamily: "JetBrains Mono, ui-monospace, Cascadia Mono, DejaVu Sans Mono, monospace"
    fontSize: "28px"
    fontWeight: 400
    letterSpacing: "0.1em"
  fine:
    fontFamily: "JetBrains Mono, ui-monospace, Cascadia Mono, DejaVu Sans Mono, monospace"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: 1.6
  cv-headline:
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "30px"
    fontWeight: 700
    lineHeight: 1.15
  cv-title:
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "16px"
    fontWeight: 700
  cv-body:
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.55
  cv-section-label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "12px"
    fontWeight: 700
    letterSpacing: "0.14em"
rounded:
  none: "0px"
spacing:
  xs: "4px"
  sm: "6px"
  md: "12px"
  lg: "16px"
  xl: "26px"
components:
  pane:
    backgroundColor: "{colors.pane-navy}"
    rounded: "{rounded.none}"
    padding: "20px 16px 16px"
  pane-title:
    backgroundColor: "{colors.night-floor}"
    textColor: "{colors.prompt-amber}"
    typography: "{typography.body}"
    fontWeight: 700
    padding: "0 2px"
  title-scene:
    height: "clamp(230px, 24vw, 300px)"
  dialogue:
    backgroundColor: "{colors.pane-navy}"
    textColor: "{colors.moon-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "18px 20px 20px 22px"
  reply:
    textColor: "{colors.moon-ink}"
    typography: "{typography.body}"
    padding: "6px 8px"
  reply-active:
    backgroundColor: "{colors.row-hover}"
  star-meter:
    textColor: "{colors.prompt-amber}"
    typography: "{typography.body-dense}"
  chip:
    textColor: "{colors.moon-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "2px 8px"
  button-ghost:
    textColor: "{colors.dusk-gray}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "1px 8px"
  button-ghost-hover:
    textColor: "{colors.prompt-amber}"
  button-text:
    textColor: "{colors.shell-green}"
    typography: "{typography.label}"
  button-text-hover:
    textColor: "{colors.prompt-amber}"
  table-header:
    backgroundColor: "{colors.shell-green}"
    textColor: "{colors.night-floor}"
    padding: "2px 10px"
  command-palette:
    backgroundColor: "{colors.night-floor}"
    textColor: "{colors.moon-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    width: "min(720px, calc(100vw - 32px))"
  sprite:
    width: "16 scene px"
    height: "24 scene px"
  save-crystal:
    width: "80px"
    height: "104px"
  save-slot:
    textColor: "{colors.dusk-gray}"
    typography: "{typography.body}"
  save-slot-active:
    textColor: "{colors.prompt-amber}"
  secrets-counter:
    textColor: "{colors.dusk-gray}"
    typography: "{typography.label}"
  cv-sheet:
    backgroundColor: "{colors.cv-paper}"
    textColor: "{colors.cv-ink}"
    typography: "{typography.cv-body}"
    padding: "clamp(20px, 5vw, 48px)"
---

# Design System: viniciuslongaray.dev

## Overview

**Creative North Star: "The Longaray Chronicles Session"**

The site is a terminal left open late at night: Tokyo Night navy, an amber prompt waiting, and everything on screen is real output from a real shell. `git log --graph` is the career, `git diff` is the job change, the projects table is `ps` sorted by live GitHub stars. The mood is cozy, nerdy and warm: the warmth of a late session and the 16-bit games behind it. The session opens on a title screen, **Longaray Chronicles**: a pixel night city with Vinicius standing by a save crystal, then a dialogue box where he introduces himself and the replies are the page's sections. Below that it is the terminal again, with game nods in the margins: a save point at the contact pane, job classes in the career diff, and a secrets counter in the command palette.

Density is a calm tmux layout, not a btop wall. Content sits in bordered panes on a 12-column grid, each pane titled in box-drawing brackets with a keyboard shortcut in its opposite corner. Monospace is everywhere because the whole world is a terminal, not as a "technical" garnish. The `/cv` page is a deliberate sub-theme: daylight, paper and system sans, built to be printed, linked back to the terminal by one mono nav line and mono section labels.

The one hard rejection: no fake terminal output. Every command, stat, diff and table shows real data; humor lives in the comments and fine print, never in invented numbers.

**Key Characteristics:**
- Tokyo Night (night) palette with Moon's lighter gray for readable small text.
- JetBrains Mono, self-hosted, at 11–14px, with an 18px bold headline step; the only display moment is the pixel logotype on the title screen.
- Bordered square panes, titled `┤ name ├` in amber, with a shortcut key in the top-right corner.
- Flat surfaces; depth comes from the floor/pane two-tone and 1px slate rules.
- Motion is rare and earned: a boot screen, PRESS START blinking four times, a pane flash on jump, a diff that types itself once, and the small idle loops of the pixel art.
- 16-bit games own the first screen (the title scene and dialogue) and stay in the margins everywhere after it.
- `/cv` is the light, print-first counterpart sharing the content, not the look.

## Colors

A low-contrast navy night with four syntax-highlight accents, one of which (amber) acts as the prompt.

### Primary
- **Prompt Amber** (`prompt-amber`): the "live" color. Pane titles, commit hashes, the email address, star counts, the focus ring, and the hover state of every link and button. If something is interactive or current, amber is where it ends up.

### Secondary
- **Link Cyan** (`link-cyan`): resting links (with a dotted underline), reply destinations, language names, the diff hunk header.
- **Shell Green** (`shell-green`): commands and success. `$` prompts, `whoami` output, git refs like `(HEAD -> main)`, the commands button, the projects table header band, added diff lines.

### Tertiary
- **Graph Pink** (`graph-pink`): the `git log` main line and commit nodes, removed diff lines, and the 404 error line.

### Neutral
- **Night Floor** (`night-floor`): page background, and the knockout behind pane titles so they cut through the border.
- **Pane Navy** (`pane-navy`): pane surfaces, one step up from the floor.
- **Rule Slate** (`rule-slate`): every 1px border (panes, chips, kbd keys, top bar rule) and the `┤ ├` brackets.
- **Moon Ink** (`moon-ink`): body text.
- **Dusk Gray** (`dusk-gray`): secondary text, dates, labels, comments, fine print. Chosen over Tokyo Night's comment gray for 5.2:1 contrast at small sizes.
- **Headline White** (`headline-white`): the name, "SAVE GAME?", bold commit titles, the 404 "CONTINUE?" and command input text. Reserved for the few things that must pop above ink.
- **Deleted Wine / Added Teal** (`deleted-wine`, `added-teal`): diff line backgrounds only.
- **Row Rule / Row Hover** (`row-rule`, `row-hover`): table row dividers and the hover band.
- **Boot Black** (`boot-black`): the boot screen and the palette backdrop tint, darker than the floor.

- **Boot Ink** (`boot-ink`): the boot screen's text, softer than Moon Ink on the darker Boot Black.
- **Rain Glint** (`rain-glint`): the bright head of each stream in the `matrix` easter egg.
- **CRT Scanline / CRT Vignette** (`crt-scanline`, `crt-vignette`): the opt-in CRT overlay only.

### Swatches and pixel art
- **Swatch Blue / Swatch Purple** (`swatch-blue`, `swatch-purple`): Tokyo Night blue is the drop shadow of the pixel logotype; purple is the degree branch in the git graph (education branches alternate Shell Green and Swatch Purple). Neither is used for text or UI.
- **Scene Haze / Scene Street / Star Dim / Moon Shade** (`scene-haze`, `scene-street`, `star-dim`, `moon-shade`): only inside the title scene: the lower sky band, the near buildings, faint stars, and the moon's shadow. Far buildings use Row Rule; lit windows and the moon are Prompt Amber.
- **Crystal Light / Crystal Shade** (`crystal-light`, `crystal-shade`): the save crystal's highlight and shadow around Link Cyan.
- **The sprite** is drawn from the same palette: Boot Black outline, Headline-White shirt with a Pane Navy print in Prompt Amber, Graph Pink and Shell Green flowers, Rule Slate trousers. Its skin (`#e9b994`, shade `#c98a68`), hair (`#2b2330`, highlight `#6b5870`) and lip (`#c97f72`) tones exist only inside `me.svg`.

### CV sub-theme
- **CV Desk** (`cv-desk`) behind a **CV Paper** (`cv-paper`) sheet, **CV Ink** (`cv-ink`) text, **CV Link Blue** (`cv-link-blue`) links, **CV Slate** (`cv-slate`) for the role line, **CV Label Gray** (`cv-label-gray`) for section labels and dates, **CV Rule** (`cv-rule`) under section labels. On `/cv` the focus ring switches to CV Link Blue, since amber is only 2:1 on white.

### Named Rules
**The Prompt Rule.** Amber means "live": titles, focus, hover, current values. Don't spend it on decoration or long passages of text.

**The Syntax Rule.** Accents follow their shell meanings: cyan links and keys, green commands and additions, pink graph rails, deletions and errors. A new element takes the color its terminal equivalent would have.

## Typography

**Body Font:** JetBrains Mono (self-hosted latin 400/700, with ui-monospace, Cascadia Mono, DejaVu Sans Mono fallbacks)
**CV Body Font:** the platform system sans (system-ui, -apple-system, Segoe UI, Roboto)

**Character:** One monospace voice for the whole terminal, sized like a real terminal: small, even, readable. Hierarchy comes from color and weight, with one 18px headline step. The title's big letters are pixel art, not type.

### Hierarchy
- **Pixel logotype** (not a font): "LONGARAY" in a 5×7 pixel alphabet at 2 scene pixels per dot, white with a Swatch Blue drop shadow, over "CHRONICLES" at 1 dot in amber. Drawn inside the scene SVG.
- **Headline** (700, 18px, 1.3, white): the name in the dialogue and "SAVE GAME?" (tracked 0.08em).
- **Alert** (400, 28px, 0.1em tracking, white): the 404's "CONTINUE?" only.
- **Body** (400, 14px, 1.6): the dialogue line (1.7, capped at 60ch), bio paragraphs, replies, palette text. Pane titles use it at 700.
- **Body dense** (400, 13px): git log, diff, projects table, palette output, the role line under the name (700, amber).
- **Label** (400, 12px): top bar, chips, buttons, PRESS START (700, tracked 0.3em), reply destinations (700), stack group headings (prefixed `# `).
- **Fine** (400, 11px): footer, colophon diff, the warranty fine print, kbd shortcut hints, the title screen's copyright line, the reply panel's label.
- **CV:** 30px/700 name, 16px/700 job titles, 15px/1.55 body, and 12px/700 mono uppercase labels tracked at 0.14em as the one bridge back to the terminal. Prints at 11pt.

### Named Rules
**The Weight-Not-Size Rule.** On terminal pages, emphasis is bold or white or amber. Size steps are fixed: 11 / 12 / 13 / 14 / 18px, plus the 404's 28px prompt. Nothing gets a size of its own; if 18px isn't enough, it isn't a type problem.

## Layout

A centered 1200px column. The top bar is a single wrapping row of dim 12px links over a 1px slate rule, with the commands button and a tabular clock pushed right. Below it, everything sits on a 12-column grid with 26px row gap and 16px column gap. The title screen spans 12: the scene (clamp(230px, 24vw, 300px) tall, cropping its sides on narrow screens so the title and sprite stay centered), the dialogue box flush under it (greeting left, a 380px reply panel right; stacked under 900px). Then the panes: `about · cat about.txt` spans 12 with the bio in three columns (one under 900px) and the recruiter tip under it, the git log spans 7 and two rows, diff and stack span 5 each, projects and contact span 12. Under 900px every pane spans 12 and stacks.

Side padding is 16px or the safe-area inset, whichever is larger. Wide content scrolls inside its pane rather than breaking the page: the diff, and the projects table (min 680px) above 600px. Under 600px the table restacks into two-line entries (`pid name lang ★n`, then the description) with its header kept for screen readers only, and the star meters drop out. Inside panes, groups stack on 12px gaps; lists and chip rows use 4–6px.

`/cv` is an 820px sheet on a desk background, padded clamp(20px, 5vw, 48px), sections 26px apart; skills and languages split into two columns above 600px. In print it must fit one page on A4 and Letter: 12mm×14mm page margins, 10pt/1.45 body, 22pt name, 12px section gaps; the desk, nav and copy buttons disappear and jobs avoid breaking across pages.

## Elevation & Depth

Flat. Depth is tonal: the pane navy sits one step above the floor, and 1px slate borders draw the structure like a TUI. The only shadows belong to things that genuinely float: the command palette dialog (`0 24px 64px #000a`) over a dimmed backdrop, and the CV sheet's barely-there paper lift (`0 1px 3px #0000001a`), which disappears in print.

### Named Rules
**The TUI Rule.** Panes are separated by borders and tone, never by shadows. A shadow means "this is above the page".

## Shapes

Square everything: zero radius on panes, chips, buttons, kbd keys and the dialog. Lines are 1px slate. Pane titles break the top border with box-drawing brackets (`┤ title ├`), and text glyphs do the work icons would (`↗` external, `♪` playlist, `❯` prompt, `✕` close, `★` stars, `▸` cursor). The dialogue box is the one place with a 3px double rule in Moon Ink, like a 16-bit text window. The avatar (the dialogue portrait) is a square with a 1px border, slightly desaturated.

### Named Rules
**The Pixel Art Rule.** Pixel art is original, drawn on a tiny grid (16×24 for the sprite, 10×12 for the crystal, 5×7 for logotype letters), rendered with crisp edges, outlined in Boot Black and colored from this palette. The title scene is the one full pixel scene, and it lives only at the top of the home page; everywhere else pixel art is a cameo inside a pane (the save crystal), never a background, border or frame.

## Components

### Pane
The core container: a titled terminal window.
- **Shape:** square, 1px `rule-slate` border, `pane-navy` fill, padding 20px 16px 16px, 12px internal gap.
- **Title:** amber 14px bold set into the top border on a `night-floor` knockout, wrapped in regular-weight slate `┤ ├`; truncates with an ellipsis.
- **Shortcut:** a dim 11px key (a, e, d, s, p, c) in the top-right of the border.
- **Flash:** when jumped to by key, the border and an inset 1px ring turn amber and fade back over 0.3s.

### Buttons
Two quiet kinds, both text-first.
- **Text button** (the "❯ commands" opener): no box, green label, amber on hover, with a bordered `/` kbd hint hidden on touch devices.
- **Ghost button** (copy, palette close): 1px slate border, dim 12px label, padding 1px 8px; border and text turn amber on hover.
- **Focus:** a 2px amber outline at 2px offset, globally.

### Chips
- **Style:** 12px label in a 1px slate box, padding 2px 8px, no fill. A dim suffix carries secondary info (`English · full professional`).
- Static only; no selected state.

### Links
Cyan with a 1px dotted underline in the same color; amber on hover. On `/cv`, plain underlined blue. External links carry `↗` when the label doesn't make it obvious.

### Command palette
A `<dialog>` opened by `/`: 720px max, night-floor fill, slate border, the one real drop shadow. A header with an amber title and an `esc ✕` ghost close, scrollback output in dim 13px with amber bold keywords, and a prompt row with a green `❯` label, borderless white input and an amber caret. Easter-egg animations (spectrum, matrix rain, train) render as ASCII inside the scrollback.

### Projects table
`ps`-style, sorted by live GitHub stars fetched at build time: a solid green header band with floor-colored text, rows ruled in `row-rule`, a `row-hover` band on hover, dim tabular PIDs, cyan languages, and an htop-style star meter before each right-aligned amber count: 10 cells, amber `|` filled and slate `·` empty, on a log scale against the most-starred repo so a single star still shows. The meter is decorative (hidden from screen readers) and hidden on phones.

### Diff
Lines on a 2ch sign / 9ch key / content grid. Removed lines are pink on `deleted-wine`, added lines green on `added-teal`, the hunk header cyan. On first scroll into view the added lines type themselves in (stepped clip-path) while removed lines fade to 90% (any further and they drop under 4.5:1); with reduced motion or no JS it's static. The career diff uses RPG vocabulary for its keys (`class:` for the role, `guild:` for the company). The footer colophon reuses it at 11px.

### Title screen
The top of the home page (`#title`), not a pane. A 400×96 pixel scene (`_includes/title-scene.svg`, generated, inlined) in a 1px slate frame: a starry sky in two dithered bands, an amber crescent moon, two layers of skyline with lit amber windows, a dashed street, the "LONGARAY / CHRONICLES" logotype, and the 16×24 sprite standing next to the save crystal. The sprite breathes and blinks, the crystal bobs, a few stars twinkle; all of it stops under reduced motion. "PRESS START" (amber, tracked) blinks four times on load and stays lit; a dim `© 1993–{year} LONGARAY SOFT` sits on the street. Everything in the scene is decorative; its text alternative is one label on the SVG.

### Dialogue
Flush under the scene, a Pane Navy box with a 3px double Moon Ink rule. Left: the photo portrait (88px, 56px under 900px, top-right of the box under 480px), the name as the page's only `h1` (headline), the role and company in amber, and one greeting in Vinicius's voice that carries the recruiter facts (company, city, years in software, counted live from the first job). Right: a **reply panel** labeled `reply` in the border, a numbered list of five replies (journey → experience, side quests → projects, inventory → stack, reach you → contact, CV → /cv). Each reply shows its destination in a fixed bold cyan column so a visitor hunting one link can scan it without reading the lines; on phones the destination sits above the line. Hover or focus shows a `row-hover` band and an amber `▸`. Keys 1–5 pick a reply; the digits hide on touch and when shortcuts are off.

### Save point (contact)
The contact pane, titled `contact · save point`:
- **Crystal:** a floating save crystal (80×104, 30×39 under 480px) on the left, bobbing 1px over its shadow with a single glint.
- **Prompt:** "SAVE GAME?" in white headline (18px bold), tracked 0.08em. Beside it, an amber 12px "2P PRESS START" that blinks four times the first time it scrolls fully into view, then stays lit.
- **Slots:** an ordered list numbered `[1]`–`[4]` in dusk gray, label column 9ch, then the link or email. On hover or keyboard focus the number becomes an amber `▸` cursor. Under 480px each label sits above its value.
- The warranty fine print stays under the menu.

### Secrets counter
The palette header shows `secrets n/5` in dusk gray, the count in amber. Finding a hidden command adds `★ secret found · n/5` in amber to the scrollback; the fifth links to the save point. The count is per visitor and never leaves the browser.

### Git log
A drawn `git log --graph`: a 30px graph column with a 2px Graph Pink main line and 8px square commit nodes knocked out from the pane. Jobs commit on main. Each school is a side branch (Shell Green, then Swatch Purple) that leaves main above the first job that started before the school ended and merges back below the school's own commit, drawn as 16px curved SVG joins, so overlapping study and work read as parallel lines. Entries: amber short hash, green refs (a school's `tag:` ref takes its branch color), bold white title, dim dates, `- ` highlights in ink, and `# quip` comments in Shell Green italic (like the diff's comment line), so the jokes read as code comments. The graph is computed from `timeline.yml` by the `gitGraph` filter and hidden from screen readers.

### Boot screen
First visit only: a full-screen `boot-black` overlay of BIOS-style lines with green results (`Memory test .... 640K OK`), typed in line by line, dismissed on click, skipped under reduced motion.

### CRT mode (easter egg)
Opt-in only: faint cyan text glow, 1px scanlines and a vignette over the whole page.

## Do's and Don'ts

### Do:
- **Do** show real data in every terminal construct: real commands, real setup, real star counts, real dates.
- **Do** put new content in a titled pane with a shortcut key, and color its parts by their shell meaning (The Syntax Rule). The title screen is the only thing above the panes.
- **Do** use amber for whatever is live, hovered or focused (The Prompt Rule).
- **Do** keep small text on `dusk-gray` or brighter; it was chosen for contrast at 11–13px.
- **Do** let wide content scroll inside its pane, and stack panes to full width under 900px.
- **Do** keep motion one-shot and skippable, with a static fallback for reduced motion.
- **Do** keep `/cv` light, sans and printable, sharing only the mono section labels with the terminal.
- **Do** keep pixel art original, crisp and from this palette; the title scene is the only full scene (The Pixel Art Rule).
- **Do** keep every reply's destination visible in plain words; the RPG line is flavor, the destination is the link.
- **Do** keep `/cv` on one printed page on both A4 and Letter.

### Don't:
- **Don't** fake terminal output: no invented stats, fake players, faux progress bars or made-up logs. Humor goes in comments and fine print.
- **Don't** add font sizes beyond 11 / 12 / 13 / 14 / 18px on terminal pages; emphasize with weight, white or amber.
- **Don't** use shadows to separate panes; borders and tone do that (The TUI Rule).
- **Don't** load fonts or scripts from third parties; JetBrains Mono stays self-hosted.
- **Don't** blink or loop forever in the page's text; attention effects run a few times and settle (the sprite, crystal and twinkling-star idles are the exception, and they stop under reduced motion).
