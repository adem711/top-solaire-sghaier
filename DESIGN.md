---
name: Top Solaire Sghaier
description: Bilingual (FR / AR, RTL) solar installer site where real rooftops carry their own spec plates and every action leads to WhatsApp.
colors:
  solar-orange: "#e4702a"
  solar-orange-hover: "#f08e2e"
  solar-orange-deep: "#a34a17"
  solar-orange-light: "#f5a53a"
  solar-yellow: "#f8c04f"
  solar-orange-halo: "#fde4cf"
  solar-orange-wash: "#fef4ec"
  panel-navy: "#1f2f46"
  panel-navy-raised: "#2c4262"
  panel-navy-line: "#3d5a80"
  panel-navy-mist: "#e3e8ef"
  on-navy-secondary: "#a9b6c8"
  linen: "#f4f2ee"
  white: "#ffffff"
  sand: "#d6d0c7"
  stone: "#6b645c"
  graphite: "#3a342e"
  ink: "#1a1613"
  border: "#e4dfd8"
  divider: "#eeeae4"
  success: "#2f7a4f"
  success-bg: "#e3f1e8"
  success-ink: "#1f5a38"
  error: "#b3321f"
typography:
  display:
    fontFamily: "Sora, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 1.5rem + 3.6vw, 4.25rem)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Sora, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 1.8rem + 3vw, 4rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  section:
    fontFamily: "Sora, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 1.4rem + 2vw, 2.75rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  title-lg:
    fontFamily: "Sora, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 600
    lineHeight: 1.25
  title:
    fontFamily: "Sora, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.4
  card-title:
    fontFamily: "Sora, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 600
    lineHeight: 1.375
  small:
    fontFamily: "Nunito Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.57
  body-lead:
    fontFamily: "Nunito Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.66
  body:
    fontFamily: "Nunito Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.62
  figure:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "clamp(1.875rem, 1.3rem + 2.4vw, 3rem)"
    fontWeight: 500
    lineHeight: 1
    fontFeature: "tnum"
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.333
    letterSpacing: "0.08em"
  button:
    fontFamily: "Sora, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
    lineHeight: 1.2
  arabic:
    fontFamily: "Readex Pro, Segoe UI, Tahoma, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.8
    letterSpacing: "0"
rounded:
  sm: "4px"
  md: "8px"
  lg: "12px"
  full: "999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  base: "16px"
  card: "20px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  section: "80px"
  section-lg: "112px"
components:
  button-primary:
    backgroundColor: "{colors.solar-orange}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "13px 20px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.solar-orange-hover}"
    textColor: "{colors.ink}"
  button-primary-lg:
    backgroundColor: "{colors.solar-orange}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "13px 24px"
    height: "56px"
  button-secondary:
    backgroundColor: "{colors.panel-navy}"
    textColor: "{colors.white}"
    rounded: "{rounded.md}"
    padding: "13px 20px"
    height: "48px"
  button-secondary-hover:
    backgroundColor: "{colors.panel-navy-raised}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "12px 20px"
    height: "48px"
  button-outline-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
  button-outline-light:
    backgroundColor: "transparent"
    textColor: "{colors.linen}"
    rounded: "{rounded.md}"
    padding: "12px 20px"
    height: "48px"
  input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "12px 14px"
    height: "48px"
  chip-filter:
    backgroundColor: "{colors.white}"
    textColor: "{colors.graphite}"
    rounded: "{rounded.full}"
    padding: "0 16px"
    height: "44px"
  chip-filter-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
  pill-installed:
    backgroundColor: "{colors.success-bg}"
    textColor: "{colors.success-ink}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
  equipment-tag:
    backgroundColor: "{colors.linen}"
    textColor: "{colors.graphite}"
    rounded: "{rounded.sm}"
    padding: "4px 8px"
  card:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.lg}"
    padding: "20px"
  nameplate:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    width: "min(19rem, calc(100% - 2rem))"
  nameplate-header:
    backgroundColor: "{colors.panel-navy}"
    textColor: "{colors.solar-yellow}"
    typography: "{typography.label}"
    padding: "10px 16px"
  stat-band:
    backgroundColor: "{colors.panel-navy}"
    textColor: "{colors.white}"
    typography: "{typography.figure}"
  whatsapp-fab:
    backgroundColor: "{colors.solar-orange}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "0 16px"
    height: "56px"
