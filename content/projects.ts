// The 10 photographed projects (CLAUDE.md §2). Real data only: never add demo projects here.
// No client locations: the owner declined to publish them.
import { projectImages, type ProjectImage } from "./project-images";

export type ProjectType = "residentiel" | "pompage" | "chauffe-eau";

export type Project = {
  slug: string;
  /** YYYY-MM */
  date: string;
  /** First entry drives the title; all entries drive the filter. */
  types: ProjectType[];
  kwc: number;
  panels?: { count?: number; model: string };
  /** Grid inverter or pump drive */
  drive?: { kind: "inverter" | "vfd"; model: string };
  pump?: { cv: number; volts?: number; brand?: string };
  grid?: boolean;
  waterHeater?: boolean;
  images: ProjectImage[];
};

const raw: Omit<Project, "images">[] = [
  { slug: "pompage-3-kwc-2026", date: "2026-03", types: ["pompage"], kwc: 3, panels: { model: "AE Solar" }, drive: { kind: "vfd", model: "INVT" }, pump: { cv: 3, brand: "Caprari" } },
  { slug: "pompage-5-5-kwc-2025", date: "2025-12", types: ["pompage"], kwc: 5.5, panels: { model: "AE Solar" }, drive: { kind: "vfd", model: "INVT" }, pump: { cv: 3, volts: 380 } },
  { slug: "residentiel-3-1-kwc-2025", date: "2025-04", types: ["residentiel"], kwc: 3.115, panels: { count: 7, model: "Jinko 445 Wc" }, drive: { kind: "inverter", model: "SolaX" }, grid: true },
  { slug: "pompage-7-2-kwc-2024", date: "2024-02", types: ["pompage"], kwc: 7.2, panels: { model: "Trina Solar" }, drive: { kind: "vfd", model: "USFULL" }, pump: { cv: 5.5, volts: 380 } },
  { slug: "residentiel-3-2-kwc-2023", date: "2023-02", types: ["residentiel"], kwc: 3.2, panels: { count: 8, model: "Alphanis 400 Wc" }, drive: { kind: "inverter", model: "SolaX" }, grid: true },
  { slug: "residentiel-4-kwc-2022-12", date: "2022-12", types: ["residentiel"], kwc: 4, panels: { count: 10, model: "Alphanis 400 Wc" }, drive: { kind: "inverter", model: "S-Energy" }, grid: true },
  { slug: "residentiel-4-kwc-2022-11", date: "2022-11", types: ["residentiel"], kwc: 4, panels: { count: 10, model: "Alphanis 400 Wc" }, drive: { kind: "inverter", model: "SolaX" }, grid: true },
  { slug: "residentiel-3-3-kwc-2021", date: "2021-04", types: ["residentiel"], kwc: 3.3, drive: { kind: "inverter", model: "SolaX" }, grid: true },
  { slug: "residentiel-2-5-kwc-2021", date: "2021-04", types: ["residentiel"], kwc: 2.5, drive: { kind: "inverter", model: "SolaX" }, grid: true },
  { slug: "residentiel-2-2-kwc-2020", date: "2020-06", types: ["residentiel", "chauffe-eau"], kwc: 2.2, drive: { kind: "inverter", model: "SolaX" }, grid: true, waterHeater: true },
];

export const projects: Project[] = raw
  .map((p) => ({ ...p, images: projectImages[p.slug] ?? [] }))
  .sort((a, b) => b.date.localeCompare(a.date));

export function getProject(slug: string): Project {
  const p = projects.find((x) => x.slug === slug);
  if (!p) throw new Error(`Unknown project ${slug}`);
  return p;
}

export const HERO_PROJECT = "residentiel-4-kwc-2022-12";
