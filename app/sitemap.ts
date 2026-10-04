import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { localeMeta } from "@/i18n/locales";
import { site } from "@/content/site";

const PATHS = ["", "/projets", "/a-propos", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return PATHS.flatMap((path) =>
    routing.locales.map((locale) => ({
      url: `${site.url}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
      alternates: {
        languages: Object.fromEntries(routing.locales.map((l) => [localeMeta[l].htmlLang, `${site.url}/${l}${path}`])),
      },
    })),
  );
}
