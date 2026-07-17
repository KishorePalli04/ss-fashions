# SS Fashion Wear

A modern, high-performance landing site for **SS Fashion Wear** — a quality
denim & casual wear store at 7-9 Churchill Ave, Strathfield, NSW 2135.

Built with **Next.js (App Router)**, **Tailwind CSS**, and **Shadcn/UI**, and
ready to deploy on **Vercel**. The homepage is composed of modular sections so
it can be expanded into a full e-commerce storefront later.

## Features

- **Hero** — high-impact heading, value proposition, and a `View Collection` CTA.
- **Collection grid** — Shadcn `Card` components for jeans, jackets & apparel.
- **Location & contact** — full address, embedded Google Map, and a primary
  `Order via WhatsApp` CTA.
- **Business info** — `Open 24 hours` status shown prominently.
- **SEO / local visibility** — metadata + `ClothingStore` JSON-LD for Google's
  local business card.
- Minimalist, mobile-first, neutral palette that lets product photography pop.

## Tech stack

| Layer      | Choice                          |
| ---------- | ------------------------------- |
| Framework  | Next.js 14 (App Router, RSC)    |
| Styling    | Tailwind CSS                    |
| Components | Shadcn/UI (Radix + CVA)         |
| Icons      | lucide-react                    |
| Deploy     | Vercel                          |

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev
# → http://localhost:3000

# 3. Production build
npm run build && npm start
```

### Recreating this stack from scratch

If you want to scaffold the same setup in a new folder:

```bash
# Scaffold Next.js with Tailwind + TypeScript + App Router
npx create-next-app@latest ss-fashion-wear \
  --typescript --tailwind --app --eslint --src-dir=false --import-alias "@/*"

cd ss-fashion-wear

# Initialise Shadcn/UI (choose the "Neutral" base colour)
npx shadcn@latest init

# Add the UI primitives used by this site
npx shadcn@latest add button card badge
```

## Project structure

```
app/
  layout.tsx            # Root layout, fonts, metadata, SEO
  page.tsx              # Homepage — composes the sections + JSON-LD
  globals.css           # Tailwind + neutral theme tokens
components/
  ui/                   # Shadcn primitives (button, card, badge)
  site-header.tsx       # Sticky nav with mobile menu
  hero-section.tsx      # Hero + value prop + CTAs
  features-grid.tsx     # Collection cards
  location-contact.tsx  # Address, map embed, WhatsApp CTA
  site-footer.tsx       # Footer with business info
  icons.tsx             # WhatsApp brand glyph
lib/
  site-config.ts        # ★ Single source of truth for all business details
  utils.ts              # cn() class helper
```

## Customising for the client

All business-specific content lives in [`lib/site-config.ts`](lib/site-config.ts):

- **WhatsApp number** — set `contact.whatsapp` (digits only, incl. country code,
  e.g. `61412345678`). This currently uses a placeholder.
- **Phone / email**, **address**, **opening hours**, and the **collection
  categories** (title, description, image) are all edited in the same file.
- **Product photography** — demo images come from Unsplash. Replace the `image`
  URLs with the client's own photos and update `next.config.mjs` `remotePatterns`
  accordingly (or drop images into `/public`).

## Deploy on GitHub Pages (free hosting)

This repo ships a workflow (`.github/workflows/deploy.yml`) that builds a static
export and publishes it to GitHub Pages automatically on every push to `main`.

**One-time setup:** in the repo, go to **Settings → Pages → Build and
deployment**, and set **Source** to **GitHub Actions**. That's it — the next
push to `main` (or a manual run from the Actions tab) deploys the site.

The site will be served at:

```
https://<your-username>.github.io/ss-fashions/
```

How it works:

- `next.config.mjs` uses `output: "export"` to emit a static `./out` folder.
- When the workflow sets `GITHUB_PAGES=true`, it also sets `PAGES_BASE_PATH` to
  `/<repo-name>` so asset and link URLs resolve under the project subpath.
  Local `npm run dev` and Vercel builds leave these unset and serve from `/`.
- `next/image` runs with `unoptimized: true` (Pages has no image server), and a
  `public/.nojekyll` file stops Pages from hiding the `_next` assets folder.

## Deploy on Vercel (alternative)

1. Push this repo to GitHub.
2. Import the project at [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects Next.js — no configuration needed. Deploy.

## Roadmap to full e-commerce

The modular structure makes these natural next steps:

- Add a `/shop` route and `product/[slug]` pages driven by the same config shapes.
- Introduce a CMS (Sanity / Payload) or a headless store (Shopify / Medusa).
- Add cart + checkout; keep WhatsApp ordering as a fallback channel.
