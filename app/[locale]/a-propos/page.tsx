import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { MapPin } from "lucide-react";
import type { Locale } from "@/i18n/routing";
import { getProject } from "@/content/projects";
import { serviceArea, site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import { CtaSection } from "@/components/CtaSection";
import { JsonLd } from "@/components/JsonLd";
import { InView } from "@/components/InView";

const H2 = "font-display text-[clamp(1.875rem,1.4rem+2vw,2.75rem)] font-semibold leading-[1.15] tracking-heading";

export async function generateMetadata({ params }: PageProps<"/[locale]/a-propos">): Promise<Metadata> {
  const locale = (await params).locale as Locale;
  const t = await getTranslations({ locale, namespace: "meta.about" });
  return pageMetadata(locale, "/a-propos", t("title"), t("description"));
}

export default async function AboutPage({ params }: PageProps<"/[locale]/a-propos">) {
  const locale = (await params).locale as Locale;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "about" });
  const nav = await getTranslations({ locale, namespace: "nav" });
  const story = t.raw("story") as string[];
  const values = t.raw("values") as { title: string; text: string }[];

  const lead = getProject("pompage-5-5-kwc-2025").images[2];
  const craft = [
    { img: getProject("residentiel-3-1-kwc-2025").images[2], alt: t("craftAlt1") },
    { img: getProject("pompage-5-5-kwc-2025").images[3], alt: t("craftAlt2") },
    { img: getProject("residentiel-4-kwc-2022-12").images[3], alt: t("craftAlt3") },
  ];

  return (
    <>
      <section aria-labelledby="about-title" className="pb-20 pt-12 lg:pb-28 lg:pt-16">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-6">
            <h1 id="about-title" className="font-display text-[clamp(2.5rem,1.8rem+3vw,4rem)] font-bold leading-[1.05] tracking-display">
              {t("heading")}
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-graphite">{t("lead")}</p>
          </div>
          <InView className="space-y-5 text-lg text-graphite lg:col-span-5 lg:col-start-8">
            {story.map((p, i) => (
              <p key={p} className="st" style={{ "--i": i + 1 } as CSSProperties}>
                {p}
              </p>
            ))}
          </InView>
        </div>
        <div className="container-page mt-14">
          <InView className="relative aspect-[16/9] overflow-hidden rounded-lg bg-sand sm:aspect-[21/9]" threshold={0.15}>
            <Image
              src={lead.src}
              alt=""
              fill
              sizes="(min-width: 1180px) 1180px, 100vw"
              placeholder="blur"
              blurDataURL={lead.blurDataURL}
              className="st-zoom object-cover object-[50%_60%]"
            />
          </InView>
        </div>
      </section>

      <section aria-labelledby="values-title" className="on-dark bg-navy-500 py-20 text-white lg:py-24">
        <div className="container-page">
          <h2 id="values-title" className={`reveal ${H2}`}>
            {t("valuesHeading")}
          </h2>
          <InView as="ul" className="mt-12 grid gap-5 md:grid-cols-3">
            {values.map((v, i) => (
              <li key={v.title} className="st" style={{ "--i": i } as CSSProperties}>
                <div
                  className={`value-card group relative h-full border-t-2 px-5 pb-6 pt-5 transition-[background-color,translate] duration-300 ease-(--ease-out-quart) hover:-translate-y-1 hover:bg-navy-600/70 ${
                    ["border-white", "border-orange-500", "border-navy-ink"][i]
                  }`}
                >
                  {/* Top highlight: an orange bar that draws across the border on hover. */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 -top-0.5 h-0.5 origin-left scale-x-0 bg-orange-300 transition-transform duration-500 ease-(--ease-out-expo) group-hover:scale-x-100 rtl:origin-right"
                  />
                  <h3 className="font-display text-2xl font-semibold">{v.title}</h3>
                  <p className="mt-3 text-navy-100">{v.text}</p>
                </div>
              </li>
            ))}
          </InView>
        </div>
      </section>

      <section aria-labelledby="craft-title" className="py-20 lg:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="reveal lg:col-span-5">
            <h2 id="craft-title" className={H2}>
              {t("craftHeading")}
            </h2>
            <p className="mt-5 text-lg text-graphite">{t("craftText")}</p>
          </div>
          <InView className="grid grid-cols-3 gap-3 lg:col-span-7">
            {craft.map((c, i) => (
              <div key={c.img.src} className={`st ${i === 1 ? "translate-y-6" : ""}`} style={{ "--i": i } as CSSProperties}>
              <div className="group/craft relative aspect-[3/4] overflow-hidden rounded-lg bg-sand transition-shadow duration-500 ease-(--ease-out-quart) hover:shadow-[0_22px_40px_-22px_rgb(26_22_19/0.55)]">
                <Image
                  src={c.img.src}
                  alt={c.alt}
                  fill
                  sizes="(min-width: 1024px) 240px, 33vw"
                  placeholder="blur"
                  blurDataURL={c.img.blurDataURL}
                  className="object-cover transition-transform duration-700 ease-(--ease-out-expo) motion-safe:group-hover/craft:scale-[1.035]"
                />
              </div>
              </div>
            ))}
          </InView>
        </div>
      </section>

      <section aria-labelledby="area-title" className="pb-20 lg:pb-28">
        <div className="container-page">
          <div className="reveal grid gap-8 rounded-lg border border-border bg-white p-6 sm:p-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h2 id="area-title" className="font-display text-2xl font-semibold tracking-heading sm:text-3xl">
                {t("areaHeading")}
              </h2>
              <p className="mt-3 max-w-[55ch] text-lg text-graphite">{t("areaText")}</p>
            </div>
            <div className="lg:col-span-5" data-demo="service-area">
              <p className="label text-stone">{t("areaLabel")}</p>
              <InView as="ul" className="mt-3 flex flex-wrap gap-2" threshold={0.5}>
                {serviceArea.places.map((p, i) => (
                  <li key={p} dir="ltr" style={{ "--i": i } as CSSProperties} className="st-pop inline-flex items-center gap-1.5 rounded-full bg-linen px-3 py-1.5 font-semibold">
                    <MapPin className="size-4 text-orange-700" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </InView>
            </div>
          </div>
        </div>
      </section>

      <CtaSection locale={locale} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: nav("home"), item: `${site.url}/${locale}` },
            { "@type": "ListItem", position: 2, name: nav("about"), item: `${site.url}/${locale}/a-propos` },
          ],
        }}
      />
    </>
  );
}
