# Portfolio — Argya Farel Kasyara

Static single-page portfolio built with plain HTML + Tailwind CSS (CDN) + a tiny bit of JavaScript. No build step, no dependencies, no `npm install`.

## Run locally

Just open `index.html` in any modern browser:

```powershell
start index.html
```

Or, if you want clean URLs / proper relative paths during dev:

```powershell
# any static server works — for example, with Node:
npx serve .
# or with Python:
python -m http.server 8000
```

## Structure

```
portfolio/
├── index.html          # all sections live here
├── styles.css          # custom CSS on top of Tailwind (cards, light-mode overrides)
├── script.js           # theme toggle + scroll fade-in
├── README.md
└── assets/
    └── pdf/            # competition / paper PDFs linked from the site
        ├── maya-tilis-airnology.pdf
        ├── sobat-imut-ecommerce.pdf
        └── trace-deepfake.pdf
```

## Edit guide

- **Add a project** → copy any `<article class="project-card">` block in `index.html` and swap the title, description, link, and tags.
- **Add a competition** → same idea with `<article class="comp-card">`.
- **Colors / fonts** → edit the `tailwind.config` block inside `index.html` (look for `accent`) and the `@font` imports.
- **Light theme** → tweak the `html.light …` overrides at the bottom of `styles.css`.

## Deploy

Drop the `portfolio/` folder onto any static host. All work fine:

- **GitHub Pages** — push to a repo, enable Pages on the branch root
- **Netlify / Vercel** — drag-and-drop deploy, no config needed
- **Cloudflare Pages** — same

## Why not Hugo / Astro?

Hugo and Astro are both great. I went with vanilla HTML for this scaffold so you have zero install friction and can edit content in one file. If the site grows past ~10 projects or you start adding a blog, **Astro** is the natural upgrade path — same Tailwind, but with components and Markdown content collections.
