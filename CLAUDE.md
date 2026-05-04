# CLAUDE.md

Guidance for Claude (and other AI coding agents) working in this repo. Read this before making changes.

## What this project is

My personal website rebuild — a portfolio for Data/ML job hunting and ongoing personal branding. See `design.md` for full context on goals, audience, and design philosophy. **Read `design.md` before making any non-trivial change.** This file is operational; that one is intentional.

## Working with me

- I prefer **direct, opinionated suggestions** over a list of options. If you think something should be done a specific way, say so and explain why. I'll push back if I disagree.
- **Don't sycophant.** If a decision I made earlier in the conversation doesn't make sense given new context, tell me.
- **Ask before large changes.** Anything that touches the design system, page structure, or stack-level architecture should be confirmed first. Small refactors and bug fixes don't need a check-in.
- **One thing at a time.** I'd rather get a focused PR-sized change done well than a sprawling one that touches ten files.
- I'm comfortable with TypeScript, React, Next.js, and Tailwind. You don't need to over-explain familiar patterns.

## Tech stack

Still being decided between Astro and Next.js (App Router). Until that's locked, avoid writing code that's deeply specific to either. See `design.md` → Tech Stack.

Once the stack is set, expected supporting tools:

- **TypeScript** — strict mode, no `any` without a comment explaining why
- **Tailwind** — for styling
- **Motion** (formerly Framer Motion) — for animation
- **MDX** — for project case studies and writing
- **Shiki** — for syntax highlighting
- **shadcn/ui** — for primitives, used selectively (don't pull in components I'm not using)

## Design principles to enforce

These come from `design.md`. They should drive every code decision:

- **Restraint over decoration.** If you're tempted to add a gradient, a glow, a glassmorphism effect, or a bouncy animation — don't. The reference is [emilkowal.ski](https://emilkowal.ski), not a generic dev portfolio.
- **Typography carries the design.** One typeface for everything (possibly a serif for longform). Tight, intentional hierarchy. Don't add new font sizes or weights without a reason.
- **One accent color.** Used sparingly. Most of the page is black, white, and gray.
- **Animation is invisible.** Spring-based motion for state changes. Ease-out for entrances, ease-in for exits. Never animate `width`, `height`, `padding`, or `margin` — only `transform` and `opacity`. If an animation doesn't communicate something, cut it.
- **Earn every element.** If you can't articulate why something is on the page, it shouldn't be there.

## Anti-patterns — do not do these

- **Gradient cards, glassmorphism, neon glows, drop shadows on text** — generic AI-portfolio aesthetic. Hard no.
- **Bounce/elastic easing** for UI animations. Use springs (subtle) or ease-out.
- **Animating layout properties** (`width`, `height`, `padding`, `margin`, etc.). Use `transform` and `opacity` only.
- **Skill logo walls.** Skills come through in project writeups, not a row of icons.
- **Long About pages.** The bio is two or three sentences and that's it.
- **Using `any` in TypeScript** without a comment explaining why.
- **Adding a dependency** without confirming with me first.
- **Inline styles** when a Tailwind class would do. Inline styles only for truly dynamic values.
- **`!important` in CSS.** Almost always a smell.
- **localStorage / sessionStorage hacks** to fake state that should be URL-driven.

## Code style

- **Components:** function components, named exports, colocated styles via Tailwind.
- **File naming:** kebab-case for files, PascalCase for component names.
- **Imports:** sorted, absolute imports via `@/` alias when the stack is set.
- **Comments:** explain *why*, not *what*. The code shows what.
- **Accessibility:** semantic HTML first. ARIA second. Every interactive element keyboard-reachable. Don't ship animation without `prefers-reduced-motion` handling.

## MDX content

Project writeups and posts live in MDX. Frontmatter conventions (subject to change once stack is locked):

```yaml
---
title: "Project name"
description: "One-sentence summary"
date: "YYYY-MM-DD"
tags: ["ml", "data", ...]
featured: true | false
---
```

When writing or editing MDX content on my behalf, match my voice — first-person, specific, direct. Don't invent results, numbers, or technical claims I haven't given you. If you're not sure of a fact, leave a `{TODO: confirm}` and let me fill it in.

## What I want help with

Roughly in order of how often I'll ask:

1. **Implementing a designed component** — I describe it, you build it, matching the design principles above.
2. **Reviewing a component or page** for taste, accessibility, and adherence to the design philosophy. Be honest. If something feels generic, say so.
3. **Writing or editing MDX content** — drafts, edits, rewriting for voice.
4. **Refactoring** — keeping the codebase clean as it grows.
5. **Animation work** — getting motion to feel right per the principles in `design.md`.

## What I don't want help with

- **SEO copywriting** that sounds like SEO copywriting. The site should sound like me.
- **Adding "more features."** This site should get smaller and tighter over time, not bigger.
- **Generating filler content.** I'd rather have three real projects than ten fake ones.
- **Auto-installing packages or running migrations** without asking.

## Commit style

- Conventional Commits when it's natural (`feat:`, `fix:`, `chore:`), but don't force it for tiny changes.
- Imperative mood. "Add hero section" not "Added hero section."
- One concern per commit when reasonable.

## When in doubt

Default to **less**. Less code, less motion, less color, less copy. The site should feel like it was made by someone who thought hard about what *not* to include.

If a decision isn't covered here or in `design.md`, ask.
