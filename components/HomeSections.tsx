import type { CSSProperties } from "react";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { ArrowRight, Plus } from "lucide-react";
import type { Locale } from "@/i18n/routing";
import { projects } from "@/content/projects";
import { ProjectCard } from "./ProjectCard";
import { JsonLd } from "./JsonLd";
import { InView } from "./InView";

const H2 = "font-display text-[clamp(1.875rem,1.4rem+2vw,2.75rem)] font-semibold leading-[1.15] tracking-heading";

export async function RecentProjects({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "projectsSection" });
  const recent = projects.slice(0, 6);

  return (
    <section aria-labelledby="recent-title" className="border-y border-border bg-white py-20 lg:py-28">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="reveal max-w-2xl">
            <h2 id="recent-title" className={H2}>
              {t("heading")}
            </h2>
            <p className="mt-4 text-lg text-graphite">{t("lead")}</p>
          </div>
          <Link href={`/${locale}/projets`} className="btn btn-outline">
            {t("seeAll")}
            <ArrowRight className="size-4 rtl:-scale-x-100" aria-hidden="true" />
          </Link>
        </div>
        <InView className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" threshold={0.1}>
          {recent.map((p, i) => (
            <div key={p.slug} className="st flex" style={{ "--i": i % 3 } as CSSProperties}>
              <ProjectCard locale={locale} project={p} />
            </div>
          ))}
        </InView>
      </div>
    </section>
  );
}

export async function ProcessSteps({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "process" });
  const steps = t.raw("steps") as { title: string; text: string }[];

  return (
    <section aria-labelledby="process-title" className="py-20 lg:py-28">
      <div className="container-page">
        <h2 id="process-title" className={`reveal ${H2}`}>
          {t("heading")}
        </h2>
        <p className="reveal mt-4 text-lg text-graphite">{t("lead")}</p>
        <InView as="ol" className="relative mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {/* The track the four steps sit on; its orange fill draws in reading direction (RTL-aware in CSS). */}
          {/* Runs from badge 1 centre to badge 4 centre: 44px into the first column, ending 44px into the last. */}
          <span
            aria-hidden="true"
            className="absolute start-11 end-[calc((100%-3.75rem)/4-2.75rem)] top-11 hidden h-0.5 overflow-hidden rounded-full bg-sand lg:block"
          >
            <span className="process-fill block h-full w-full bg-orange-500" />
          </span>
          {steps.map((s, i) => (
            <li key={s.title} style={{ "--i": i } as CSSProperties} className="st relative">
              <div className="h-full rounded-lg border border-transparent p-5 transition-[translate,background-color,border-color,box-shadow] duration-300 ease-(--ease-out-quart) hover:-translate-y-1 hover:border-orange-500/30 hover:bg-white hover:shadow-[0_16px_36px_-24px_rgb(26_22_19/0.45)]">
                <span className="step-badge num relative z-10 flex size-12 items-center justify-center rounded-full border-2 border-ink bg-linen text-lg font-medium">
                  {i + 1}
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-graphite">{s.text}</p>
              </div>
            </li>
          ))}
        </InView>
      </div>
    </section>
  );
}

const BRANDS: Record<"panels" | "inverters" | "pumping" | "water", string[]> = {
  panels: ["Jinko Solar", "Trina Solar", "AE Solar", "Alphanis", "Soluxtec"],
  inverters: ["SolaX Power", "S-Energy"],
  pumping: ["INVT", "USFULL", "Caprari"],
  water: ["Soften"],
};

export async function Brands({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "brands" });

  return (
    <section aria-labelledby="brands-title" className="pb-20 lg:pb-28">
      <div className="container-page">
        <div className="reveal rounded-lg border border-border bg-white p-6 sm:p-10">
          <h2 id="brands-title" className="font-display text-2xl font-semibold tracking-heading">
            {t("heading")}
          </h2>
          <p className="mt-2 text-graphite">{t("lead")}</p>
          <dl className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
            {(Object.keys(BRANDS) as (keyof typeof BRANDS)[]).map((g) => (
              <div key={g} className="border-t border-border pt-4">
                <dt className="label text-stone">{t(`groups.${g}`)}</dt>
                <dd className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 font-display text-lg font-semibold text-ink" dir="ltr" translate="no">
                  {BRANDS[g].map((b) => (
                    <span key={b}>{b}</span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

export async function Faq({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "faq" });
  const items = t.raw("items") as { q: string; a: string }[];

  return (
    <section aria-labelledby="faq-title" className="pb-20 lg:pb-28">
      <div className="container-page grid gap-10 lg:grid-cols-12">
        <h2 id="faq-title" className={`reveal ${H2} lg:col-span-4`}>
          {t("heading")}
        </h2>
        <div className="divide-y divide-border border-y border-border lg:col-span-8">
          {items.map((item) => (
            <details key={item.q} className="faq group">
              <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-4 font-display text-lg font-semibold [&::-webkit-details-marker]:hidden">
                {item.q}
                <Plus
                  className="size-5 shrink-0 text-orange-700 transition-transform duration-300 ease-(--ease-out-expo) group-open:rotate-45"
                  aria-hidden="true"
                />
              </summary>
              <p className="max-w-[65ch] pb-6 text-graphite">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: items.map((i) => ({
            "@type": "Question",
            name: i.q,
            acceptedAnswer: { "@type": "Answer", text: i.a },
          })),
        }}
      />
    </section>
  );
}
