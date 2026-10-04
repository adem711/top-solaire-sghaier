import type { CSSProperties } from "react";
import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { AnimatedCounter } from "./AnimatedCounter";
import { InView } from "./InView";

// Quantities count up; the founding year and the ANME credential are not quantities, so they stay still.
const KEYS = [
  { key: "installs", count: true },
  { key: "years", count: false },
  { key: "warranty", count: true },
  { key: "anme", count: false },
] as const;

export async function TrustBand({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "trust" });

  return (
    <section aria-labelledby="trust-title" className="on-dark bg-navy-500 text-white">
      <h2 id="trust-title" className="sr-only">
        {t("heading")}
      </h2>
      <InView as="dl" className="container-page grid grid-cols-2 lg:grid-cols-4">
        {KEYS.map(({ key, count }, i) => {
          const value = t(`items.${key}.value`);
          return (
            <div
              key={key}
              style={{ "--i": i } as CSSProperties}
              className={`st flex flex-col gap-2 py-9 ps-5 lg:py-12 lg:ps-8 ${i % 2 === 1 ? "border-s border-navy-300/60" : ""} ${
                i >= 2 ? "border-t border-navy-300/60 lg:border-t-0" : ""
              } ${i === 2 ? "lg:border-s lg:border-navy-300/60" : ""}`}
            >
              <dt className="max-w-[18ch] text-sm leading-snug text-navy-ink">{t(`items.${key}.label`)}</dt>
              <dd className="relative order-first pt-5 font-mono text-[clamp(1.875rem,1.3rem+2.4vw,3rem)] font-medium leading-none tracking-heading text-white">
                <span aria-hidden="true" className="stat-bar absolute start-0 top-0 h-[3px] w-6 rounded-full bg-orange-500" />
                <bdi dir="ltr" translate="no">
                  {count ? <AnimatedCounter value={value} /> : value}
                </bdi>
              </dd>
            </div>
          );
        })}
      </InView>
    </section>
  );
}
