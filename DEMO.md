# Demo content to replace

Placeholder content the owner will replace (CLAUDE.md §13). No demo **photos** are used: every image on the site is a real Top Solaire Sghaier installation. `npm run check:demo` lists the flagged items in the code.

| Slot | Where | What it is now | What the owner should supply |
|---|---|---|---|
| Simulator assumptions | `content/site.ts` → `simulator` (`demo: true`) | Tariff 0,35 DT/kWh, yield 1 600 kWh/kWc/an, 450 Wc panel | Real average STEG tariff for their clients, the yield they use in studies, the panel model they install today |
| Service area | `content/site.ts` → `serviceArea` (`demo: true`), shown on /a-propos (`data-demo="service-area"`) and in JSON-LD | Sousse, Monastir, M'saken, Jemmel, Sahel | The real list of towns/governorates, or "toute la Tunisie" |
| FAQ answers | `messages/*.json` → `faq.items` (duration, maintenance) | Written from general solar knowledge | Confirm or correct the installation duration and maintenance advice |
| Solar water heater offer | `messages/*.json` → `services.chauffeEau` | Shown as an active service (Soften) | Confirm the offer is still active |
| "Entreprise ou commerce" project type | Quote form `typeOptions.entreprise` | Offered as a choice | Confirm they take business projects |
| Domain | `NEXT_PUBLIC_SITE_URL` env var | Vercel production URL | The domain, once bought |
| Team / owner photo | Not shown | — | A photo of Ilyes and the team on a site (optional, strong for trust) |
