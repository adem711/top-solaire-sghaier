# CLAUDE.md — Top Solaire Sghaier website

Bilingual (French / Arabic) marketing website for **Top Solaire Sghaier**, a solar installer based in Sousse, Tunisia.
Primary goals: **build trust** and **generate leads through WhatsApp**.
Quality bar: **Lighthouse 100 in Performance, Accessibility, Best Practices, SEO and Agentic Browsing** (mobile, both locales). See §8. This bar decides every technical choice in this file.

> Items marked **[DEMO]** are placeholder content the owner will replace later. Never block the build on missing info: use demo content following §13, and log it.

---

## 1. Business facts (source of truth)

These come from `Brand Info/` (Facebook screenshots, flyers, design system) and from the owner's answers. When data is missing, **don't stop to ask**: fill the gap with demo content under the rules in §13 and log it in `DEMO.md`.

| Item | Value |
|---|---|
| Brand name | **Top Solaire Sghaier**, always in Latin script, including on the Arabic pages (no Arabic transliteration) |
| Owner / manager | Ilyes Sghaier. The design-system business card says "Mohamed Sghaier": that is a **placeholder**, ignore it. |
| Activity | Vente et installation photovoltaïque, pompage solaire et chauffe-eau solaire |
| Accreditation | **Représentant agréé par l'ANME** (confirmed valid) |
| Experience | **Since 2015** → "Depuis 2015 · 10+ ans d'expérience" / "مختصّين في الطاقة الشمسية من 2015" |
| Installations | **150+ installations** (approved by the owner) |
| Base | Sousse (Cité Erriadh). **Service business, not an office**: the team works on site at the client's home, farm or business. Don't show a street address, map, or "come visit us". No opening hours: contact happens through WhatsApp/phone, and visits are by appointment. |
| Phone + WhatsApp | **+216 98 452 134** (confirmed WhatsApp number, main line). Second line for calls: **+216 54 109 627** (added by the owner 2026-10-04; not a WhatsApp number). Show both numbers wherever phone contacts are listed (Contact page, call section, footer, JSON-LD, llms.txt); the hero call button and every WhatsApp link stay on the main number. |
| Email | ilyesenergie@gmail.com (shown on the Contact page only, not a lead channel) |
| Facebook | https://www.facebook.com/profile.php?id=100063543162195 (≈2.7K followers) |
| Service area | Sousse, Monastir and the Sahel region **[DEMO]** (maybe all of Tunisia) |

### Services
1. **Photovoltaïque raccordé au réseau STEG**: homes, typically 1.6 → 4.4 kWc; up to 9.6 kWc delivered
2. **Pompage solaire agricole**: 5.5–7.2 kWc arrays driving 3–5.5 CV 380 V well pumps
3. **Chauffe-eau solaire** (Soften brand, e.g. 200 L)
4. Free study, STEG/ANME paperwork, installation, after-sales service (SAV)

### Approved commercial arguments
- Étude / devis **gratuit** · "دراسة مجانية + تركيب باحتراف"
- **Jusqu'à 70 % d'économies** sur la facture d'électricité
- **Garantie panneaux jusqu'à 25 ans**
- **Représentant agréé ANME** · **Depuis 2015** · **150+ installations**
- "On s'occupe de tout : étude, démarches STEG/ANME, installation, SAV"
- SAV réactif
- Arabic slogan: **"طاقتك من الشمس… وراحتك مضمونة"**
- Segments: منازل (homes) · فلاحة (agriculture) · مشاريع (businesses)

### ❌ Forbidden claims
- **No financing terms.** "Avance 0 DT", "crédit STEG jusqu'à 10 000 DT" and similar offers are **no longer current**. Never show amounts, durations or "0 DT". Allowed: "Accompagnement pour votre dossier STEG" / "Facilités de paiement : contactez-nous".
- No client names, **no client locations** (owner declined), no testimonials until real ones are supplied.
- The equipment brands below may appear only as "Matériel installé", never as "partners".

### Equipment brands installed
Panels: Soluxtec · Alphanis · Jinko Solar · Trina Solar · AE Solar
Inverters: SolaX Power · S-Energy
Pumping drives (variateurs): INVT · USFULL — Pumps: Caprari
Water heaters: Soften

---

## 2. Projects (showcase = the 10 projects with photos)

Photos are organised in `Brand Info/Photos/Project N/`. Each folder holds the photos plus a `Screenshot …png` of the original Facebook post (the source for the specs; **never publish the screenshots**). The Projets page shows **only these 10 projects**. Units are normalised to **kWc**. **No locations** (the owner declined), even where the post names one. Titles are generic: "Installation résidentielle · 3,2 kWc" / "تركيب منزلي · 3,2 kWc".

