import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { projects } from "@/content/projects";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import { formatKwc } from "@/lib/format";
import { ProjectCard, projectTitle } from "@/components/ProjectCard";
import { ProjectGallery, type GalleryData, type GalleryLabels } from "@/components/ProjectGallery";
import { CtaSection } from "@/components/CtaSection";
import { JsonLd } from "@/components/JsonLd";

export async function generateMetadata({ params }: PageProps<"/[locale]/projets">): Promise<Metadata> {
  const locale = (await params).locale as Locale;
  const t = await getTranslations({ locale, namespace: "meta.projects" });
  return pageMetadata(locale, "/projets", t("title"), t("description"));
}

export default async function ProjectsPage({ params }: PageProps<"/[locale]/projets">) {
  const locale = (await params).locale as Locale;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "projects" });
  const nav = await getTranslations({ locale, namespace: "nav" });

  const data: GalleryData = {};
  for (const p of projects) {
    const title = await projectTitle(locale, p);
    data[p.slug] = {
      title,
      images: p.images.map((img, i) => ({
        src: img.src,
        width: img.width,
        height: img.height,
        alt: t("alt", { title: t(`title.${p.types[0]}`), kwc: formatKwc(p.kwc), n: i + 1 }),
      })),
    };
  }

  const count = (f: string) => (f === "all" ? projects.length : projects.filter((p) => p.types.includes(f as never)).length);
  const labels: GalleryLabels = {
    filterLabel: t("filterLabel"),
    filters: t.raw("filters"),
    counts: {
      all: t("count", { count: count("all") }),
      residentiel: t("count", { count: count("residentiel") }),
      pompage: t("count", { count: count("pompage") }),
      "chauffe-eau": t("count", { count: count("chauffe-eau") }),
    },
    close: t("close"),
    prev: t("prev"),
    next: t("next"),
    photoOf: t.raw("photoOf"),
  };

  return (
    <>
      <section aria-labelledby="projects-title" className="pb-20 pt-12 lg:pb-28 lg:pt-16">
        <div className="container-page">
          <h1
            id="projects-title"
            className="font-display text-[clamp(2.5rem,1.8rem+3vw,4rem)] font-bold leading-[1.05] tracking-display"
          >
            {t("heading")}
          </h1>
          <p className="mt-5 max-w-[58ch] text-lg text-graphite">{t("lead")}</p>

          <div className="mt-10">
            <ProjectGallery data={data} labels={labels}>
              <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((p, i) => (
                  <li key={p.slug} data-types={p.types.join(" ")} className="flex">
                    <ProjectCard locale={locale} project={p} lcp={i === 0} gallery />
                  </li>
                ))}
              </ul>
            </ProjectGallery>
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
            { "@type": "ListItem", position: 2, name: nav("projects"), item: `${site.url}/${locale}/projets` },
          ],
        }}
      />
    </>
  );
}
