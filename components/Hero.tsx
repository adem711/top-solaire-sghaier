import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { BadgeCheck, CalendarCheck, Phone, ShieldCheck } from "lucide-react";
import type { Locale } from "@/i18n/routing";
import { getProject, HERO_PROJECT } from "@/content/projects";
import { formatKwc } from "@/lib/format";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/whatsapp";
import { waLink } from "@/lib/wa";
import { SunMark, WhatsAppIcon } from "./icons";

export async function Hero({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "hero" });
  const project = getProject(HERO_PROJECT);
  const cover = project.images[0];
  const wa = await waLink(locale);

  const trust = [
    { icon: ShieldCheck, text: t("trust.anme") },
    { icon: CalendarCheck, text: t("trust.since") },
    { icon: BadgeCheck, text: t("trust.installs") },
  ];

  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      {/* Mobile order: promise → proof (photo + nameplate) → trust line. Desktop: text 5/12 beside photo 7/12. */}
      <div className="container-page grid gap-x-12 pb-20 pt-6 sm:pt-10 lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:pb-24 lg:pt-16">
        <div className="lg:col-span-5 lg:self-end">
          <h1
            id="hero-title"
            className="font-display text-[clamp(2.25rem,1.5rem+3.6vw,4.25rem)] font-bold leading-[1.04] tracking-display text-ink"
          >
            {t("title")}
          </h1>
          <p className="mt-4 max-w-[44ch] text-base leading-[1.62] text-graphite sm:mt-6 sm:text-lg sm:leading-[1.66]">{t("lead")}</p>

          <div className="mt-6 flex gap-3 sm:mt-8 sm:flex-wrap">
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              data-track="whatsapp_click"
              data-context="hero"
              className="btn btn-primary btn-lg flex-1 px-4 sm:flex-none sm:px-6"
            >
              <WhatsAppIcon />
              {/* Shorter label on small phones so the button stays on one line beside the call button. */}
              <span className="sm:hidden">{t("ctaPrimaryShort")}</span>
              <span className="hidden sm:inline">{t("ctaPrimary")}</span>
            </a>
            <a
              href={PHONE_TEL}
              data-track="call_click"
              data-context="hero"
              className="btn btn-outline btn-lg w-14 shrink-0 px-0 sm:w-auto sm:px-6"
            >
              <Phone className="size-5" aria-hidden="true" />
              {/* Icon-only on small phones; the full label stays the accessible name. */}
              <span className="sr-only sm:not-sr-only">{t.rich("ctaCall", { phone: PHONE_DISPLAY, ltr: (c) => <bdi dir="ltr">{c}</bdi> })}</span>
            </a>
          </div>
        </div>

        <figure className="relative mt-8 lg:col-span-7 lg:row-span-2 lg:mt-0 lg:self-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-sand">
            <Image
              src={cover.src}
              alt={t("photoAlt")}
              fill
              preload
              fetchPriority="high"
              quality={75}
              sizes="(min-width: 1280px) 690px, (min-width: 1024px) 56vw, calc(100vw - 2rem)"
              className="object-cover"
            />
          </div>

          {/* Equipment nameplate: the real specs of the installation in the photo. */}
          <figcaption className="absolute -bottom-10 start-4 w-[min(19rem,calc(100%-2rem))] overflow-hidden rounded-md border border-border bg-white shadow-[0_18px_40px_-20px_rgb(26_22_19/0.5)] sm:start-6">
            <div className="flex items-center gap-2.5 bg-navy-500 px-4 py-2.5 text-white">
              <SunMark className="size-5 shrink-0" />
              <span className="label text-orange-200">{t("plate.title")}</span>
            </div>
            <dl className="grid grid-cols-[auto_1fr] gap-x-5 gap-y-1.5 px-4 pb-2 pt-3 text-sm">
              <dt className="text-stone">{t("plate.power")}</dt>
              <dd className="num text-end font-medium text-ink">
                <bdi dir="ltr">{formatKwc(project.kwc)}&nbsp;kWc</bdi>
              </dd>
              <dt className="text-stone">{t("plate.panels")}</dt>
              <dd className="num text-end font-medium text-ink">
                <bdi dir="ltr" translate="no">
                  {project.panels?.count}&nbsp;×&nbsp;{project.panels?.model}
                </bdi>
              </dd>
              <dt className="text-stone">{t("plate.inverter")}</dt>
              <dd className="num text-end font-medium text-ink">
                <bdi dir="ltr" translate="no">
                  {project.drive?.model}
                </bdi>
              </dd>
              <dt className="text-stone">{t("plate.grid")}</dt>
              <dd className="text-end font-semibold text-success-ink">{t("plate.gridValue")}</dd>
            </dl>
            <p className="border-t border-divider px-4 py-2 text-xs text-stone">{t("plate.place")}</p>
          </figcaption>
        </figure>

        <ul
          aria-label={t("trustLabel")}
          className="mt-16 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-graphite lg:col-span-5 lg:mt-9 lg:self-start"
        >
          {trust.map(({ icon: Icon, text }) => (
            <li key={text} className="inline-flex items-center gap-2">
              <Icon className="size-[1.125rem] text-orange-700" aria-hidden="true" />
              {text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
