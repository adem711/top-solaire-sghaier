import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { waLink } from "@/lib/wa";
import { WhatsAppIcon } from "./icons";

/** Always-visible WhatsApp entry point. Plain link: no JS, safe-area aware. */
export async function WhatsAppFab({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "whatsapp" });
  const href = await waLink(locale);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-track="whatsapp_click"
      data-context="fab"
      aria-label={t("fab")}
      className="fab group fixed bottom-[max(1rem,env(safe-area-inset-bottom))] end-4 z-30 inline-flex h-14 items-center gap-2.5 rounded-full bg-orange-500 px-4 font-display text-[0.9375rem] font-semibold text-ink shadow-[0_10px_28px_-10px_rgb(90_42_14/0.7)] transition-[background-color,transform] duration-200 ease-(--ease-out-quart) hover:-translate-y-0.5 hover:bg-orange-400 sm:end-6 sm:bottom-6"
    >
      <WhatsAppIcon className="size-6" />
      <span className="hidden sm:inline">{t("fab")}</span>
    </a>
  );
}
