# BT4YOU Executive Bot — Landing (MVP)

Marketing landing page for **BT4YOU Executive Bot**, built with Vite + React + Tailwind CSS v4.

## Stack
- **Vite 6** — dev server & build
- **React 19**
- **Tailwind CSS v4** — via `@tailwindcss/vite`, design tokens defined in `src/index.css`

## Develop
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the build
```

## Deploy to bt4you.ai

Static build → host on Cloudflare Pages (recommended) or Netlify; point the
Porkbun DNS at it. Domain: **bt4you.ai** (canonical + OG tags already set in `index.html`).

**Cloudflare Pages (fastest, no GitHub needed):**
```bash
npm run build
npx wrangler login            # one-time
npx wrangler pages deploy dist --project-name bt4you
```
Then in the Cloudflare Pages project → Custom domains → add `bt4you.ai` + `www.bt4you.ai`.
In **Porkbun → DNS** add:
- `ALIAS`  host `(blank/@)`  →  `bt4you.pages.dev`   (apex; Porkbun supports ALIAS at root)
- `CNAME`  host `www`        →  `bt4you.pages.dev`

**Netlify (no CLI):** `npm run build`, drag `dist/` onto app.netlify.com/drop, add domain
`bt4you.ai`, then in Porkbun DNS add `A @ → 75.2.60.5` and `CNAME www → <site>.netlify.app`.

SSL is issued automatically once DNS resolves (minutes–48h propagation). `public/_redirects`,
`robots.txt`, and `sitemap.xml` are already in the build.

## Editing content
All on-page copy lives in **`src/content.js`** — a single source of truth.
Edit it to update headlines, features, stats, dashboard numbers, footer, etc.
No component changes needed for copy edits.

## Design system
Premium tokens extracted from the brand macet (`src/assets/product-builder-v0.7.0-design.png`):
three-stop diagonal gradients, tinted shadows, focus-glow halos, glassmorphism.
Defined as CSS variables and `@theme` tokens in `src/index.css`.

Key gradients: `--gradient-hero`, `--gradient-brand`, `--gradient-cta`.
Helper classes: `.card`, `.frost`, `.btn-primary`, `.btn-ghost`, `.eyebrow`, `.tag`.

## Structure
```
src/
  content.js              # all copy (edit here)
  index.css               # design tokens + primitives
  App.jsx                 # section composition
  components/
    Nav.jsx Hero.jsx Features.jsx HowItWorks.jsx
    DashboardPreview.jsx CTA.jsx Footer.jsx Icons.jsx
```

> Copy is placeholder pending final brand materials. Brand name is always
> **BT4YOU Executive Bot** — never abbreviated.