| Folder | slug | Date | Type | Puissance | Panneaux | Onduleur / variateur | Notes |
|---|---|---|---|---|---|---|---|
| Project 1 | `pompage-3-kwc-2026` | 2026-03 | Pompage solaire | 3 kWc | AE Solar | INVT (variateur) | Pompe Caprari 3 CV; photos of the olive grove and water flowing |
| Project 2 | `pompage-5-5-kwc-2025` | 2025-12 | Pompage solaire | 5,5 kWc | AE Solar | INVT (variateur) | Pompe 3 CV 380 V; panels mounted on a roof terrace |
| Project 3 | `residentiel-3-1-kwc-2025` | 2025-04 | Résidentiel, raccordé STEG | 3,115 kWc | 7 × Jinko 445 Wc | SolaX | |
| Project 4 | `pompage-7-2-kwc-2024` | 2024-02 | Pompage solaire | 7,2 kWc | Trina Solar | USFULL (variateur) | Pompe 5,5 CV 380 V; ground-mounted array in the olive grove |
| Project 5 | `residentiel-3-2-kwc-2023` | 2023-02 | Résidentiel, raccordé STEG | 3,2 kWc | 8 × Alphanis 400 Wc | SolaX | |
| Project 6 | `residentiel-4-kwc-2022-12` | 2022-12 | Résidentiel, raccordé STEG | 4,0 kWc | 10 × Alphanis 400 Wc | S-Energy | **Hero image** source |
| Project 7 | `residentiel-4-kwc-2022-11` | 2022-11 | Résidentiel, raccordé STEG | 4,0 kWc | 10 × Alphanis 400 Wc | SolaX | |
| Project 8 | `residentiel-3-3-kwc-2021` | 2021-04 | Résidentiel, raccordé STEG | 3,3 kWc | — | SolaX | |
| Project 9 | `residentiel-2-5-kwc-2021` | 2021-04 | Résidentiel, raccordé STEG | 2,5 kWc | — | SolaX | |
| Project 10 | `residentiel-2-2-kwc-2020` | 2020-06 | Résidentiel + chauffe-eau solaire | 2,2 kWc | — | SolaX | Soften water heater visible |

Only write panel counts where the post states them or they follow exactly from power ÷ panel wattage (as above). Leave the others blank.

