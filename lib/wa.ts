import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { buildWhatsAppUrl } from "./whatsapp";

type Key = "default" | "service" | "project";

/** Server helper: a localized, prefilled WhatsApp URL (greeting + context line). */
export async function waLink(locale: Locale, key: Key = "default", values: Record<string, string> = {}) {
  const t = await getTranslations({ locale, namespace: "whatsapp" });
  return buildWhatsAppUrl(`${t("greeting")}\n${t(key, values)}`);
}
