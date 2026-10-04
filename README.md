# Top Solaire Sghaier

Bilingual (French / Arabic) website for **Top Solaire Sghaier**, solar installer in Sousse, Tunisia: photovoltaics connected to the STEG grid, solar water pumping and solar water heaters. Leads go to WhatsApp.

Built with Next.js 16 (App Router, every page pre-rendered), Tailwind CSS v4 and next-intl. No backend, database or form service.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000 (redirects to /fr)
```

| Command | What it does |
|---|---|
| `npm run build` | Production build; every route must be static (○ / ●) |
| `npm run start` | Serves the production build |
| `npm run lint` / `npm run typecheck` | ESLint / TypeScript |
| `npm run audit` | Lighthouse (mobile + desktop, 5 categories) on the production build; `AUDIT_URL=https://… npm run audit` for a deployed site |
| `npm run check:demo` | Lists placeholder content still to replace (see `DEMO.md`) |
| `npm run images` / `npm run og` | Regenerate project photos and share images (needs the owner's `Brand Info/` folder, which is not in this repo) |

## Deploy on Vercel

1. Import this repository in Vercel (framework preset: **Next.js**, default build settings).
2. Add the environment variable **`NEXT_PUBLIC_SITE_URL`** = the site's public URL (e.g. `https://top-solaire-sghaier.vercel.app`, later the real domain). It drives canonical URLs, hreflang, the sitemap and structured data.
3. Deploy. Preview deployments are automatically `noindex`; only production is indexed.
4. Optional: enable **Web Analytics** in the Vercel project to track WhatsApp and call clicks.

## Project docs

- `CLAUDE.md`: business facts, content rules and technical conventions
- `PRODUCT.md`: product and audience
- `DESIGN.md`: the design system as built
- `DEMO.md`: placeholder content the owner should replace
