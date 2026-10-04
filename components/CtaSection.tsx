import { getTranslations } from "next-intl/server";
import { Phone } from "lucide-react";
import type { Locale } from "@/i18n/routing";
import { PHONE2_DISPLAY, PHONE2_TEL, PHONE_DISPLAY, PHONE_TEL } from "@/lib/whatsapp";
import { quoteFormLabels } from "@/lib/labels";
import { QuoteForm } from "./QuoteForm";

/** Closing band: the quote form (→ WhatsApp) with the phone as the secondary route. */
export async function CtaSection({ locale, headingLevel = 2 }: { locale: Locale; headingLevel?: 1 | 2 }) {
  const t = await getTranslations({ locale, namespace: "cta" });
  const labels = await quoteFormLabels(locale);
  const H = headingLevel === 1 ? "h1" : "h2";

  return (
    <section id="devis" aria-labelledby="cta-title" className="on-dark bg-navy-500 py-20 text-white lg:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-12">
        <div className="reveal lg:col-span-4">
          <H id="cta-title" className="font-display text-[clamp(2rem,1.5rem+2.2vw,3rem)] font-bold leading-[1.08] tracking-display">
            {t("heading")}
          </H>
          <p className="mt-5 text-lg text-navy-100">{t("lead")}</p>
          <div className="mt-10 border-t border-navy-300/60 pt-6">
            <p className="font-display font-semibold">{t("callTitle")}</p>
            <p className="mt-1 text-navy-ink">{t.rich("callText", { phone: PHONE_DISPLAY, phone2: PHONE2_DISPLAY, ltr: (c) => <bdi dir="ltr" className="whitespace-nowrap">{c}</bdi> })}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href={PHONE_TEL} data-track="call_click" data-context="cta" className="btn btn-outline-light">
                <Phone className="size-5" aria-hidden="true" />
                <bdi dir="ltr" className="num">+216 {PHONE_DISPLAY}</bdi>
              </a>
              <a href={PHONE2_TEL} data-track="call_click" data-context="cta-2" className="btn btn-outline-light">
                <Phone className="size-5" aria-hidden="true" />
                <bdi dir="ltr" className="num">+216 {PHONE2_DISPLAY}</bdi>
              </a>
            </div>
          </div>
        </div>
        <div className="rounded-lg bg-white p-6 text-ink shadow-[0_24px_60px_-30px_rgb(0_0_0/0.6)] sm:p-8 lg:col-span-8">
          <QuoteForm labels={labels} />
        </div>
      </div>
    </section>
  );
}
