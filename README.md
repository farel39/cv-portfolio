# Portfolio: Argya Farel Kasyara (Astro)

Personal portfolio built with **Astro 5** + **Tailwind CSS 4**. Projects and competitions live in Markdown content collections so adding a new entry = dropping a `.md` file in `src/content/`.

## Stack at a glance

- **Astro 5.18**: static-site framework, view transitions enabled
- **Tailwind CSS 4**: design tokens via `@theme`, no PostCSS config needed
- **Content collections**: type-safe Markdown with Zod schemas
- **Zero runtime JS** by default; the only client script is theme toggle + scroll reveal + Astro's view-transition router

## Commands

```powershell
npm install        # install deps
npm run dev        # dev server at http://localhost:4321
npm run build      # production build → dist/
npm run preview    # serve dist/ locally
```

## Project structure

```
portfolio-astro/
├── astro.config.mjs       # Astro + Tailwind v4 (Vite plugin) config
├── tsconfig.json
├── package.json
├── public/
│   └── pdf/               # PDFs linked from the Competitions section
├── src/
│   ├── pages/
│   │   ├── index.astro    # the one and only page (sections composed here)
│   │   └── 404.astro
│   ├── layouts/
│   │   └── Layout.astro   # <html>, fonts, meta, theme bootstrap, ClientRouter
│   ├── components/
│   │   ├── Nav.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Skills.astro
│   │   ├── ProjectCard.astro
│   │   ├── Contact.astro
│   │   ├── Footer.astro
│   │   └── Icon.astro     # inline SVG icon set (no icon library)
│   ├── content/
│   │   ├── config.ts      # Zod schemas for projects + competitions
│   │   ├── projects/      # one .md per project
│   │   └── competitions/  # one .md per competition / paper
│   └── styles/
│       └── global.css     # Tailwind import + theme tokens + small CSS primitives
```

## Adding a new project

Drop a file in `src/content/projects/`, e.g. `kaggle-titanic.md`:

```markdown
---
title: Titanic Survival Prediction
description: A short, punchy one-liner about what the project does.
tags: [Python, scikit-learn, Kaggle]
repo: https://github.com/farel39/kaggle-titanic
repoHost: github
role: Solo
featured: false
order: 7              # lower number = appears earlier
icon: flask           # see the IconName union in src/components/Icon.astro for valid icons
---
```

Astro picks it up automatically. No edits to `index.astro` needed.

## Adding a new competition

Same idea in `src/content/competitions/`:

```markdown
---
title: My Cool Hackathon Submission
team: Team Name
event: Hackathon 2026 · Some University
kind: competition       # competition | paper | proposal
award: 🥇 1st place     # optional
pdf: /pdf/my-deck.pdf   # optional, served from public/pdf/
tags: [Python, FastAPI]
order: 4
---

Markdown body goes here. Supports **bold**, _italic_, links, etc.
```

## Deploy

This config is set up for **GitHub Pages under `/cv-portfolio`** (`base: '/cv-portfolio'` in `astro.config.mjs`).

### GitHub Pages

1. In repo Settings → Pages, set **Source** to "GitHub Actions".
2. Drop this workflow at `.github/workflows/deploy.yml`:

   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [main]
     workflow_dispatch:

   permissions:
     contents: read
     pages: write
     id-token: write

   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: withastro/action@v3
           with:
             path: portfolio-astro
     deploy:
       needs: build
       runs-on: ubuntu-latest
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       steps:
         - id: deployment
           uses: actions/deploy-pages@v4
   ```

3. Push → site at `farel39.github.io/cv-portfolio`.

### Vercel / Netlify / Cloudflare Pages

Drag-and-drop the `dist/` folder, or connect the repo and set:
- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Install command:** `npm install`

If deploying to a domain root (not under `/cv-portfolio`), change `base: '/'` in `astro.config.mjs` and rebuild.

## Why Astro?

- Markdown content collections beat hand-edited HTML for portfolios that grow
- Component reuse with the same Tailwind look as a static site
- View transitions for smooth section-to-section feel
- Trivial to add a `/blog` route later: drop `.md` files in a new collection