---

# Design System: Top Solaire Sghaier

## Overview

**Creative North Star: "The Installer's Spec Plate"**

The site reads like the metal plate riveted to a finished installation: a real rooftop, and next to it the measured facts (kWc, panel count and model, inverter, STEG connection). Proof comes before promise. Every surface pairs a real photo from the owner's own projects with its specification set in monospace, and every action ends in a prefilled WhatsApp message. The mood is clear, warm and dependable: a technician's clipboard, not a brochure.

The world sits on a warm linen ground. Deep panel-navy bands carry the heavy facts (stats, simulator results, the closing quote band, the values section), and white bordered cards hold photos and forms. Solar orange marks what you can press, what is in focus and the small ticks that start a stat. It never fills a background area. Density is moderate: sections breathe (80 px mobile, 112 px desktop), while the data inside cards is tight and tabular.

The site has two scripts. French runs Sora / Nunito Sans / JetBrains Mono. Arabic runs Readex Pro RTL, with zero letter-spacing, no uppercase and taller leading. Latin values sit inside Arabic text in `<bdi dir="ltr">`. Layout uses logical properties only, so one markup serves both directions.

**Key Characteristics:**
- Real project photography only, always with its own specs beside it (nameplate, card spec line, equipment tags).
- Linen ground, white bordered cards, navy bands for figures, orange only for actions and focus.
- JetBrains Mono for every measured value, with tabular figures.
- Radii 4 / 8 / 12 px plus full pills. No sharp corners, no big blob radii.
- Soft, long, low-opacity drop shadows under things that float (nameplate, form panel, primary button, FAB). Cards at rest are flat.
- Motion is CSS only: scroll-driven reveal, hover lift, the simulator roof filling panel by panel, native popover/dialog transitions. All of it is off under reduced motion.

## Colors

The palette uses warm neutrals for the ground, one deep blue-navy for structure and figures, and a single solar orange for action. The split is roughly 60 % neutrals, 25 % navy/ink and 15 % orange.

### Primary
- **Solar Orange** (`solar-orange`): fills primary buttons, the WhatsApp FAB, the range slider's filled track, the 3 px tick above each trust stat and the active nav underline. Text on it is always Ink, never white.
- **Solar Orange Hover** (`solar-orange-hover`): the hover state of every orange fill.
- **Deep Ember** (`solar-orange-deep`): the only orange allowed as text on light grounds. Used for inline links, the WhatsApp text links on cards, the FAQ plus icon and the hero trust-line icons. Underlines run at 30–35 % alpha and go solid on hover.
- **Light Solar** (`solar-orange-light`): orange text and icons on navy or ink (simulator results label, the savings figure, footer icons, the ANME line) and the focus-ring colour on dark bands.
- **Solar Yellow** (`solar-yellow`): the nameplate header label on navy, and the `::selection` fill.
- **Orange Halo / Wash** (`solar-orange-halo`, `solar-orange-wash`): the 3 px input focus halo, and the current-page row in the mobile nav sheet.

### Secondary
- **Panel Navy** (`panel-navy`): full-bleed bands (trust stats, closing CTA/quote band, values), the simulator results half, the nameplate header strip, the secondary button and the default focus ring on light grounds.
- **Panel Navy Raised** (`panel-navy-raised`): the secondary button's hover, and the roof tray behind the simulator panels (at 60 %).
- **Panel Line** (`panel-navy-line`): dividers inside navy bands (at 60 % alpha).
- **On-Navy Secondary** (`on-navy-secondary`): secondary text, labels and units on navy.
- **Navy Mist** (`panel-navy-mist`): lead text on the navy CTA band.

