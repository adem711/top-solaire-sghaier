import type { ReactNode } from "react";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Check, Images } from "lucide-react";
import type { Locale } from "@/i18n/routing";
import type { Project } from "@/content/projects";
import { formatKwc } from "@/lib/format";
import { waLink } from "@/lib/wa";
import { WhatsAppIcon } from "./icons";

/** Plain-text title for alt text, screen-reader suffixes and WhatsApp messages. */
export async function projectTitle(locale: Locale, p: Project) {
  const t = await getTranslations({ locale, namespace: "projects" });
  return `${t(`title.${p.types[0]}`)} · ${formatKwc(p.kwc)} kWc`;
}

type Equipment = { key: string; label?: string; value?: string };

/** Latin values (kWc, models, volts) keep their order inside Arabic text. */
function Ltr({ children }: { children: ReactNode }) {
  return (
    <bdi dir="ltr" translate="no">
      {children}
    </bdi>
  );
}

/** Real installation card. `gallery` adds the button the lightbox listens for (Projets page). */
export async function ProjectCard({
  locale,
  project: p,
  eager = false,
  lcp = false,
  gallery = false,
}: {
  locale: Locale;
  project: Project;
  eager?: boolean;
  /** The page's LCP image (first card on /projets): preloaded at high priority. */
  lcp?: boolean;
  gallery?: boolean;
}) {
  const t = await getTranslations({ locale, namespace: "projects" });
  const title = await projectTitle(locale, p);
  const year = p.date.slice(0, 4);
  const cover = p.images[0];
  const Heading = gallery ? "h2" : "h3";
  const wa = await waLink(locale, "project", { title: `${title} (${year})` });

  const specs: ReactNode[] = [
    p.panels?.count ? t("panels", { count: p.panels.count }) : null,
    <Ltr key="kwc">{formatKwc(p.kwc)}&nbsp;kWc</Ltr>,
    <Ltr key="year">{year}</Ltr>,
  ].filter(Boolean);

  const equipment = ([
    p.panels ? { key: "panels", value: p.panels.model } : null,
    p.drive ? { key: "drive", label: p.drive.kind === "inverter" ? t("inverter") : t("vfd"), value: p.drive.model } : null,
    p.pump
      ? {
          key: "pump",
          label: t("pump", { cv: formatKwc(p.pump.cv) }),
          value: [p.pump.volts ? `${p.pump.volts} V` : null, p.pump.brand].filter(Boolean).join(" · ") || undefined,
        }
      : null,
    p.grid ? { key: "grid", label: t("grid") } : null,
    p.waterHeater ? { key: "water", label: t("waterHeater") } : null,
  ] as (Equipment | null)[]).filter((e): e is Equipment => e !== null);

  return (
    <article
      id={p.slug}
      data-types={p.types.join(" ")}
      className="project-card card-lift group flex w-full flex-col overflow-hidden rounded-lg border border-border bg-white"
    >
      <div
        data-gallery={gallery && p.images.length > 1 ? p.slug : undefined}
        className={`relative aspect-[16/10] overflow-hidden bg-sand ${gallery && p.images.length > 1 ? "cursor-zoom-in" : ""}`}
      >
        <Image
          src={cover.src}
          alt={t("alt", { title: t(`title.${p.types[0]}`), kwc: formatKwc(p.kwc), n: 1 })}
          fill
          sizes="(min-width: 1180px) 380px, (min-width: 640px) 50vw, 100vw"
          loading={eager || lcp ? "eager" : "lazy"}
          fetchPriority={lcp ? "high" : undefined}
          placeholder="blur"
          blurDataURL={cover.blurDataURL}
          quality={60}
          className="card-img object-cover"
        />
        <span className="pill pill-installed absolute start-3 top-3 shadow-sm">
          <Check className="size-3.5" strokeWidth={3} aria-hidden="true" />
          {t("status")}
        </span>
        {gallery && p.images.length > 1 ? (
          <button
            type="button"
            data-gallery={p.slug}
            className="absolute bottom-3 end-3 inline-flex min-h-12 items-center gap-2 rounded-md bg-ink/85 px-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-ink"
          >
            <Images className="size-4" aria-hidden="true" />
            {t("photos", { count: p.images.length })}
            <span className="sr-only">: {title}</span>
          </button>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-5">
        {/* On /projets the cards sit directly under the h1; on the home page under a section h2. */}
        <Heading className="font-display text-[1.0625rem] font-semibold leading-snug">
          {t(`title.${p.types[0]}`)} · <Ltr>{formatKwc(p.kwc)}&nbsp;kWc</Ltr>
        </Heading>
        <p className="mt-1.5 font-label text-sm tabular-nums text-stone">
          {specs.map((node, i) => (
            <span key={i}>
              {i > 0 ? " · " : null}
              {node}
            </span>
          ))}
        </p>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {equipment.map((e) => (
            <li key={e.key} className="rounded-sm bg-linen px-2 py-1 text-sm font-semibold text-graphite">
              {e.label}
              {e.label && e.value ? (e.key === "pump" ? " · " : " ") : null}
              {e.value ? <Ltr>{e.value}</Ltr> : null}
            </li>
          ))}
        </ul>
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          data-track="whatsapp_click"
          data-context="project"
          className="mt-auto inline-flex min-h-12 items-center gap-2 self-start pt-4 text-sm font-bold text-orange-700 underline decoration-orange-700/30 underline-offset-4 hover:decoration-orange-700"
        >
          <WhatsAppIcon className="size-[1.125rem]" />
          {t("sameCta")}
          <span className="sr-only">: {title}</span>
        </a>
      </div>
    </article>
  );
}
