import type { Metadata } from "next";
import { routing, type Locale } from "@/i18n/routing";
import { localeMeta } from "@/i18n/locales";
import { site } from "@/content/site";

/** Title, description, canonical + hreflang alternates for one page (CLAUDE.md §8.4). */
export function pageMetadata(locale: Locale, path: string, title: string, description: string): Metadata {
  const languages: Record<string, string> = Object.fromEntries(
    routing.locales.map((l) => [localeMeta[l].htmlLang, `/${l}${path}`]),
  );
  languages["x-default"] = `/${routing.defaultLocale}${path}`;

  return {
    title,
    description,
    alternates: { canonical: `/${locale}${path}`, languages },
    openGraph: {
      title,
      description,
      url: `${site.url}/${locale}${path}`,
      siteName: site.name,
      locale: localeMeta[locale].ogLocale,
      type: "website",
      images: [{ url: `/og/og-${locale}.jpg`, width: 1200, height: 630, alt: site.name }],
    },
    twitter: { card: "summary_large_image", title, description, images: [`/og/og-${locale}.jpg`] },
  };
}
