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

### Thoughts

Short-form posts live in `content/thoughts/YYYY-MM-DD-<slug>.mdx`. The filename carries an ISO date prefix so the directory sorts chronologically (handy when editing in Obsidian). The prefix is **stripped to form the URL**, so `2026-06-04-ai.mdx` is served at `/thoughts/ai` — the date never appears in the URL. The prefix is optional; a file named `ai.mdx` still works and maps to `/thoughts/ai`.

```yaml
---
title: "Post title"
description: "Optional one-line summary"
date: "YYYY-MM-DD"
draft: true
---
```

Conventions specific to thoughts:

- **`date` is internal only.** It exists in frontmatter so the listing can sort newest-first, but it is never rendered in the UI. Don't add a date byline to the post page or the home listing. If you find yourself surfacing the date, stop — that's a deliberate design choice.
- No `tags` or `featured`. Keep frontmatter to `title` (required), `description` (optional), `date` (required, for ordering only), and `draft` (optional).
- **`draft: true` hides the post from the built site** — it stays in git (so Obsidian-on-mobile editing keeps working) but is excluded from the home listing and `generateStaticParams`, so the slug 404s. Omit the field (or set it to `false`) to publish. Run `NEXT_PUBLIC_INCLUDE_DRAFTS=1 npm run dev` to preview drafts locally.
- The slug (the part after the `YYYY-MM-DD-` prefix) should be kebab-case and readable (`2026-05-07-why-i-stopped-x.mdx` → `/thoughts/why-i-stopped-x`). The prefix date is for directory ordering only; the authoritative sort date is still the frontmatter `date`. Keep the prefix and the frontmatter date in sync. Slugs must be unique after the prefix is stripped.
- One thought per file. To publish, commit the new `.mdx` to `main` (without `draft: true`) — GitHub Actions handles the deploy.

## Commits

- Conventional Commits when natural (`feat:`, `fix:`, `chore:`)
- Imperative mood ("Add hero section", not "Added hero section")
- One concern per commit when reasonable

## When in doubt

Default to less. Less code, less motion, less color, less copy.
