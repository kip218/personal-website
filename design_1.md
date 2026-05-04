# Design

A working document for the rebuild of my personal website. This captures intent, philosophy, and direction — not final decisions. Stack and details are still open.

## Goals

- Serve as a living portfolio for **Data/ML job hunting** and ongoing personal branding.
- Showcase **who I am** — career, projects, and how I think — primarily through technical work.
- Feel **polished and modern enough to wow** a hiring manager or fellow engineer in the first 5 seconds.
- Be **content-defensible long term** — a place I can keep adding writeups and projects to over years, not a one-shot redesign.

## Audience

In rough priority order:

1. ML/data hiring managers and recruiters (skim mode, ~30 seconds)
2. Engineers who land on a project page (deep-read mode, several minutes)
3. People who already know me and want to see what I'm up to

The site needs to work for all three without sacrificing #1.

## Design Philosophy

The reference is [emilkowal.ski](https://emilkowal.ski) — both the site itself and the body of writing behind it. The principles I'm pulling from:

### Taste over decoration

Good taste is the differentiator now that everyone can ship something that works. Restraint and intentional decision-making beat visual novelty. Every element on the page should earn its space — if I can't articulate why something is there, cut it.

### Typography carries the design

A single high-quality typeface, used at deliberate sizes, with tight, considered hierarchy, does more work than any visual flourish. Body text is the design.

### One accent color, used sparingly

Pick a color that means something — not a default Tailwind blue. Use it as a signature, not as decoration. Most of the page should be black, white, and gray.

### Animation should be invisible

Motion exists to make state changes feel natural, not to draw attention. Springs over duration-based easing for anything tied to user input. Ease-out for entrances, ease-in for exits. If an animation doesn't communicate something or improve clarity, cut it. The "wow" should come from the page feeling right, not from things spinning.

### Writing is the moat

A list of thoughtful project writeups beats a grid of screenshots. The homepage should be mostly type. Each writeup should teach the reader something specific. Over time, this is what makes the site memorable — not the hero animation.

### Personality in copy

First-person, specific, slightly informal. "I like building cool stuff" doesn't pass the bar. The bio should sound like me talking to one person, not addressing a crowd.

## Visual Direction

- **Mood:** editorial, restrained, technical. More like a thoughtfully designed blog than a flashy portfolio.
- **Layout:** mostly single-column, generous vertical spacing, narrow content width (~65ch for body text).
- **Typography:** one strong sans for everything, possibly a serif for long-form writing. Candidates worth trying: Geist, Söhne, GT America, Inter Display, or something from Pangram Pangram / Fontshare.
- **Color:** off-white or near-black background (not pure white/black), a single accent color tied to identity, gray scale for everything else.
- **Animation:** spring-based hover states, subtle list reveals, page transitions. Nothing scroll-triggered that draws attention to itself.
- **Imagery:** sparing. Most projects don't need a hero image — they need a clear writeup.

Other references to study (collect screenshots, note specifically what works):

- [chrisraroque.com](https://chrisraroque.com) — original reference, personality-forward
- [rauno.me](https://rauno.me) — micro-interactions
- [linear.app/blog](https://linear.app/blog) — typography and longform layout
- [paco.me](https://paco.me), [maxibanki.dev](https://maxibanki.dev) — clean, editorial-leaning

## Information Architecture

```
/                       Hero, short bio, featured projects, writing list, contact
/projects               Full project grid
/projects/[slug]        Per-project case study (MDX)
/writing                Optional — blog index, may collapse into /
/writing/[slug]         Per-post writeup (MDX)
/now                    Optional — what I'm currently working on / learning
```

The homepage should function as the table of contents for the whole site. Anchor nav within `/`, dedicated pages for project depth.

## Sections (homepage)

1. **Hero** — short bio (2–3 sentences with personality), one signature visual element if it earns its place
2. **Featured projects** — 3 strongest, each with one-liner + result/numbers, links to writeup
3. **Writing** — recent posts, if/when I have them
4. **Experience** — short timeline, not a resume dump
5. **Contact / links** — email, GitHub, LinkedIn

No "skills" section as a logo wall. Skills come through in the project writeups.

## Signature Element (TBD)

Pick at most one. Don't have more than one "wow" moment competing for attention.

Options being considered:

- **Live ML demo on hero** — a small in-browser model (sentiment, embedding viz, etc.) via Transformers.js or ONNX. Technical and visual, native to who I am.
- **Data-driven personal section** — life as a dataset. GitHub commits, books read, places visited. Treats personal info the way I'd treat work data.
- **3D/canvas hero element** — higher generic-wow factor but feels less specific to me. Lower priority.

Leaning toward the **data-driven personal section** as the most defensible and "me."

## Project Case Study Template

Each project page should follow roughly this structure:

1. One-sentence summary
2. Problem / motivation
3. Approach
4. Tradeoffs / what I tried that didn't work
5. Results — numbers if at all possible
6. Tech stack
7. Links (repo, demo, paper)

Quality over quantity. 2–3 deep writeups beat 8 thin tiles.

## Tech Stack

Still open. The decision will be made before the design system work, but the design philosophy here doesn't depend on the stack. Top contenders:

- **Astro + React islands + Tailwind + MDX** — best-suited for a content-heavy portfolio with a few interactive demos. Static-first, ships zero JS by default, content collections give typed frontmatter for projects.
- **Next.js (App Router) + Tailwind + MDX** — what the current site is built on. Lower learning curve. Slightly heavier than Astro for what's mostly static content.

Supporting tools likely either way:

- **Motion** (formerly Framer Motion) for animations
- **shadcn/ui** for component primitives
- **Shiki** for syntax highlighting in writeups
- **Lenis** for smooth scroll
- **react-three-fiber** only if a 3D element is the chosen signature element

Hosting: Vercel.

Decision deadline: before any code beyond boilerplate.

## Domain

Current: `kangin.me`.

Considering a rebrand to a `.dev` for stronger professional signaling. Top candidates:

- `kang.dev` — first choice if available at non-premium price
- `kangin.dev` — no-regret default

Will verify availability and pricing on Porkbun / TLD-list before deciding. Domain matters far less than what's behind it; not worth overthinking.

## Build Plan

Rough 4-week shape:

- **Week 1 — Content & design system.** Bio, headline, project shortlist, mood board, fonts, colors. No code.
- **Week 2 — Shell.** Layout, typography, navigation, hero, footer. Empty site looking gorgeous before adding content.
- **Week 3 — Projects.** Project grid, detail page template, 2–3 deep case studies in MDX.
- **Week 4 — Polish.** Signature element, motion pass, Lighthouse audit, accessibility, OG images, deploy.

The inversion most people get wrong is filling in content before the design is right. The design system should be locked before project pages get built.

## Non-Goals

- Generic dev portfolio aesthetic (gradient cards, glassmorphism, bouncy animations)
- Logo wall of skills
- A long About page
- Trying to be funny if it's not natural
- Cramming every project I've ever touched onto the site
- A redesign that stops being updated three months in

## Open Questions

- Final stack decision (Astro vs Next.js)
- Final domain decision (`kang.dev` vs `kangin.dev` vs keep `kangin.me`)
- Which signature element to commit to
- Whether to launch `/writing` at v1 or wait until I have 2–3 posts ready
- Bio and headline copy — the unglamorous prerequisite
