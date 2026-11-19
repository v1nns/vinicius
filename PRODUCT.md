# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences with equal weight:

- **Recruiters and hiring managers** scanning quickly for role, experience, skills and a way to get in touch. They should never need to learn a command or play anything to find that.
- **Fellow engineers** (open-source users, people who found spectrum or the dotfiles, terminal and Linux folks) who enjoy the terminal framing, the commands and the easter eggs.

## Product Purpose

viniciuslongaray.dev is Vinicius Moura Longaray's personal site: a calling card that shows who he is, what he has built, and how he thinks. He is not job hunting; success is a visitor leaving with a clear, memorable picture of him as an embedded software engineer with personality. Contact, CV reads and GitHub visits are welcome outcomes, not the goal.

## Positioning

An embedded engineer who lives in the terminal presents his career the way he works: as a terminal session (git log, git diff, neofetch, a `/` command palette), with humor in the small print from the 16-bit games he grew up with. The content is real career and project data, not a template.

## Operating Context

- Pages: `/` (terminal dashboard with boot screen, panel keys, command palette, easter eggs), `/cv/` (plain, light, printable one-page CV), `/404.html` ("command not found").
- Content lives in `src/_data/profile.yml`, `timeline.yml` and `projects.yml`; both `/` and `/cv/` render from the same data.
- Visitors arrive on desktop and on phones.

## Capabilities and Constraints

- Stack: Eleventy 3 (pinned) + js-yaml, Nunjucks templates, vanilla JS, one stylesheet. Built and deployed to GitHub Pages by GitHub Actions on push to `master`; free hosting must stay.
- Domain `www.viniciuslongaray.dev`, DNS proxied by Cloudflare (SSL mode Full). This setup is decided; don't propose changing it.
- The terminal and game humor never block information: everything on `/` is readable without commands, and `/cv/` is always one click away. Must work on mobile.
- Privacy: no analytics of any kind. The email address never appears as plain text in HTML; it is assembled in JS from data attributes and offered with a copy button.
- Datacom work is described publicly only at the level of "MPLS in a network operating system". Nothing more specific about Datacom's NOS.
- `redesign/` (working notes, LinkedIn export) is excluded locally and must never be committed; the repo is public.
- JetBrains Mono is self-hosted; no third-party font or script requests.

## Brand Commitments

- Name: Vinicius Moura Longaray. Tagline: "a creative software engineer". Current role: Embedded Software Engineer at Datacom, Porto Alegre, Brazil.
- Voice: first person, plain and dry, with short quips (e.g. "back to writing code all day. on purpose."). Copy is in his own words, not LinkedIn boilerplate.
- Links: GitHub `v1nns`, LinkedIn `vinicius-longaray`, a Spotify playlist.

## Evidence on Hand

- Career timeline: Datacom (2019–now), Grupo Zaffari IT Architect (2015–2018) and Software Developer (2012–2014), Estácio specialization (2018–2019), PUCRS Computer Engineering (2010–2016) with the EmotionPi final project. See `src/_data/timeline.yml`.
- Zaffari highlights: self-checkout POS, v1 of the locked-down Android kiosk platform, e-paper price tag prototypes.
- Projects with real star counts (updated by hand): spectrum ★49, dotfiles, yang, gap, EmotionPi, sddm-arcade, yasl. See `src/_data/projects.yml`.
- Avatar: `src/assets/images/avatar.png`, `avatar-176.jpg`.
- No testimonials, talks, press or metrics exist; don't invent them.

## Product Principles

1. Information first, play second: every fact a recruiter needs is visible without interaction.
2. Real over decorative: commands, diffs and stats reflect real data and his real setup, never fake output.
3. One source of truth: content changes happen in `_data/*.yml`, and every page renders from it.
4. Respect the visitor: no tracking, no third-party requests, fast and static.
5. Personality in the margins: humor and easter eggs reward curiosity without getting in the way.
