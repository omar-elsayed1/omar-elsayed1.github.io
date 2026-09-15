# Omar Elsayed Mokhtar — Data Analyst Portfolio

A personal portfolio site built with **React + TypeScript + Tailwind CSS**, positioning
Omar as a Data Analyst (Power BI / SQL / Excel / Python) with a Data Engineering
direction on the horizon.

## Getting started

```bash
npm install
npm run dev       # local dev server at http://localhost:5173
npm run build      # production build -> dist/
npm run preview    # preview the production build locally
```

Requires Node.js 18+.

## Deploying to GitHub Pages

This repo is set up to deploy automatically via **GitHub Actions**
(`.github/workflows/deploy.yml`).

1. Push this repo to GitHub. For the cleanest URL, name the repository
   **`omar-elsayed1.github.io`** — GitHub will then serve it at
   `https://omar-elsayed1.github.io` (a *user page*, root domain, no
   sub-path). Any other repo name works too as a *project page*, served at
   `https://omar-elsayed1.github.io/<repo-name>/`.
2. In the repo's **Settings → Pages**, set **Source** to **GitHub Actions**.
3. Push to `main`. The workflow builds the site and deploys it — it detects
   whether the repo is a user page or project page automatically and sets
   the correct base path, so you don't need to edit `vite.config.ts`.

Prefer a manual deploy instead of Actions? Run:

```bash
npm run deploy
```

This builds the site and pushes `dist/` to a `gh-pages` branch using the
`gh-pages` package (already included as a dev dependency). If you're
deploying as a project page this way, set `VITE_BASE_PATH=/<repo-name>/`
before running the build so asset paths resolve correctly.

**Note on `public/og-image.png` and `index.html`'s `og:image`/`twitter:image`
tags:** these use an absolute root path (`/og-image.png`), which matches a
user-page deployment. If you deploy as a project page instead, update those
two meta tags to `/<repo-name>/og-image.png`.

## Project structure

```
src/
  data/            <- all editable content lives here, separate from UI code
    profile.ts       name, title, location, links, education, workflow steps
    skills.ts        skill groups + proficiency level (core/strong/growing)
    projects.ts       the 4 case studies, real GitHub URLs, real KPIs/screenshots
    services.ts       freelance service offerings
    certifications.ts certifications + DEPI/IEEE training programs
  assets/projects/  <- real dashboard screenshots, pulled from each GitHub repo
  components/       one component per section (Hero, About, Skills, ...)
  types.ts          shared TypeScript interfaces for the data above
  App.tsx           assembles all sections in page order
```

To update content (add a project, fix a date, change a skill), you should
almost never need to touch a component file — edit the matching file in
`src/data/` instead.

## Project screenshots

Every project now uses **real screenshots pulled directly from Omar's GitHub
repositories** (`src/assets/projects/`), and the on-screen KPI numbers (e.g.
"$10.03M", "86.82% On-Time Rate") are copied verbatim from each repo's own
README — nothing here is invented. If a project's dashboard changes, replace
the matching PNGs in `src/assets/projects/<project>/` and update the
`screenshots` / `stats` arrays in `src/data/projects.ts` to match.

## Connecting the contact form

The contact form (`src/components/Contact.tsx`) is fully built on the
frontend but is **not wired to send email yet** — no email address was
provided, and none was invented. To make it functional, either:

- Point the form at a service like [Formspree](https://formspree.io) or
  [EmailJS](https://www.emailjs.com/) (form-only, no custom backend needed), or
- Add a small serverless function / backend endpoint and `fetch()` it from
  `handleSubmit`.

## Design tokens

Defined in `tailwind.config.js` under `theme.extend`:

- **`ink`** — near-black backgrounds (950 = page background, 900/800 = cards)
- **`paper`** — off-white to muted-gray text
- **`gold`** — the single accent color, used sparingly for emphasis
- **Fonts** — Space Grotesk (display/headings), Inter (body), JetBrains Mono
  (KPI numbers and small data labels only)

## Notes on content accuracy

Every project, certification, and experience entry reflects only what was
provided or what's published in Omar's own GitHub repos — no fabricated
clients, revenue, or testimonials. All four projects now link to their real
repositories, and every KPI shown (revenue, orders, on-time rate, ROI, etc.)
is copied from that repo's own README.
