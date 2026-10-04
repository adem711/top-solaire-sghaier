# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js (App Router, TypeScript, every page pre-rendered) + Tailwind CSS v4 + next-intl, deployed on Vercel. No backend, database or form service. Chosen by the owner on 2026-09-29 (details in CLAUDE.md §3).

## Users

- **Homeowners in the Sahel (Sousse, Monastir and around)** with a high STEG electricity bill, usually on a phone, often arriving from the company's Facebook page. They want to know whether solar pays off for their roof and who they can trust to install it.
- **Farmers with a well** who pay for diesel or grid power to run a pump and want solar pumping.
- **Small businesses and shops** looking to cut their electricity bill (secondary audience).

They read French or Arabic (Tunisian); many switch between both.

## Product Purpose

Marketing site for Top Solaire Sghaier, a solar installer in Sousse, Tunisia. It exists to **build trust** and **turn visits into WhatsApp conversations** that start a free study. Success = a visitor sends a prefilled WhatsApp message (study request, simulator result, "same installation as this project") or calls.

## Positioning

A local, ANME-approved representative since 2015 with 150+ installations, which shows real installations with their actual specs (kWc, panels, inverter or pump drive) instead of stock imagery and vague promises, and handles the whole job: free study, STEG/ANME paperwork, installation, after-sales service.

## Operating Context

- Service business, not an office: the team works on site at the client's home, farm or business, visits by appointment. No address, map or opening hours.
- Leads arrive only through WhatsApp (+216 98 452 134); phone is secondary; email is shown on the Contact page only.
- Clients send their STEG bill to get a study; STEG grid connection and ANME paperwork are part of every residential job.

## Capabilities and Constraints

- Services: grid-tied residential PV (1.6 → 9.6 kWc delivered), agricultural solar pumping (3 → 7.2 kWc, 3 → 5.5 CV 380 V pumps), solar water heaters (Soften).
- Bilingual FR / AR (RTL), same routes under `/fr` and `/ar`. Brand name always in Latin script.
- Savings simulator figures are indicative (demo assumptions listed in DEMO.md).
- Quality bar: Lighthouse 100 target in all five categories, 95 floor.
- Undecided: service area beyond the Sahel, whether business projects and the water-heater offer are active (tracked in DEMO.md).

## Brand Commitments

- Name: Top Solaire Sghaier. Logo kit and design system in `Brand Info/`; tokens transcribed in CLAUDE.md §5.
- Personality: **Clair** (readable numbers, simple steps), **Chaleureux** (warm, reachable), **Fiable** (technical seriousness).
- Voice: French for the French pages; Arabic = Modern Standard Arabic base with a Tunisian-dialect touch in headlines and calls to action, the way the Facebook page speaks.
- Approved claims only: free study, up to 70 % savings, panels guaranteed up to 25 years, ANME-approved representative, since 2015, 150+ installations.

## Evidence on Hand

- 10 photographed real projects with specs (`Brand Info/Photos/Project 1–10`, processed into `public/images/projects/`), plus ~25 older documented posts that count towards the 150+ figure.
- Facebook page (~2.7K followers) and past flyers.
- **Absent, must not be fabricated:** testimonials, reviews, ratings, client names or locations, partner agreements, current financing terms (0 DT / STEG credit offers are no longer valid), team photos.

## Product Principles

1. Proof before promise: every claim sits next to a real installation or a checkable fact.
2. One step to WhatsApp from anywhere on the site, with the context already written.
3. Arabic is a first-class version, not a translation afterthought (RTL, voice, numbers).
4. Honest estimates: simulator output is labelled indicative and leads to a real study.

## Accessibility & Inclusion

WCAG 2.2 AA. Mobile-first for low-end phones on mobile data: 48 px touch targets, no layout shift, fast first load. Readable in both scripts, with numbers and phone numbers never reversed inside Arabic text.