### Neutral
- **Linen** (`linen`): the page ground, the header (at 80–90 % with backdrop blur), step-number discs and equipment tags.
- **White** (`white`): cards, forms, nameplate body, the "Réalisations" section band.
- **Sand** (`sand`): input and chip borders, the empty slider track, the process timeline rule, image placeholder backgrounds and footer labels.
- **Stone** (`stone`): secondary text, hints, placeholders and spec lines. Nothing lighter is used for text on Linen.
- **Graphite** (`graphite`): body copy under headings, leads and unselected chips.
- **Ink** (`ink`): headings, primary text, outline buttons, selected chips, the footer ground and the lightbox backdrop (at 88 %).
- **Border / Divider** (`border`, `divider`): 1 px card and section borders, and hairlines inside cards.

### Functional
- **Success** (`success`, `success-bg`, `success-ink`): the "Installé" pill, "Raccordé STEG" on the nameplate, the check marks in service lists and the form-sent confirmation.
- **Error** (`error`): the invalid input border and the error message text with its icon.

### Named Rules
**The Orange Is For Hands Rule.** Orange fills only things you can press (buttons, FAB, slider fill) plus two tiny markers (stat ticks, nav underline). It never fills a section, card or background.

**The Ink On Orange Rule.** Text on Solar Orange is Ink. Orange text on light grounds is Deep Ember. On navy it is Light Solar or Solar Yellow.

