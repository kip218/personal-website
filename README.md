# personal-website

Source for [kangin.me](https://kangin.me) — Kang In Park's personal site.

Built with Next.js 15 (App Router, static export), TypeScript, Tailwind CSS, and MDX. Deployed to GitHub Pages via GitHub Actions on push to `main`.

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck  # tsc --noEmit
npm run lint
npm run build      # static export to ./out
```

## Deployment

- `main` → GitHub Actions workflow at [.github/workflows/deploy.yml](.github/workflows/deploy.yml) builds and publishes to GitHub Pages.
- The custom domain is configured via [public/CNAME](public/CNAME) (`kangin.me`).
- DNS for `kangin.me` is managed at the registrar and points to GitHub Pages.

## Layout

```
app/             Next.js App Router routes and layouts
components/      Reusable UI components
public/          Static assets (CNAME, .nojekyll, images)
DESIGN.md        Design intent and visual direction
CLAUDE.md        Engineering guidance for AI coding agents
```
