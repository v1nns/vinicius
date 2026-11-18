---
name: viniciuslongaray.dev
description: A late-night terminal session about an embedded engineer's career, with a light printable CV beside it.
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
  cv-desk: "#eef0f4"
  cv-paper: "#ffffff"
  cv-ink: "#1d2230"
  cv-link-blue: "#1f4fa8"
  cv-slate: "#4a5266"
  cv-label-gray: "#6a7286"
  cv-rule: "#dfe2ea"
typography:
  display:
    fontFamily: "JetBrains Mono, ui-monospace, Cascadia Mono, DejaVu Sans Mono, monospace"
    fontSize: "clamp(24px, 4vw, 40px)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.01em"
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
    typography: "{typography.label}"
    padding: "0 2px"
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
  cv-sheet:
    backgroundColor: "{colors.cv-paper}"
    textColor: "{colors.cv-ink}"
    typography: "{typography.cv-body}"
    padding: "clamp(20px, 5vw, 48px)"
---

# Design System: viniciuslongaray.dev

## Overview

**Creative North Star: "The Night Shift Session"**

The site is a terminal left open late at night: Tokyo Night navy, an amber prompt waiting, and everything on screen is real output from a real shell. `git log --graph` is the career, `git diff` is the job change, `neofetch` is the actual setup, the projects table is `ps` sorted by stars. The mood is cozy, nerdy and warm: the warmth of a late session and the 16-bit games behind it, carried by quips in the small print rather than by decoration.

Density is a calm tmux layout, not a btop wall. Content sits in bordered panes on a 12-column grid, each pane titled in box-drawing brackets with a keyboard shortcut in its opposite corner. Monospace is everywhere because the whole world is a terminal, not as a "technical" garnish. The `/cv` page is a deliberate sub-theme: daylight, paper and system sans, built to be printed, linked back to the terminal by one mono nav line and mono section labels.

The one hard rejection: no fake terminal output. Every command, stat, diff and table shows real data; humor lives in the comments and fine print, never in invented numbers.

**Key Characteristics:**
- Tokyo Night (night) palette with Moon's lighter gray for readable small text.
- JetBrains Mono, self-hosted, at 11–14px; one large bold name is the only display moment.
- Bordered square panes, titled `┤ name ├` in amber, with a shortcut key in the top-right corner.
- Flat surfaces; depth comes from the floor/pane two-tone and 1px slate rules.
- Motion is rare and earned: a boot screen, a pane flash on jump, a diff that types itself once.
- `/cv` is the light, print-first counterpart sharing the content, not the look.

## Colors

A low-contrast navy night with four syntax-highlight accents, one of which (amber) acts as the prompt.

### Primary
- **Prompt Amber** (`prompt-amber`): the "live" color. Pane titles, commit hashes, the email address, star counts, the focus ring, and the hover state of every link and button. If something is interactive or current, amber is where it ends up.

### Secondary
- **Link Cyan** (`link-cyan`): resting links (with a dotted underline), neofetch keys, language names, the diff hunk header.
- **Shell Green** (`shell-green`): commands and success. `$` prompts, `whoami` output, git refs like `(HEAD -> main)`, the commands button, the projects table header band, added diff lines.

### Tertiary
- **Graph Pink** (`graph-pink`): the `git log` graph rail, removed diff lines, and the 404 error line.

### Neutral
- **Night Floor** (`night-floor`): page background, and the knockout behind pane titles so they cut through the border.
- **Pane Navy** (`pane-navy`): pane surfaces, one step up from the floor.
- **Rule Slate** (`rule-slate`): every 1px border (panes, chips, kbd keys, top bar rule) and the `┤ ├` brackets.
- **Moon Ink** (`moon-ink`): body text.
- **Dusk Gray** (`dusk-gray`): secondary text, dates, labels, comments, fine print. Chosen over Tokyo Night's comment gray for 5.2:1 contrast at small sizes.
- **Headline White** (`headline-white`): the name, bold commit titles, the 404 "CONTINUE?" and command input text. Reserved for the few things that must pop above ink.
- **Deleted Wine / Added Teal** (`deleted-wine`, `added-teal`): diff line backgrounds only.
- **Row Rule / Row Hover** (`row-rule`, `row-hover`): table row dividers and the hover band.
- **Boot Black** (`boot-black`): the boot screen and the palette backdrop tint, darker than the floor.

Tokyo Night blue (`#7aa2f7`) and purple (`#bb9af7`) appear only as neofetch color swatches; they are not part of the working palette.

### CV sub-theme
- **CV Desk** (`cv-desk`) behind a **CV Paper** (`cv-paper`) sheet, **CV Ink** (`cv-ink`) text, **CV Link Blue** (`cv-link-blue`) links, **CV Slate** (`cv-slate`) for the role line, **CV Label Gray** (`cv-label-gray`) for section labels and dates, **CV Rule** (`cv-rule`) under section labels.

### Named Rules
**The Prompt Rule.** Amber means "live": titles, focus, hover, current values. Don't spend it on decoration or long passages of text.

**The Syntax Rule.** Accents follow their shell meanings: cyan links and keys, green commands and additions, pink graph rails, deletions and errors. A new element takes the color its terminal equivalent would have.

## Typography

**Body Font:** JetBrains Mono (self-hosted latin 400/700, with ui-monospace, Cascadia Mono, DejaVu Sans Mono fallbacks)
**CV Body Font:** the platform system sans (system-ui, -apple-system, Segoe UI, Roboto)

