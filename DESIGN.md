# Design

The intent and visual direction behind this site. `CLAUDE.md` covers engineering practice; this document covers taste.

## Philosophy

The reference is [emilkowal.ski](https://emilkowal.ski) — both the site and the writing about it. The principles pulled from there:

### Taste over decoration

Good taste is the differentiator now that anyone can ship something that works. Restraint and intentional decision-making beat visual novelty. Every element on the page earns its space. If the rationale for an element can't be articulated in one sentence, it shouldn't be there.

### Typography carries the design

A single high-quality typeface, used at deliberate sizes with tight, considered hierarchy, does more work than any visual flourish. Body text is the design.

### One accent color, used sparingly

The accent is a signature, not decoration. Most of the page is black, white, and gray.

### Animation is invisible

Motion exists to make state changes feel natural, not to draw attention. Springs over duration-based easing for anything tied to user input. Ease-out for entrances, ease-in for exits. Animate only `transform` and `opacity`. If an animation doesn't communicate something, cut it.

### Writing is the moat

A list of thoughtful project writeups beats a grid of screenshots. The homepage is mostly type. Each writeup teaches the reader something specific.

### Personality in copy

First-person, specific, slightly informal. The bio reads like one person talking to another, not addressing a crowd.

## Visual direction

- **Mood:** editorial, restrained, technical. Closer to a thoughtfully designed blog than a portfolio.
- **Layout:** single-column, generous vertical spacing, narrow content width (~65ch for body text).
- **Typography:** one strong sans for everything. A serif may carry long-form writing.
- **Color:** off-white or near-black background (not pure white/black), one accent color, gray scale for everything else.
- **Animation:** spring-based hover states, subtle list reveals, page transitions. Nothing scroll-triggered that draws attention to itself.
- **Imagery:** sparing. Most projects don't need a hero image — they need a clear writeup.

References worth studying:

- [emilkowal.ski](https://emilkowal.ski) — primary reference
- [rauno.me](https://rauno.me) — micro-interactions
- [linear.app/blog](https://linear.app/blog) — typography and long-form layout
- [paco.me](https://paco.me) — clean, editorial-leaning

## Information architecture

```
/                       Hero, bio, featured projects, writing list, contact
/projects               Full project grid
/projects/[slug]        Per-project case study (MDX)
/writing                Index of posts
/writing/[slug]         Per-post writeup (MDX)
```

The homepage acts as the table of contents for the whole site. Anchor nav within `/`, dedicated pages for project depth.

## Homepage sections

1. **Hero** — short bio (two or three sentences, with personality)
2. **Featured projects** — three strongest, each with a one-liner and a link to the writeup
3. **Writing** — recent posts
4. **Experience** — short timeline, not a resume dump
5. **Contact** — email, GitHub, LinkedIn

No skills logo wall. Skills come through in the project writeups.

## Project case study template

Each project page follows this rough structure:

1. One-sentence summary
2. Problem / motivation
3. Approach
4. Tradeoffs — what was tried that didn't work
5. Results — numbers wherever possible
6. Tech stack
7. Links (repo, demo, paper)

Quality over quantity. Two or three deep writeups beat eight thin tiles.

## Non-goals

- Generic dev-portfolio aesthetic (gradient cards, glassmorphism, bouncy animations)
- Logo wall of skills
- A long About page
- Cramming every past project onto the site

## When in doubt

Default to less. Less code, less motion, less color, less copy.
