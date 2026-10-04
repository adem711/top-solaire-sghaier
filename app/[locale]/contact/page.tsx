import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Mail, Phone, Truck } from "lucide-react";
import type { Locale } from "@/i18n/routing";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import { quoteFormLabels } from "@/lib/labels";
import { PHONE2_DISPLAY, PHONE2_TEL, PHONE_DISPLAY, PHONE_TEL } from "@/lib/whatsapp";
import { waLink } from "@/lib/wa";
import { QuoteForm } from "@/components/QuoteForm";
import { FacebookIcon, WhatsAppIcon } from "@/components/icons";
import { JsonLd } from "@/components/JsonLd";

export async function generateMetadata({ params }: PageProps<"/[locale]/contact">): Promise<Metadata> {
  const locale = (await params).locale as Locale;
  const t = await getTranslations({ locale, namespace: "meta.contact" });
  return pageMetadata(locale, "/contact", t("title"), t("description"));
}

export default async function ContactPage({ params }: PageProps<"/[locale]/contact">) {
  const locale = (await params).locale as Locale;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "contact" });
  const nav = await getTranslations({ locale, namespace: "nav" });
  const common = await getTranslations({ locale, namespace: "common" });
  const labels = await quoteFormLabels(locale);
  const wa = await waLink(locale);

  const rowCls = "flex min-h-16 items-center gap-4 py-3";
  const iconCls = "flex size-11 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-700";

  return (
    <section aria-labelledby="contact-title" className="pb-24 pt-12 lg:pb-28 lg:pt-16">
      <div className="container-page grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h1 id="contact-title" className="font-display text-[clamp(2.5rem,1.8rem+3vw,4rem)] font-bold leading-[1.05] tracking-display">
            {t("heading")}
          </h1>
          <p className="mt-5 text-lg text-graphite">{t("lead")}</p>

          <a href={wa} target="_blank" rel="noopener noreferrer" data-track="whatsapp_click" data-context="contact-hero" className="btn btn-primary btn-lg mt-8 w-full sm:w-auto">
            <WhatsAppIcon />
            {t("whatsappAction")}
          </a>

          <h2 className="mt-12 label text-stone">{t("channelsHeading")}</h2>
          <ul className="mt-2 divide-y divide-border border-y border-border">
            <li>
              <a href={wa} target="_blank" rel="noopener noreferrer" data-track="whatsapp_click" data-context="contact-list" className={rowCls}>
                <span className={iconCls}>
                  <WhatsAppIcon className="size-5" />
                </span>
                <span>
                  <span className="block text-sm text-stone">{t("whatsapp")}</span>
                  <bdi dir="ltr" className="num block font-medium">{PHONE_DISPLAY}</bdi>
                </span>
              </a>
            </li>
            <li>
              <a href={PHONE_TEL} data-track="call_click" data-context="contact-list" className={rowCls}>
                <span className={iconCls}>
                  <Phone className="size-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm text-stone">{t("phone")}</span>
                  <bdi dir="ltr" className="num block font-medium">+216 {PHONE_DISPLAY}</bdi>
                </span>
              </a>
            </li>
            <li>
              <a href={PHONE2_TEL} data-track="call_click" data-context="contact-list-2" className={rowCls}>
                <span className={iconCls}>
                  <Phone className="size-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm text-stone">{t("phone2")}</span>
                  <bdi dir="ltr" className="num block font-medium">+216 {PHONE2_DISPLAY}</bdi>
                </span>
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className={rowCls}>
                <span className={iconCls}>
                  <Mail className="size-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm text-stone">{t("email")}</span>
                  <span className="font-medium">{site.email}</span>
                </span>
              </a>
            </li>
            <li>
              <a href={site.facebook} target="_blank" rel="noopener noreferrer" className={rowCls}>
                <span className={iconCls}>
                  <FacebookIcon className="size-5" />
                </span>
                <span>
                  <span className="block text-sm text-stone">{t("facebook")}</span>
                  <span className="font-medium">
                    {t("facebookAction")} <span className="sr-only">{common("external")}</span>
                  </span>
                </span>
              </a>
            </li>
          </ul>

          <div className="mt-10 flex gap-4 rounded-lg bg-navy-500 p-6 text-white">
            <Truck className="mt-1 size-6 shrink-0 text-orange-300 rtl:-scale-x-100" aria-hidden="true" />
            <div>
              <h2 className="font-display text-lg font-semibold">{t("visitHeading")}</h2>
              <p className="mt-2 text-navy-100">{t("visitText")}</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-lg border border-border bg-white p-6 shadow-[0_24px_60px_-40px_rgb(26_22_19/0.5)] sm:p-8 lg:sticky lg:top-[calc(var(--header-h)+1.5rem)]">
            <QuoteForm labels={labels} />
          </div>
        </div>
      </div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: nav("home"), item: `${site.url}/${locale}` },
            { "@type": "ListItem", position: 2, name: nav("contact"), item: `${site.url}/${locale}/contact` },
          ],
        }}
      />
    </section>
  );
}
