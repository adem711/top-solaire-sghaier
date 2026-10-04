// Business facts (CLAUDE.md §1). Items flagged demo are placeholders listed in DEMO.md.

export const site = {
  name: "Top Solaire Sghaier",
  owner: "Ilyes Sghaier",
  foundingYear: 2015,
  installations: "150+",
  warrantyYears: 25,
  email: "ilyesenergie@gmail.com",
  facebook: "https://www.facebook.com/profile.php?id=100063543162195",
  city: "Sousse",
  url: (process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000")
  ).replace(/\/$/, ""),
} as const;

export const serviceArea = {
  demo: true,
  places: ["Sousse", "Monastir", "M'saken", "Jemmel", "Sahel"],
} as const;

/** Savings simulator assumptions. demo: the owner will confirm tariff and yield. */
export const simulator = {
  demo: true,
  billMin: 40,
  billMax: 600,
  billStep: 10,
  billDefault: 150,
  /** Average residential STEG price incl. taxes, DT per kWh. */
  tariffDtPerKwh: 0.35,
  /** Annual yield in the Sahel, kWh per kWc. */
  yieldKwhPerKwc: 1600,
  /** Panel used for the panel count. */
  panelWatts: 450,
  /** Matches the owner's approved "jusqu'à 70 %" claim. */
  maxSavingsShare: 0.7,
  gridSlots: 30,
} as const;

export function estimate(billDt: number) {
  const monthlyKwh = billDt / simulator.tariffDtPerKwh;
  const annualKwh = monthlyKwh * 12;
  const panels = Math.max(2, Math.ceil((annualKwh / simulator.yieldKwhPerKwc) * 1000 / simulator.panelWatts));
  const kwc = (panels * simulator.panelWatts) / 1000;
  const production = Math.round((kwc * simulator.yieldKwhPerKwc) / 10) * 10;
  const savings = Math.round((billDt * simulator.maxSavingsShare) / 5) * 5;
  return { kwc, panels, production, savings };
}
