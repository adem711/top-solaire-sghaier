import { hasLocale } from "next-intl";
import { routing, type Locale } from "./routing";

export const locales = routing.locales;
export const defaultLocale = routing.defaultLocale;

export const localeMeta: Record<Locale, { htmlLang: string; dir: "ltr" | "rtl"; ogLocale: string; label: string }> = {
  fr: { htmlLang: "fr-TN", dir: "ltr", ogLocale: "fr_TN", label: "Français" },
  ar: { htmlLang: "ar-TN", dir: "rtl", ogLocale: "ar_TN", label: "العربية" },
};

export function isLocale(value: string | undefined): value is Locale {
  return hasLocale(routing.locales, value);
}

export type { Locale };