**The Token-Only Rule.** Components use the `@theme` colours only (`--color-*: initial` removes Tailwind's palette). Alpha variants (`border-navy-300/60`, `bg-ink/85`) are allowed. New raw hex values are not.

## Typography

**Display Font:** Sora (fallbacks: ui-sans-serif, system-ui)
**Body Font:** Nunito Sans (fallbacks: ui-sans-serif, system-ui)
**Data Font:** JetBrains Mono 500 (fallbacks: ui-monospace)
**Arabic (all roles except figures):** Readex Pro, self-hosted Arabic subset, variable weight 160–700 (fallbacks: Segoe UI, Tahoma)

**Character:** Sora is geometric and a little technical, and it carries the headlines with confident negative tracking. Nunito Sans is soft and friendly for reading. JetBrains Mono makes every number look measured rather than advertised.

Families are swapped per language through `--ff-display / --ff-body / --ff-mono / --ff-label` on `:root` and `:root:lang(ar)`. Components never name a font directly.

### Hierarchy
- **Display** (Sora 700, fluid 36→68 px, lh 1.04, −3 %): the home hero `<h1>` only.
- **Headline** (Sora 700, fluid 40→64 px, lh 1.05, −3 %): inner-page `<h1>` (Projets, À propos, Contact). The closing CTA heading uses the same style at 32→48 px, lh 1.08.
- **Section** (Sora 600, fluid 30→44 px, lh 1.15, −2 %): every section `<h2>`, followed by an 18 px Graphite lead.
- **Title** (Sora 600, 20 px; the feature service card uses 24–28 px): step titles, service titles, FAQ summaries (18 px).
- **Card title** (Sora 600, 17 px, lh 1.375): project cards.
- **Body** (Nunito Sans 400, 16 px, lh 1.62; 1.8 in Arabic): paragraphs. Long answers are capped at 65ch and hero leads at 44ch.
- **Figure** (JetBrains Mono 500, tabular): trust stats at 30→48 px, the simulator bill at 48→72 px, results at 24–30 px, and spec lines at 13 px.
- **Label** (mono 500, 12 / 16 px, +8 %, uppercase in FR): nameplate header, footer column heads, brand group names, simulator results head. Arabic gets Readex Pro, no tracking, no uppercase (through `--tr-label` and `--ff-label`).
- **Button** (Sora 600, 15 px; 16 px on large buttons).

### Named Rules
**The Measured Value Rule.** Every figure with a unit (kWc, Wc, DT, kWh/an, years, model numbers, phone numbers) is set in mono with tabular numerals and carries its unit. Inside Arabic text it is wrapped in `<bdi dir="ltr">`. The `num` utility sets the face only and never forces direction.

**The Joined Script Rule.** Arabic gets zero letter-spacing and no text-transform. Tracking only goes through `tracking-display`, `tracking-heading` and the `label` utility, which read `--tr-*` variables that are 0 under `:lang(ar)`.

**The No-Late-Swap Rule.** Readex Pro loads with `font-display: optional` and is preloaded only on `/ar`. Sora is preloaded. Nunito Sans and Mono are not preloaded and paint first in next/font's metric-matched fallbacks. Text never reflows after first paint.

## Layout

- **Container:** max 1180 px of content (`container-page`), inline padding 16 px on mobile and 28 px from 640 px up, centred with `margin-inline`.
- **Grid:** 12 columns from `lg` (1024 px). The hero is split 5 / 7 (text / photo). Services: a 7-column feature card spanning two rows beside two 5-column horizontal cards. The CTA band is 4 / 8 (pitch / form panel). FAQ is 4 / 8 (heading / list). Project grids go 1 → 2 (`sm`) → 3 (`lg`) columns with 20 px gaps. The trust band goes 2 × 2 → 4 across.
- **Vertical rhythm:** sections are padded 80 px on mobile and 112 px on desktop. Heading → lead is 16 px, lead → content 48 px. Card padding is 20 px (project), 24 px (service, simulator on mobile) and 32–40 px (feature card, simulator, brands panel).
- **Bands:** the page alternates Linen sections, one white band with top and bottom borders ("Réalisations"), and full-bleed navy bands. The footer is Ink.
- **Breakpoints:** Tailwind defaults (`sm` 640, `md` 768, `lg` 1024, `xl` 1280) plus a custom `xs` of 416 px.
- **Mobile hero order:** headline → lead → CTAs (WhatsApp button flexes, call is a 56 px icon button) → photo with nameplate → trust line.
- **Direction:** logical properties only (`ms/me/ps/pe/start/end/text-start`, `border-s`, `margin-inline`). Directional icons flip with `rtl:-scale-x-100`. Logos, photos, brand names and the simulator's panel grid (`dir="ltr"`) never flip. The slider fill gradient and `select` chevron have explicit `[dir=rtl]` rules.
- **Chrome:** sticky 72 px header (`--header-h`) with `scroll-padding-top` to match. The floating WhatsApp button sits bottom-end, inset by the safe area, and the footer reserves 112 px of bottom padding on mobile so the FAB never covers it.

## Elevation & Depth

Depth is mostly tonal: Linen ground, white cards with a 1 px warm border, navy bands. Shadows are few, soft and long. They use a large negative spread and a low offset, tinted with Ink or ember, never grey-black. A shadow means "this object floats over something" (nameplate over photo, form over navy, FAB over content) or answers a hover.

### Shadow Vocabulary
- **Nameplate** (`0 18px 40px -20px rgb(26 22 19 / 0.5)`): the spec plate overlapping the hero photo.
- **Card lift, hover only** (`0 18px 40px -24px rgb(26 22 19 / 0.45)` with `translateY(-4px)`): project and service cards.
- **Floating panel** (`0 24px 60px -30px rgb(0 0 0 / 0.6)` on navy; `0 24px 60px -40px rgb(26 22 19 / 0.5)` on linen): the quote-form panel.
- **Primary button** (`0 1px 0 rgb(26 22 19 / 0.12), 0 6px 16px -8px rgb(163 74 23 / 0.55)`): an ember under-glow that makes the main action feel pressable.
- **FAB** (`0 10px 28px -10px rgb(90 42 14 / 0.7)`).
- **Filled roof panel** (`0 2px 4px rgb(0 0 0 / 0.25)`).

### Named Rules
**The Flat-At-Rest Rule.** Cards have a border and no shadow at rest. Shadow appears on hover (card lift) or on objects that physically overlap another layer.

## Shapes

- **Radii:** 4 px for tags, the skip link and the focus-ring corner. 8 px for buttons, inputs, the nameplate, icon buttons and the simulator roof tray. 12 px for cards, photo frames, the simulator, the brands panel and the form panel. Full pills for status pills, filter and preset chips, step discs, lightbox controls and the FAB. The simulator's panel slots use a hairline 3 px.
- **Borders:** 1 px warm Border on cards and section edges. 1.5 px on interactive outlines (inputs, outline buttons, chips) so controls read heavier than containers. 2 px Ink on step-number discs and the slider thumb.
- **Photos** are always clipped to a 12 px radius in fixed aspect frames (16:10 cards and services, 4:3 hero, 16:9 / 21:9 about banner, 3:4 about grid) over a Sand placeholder, with blur placeholders.
- **The hexagon belongs to the logo.** It is never used as a photo frame or motif.

## Components

### Buttons
Tactile, compact and always at least 48 px tall.
- **Shape:** gently rounded (8 px), Sora 600 15 px, 13 × 20 px padding, 10 px icon gap. `btn-lg` is 56 px tall with 24 px padding and 16 px text.
- **Primary:** Solar Orange with Ink text and the ember under-glow. Used for every WhatsApp action (header, hero, simulator, form submit, mobile menu). It carries the inline WhatsApp glyph.
- **Secondary:** Panel Navy with white text; hover goes to Panel Navy Raised.
- **Outline:** 1.5 px Ink border; hover fills Ink with white text. Used for the call button and "see all projects".
- **Outline light:** 1.5 px Linen border at 55 % on navy; hover makes the border solid with an 8 % Linen fill. Used for the phone button on the CTA band.
- **States:** 160 ms colour transitions on ease-out-quart, 1 px press-down on `:active`, and the global focus ring (2 px Panel Navy, 3 px offset; Light Solar inside `.on-dark`).

### Text links (WhatsApp CTAs inside cards)
Deep Ember, bold, with a 30 % alpha underline at 4 px offset that goes solid on hover. They lead with the WhatsApp glyph. On service cards a trailing arrow slides 4 px toward the reading end on hover. The hit area is a 48 px minimum.

### Chips
- **Filter chips (Projets) and simulator presets:** full pills, 44 px tall, 1.5 px Sand border, Graphite semibold text (filter chips on white). Hover: Ink border and text. Selected (`aria-pressed="true"`): solid Ink with white text.
- **Status pill "Installé":** Success Bg / Success Ink, 12 px bold, check icon, placed at the top-start corner of card photos.
- **Equipment tags:** Linen background, 4 px radius, 13 px semibold Graphite. Latin model names are wrapped in `bdi`.

### Cards / Containers
- **Corner Style:** 12 px.
- **Background:** white on Linen, with a 1 px Border.
- **Shadow Strategy:** flat at rest, card lift on hover (see Elevation). The photo inside scales to 1.035 over 700 ms.
- **Project card:** 16:10 cover, card title, then a mono Stone spec line (`10 panneaux · 4 kWc · 2022`), equipment tags, then a WhatsApp text link pinned to the bottom. On Projets a "N photos" button (translucent Ink, blurred) at the bottom-end opens the lightbox.
- **Internal Padding:** 20 px (project) / 24 px (service) / 32 px (feature service).

### Inputs / Fields
- **Style:** white field, 1.5 px Sand border, 8 px radius, 12 × 14 px padding, 16 px text (no iOS zoom), 48 px minimum height. Hover darkens the border one step. Labels are 14 px bold Ink above the field; hints are 13 px Stone. The `select` gets a custom chevron at the inline end.
- **Focus:** Solar Orange border plus a 3 px Orange Halo ring. No outline.
- **Error:** Error-red border (with a pale red halo while focused) and a 13 px bold Error message with an alert icon, tied to the field by `aria-describedby`.

### Navigation
- **Desktop bar:** 15 px semibold Graphite links, 48 px tall. A 2 px Solar Orange underline scales in from the centre on hover (300 ms ease-out-expo) and stays on `aria-current="page"`, where the text turns Ink. Language switch (`عربي` / `FR`) and an orange "Devis gratuit" button sit at the end.
- **Header:** sticky, Linen at 80–90 % with `backdrop-blur-md` and a bottom border.
- **Mobile:** a native `popover` sheet from the inline end, max 352 px wide, full height, white. Rows are 56 px with Sora 20 px text. The current page is shown with Orange Wash and Deep Ember. A full-width primary WhatsApp button closes the list. The Ink backdrop runs at 40 %.

### Equipment Nameplate (signature)
A white 8 px plate overlapping the bottom-start edge of the hero photo by 40 px, at most 304 px wide. It has a Panel Navy header strip with the sun mark and a Solar Yellow label ("Installation réalisée"), then a two-column `dl`: Stone terms on the start side, mono Ink values on the end side (power, panels, inverter), and "Raccordé STEG" in Success Ink. A divider-topped 12 px footnote gives the roof type and date. The pattern (navy strip + mono spec list) is how the system presents a real installation's facts.

### Trust Band
A full-bleed Panel Navy band with 4 stats, split by Panel Line dividers. Each stat is a mono white figure with a 24 × 3 px Solar Orange tick above it and an On-Navy Secondary term below.

### Savings Simulator (signature)
A 12 px bordered card split 5 / 7. The control half is white: a giant mono bill figure, then the range slider (8 px pill track with the orange fill driven by `--fill`, a 28 px white thumb with a 2 px Ink ring, scaling to 1.12 while dragged, and a halo + navy ring focus), then preset chips and a Stone assumptions note. The results half is Panel Navy: a **roof** of 10-column portrait panel slots on a raised navy tray. Empty slots are dashed and scaled to 0.94. Filled slots become deep-blue cells with a 6 × 3 grid and a sheen. They fill one by one with 28 ms steps (capped at 420 ms) over a 420 ms ease-out-expo. Below the roof is a 2 × 2 mono figure grid (savings in Light Solar) in a polite live region, then a large primary WhatsApp button.

### Floating WhatsApp Button
A Solar Orange pill, 56 px tall, with the WhatsApp glyph (label from 640 px up), fixed at the bottom-end with the safe area respected. Where scroll timelines are supported, it fades and rises in over the first 520 px of scroll, so it arrives after the hero's own WhatsApp button has scrolled away.

### Lightbox
A native `<dialog>` with an Ink backdrop at 88 %. The photo is `object-contain`, with the title and a mono counter above it. Controls are 48 px round translucent-white buttons, and the chevrons mirror in RTL. It opens with opacity plus an 8 px drop through `@starting-style`.

### Process Steps
A 48 px Linen disc with a 2 px Ink ring and a mono numeral, sitting on a 1 px Sand rule that runs through the four steps on desktop.

## Do's and Don'ts

### Do:
- **Do** pair every project photo with its real specs: mono kWc, panel count × model, inverter or drive, year.
- **Do** use Solar Orange (`#e4702a`) only for pressable fills and the two micro-markers (stat tick, nav underline), with Ink text on top.
- **Do** set orange text in Deep Ember (`#a34a17`) on light grounds and in Light Solar (`#f5a53a`) on navy.
- **Do** put heavy figures on Panel Navy bands, with secondary text in `#a9b6c8` and dividers in `#3d5a80` at 60 %.
- **Do** set every measured value in JetBrains Mono with tabular numerals, and wrap it in `<bdi dir="ltr">` wherever the surrounding text can be Arabic.
- **Do** apply tracking only through `tracking-display` / `tracking-heading` / `label`, so Arabic automatically gets 0.
- **Do** use logical properties and `rtl:-scale-x-100` for directional icons, and check `/fr` and `/ar` after every change.
- **Do** keep controls at least 48 px tall (44 px for chips), with 1.5 px borders and the global 2 px navy focus ring (Light Solar in `.on-dark`).
- **Do** keep cards flat at rest (1 px `#e4dfd8` border) and lift them only on hover (−4 px, soft Ink shadow).
- **Do** keep motion CSS-only, on transform/opacity, with ease-out-quart (`cubic-bezier(0.25, 1, 0.5, 1)`) for state and ease-out-expo (`cubic-bezier(0.16, 1, 0.3, 1)`) for travel, all disabled under `prefers-reduced-motion`.

### Don't:
- **Don't** put white text on Solar Orange, or fill a section or card background with orange.
- **Don't** use stock or demo photos as installations, and don't caption demo imagery as a Top Solaire Sghaier project.
- **Don't** letter-space or uppercase Arabic text, and don't force `direction` from the `num` utility.
- **Don't** introduce colours outside the `@theme` tokens. Tailwind's default palette is removed on purpose.
- **Don't** reuse the logo hexagon as a frame or pattern.
- **Don't** animate the hero photo (the LCP element) or any layout property.
- **Don't** use hard offset shadows or grey-black shadows. Depth is soft, long and Ink- or ember-tinted.
