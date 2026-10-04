import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Menu, X } from "lucide-react";
import type { Locale } from "@/i18n/routing";
import { localeMeta } from "@/i18n/locales";
import { waLink } from "@/lib/wa";
import { WhatsAppIcon } from "./icons";
import { LanguageSwitch, NavLinks } from "./NavLinks";

export async function SiteHeader({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "nav" });
  const target = locale === "fr" ? "ar" : "fr";
  const items = [
    { href: `/${locale}`, label: t("home") },
    { href: `/${locale}/projets`, label: t("projects") },
    { href: `/${locale}/a-propos`, label: t("about") },
    { href: `/${locale}/contact`, label: t("contact") },
  ];
  const wa = await waLink(locale);

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-linen/90 backdrop-blur-md supports-[backdrop-filter]:bg-linen/80">
      <div className="container-page flex h-(--header-h) items-center gap-4">
        <Link href={`/${locale}`} className="-ms-1 flex shrink-0 items-center rounded-sm p-1" aria-label={t("homeLink")}>
          <Image
            src="/brand/logo-horizontal.svg"
            alt=""
            width={880}
            height={168}
            unoptimized
            className="h-8 w-auto min-[360px]:h-9 sm:h-10"
          />
        </Link>

        <nav aria-label={t("primary")} className="ms-auto hidden lg:block">
          <NavLinks items={items} variant="bar" />
        </nav>

        <div className="ms-auto flex items-center gap-1 lg:ms-2">
          <LanguageSwitch
            locale={locale}
            label={t("switchLabel")}
            text={t("switchTo")}
            targetLang={localeMeta[target].htmlLang}
          />
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            data-track="whatsapp_click"
            data-context="header"
            className="btn btn-primary ms-1 hidden min-h-12 px-4 sm:inline-flex"
          >
            <WhatsAppIcon className="size-[1.125rem]" />
            {t("cta")}
          </a>
          <button
            type="button"
            popoverTarget="nav-sheet"
            className="inline-flex size-12 items-center justify-center rounded-md text-ink hover:bg-white lg:hidden"
            aria-label={t("menu")}
          >
            <Menu className="size-6" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div
        id="nav-sheet"
        popover="auto"
        className="nav-sheet m-0 ms-auto h-dvh max-h-none w-[min(22rem,100vw)] border-s border-border bg-white p-4 text-ink shadow-[0_24px_60px_-20px_rgb(26_22_19/0.45)]"
      >
        <div className="flex items-center justify-between pb-4">
          <Image src="/brand/icon.svg" alt="" width={36} height={36} unoptimized className="size-9" />
          <button
            type="button"
            popoverTarget="nav-sheet"
            popoverTargetAction="hide"
            className="inline-flex size-12 items-center justify-center rounded-md hover:bg-linen"
            aria-label={t("closeMenu")}
          >
            <X className="size-6" aria-hidden="true" />
          </button>
        </div>
        <nav aria-label={t("primary")}>
          <NavLinks items={items} variant="sheet" />
        </nav>
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          data-track="whatsapp_click"
          data-context="menu"
          className="btn btn-primary btn-lg mt-6 w-full"
        >
          <WhatsAppIcon />
          {t("cta")}
        </a>
      </div>
    </header>
  );
}
