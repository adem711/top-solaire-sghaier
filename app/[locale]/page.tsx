import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { pageMetadata } from "@/lib/seo";
import { simulatorLabels } from "@/lib/labels";
import { Hero } from "@/components/Hero";
import { TrustBand } from "@/components/TrustBand";
import { Services } from "@/components/Services";
import { SavingsSimulator } from "@/components/SavingsSimulator";
import { Brands, Faq, ProcessSteps, RecentProjects } from "@/components/HomeSections";
import { CtaSection } from "@/components/CtaSection";

export async function generateMetadata({ params }: PageProps<"/[locale]">): Promise<Metadata> {
  const locale = (await params).locale as Locale;
  const t = await getTranslations({ locale, namespace: "meta.home" });
  return pageMetadata(locale, "", t("title"), t("description"));
}

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const locale = (await params).locale as Locale;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "simulator" });

  return (
    <>
      <Hero locale={locale} />
      <TrustBand locale={locale} />
      <Services locale={locale} />

      <section id="simulateur" aria-labelledby="sim-title" className="pb-20 lg:pb-28">
        <div className="container-page">
          <div className="reveal max-w-2xl">
            <h2
              id="sim-title"
              className="font-display text-[clamp(1.875rem,1.4rem+2vw,2.75rem)] font-semibold leading-[1.15] tracking-heading"
            >
              {t("heading")}
            </h2>
            <p className="mt-4 text-lg text-graphite">{t("lead")}</p>
          </div>
          <div className="mt-10">
            <SavingsSimulator labels={await simulatorLabels(locale)} />
          </div>
        </div>
      </section>

      <RecentProjects locale={locale} />
      <ProcessSteps locale={locale} />
      <Brands locale={locale} />
      <Faq locale={locale} />
      <CtaSection locale={locale} />
    </>
  );
}
