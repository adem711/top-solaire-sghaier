import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Mail, Phone, ShieldCheck } from "lucide-react";
import type { Locale } from "@/i18n/routing";
import { site } from "@/content/site";
import { PHONE2_DISPLAY, PHONE2_TEL, PHONE_DISPLAY, PHONE_TEL } from "@/lib/whatsapp";
import { waLink } from "@/lib/wa";
import { FacebookIcon, WhatsAppIcon } from "./icons";

export async function SiteFooter({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "footer" });
  const nav = await getTranslations({ locale, namespace: "nav" });
  const common = await getTranslations({ locale, namespace: "common" });
  const wa = await waLink(locale);
  const pages = [
    { href: `/${locale}`, label: nav("home") },
    { href: `/${locale}/projets`, label: nav("projects") },
    { href: `/${locale}/a-propos`, label: nav("about") },
    { href: `/${locale}/contact`, label: nav("contact") },
  ];
  const linkCls = "inline-flex min-h-12 min-w-12 items-center gap-2.5 text-linen/85 transition-colors hover:text-white";

  return (
    <footer className="on-dark bg-ink pb-28 pt-16 text-linen sm:pb-16">
      <div className="container-page grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <Image
            src="/brand/logo-horizontal-on-dark.svg"
            alt="Top Solaire Sghaier"
            translate="no"
            width={880}
            height={168}
            unoptimized
            className="h-10 w-auto"
          />
          <p className="mt-6 max-w-[40ch] text-linen/80">{t("pitch")}</p>
          <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-orange-300">
            <ShieldCheck className="size-4" aria-hidden="true" />
            {t("anme")}
          </p>
        </div>

        <nav aria-labelledby="footer-pages" className="md:col-span-3">
          <h2 id="footer-pages" className="label text-sand">
            {t("pages")}
          </h2>
          <ul className="mt-3">
            {pages.map((p) => (
              <li key={p.href}>
                <Link href={p.href} className={linkCls}>
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <h2 className="label text-sand">{t("contact")}</h2>
          <ul className="mt-3">
            <li>
              <a href={wa} target="_blank" rel="noopener noreferrer" data-track="whatsapp_click" data-context="footer" className={linkCls}>
                <WhatsAppIcon className="size-[1.125rem] text-orange-300" />
                WhatsApp · <bdi dir="ltr" className="num">{PHONE_DISPLAY}</bdi>
              </a>
            </li>
            <li>
              <a href={PHONE_TEL} data-track="call_click" data-context="footer" className={linkCls}>
                <Phone className="size-[1.125rem] text-orange-300" aria-hidden="true" />
                <bdi dir="ltr" className="num">+216 {PHONE_DISPLAY}</bdi>
              </a>
            </li>
            <li>
              <a href={PHONE2_TEL} data-track="call_click" data-context="footer-2" className={linkCls}>
                <Phone className="size-[1.125rem] text-orange-300" aria-hidden="true" />
                <bdi dir="ltr" className="num">+216 {PHONE2_DISPLAY}</bdi>
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className={linkCls}>
                <Mail className="size-[1.125rem] text-orange-300" aria-hidden="true" />
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.facebook} target="_blank" rel="noopener noreferrer" className={linkCls}>
                <FacebookIcon className="size-[1.125rem] text-orange-300" />
                Facebook <span className="sr-only">{common("external")}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container-page mt-14">
        <p className="border-t border-graphite pt-6 text-sm text-sand">{t("rights", { year: new Date().getFullYear() })}</p>
      </div>
    </footer>
  );
}
