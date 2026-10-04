import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/routing";

export default async function NotFound() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations({ locale, namespace: "notFound" });

  return (
    <section className="container-page py-24 lg:py-32">
      <p className="num text-7xl font-medium text-orange-700">404</p>
      <h1 className="mt-6 font-display text-[clamp(2.25rem,1.6rem+2.6vw,3.5rem)] font-bold leading-[1.08] tracking-display">
        {t("heading")}
      </h1>
      <p className="mt-4 max-w-[52ch] text-lg text-graphite">{t("text")}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href={`/${locale}`} className="btn btn-primary">
          {t("home")}
        </Link>
        <Link href={`/${locale}/projets`} className="btn btn-outline">
          {t("projects")}
        </Link>
      </div>
    </section>
  );
}