### Photo selection (by the leading number of the filename)
| Folder | Cover (card) | Gallery order | Exclude |
|---|---|---|---|
| Project 1 | `654698536` | `656189013`, `657328037`, `656740107` | — |
| Project 2 | `599043925` | `598575630`, `598570735`, `598557895` | — |
| Project 3 | `494736991` | `493992939`, `495062124` | `495319762` (590 px, too small) |
| Project 4 | `489310625` (owner's choice; only 590 px wide, soft on high-density screens) | `489009099`, `489365990`, `489087727` | — |
| Project 5 | `475319129` | `475374982`, `475120750` | — |
| Project 6 | `475191291` (**hero**) | `474916218_1655116238…`, `474916218_1655116265…`, `475079968` | — |
| Project 7 | `475254738` | `475281206`, `474995355`, `475037064` | — |
| Project 8 | `177499778` | `178748725`, `178427571`, `178359218` | — |
| Project 9 | `173651877` | `173564225`, `172758905`, `173111504`, `172373020`, `173223254` | — |
| Project 10 | `106530683` | `106353140`, `106371408` | `106104503` (finger in frame) |

Other good uses: pumping service card = Project 1 cover; residential service card = Project 7 cover; water heater service card = Project 10 `106353140` (Soften tank visible); "installation soignée" detail shots = inverter photos (Projects 3, 7, 8).

### Image pipeline
`scripts/prepare-images.mjs` (run once, with `sharp`): reads `Brand Info/Photos/Project N/*.jpg`, **skips screenshots and excluded files**, auto-rotates, **strips all EXIF/GPS metadata** (client privacy), resizes to max 2048 px on the long side, saves `public/images/projects/<slug>/NN.jpg` (quality 82) in the order above (`01` = cover), and writes `content/project-images.ts` with width/height and a blur placeholder for each image. `next/image` then serves AVIF/WebP.

### Other documented installations (text only, no photos)
There are ~25 more posts from 2019–2023 (mostly 2–4.4 kWc residential, Soluxtec/Alphanis panels + SolaX). They are not shown individually. They count towards the approved **150+ installations** figure.

---

## 3. Tech stack

Next.js app on Vercel with **no custom backend, no database, no form service**. Every page is **pre-rendered at build time** for both locales. It's still a Next.js app rather than hand-written HTML, but it serves static HTML, which gives the best Lighthouse scores.

- **Framework**: Next.js (latest stable, App Router) + TypeScript (strict)
- **Rendering**: React Server Components by default. `generateStaticParams` for `['fr','ar']` + `setRequestLocale` so every route is static. Only interactive islands are `'use client'`: mobile menu, language switcher, quote form, savings simulator, project filter, lightbox.
- **Styling**: Tailwind CSS v4 with the §5 tokens in `@theme` (`app/globals.css`). No CSS-in-JS runtime.
- **i18n**: `next-intl`, routes `/fr/...` and `/ar/...`, `/` redirects to `/fr`. `<html lang dir>` set per locale in `app/[locale]/layout.tsx`.
- **Content**: typed TS files in `content/`; all UI strings in `messages/fr.json` + `messages/ar.json`.
- **Images**: `next/image`, AVIF + WebP, explicit `width`/`height` or `fill` + `sizes`, only the hero image preloaded (`priority`/`preload`), blur placeholders for the rest.
- **Motion**: CSS only (transitions, `@keyframes`, scroll-driven animations with an `IntersectionObserver` fallback of under 1 KB). **No Framer Motion.**
- **Forms**: native HTML validation (`required`, `pattern`, `type`, `inputmode`) + a small custom message layer. **No react-hook-form / zod** (bundle size).
- **Icons**: `lucide-react` (tree-shaken) + an inline SVG for the WhatsApp logo.
- **Leads = WhatsApp only**: `lib/whatsapp.ts` exports `WHATSAPP_NUMBER = '21698452134'` and `buildWhatsAppUrl(message)` → `https://wa.me/21698452134?text=<encoded>`. Messages are written in the active locale.
- **Hosting**: Vercel. **No domain yet** → the site URL comes from `NEXT_PUBLIC_SITE_URL` (fallback: the Vercel production URL). Never hard-code a domain. Preview deployments must be `noindex`.
- **Analytics**: Vercel Web Analytics (cookieless, loads after the page). Track `whatsapp_click` (with context), `call_click`, `form_submit`. No Facebook Pixel, no Google Tag Manager.

### Commands
```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # must finish with every route marked static (○ / ●)
npm run start        # production server, the one to audit
npm run lint
npm run typecheck    # tsc --noEmit
npm run audit        # Lighthouse on /fr and /ar (see §8)
```

### Project structure
```
app/
  [locale]/
    layout.tsx            # lang/dir, fonts, skip link, header, footer, floating WhatsApp
    page.tsx              # Accueil
    projets/page.tsx
    a-propos/page.tsx
    contact/page.tsx
    not-found.tsx
  layout.tsx              # minimal root
  globals.css             # tokens (@theme) + base styles
  sitemap.ts  robots.ts  manifest.ts
  opengraph-image.tsx     # generated OG image per locale
public/
  brand/                  # logos + favicons copied from "Brand Info/Logo variations and brand kit"
  images/projects/        # processed project photos
  llms.txt                # plain-language summary for AI agents (§8.5)
scripts/                  # prepare-images.mjs (§2)
components/               # Header, Footer, Hero, TrustBand, ServiceCard, ProjectCard, ProjectGrid, ProcessSteps, QuoteForm, SavingsSimulator, FAQ, CTASection, LanguageSwitcher, WhatsAppFab, JsonLd
content/                  # projects.ts, project-images.ts (generated), services.ts, faq.ts, site.ts (contacts, stats)
lib/                      # whatsapp.ts, seo.ts, format.ts (number/unit formatting per locale)
messages/                 # fr.json, ar.json
Brand Info/               # source material, never import from here (spaces in path)
```
Route slugs stay French in both locales (`/ar/projets`).

---

## 4. Pages & content

Nav: **Accueil · Projets · À propos · Contact** + primary CTA **"Devis gratuit" / "دراسة مجانية"** (opens WhatsApp) + language switcher `FR | عربي`.

### Accueil
1. **Hero**: one `<h1>`, benefit subline, 2 CTAs: **"Demander une étude gratuite"** (WhatsApp) + **"Appeler"** (`tel:`). Photo: Project 6 cover (rooftop, palm tree, blue sky), the LCP element. Trust line: "Représentant agréé ANME · Depuis 2015 · 150+ installations".
   - FR: "Produisez votre propre électricité." / "Étude gratuite, installation et raccordement STEG par nos équipes. Jusqu'à 70 % d'économies sur votre facture."
   - AR: "طاقتك من الشمس… وراحتك مضمونة" / "دراسة مجانية، تركيب وربط بشبكة الستاغ. وفّر حتى 70% من فاتورة الضوء."
2. **Trust band** (navy stat cards): `150+` installations · `2015` depuis · `25 ans` garantie panneaux · `ANME` représentant agréé
3. **Services** (3 cards, each with its own WhatsApp CTA): Photovoltaïque résidentiel · Pompage solaire agricole · Chauffe-eau solaire
4. **Simulateur d'économies** (client island): monthly STEG bill (DT) → estimated kWc, number of panels, kWh/an, % saved. Results in an `aria-live="polite"` region, assumptions shown, clearly labelled as an estimate, CTA "Recevoir une étude précise" → WhatsApp with the figures prefilled. Assumptions in `content/site.ts` **[DEMO]**: yield 1 600 kWh/kWc/an, average residential STEG tariff, no price shown.
5. **Réalisations récentes**: 6 project cards → link to /projets
6. **Comment ça marche**: 4 steps: Étude gratuite → Dossier STEG/ANME → Installation → Mise en service & SAV
7. **Matériel installé**: brand names as text (logos only if their use is allowed)
8. **FAQ** (native `<details>/<summary>`): duration, warranty, maintenance, STEG paperwork, payment ("Facilités de paiement : contactez-nous")
9. **Final CTA** band + short quote form

### Projets
Filter chips (Tous · Résidentiel · Pompage · Chauffe-eau) as real `<button aria-pressed>`, with the filter mirrored in the URL (`?type=pompage`) so it's shareable and agent-readable. Shows the 10 projects in §2. Cards: 16:9 cover photo, title "Installation résidentielle · 3,2 kWc", status pill "Installé", mono line `8 panneaux · 3,2 kWc · 2023`, equipment, and a "Je veux la même installation" WhatsApp link. Clicking a card opens a lightbox gallery using a native `<dialog>`. Newest first. All 10 are in the HTML (no infinite scroll). Only the first cover loads eagerly (high priority); the rest are lazy, which still loads them at once when they are on screen on desktop.

### À propos
Story of Ilyes Sghaier, active since 2015; ANME accreditation; values Clair · Chaleureux · Fiable; service area (Sousse, Monastir, Sahel); equipment quality; SAV. Team photo **[DEMO]** (a neutral technician-on-a-roof photo, not presented as the actual team).

### Contact
Quote form → WhatsApp. Fields: Nom (`autocomplete="name"`) · Ville (`autocomplete="address-level2"`) · Type de projet (`<select>`: Résidentiel / Agricole-pompage / Chauffe-eau / Entreprise) · Facture STEG mensuelle en DT (optional, `inputmode="numeric"`) · Message (optional). Submit: **"Envoyer sur WhatsApp" / "ابعث على واتساب"**. On submit, open the WhatsApp URL and show "WhatsApp s'est ouvert, il ne reste qu'à appuyer sur Envoyer."
Example FR message:
```
Bonjour Top Solaire Sghaier 👋
Je souhaite une étude gratuite.
• Nom : …
• Ville : …
• Projet : Résidentiel
• Facture STEG : 180 DT/mois
• Message : …
```
Also: big WhatsApp button, tap-to-call, email, Facebook link, and a "Nous nous déplaçons chez vous" block (based in Sousse, working on site across the service area, visits by appointment). **No address, map or opening hours**: it's a service business, not an office.

### Global
- Skip link, sticky header, accessible mobile menu
- **Floating WhatsApp button** on every page (with an accessible name, not covering content, safe-area aware)
- Footer: logo, one-line pitch, contacts, nav, Facebook, © year
- 404 page in both languages with links back

---

## 5. Design system (from `Brand Info/Top-Solaire-Sghaier-Design-System.html`)

Principles: **Clair** (readable numbers, simple steps) · **Chaleureux** (orange as an accent, never large flat areas everywhere) · **Fiable** (navy + warm neutrals = technical seriousness).

### Colours
```css
@theme {
  /* Orange */
  --color-orange-50:#FEF4EC; --color-orange-100:#FDE4CF; --color-orange-200:#F8C04F; --color-orange-300:#F5A53A;
  --color-orange-400:#F08E2E; --color-orange-500:#E4702A; --color-orange-700:#A34A17; --color-orange-900:#5A2A0E;
  /* Navy (Bleu Panneau) */
  --color-navy-100:#E3E8EF; --color-navy-300:#3D5A80; --color-navy-500:#1F2F46; --color-navy-600:#2C4262;
  /* Warm neutrals */
  --color-white:#FFFFFF; --color-linen:#F4F2EE; --color-sand:#D6D0C7; --color-stone:#6B645C; --color-graphite:#3A342E; --color-ink:#1A1613;
  --color-border:#E4DFD8; --color-divider:#EEEAE4;
  /* Functional */
  --color-success:#2F7A4F; --color-warning:#F5A53A; --color-error:#B3321F; --color-info:#3D5A80;
}
```
- Proportions: **60 % neutrals · 25 % navy/ink · 15 % orange**
- Page background Linen; cards white with a `1px` border (`--color-border`)
- **Contrast rules**: text on orange-500 is always **Ink** (6.1:1), never white. Orange text/links on light backgrounds use **orange-700** (5.6:1). Stone `#6B645C` on Linen is ~5:1, fine for secondary text, never lighter than that. On navy, secondary text uses `#A9B6C8`.
- Status pills: Installé `#E3F1E8`/`#1F5A38` · En cours `#FDE4CF`/`#7A3811` · Devis envoyé `#E3E8EF`/`#1F2F46`

### Typography
| Role | Latin (FR) | Arabic (AR) |
|---|---|---|
| Headings, buttons, key figures | **Sora** 600/700 | **Readex Pro** (variable, Arabic subset) |
| Body, forms | **Nunito Sans** 400/600/700 | **Readex Pro** |
| Data, labels, specs | **JetBrains Mono** 500 | JetBrains Mono for numbers/units |
| Logo only | Quicksand (in the SVG only, never loaded as a web font) | — |

Latin fonts load via `next/font/google` (subset `latin`, `display: 'swap'`): Sora is preloaded; Nunito Sans and JetBrains Mono (weight 500 only) are not, and paint first in metric-matched fallbacks. **Arabic**: Readex Pro's Arabic subset is self-hosted in `public/fonts/readex-pro-arabic.woff2` (OFL licence alongside), declared in `app/globals.css` with `font-display: optional`, and preloaded on `/ar` pages only (from `app/[locale]/layout.tsx`), so it never shifts the layout.

Type scale (size/line-height): Display 64/68 Sora 700 −3% · H1 44/52 Sora 600 −2% · H2 32/40 · H3 22/30 · Body L 18/30 · Body 16/26 · Small 14/22 (600) · Label 12/16 Mono 500 +8% uppercase. Use `clamp()` for Display/H1.
Rules: sentence case, **no all-caps headings** (labels excepted); figures always with a unit; FR formatting `6,4 kWc`, `9 850 kWh/an` (via `Intl.NumberFormat`); Arabic: **no letter-spacing, no uppercase transforms**, body line-height ~1.8.

### Spacing, radii, components
- Spacing scale (4 px base): 4 · 8 · 12 · 16 · 24 · 32 · 48 · 72
- Radii: 4 tags · 8 buttons/inputs · 12 cards · 999 pills
- Container max 1180 px; side padding 28 px (16 px on mobile)
- **Buttons**: Primary `orange-500` bg / ink text, hover `orange-400` · Secondary `navy-500` / white, hover `navy-600` · Outline `1.5px ink`, hover filled ink. Padding 13×20, Sora 600 15 px, **min height 48 px**.
- **Inputs**: `1.5px` sand border, radius 8, padding 12×14, **16 px text** (prevents iOS zoom); focus = orange-500 border + `0 0 0 3px orange-100` halo; error = `--color-error` border + message.
- **Focus ring** (all interactive elements): `outline: 2px solid var(--color-navy-500); outline-offset: 2px` on `:focus-visible` (on navy backgrounds: orange-300).
- **Stat card** (navy): mono label in orange-300, Sora 700 figure + unit, divider `#3D5A80`.
- **Project card**: 16:9 photo, Sora 17 px title, status pill, mono spec line in stone.
- The **hexagon belongs to the logo**: never reuse it as a photo frame or decorative motif.

### Logo usage
Source: `Brand Info/Logo variations and brand kit/` → copy to `public/brand/`.
- Header: `logo-horizontal-light.svg` inline or as `<img>` with explicit dimensions and `alt="Top Solaire Sghaier"`. Footer/dark: `logo-horizontal-dark.svg`.
- **Strip the embedded C2PA `<metadata>` block from the SVGs when copying** (it adds a lot of weight). Run them through SVGO.
- On orange: mono white version only. Never distort, recolour or rotate the logo, and never put the colour logo on orange/yellow.
- Min size: full logo 120 px wide; below that, the icon alone (24 px). Clear space = ½ hexagon height.
- Favicons from `favicon/` → `app/` (Next.js file conventions: `icon.svg`, `favicon.ico`, `apple-icon.png`) + `manifest.ts`.

---

## 6. Bilingual & RTL rules

- Every UI string lives in `messages/*.json`. **No hard-coded text in components**, including `alt`, `aria-label` and metadata.
- **Arabic tone (confirmed): Modern Standard Arabic base with a Tunisian-dialect touch** in headlines, CTAs and slogans, the way their Facebook page speaks: "قدّاش تنجم توفّر؟", "ابعثلنا على واتساب", "فاتورة الضوء", "دراسة مجانية". Body text, FAQ and technical specs stay clear and simple, close to MSA.
- `dir="rtl"` + `lang="ar-TN"` on `<html>` for `/ar`; `lang="fr-TN"` for `/fr`.
- **Logical properties only**: `ms-/me-/ps-/pe-/start-/end-/text-start`. No `left/right`, `ml/mr` in layout.
- Mirror directional icons in RTL (`rtl:-scale-x-100`); never mirror logos, photos, numbers or brand names.
- Western digits (0-9) in both locales. Phone numbers, units and Latin brand names inside Arabic text go in `<bdi>` / `dir="ltr"`.
- Currency: "DT" (FR) / "د.ت" (AR).
- The language switcher keeps the current page and is a real link (`<a href="/ar/projets" hreflang="ar" lang="ar">`).

---

## 7. Lead generation & trust rules

- **WhatsApp is the only lead channel.** Every primary CTA leads to a prefilled WhatsApp message; `tel:` is secondary.
- A CTA is visible in every viewport: header button, hero, after each major section, floating button.
- Contextual prefilled messages: hero ("Bonjour, je voudrais une étude gratuite"), service card ("…pour du pompage solaire"), simulator ("Ma facture STEG est de X DT, estimation Y kWc…"), project card ("J'ai vu votre installation de 3,2 kWc (2022), je voudrais la même chose").
- Quote form ≤ 5 fields with inline validation in the active language.
- Trust signals: ANME accreditation, since 2015, 150+ installations, 25-year panel warranty, real project photos with kWc and equipment, brands installed, Facebook link.
- **Never**: fake testimonials, invented stats, stock photos presented as the team or as projects, financing figures, client locations.

---

## 8. Lighthouse 100 playbook (all 5 categories)

Target: **100 / 100 / 100 / 100 / 100** on mobile (default Lighthouse throttling) for `/fr`, `/ar`, `/fr/projets`, `/fr/contact`. **Hard floor: 95** in every category. A PR that drops a score is not done.

### 8.1 Performance
- Every route static (SSG). Check in the `next build` output.
- **Budgets** (per route, gzip): first-load JS ≤ 90 KB, CSS ≤ 25 KB, fonts ≤ 120 KB, hero image ≤ 120 KB (mobile).
- Core Web Vitals (lab): **LCP < 1.8 s, TBT < 100 ms, CLS = 0**, FCP < 1.2 s.
- LCP = hero image: `priority` + `fetchPriority="high"`, correct `sizes`, AVIF, no fade-in animation on it. Nothing lazy-loaded above the fold.
- CLS = 0: explicit dimensions on every image/SVG, `size-adjust` font fallbacks (next/font does this), reserved space for the header and floating button, no content injected above existing content.
- Client JS only where needed (§3). No hydration of static sections. Import heavy client islands (lightbox, simulator) with `next/dynamic` when they're below the fold.
- **Zero third-party scripts at load.** No Facebook embeds/SDK, no Google Maps, no chat widgets. The WhatsApp button is a plain link.
- Images: pre-sized sources (≤ 2400 px), `quality` 70–75, `sizes` matching the grid, `loading="lazy"` below the fold (the default).
- Long lists (projects grid): `content-visibility: auto` with `contain-intrinsic-size`.
- Cache: long-lived immutable caching for hashed assets (Vercel default); no `no-store` fetches.

### 8.2 Accessibility (WCAG 2.2 AA)
- Landmarks: `<header>`, `<nav aria-label>`, `<main id="main">`, `<footer>`; **skip link** to `#main` as the first focusable element.
- One `<h1>` per page, no skipped heading levels.
- Contrast per §5, including hover, focus, disabled and placeholder states, and text over photos (use a solid scrim).
- Every control has an accessible name that includes its visible text; icon-only buttons get a translated `aria-label`.
- Forms: `<label for>` for each field, `aria-describedby` for hints/errors, `aria-invalid` on error, errors announced (`role="alert"` or a live region), `autocomplete` attributes, no placeholder-only labels.
- Target size ≥ 24×24 px (WCAG 2.2), aim for **48 px** on mobile.
- Keyboard: everything reachable, visible `:focus-visible` ring, menu and `<dialog>` trap and restore focus, `Esc` closes.
- `prefers-reduced-motion: reduce` disables non-essential animation; nothing flashes.
- Meaningful, translated `alt` for photos (e.g. "8 panneaux solaires sur toit-terrasse, installation de 3,2 kWc"); decorative images get `alt=""`.
- `lang` on `<html>` and on any inline text in the other language.
- Check with the axe DevTools extension / `@axe-core/playwright` on both locales.

### 8.3 Best Practices
- HTTPS only; security headers in `next.config.ts`: `Strict-Transport-Security`, `Content-Security-Policy` (nonce-free strict policy is possible because pages are static and have no third-party scripts: `default-src 'self'; img-src 'self' data:; script-src 'self'; style-src 'self' 'unsafe-inline'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'`, adjust for Vercel Analytics), `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy` (camera=(), microphone=(), geolocation=()), `Cross-Origin-Opener-Policy: same-origin`.
- **Zero console errors or warnings** (including hydration mismatches, which are common with RTL/locale bugs).
- Images served at the right resolution and aspect ratio; no deprecated APIs; correct `<!doctype>`, charset and viewport (never block zoom).
- External links: `rel="noopener noreferrer"` + `target="_blank"` only when useful (WhatsApp, Facebook).
- No `document.write`, no unload handlers, no third-party cookies.

### 8.4 SEO
- `generateMetadata` per page and locale: unique `<title>` (≤ 60 chars) and `description` (≤ 155 chars), canonical, `alternates.languages` = `fr-TN`, `ar-TN` + `x-default` (→ `/fr`).
- `metadataBase` from `NEXT_PUBLIC_SITE_URL`. **No domain yet**: everything must work off that env var.
- `sitemap.ts` listing every route in both locales with hreflang alternates; `robots.ts` allowing crawl in production and `Disallow: /` on preview deployments (`VERCEL_ENV !== 'production'`) + `noindex` meta there.
- All navigation uses crawlable `<a href>` (never `onClick` routing); descriptive link text (no "cliquez ici").
- JSON-LD (server-rendered): `LocalBusiness` → subtype `HomeAndConstructionBusiness` with name, url, telephone, email, `address` limited to `addressLocality: Sousse`, `addressCountry: TN` (service-area business: no street address, **no `openingHours`**), areaServed, `foundingDate: 2015`, sameAs Facebook, `hasCredential`/description for ANME; `Service` per offering; `BreadcrumbList` on inner pages; `FAQPage` on the FAQ.
- Generated Open Graph/Twitter images per locale.
- Keywords woven naturally into headings/body: FR "installation photovoltaïque Sousse", "panneaux solaires Sousse / Monastir", "pompage solaire Tunisie", "chauffe-eau solaire Sousse", "installateur agréé ANME"; AR "تركيب الطاقة الشمسية سوسة", "ضخ الماء بالطاقة الشمسية", "سخان شمسي".

### 8.5 Agentic Browsing
Goal: an AI agent (browsing on behalf of a user) can understand the business and **complete the main task, requesting a free study**, without guessing.
- **Everything important is in the server HTML**: services, stats, projects, contacts and FAQ answers render without JS. No content hidden behind hover-only interactions, canvas or images of text.
- **The accessibility tree is the agent's view**: semantic elements (`<button>`, `<a>`, `<form>`, `<select>`, `<dialog>`, `<details>`), accessible names that match visible labels, no `div` click handlers, no `aria-hidden` on interactive content.
- **Forms are machine-completable**: `<form>` element with a descriptive `aria-label`, each input has a `name`, `id`, `<label>`, proper `type`/`inputmode`/`autocomplete`, `required` where relevant, and native validation messages. The submit button text states the outcome ("Envoyer sur WhatsApp").
- If the current Lighthouse Agentic Browsing audits check **WebMCP declarative form annotations**, add them to the quote form and the simulator (verify the attribute names against the current spec when you implement; don't guess).
- **Stable, predictable UI**: no layout shifts after interaction, no interstitials/pop-ups, no cookie wall, no CAPTCHA, no auto-rotating carousels; state lives in the URL where possible (project filter).
- Descriptive, unique link and button text; each page has a clear `<h1>` and a meta description summarising what can be done there.
- `public/llms.txt`: in FR + AR, business summary, services, service area, how to request a study (WhatsApp link + phone), links to each page. Keep it consistent with §1.
- `robots.ts` does not block reputable AI user-agents; structured data per §8.4.

### 8.6 How to verify (before calling any UI task done)
```bash
npm run build && npm run start
npx lighthouse http://localhost:3000/fr --only-categories=performance,accessibility,best-practices,seo --view
npx lighthouse http://localhost:3000/ar --view
```
Run the same checks against the deployed Vercel URL (headers and CDN only apply there). The Agentic Browsing category is checked in the Chrome DevTools Lighthouse panel (or the CLI if your version supports it). Record the scores in the PR/commit description. Use PageSpeed Insights on the production URL for a final check.

---

## 9. Motion
Subtle and purposeful, CSS only: section fade/rise on entering the viewport (≤ 300 ms, ease-out, `transform`/`opacity` only), stat counters run once, hover lift on cards, `<dialog>` open/close transitions. Never animate the LCP element, never animate layout properties. Everything off under `prefers-reduced-motion`.

## 10. Working conventions for Claude Code
- Read this file and the design system before any UI work; use the tokens, **never hard-code hex values** in components.
- Mobile-first; check `/fr` **and** `/ar` after every UI change (RTL bugs hide easily).
- Server Components by default; any new `'use client'` has to be justified by interactivity.
- Content in `content/`, strings in `messages/`, WhatsApp URLs only through `lib/whatsapp.ts`.
- New dependencies must justify their bundle cost (check with `@next/bundle-analyzer`).
- Missing data → demo content per §13, marked `demo: true` in code and logged in `DEMO.md`. Never stop the work to ask.
- Never import from `Brand Info/`; copy and optimise the assets into `public/`.
- Before reporting a UI task done: `npm run lint && npm run typecheck && npm run build`, then the §8.6 audit.

---

## 11. Decisions log
| Date | Decision |
|---|---|
| 2026-09-29 | Stack: Next.js (SSG) on Vercel, no backend |
| 2026-09-29 | Leads: WhatsApp only, number +216 98 452 134 |
| 2026-09-29 | Experience: since 2015 · stat "150+ installations" approved |
| 2026-09-29 | ANME accreditation confirmed valid |
| 2026-09-29 | STEG financing terms (0 DT, 10 000 DT) are no longer current → no financing figures on the site |
| 2026-09-29 | No client locations published |
| 2026-09-29 | Arabic: MSA base + Tunisian dialect touch |
| 2026-09-29 | No domain yet → `NEXT_PUBLIC_SITE_URL` env var |
| 2026-09-29 | Target: Lighthouse 100 in Performance, Accessibility, Best Practices, SEO, Agentic Browsing |
| 2026-09-29 | Brand name stays in Latin script in both languages |
| 2026-09-29 | Service business, not an office: no address, map or opening hours |
| 2026-09-29 | Projets page = the 10 photographed projects in `Brand Info/Photos/` |
| 2026-09-29 | Project 1 = 3 kWc pumping |
| 2026-10-04 | Project 4: the wide field shot `489310625` is the cover (owner's request), despite its 590 px source |
| 2026-09-29 | Missing info → demo content (Pixabay/Unsplash/Pexels), tracked in `DEMO.md` (§13) |
| 2026-09-30 | Arabic font: Readex Pro instead of IBM Plex Sans Arabic (geometric match with Sora, one variable file of 23 KB, IBM Plex is an over-used default). Owner can revert by swapping the file in `public/fonts/` and the family name in `globals.css`. |
| 2026-10-04 | Second phone line +216 54 109 627 added (calls only; WhatsApp stays on 98 452 134) |
| 2026-09-30 | Leads through AI agents: the quote form and the simulator carry WebMCP declarative annotations (`toolname`, `tooldescription`, `toolparamdescription`) |

## 12. Items the owner will replace later (build with demo content now)
- Domain name → `NEXT_PUBLIC_SITE_URL` in Vercel
- Owner/team photos → demo portrait (§13)
- Simulator assumptions (tariff, yield) → demo values
- Service area → demo "Sousse, Monastir, Sahel"
- Solar water heater offer and business (entreprises) projects → shown as services, with demo illustrations
- Testimonials / Google reviews → **not shown** until real ones exist (see §13)
- Other social accounts → Facebook only for now

---

## 13. Demo content policy

The owner has authorised demo info and photos wherever something is missing, and will replace them later. Keep them easy to find and impossible to mistake for real claims.

### Image sources
- **Allowed**: Pixabay, Unsplash, Pexels (free commercial licence, no attribution required; add attribution in `DEMO.md` anyway).
- **Not allowed**: **Pinterest**, Google Images, competitors' sites. Their images belong to third parties and have no licence for reuse.
- Download with a script into `public/images/demo/<slot>.jpg`, run them through the same pipeline as §2 (resize, strip EXIF), and pick photos that look Tunisian/Mediterranean (flat concrete roof terraces, olive groves, white buildings, blue sky).

### Where demo content is allowed / forbidden
| ✅ Allowed (illustrative) | ❌ Never demo (trust-critical) |
|---|---|
| Section and background imagery, service-card illustrations (water heater, business rooftop), team/owner portrait placeholder, OG image background, simulator default values, FAQ answers written from general solar knowledge, microcopy | **Projets page photos and specs** (real projects only, from §2); stats (only 150+, 2015, 25 ans, ANME); **testimonials, client names, reviews, ratings**; certifications; financing terms; partner logos |

Demo photos must never be captioned or presented as a Top Solaire Sghaier installation. Use a neutral `alt` ("Panneaux solaires sur un toit-terrasse"), not "Notre installation à…".

### Tracking
- Every demo item gets `demo: true` (content objects) or a `data-demo` attribute (components), so `grep -r "demo: true\|data-demo"` finds them all.
- `DEMO.md` at the repo root lists each item: slot · file/string · source URL · licence · what the owner must supply to replace it.
- `npm run check:demo` prints the remaining demo items. It runs in `prebuild` and prints a **warning** (not a failure) while demo items remain.
- Replacing an item: drop the real file in, remove the `demo` flag, and delete its row in `DEMO.md`.
