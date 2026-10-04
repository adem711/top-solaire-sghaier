import type { CSSProperties } from "react";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { ArrowRight, Check } from "lucide-react";
import type { Locale } from "@/i18n/routing";
import { getProject } from "@/content/projects";
import type { ProjectImage } from "@/content/project-images";
import { waLink } from "@/lib/wa";
import { WhatsAppIcon } from "./icons";
import { InView } from "./InView";

type ServiceKey = "residentiel" | "pompage" | "chauffeEau";

// Photos are always shown in landscape slots close to their own 4:3 ratio, so no slot crops or upscales them.
const FEATURE: { key: ServiceKey; image: ProjectImage; position: string } = {
  key: "residentiel",
  image: getProject("residentiel-2-5-kwc-2021").images[0], // 2048 px source
  position: "object-[50%_55%]",
};
const PAIR: { key: ServiceKey; image: ProjectImage; position: string }[] = [
  { key: "pompage", image: getProject("pompage-3-kwc-2026").images[0], position: "object-[50%_60%]" },
  { key: "chauffeEau", image: getProject("residentiel-2-2-kwc-2020").images[1], position: "object-[20%_35%]" }, // Soften tank at the start edge
];

type BodyProps = { k: ServiceKey; title: string; text: string; points: string[]; cta: string; href: string; large?: boolean };

function ServiceBody({ k, title, text, points, cta, href, large = false }: BodyProps) {
  return (
    <div className={`flex flex-1 flex-col ${large ? "p-6 sm:p-10" : "p-6 sm:p-8"}`}>
      <h3 className={`font-display font-semibold leading-tight tracking-heading ${large ? "text-[1.75rem]" : "text-[1.25rem]"}`}>{title}</h3>
      <p className={`mt-3 text-graphite ${large ? "text-lg leading-relaxed" : ""}`}>{text}</p>
      <ul className="mt-6 space-y-2.5 border-t border-divider pt-5">
        {points.map((p) => (
          <li key={p} className="flex gap-3">
            <span className="mt-[0.3rem] flex size-5 shrink-0 items-center justify-center rounded-full bg-success-bg">
              <Check className="size-3 text-success-ink" aria-hidden="true" strokeWidth={3} />
            </span>
            <span>{p}</span>
          </li>
        ))}
      </ul>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        data-track="whatsapp_click"
        data-context={`service-${k}`}
        className={
          large
            ? "btn btn-primary mt-8 self-start"
            : "group/link mt-auto inline-flex min-h-12 items-center gap-2 self-start pt-6 font-display font-semibold text-orange-700"
        }
      >
        <WhatsAppIcon className="size-5" />
        {large ? (
          cta
        ) : (
          <>
            <span className="underline decoration-orange-700/30 underline-offset-4 transition-colors group-hover/link:decoration-orange-700">
              {cta}
            </span>
            <ArrowRight
              className="size-4 transition-transform duration-300 ease-(--ease-out-expo) group-hover/link:translate-x-1 rtl:-scale-x-100 rtl:group-hover/link:-translate-x-1"
              aria-hidden="true"
            />
          </>
        )}
      </a>
    </div>
  );
}

export async function Services({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "services" });
  const linkFor = (key: ServiceKey) => waLink(locale, "service", { service: t(`${key}.title`) });
  const [featureLink, ...pairLinks] = await Promise.all([FEATURE, ...PAIR].map((s) => linkFor(s.key)));
  const copy = (k: ServiceKey) => ({ k, title: t(`${k}.title`), text: t(`${k}.text`), points: t.raw(`${k}.points`) as string[], cta: t(`${k}.cta`) });


  return (
    <section aria-labelledby="services-title" className="py-20 lg:py-28">
      <div className="container-page">
        <div className="reveal max-w-2xl">
          <h2 id="services-title" className="font-display text-[clamp(1.875rem,1.4rem+2vw,2.75rem)] font-semibold leading-[1.15] tracking-heading">
            {t("heading")}
          </h2>
          <p className="mt-4 text-lg text-graphite">{t("lead")}</p>
        </div>

        {/* Feature: residential, photo beside text on desktop. */}
        {/* reveal on a wrapper: its animation holds `transform`, which would cancel the card's hover lift. */}
        <div className="reveal mt-12">
        <article className="card-lift group overflow-hidden rounded-lg border border-border bg-white lg:grid lg:grid-cols-12">
          <div className="relative aspect-[4/3] overflow-hidden bg-sand sm:aspect-[16/10] lg:col-span-7 lg:aspect-auto lg:min-h-[26rem]">
            <Image
              src={FEATURE.image.src}
              alt={t(`${FEATURE.key}.alt`)}
              fill
              sizes="(min-width: 1180px) 688px, (min-width: 1024px) 58vw, 100vw"
              placeholder="blur"
              blurDataURL={FEATURE.image.blurDataURL}
              className={`card-img object-cover ${FEATURE.position}`}
            />
          </div>
          <div className="flex lg:col-span-5">
            <ServiceBody {...copy(FEATURE.key)} href={featureLink} large />
          </div>
        </article>
        </div>

        {/* Pumping + water heater: equal pair, landscape photo on top. */}
        <InView className="mt-5 grid gap-5 md:grid-cols-2" threshold={0.15}>
          {PAIR.map((s, i) => (
            <div key={s.key} className="st flex" style={{ "--i": i } as CSSProperties}>
            <article className="card-lift group flex w-full flex-col overflow-hidden rounded-lg border border-border bg-white">
              <div className="relative aspect-[16/10] overflow-hidden bg-sand">
                <Image
                  src={s.image.src}
                  alt={t(`${s.key}.alt`)}
                  fill
                  sizes="(min-width: 1180px) 580px, (min-width: 768px) 50vw, 100vw"
                  placeholder="blur"
                  blurDataURL={s.image.blurDataURL}
                  className={`card-img object-cover ${s.position}`}
                />
              </div>
              <ServiceBody {...copy(s.key)} href={pairLinks[i]} />
            </article>
            </div>
          ))}
        </InView>
      </div>
    </section>
  );
}
