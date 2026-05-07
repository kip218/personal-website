# CLAUDE.md

Engineering guidance for AI coding agents (and humans) working in this repo. The companion document `DESIGN.md` covers intent and visual direction — read it before any non-trivial UI change.

## Project

Personal website for Kang In Park, deployed as a static site to GitHub Pages on the custom domain `kangin.me`.

## Stack

- **Next.js 15** (App Router) with `output: "export"` — static HTML/CSS/JS, no server runtime
- **TypeScript** in strict mode
- **Tailwind CSS** for styling, with CSS custom properties driving theme tokens
- **MDX** for long-form content (project case studies, writing)
- **GitHub Actions** for build + deploy to GitHub Pages

Because the site is statically exported, anything that requires a Node runtime at request time (Route Handlers, server actions, `next/image` optimization, ISR, middleware) is unavailable. Plan around that.

## Design principles

These come from `DESIGN.md`. They drive every code decision:

- **Restraint over decoration.** Reference is [emilkowal.ski](https://emilkowal.ski), not a generic dev portfolio. No gradients, glassmorphism, neon glows, or drop shadows on text.
- **Typography carries the design.** One typeface family, deliberate sizes, tight hierarchy. Don't introduce new font sizes or weights without a reason.
- **One accent color, used sparingly.** Most of the page is black, white, and gray.
- **Animation is invisible.** Spring or ease-out for entrances, ease-in for exits. Animate only `transform` and `opacity` — never `width`, `height`, `padding`, or `margin`. If an animation doesn't communicate something, cut it.
- **Earn every element.** If you can't articulate why something is on the page, it shouldn't be there.

## Anti-patterns

- Bounce/elastic easing for UI animations
- Animating layout properties (use `transform` / `opacity` only)
- Skill logo walls
- Long About pages
- `any` in TypeScript without a comment explaining why
- Inline `style={}` when a Tailwind class would do (inline only for truly dynamic values)
- `!important` in CSS
- `localStorage` / `sessionStorage` to fake state that should be URL-driven (theme is the legitimate exception)
- Adding a dependency without a clear reason

## Code style

- Function components, named exports, Tailwind for styling
- File naming: kebab-case for files, PascalCase for component names
- Absolute imports via the `@/` alias
- Comments explain *why*, not *what*. The code shows *what*.
- Semantic HTML first, ARIA second. Every interactive element must be keyboard-reachable. Always handle `prefers-reduced-motion`.

## MDX content

Long-form content uses MDX. Frontmatter convention:

```yaml
---
title: "Project name"
description: "One-sentence summary"
date: "YYYY-MM-DD"
tags: ["data", "tools"]
featured: true
---
```

Match the site's voice: first-person, specific, direct. Don't invent results, numbers, or technical claims.

## Commits

- Conventional Commits when natural (`feat:`, `fix:`, `chore:`)
- Imperative mood ("Add hero section", not "Added hero section")
- One concern per commit when reasonable

## When in doubt

Default to less. Less code, less motion, less color, less copy.