**Character:** One monospace voice for the whole terminal, sized like a real terminal: small, even, readable. Hierarchy comes from color and weight, not size jumps.

### Hierarchy
- **Display** (700, clamp(24px, 4vw, 40px), 1.05, -0.01em, white): the name on the about pane. The only large type on the terminal pages, plus the 28px "CONTINUE?" on the 404.
- **Body** (400, 14px, 1.6): bio paragraphs, palette text. Bio measure capped at 68ch.
- **Body dense** (400, 13px): git log, diff, neofetch, projects table, palette output.
- **Label** (400, 12px): pane titles, top bar, chips, buttons, stack group headings (prefixed `# `).
- **Fine** (400, 11px): footer, colophon diff, the warranty fine print, kbd shortcut hints.
- **CV:** 30px/700 name, 16px/700 job titles, 15px/1.55 body, and 12px/700 mono uppercase labels tracked at 0.14em as the one bridge back to the terminal. Prints at 11pt.

### Named Rules
**The Weight-Not-Size Rule.** On terminal pages, emphasis is bold or white or amber, never a bigger font. Only the name gets size.

## Layout

A centered 1200px column. The top bar is a single wrapping row of dim 12px links over a 1px slate rule, with the commands button and a tabular clock pushed right. Below it, panes sit on a 12-column grid with 26px row gap and 16px column gap: about spans 12 (splitting into text + a 400px neofetch column at ≥1000px), the git log spans 7 and two rows, diff and stack span 5 each, projects and contact span 12. Under 900px every pane spans 12 and stacks.

Side padding is 16px or the safe-area inset, whichever is larger. Wide content (the projects table, min 680px; the diff) scrolls horizontally inside its pane rather than breaking the page. Inside panes, groups stack on 12px gaps; lists and chip rows use 4–6px.

`/cv` is an 820px sheet on a desk background, padded clamp(20px, 5vw, 48px), sections 26px apart; skills and languages split into two columns above 600px. In print, the desk, nav and copy buttons disappear and jobs avoid breaking across pages.

## Elevation & Depth

Flat. Depth is tonal: the pane navy sits one step above the floor, and 1px slate borders draw the structure like a TUI. The only shadows belong to things that genuinely float: the command palette dialog (`0 24px 64px #000a`) over a dimmed backdrop, and the CV sheet's barely-there paper lift (`0 1px 3px #0000001a`), which disappears in print.

### Named Rules
**The TUI Rule.** Panes are separated by borders and tone, never by shadows. A shadow means "this is above the page".

## Shapes

Square everything: zero radius on panes, chips, buttons, kbd keys and the dialog. Lines are 1px slate. Pane titles break the top border with box-drawing brackets (`┤ title ├`), and text glyphs do the work icons would (`↗` external, `♪` playlist, `❯` prompt, `✕` close, `★` stars). The avatar is a square with a 1px border, rendered pixelated and slightly desaturated.

## Components

### Pane
The core container: a titled terminal window.
- **Shape:** square, 1px `rule-slate` border, `pane-navy` fill, padding 20px 16px 16px, 12px internal gap.
- **Title:** amber 12px label set into the top border on a `night-floor` knockout, wrapped in slate `┤ ├`; truncates with an ellipsis.
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
`ps`-style: a solid green header band with floor-colored text, rows ruled in `row-rule`, a `row-hover` band on hover, dim tabular PIDs, cyan languages, right-aligned amber star counts.

### Diff
Lines on a 2ch sign / 9ch key / content grid. Removed lines are pink on `deleted-wine`, added lines green on `added-teal`, the hunk header cyan. On first scroll into view the added lines type themselves in (stepped clip-path) while removed lines fade to 55%; with reduced motion or no JS it's static. The footer colophon reuses it at 11px.

### Git log
A 2ch pink graph rail (`*` and `|`) beside each entry: amber short hash, green refs, bold white title, dim dates, ink highlights, dim italic `# quip` comments.

### Boot screen
First visit only: a full-screen `boot-black` overlay of BIOS-style lines with green results (`Memory test .... 640K OK`), typed in line by line, dismissed on click, skipped under reduced motion.

### CRT mode (easter egg)
Opt-in only: faint cyan text glow, 1px scanlines and a vignette over the whole page.

## Do's and Don'ts

### Do:
- **Do** show real data in every terminal construct: real commands, real setup, real star counts, real dates.
- **Do** put new content in a titled pane with a shortcut key, and color its parts by their shell meaning (The Syntax Rule).
- **Do** use amber for whatever is live, hovered or focused (The Prompt Rule).
- **Do** keep small text on `dusk-gray` or brighter; it was chosen for contrast at 11–13px.
- **Do** let wide content scroll inside its pane, and stack panes to full width under 900px.
- **Do** keep motion one-shot and skippable, with a static fallback for reduced motion.
- **Do** keep `/cv` light, sans and printable, sharing only the mono section labels with the terminal.

### Don't:
- **Don't** fake terminal output: no invented stats, fake players, faux progress bars or made-up logs. Humor goes in comments and fine print.
- **Don't** introduce a second display size on terminal pages; emphasize with weight, white or amber.
- **Don't** use shadows to separate panes; borders and tone do that (The TUI Rule).
- **Don't** load fonts or scripts from third parties; JetBrains Mono stays self-hosted.
