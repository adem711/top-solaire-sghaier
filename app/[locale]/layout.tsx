import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { preload } from "react-dom";
import { JetBrains_Mono, Nunito_Sans, Sora } from "next/font/google";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { isLocale, localeMeta } from "@/i18n/locales";
import { site } from "@/content/site";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { BusinessJsonLd } from "@/components/JsonLd";
import { Analytics } from "@/components/Analytics";
import { RevealFallback } from "@/components/RevealFallback";
import "../globals.css";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora", display: "swap" });
// Body font is not preloaded: it paints first in a metric-matched fallback, leaving bandwidth to the LCP.
const nunito = Nunito_Sans({ subsets: ["latin"], variable: "--font-nunito", display: "swap", preload: false });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], weight: "500", variable: "--font-jetbrains", display: "swap", preload: false });

const isProd = process.env.VERCEL_ENV ? process.env.VERCEL_ENV === "production" : true;

export const dynamicParams = false;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    metadataBase: new URL(site.url),
    applicationName: t("siteName"),
    title: { default: t("home.title"), template: "%s" },
    description: t("home.description"),
    formatDetection: { telephone: false, email: false, address: false },
    robots: isProd ? { index: true, follow: true } : { index: false, follow: false },
    openGraph: { siteName: t("siteName"), locale: localeMeta[locale].ogLocale, type: "website" },
    twitter: { card: "summary_large_image" },
  };
}

export const viewport: Viewport = {
  themeColor: "#F4F2EE",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

const CONTRACT = `<!--
THESIS: Proof before promise. The first viewport pairs a real rooftop with its own spec plate (kWc, panels, inverter, STEG), refusing the category's stock-sky hero with vague savings claims.
OWN-WORLD: Linen ground, deep panel-navy bands, solar orange only on actions and focus. Sora display, Nunito Sans body, JetBrains Mono for every measured value. Equipment-nameplate details, 8/12 px radii, soft offset shadows.
STORY: Visitor sees real installations with real specs, learns what a system for their bill looks like, then sends a prefilled WhatsApp message.
FIRST VIEWPORT: Headline + lead + WhatsApp CTA and call CTA at start (5/12); real Project 6 rooftop photo (7/12) with a nameplate overlapping its bottom-start edge; trust line under the CTAs.
FORM: Brief-pinned world (Brand Info design system, CLAUDE.md); no concept roll. Signature moment: the simulator roof filling panel by panel.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
-->`;

export default async function LocaleLayout({ children, params }: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "nav" });
  const meta = localeMeta[locale];
  // Arabic pages only: the self-hosted Readex Pro subset (see globals.css) must be there before first paint.
  if (locale === "ar") preload("/fonts/readex-pro-arabic.woff2", { as: "font", type: "font/woff2", crossOrigin: "anonymous" });

  return (
    <html
      lang={meta.htmlLang}
      dir={meta.dir}
      className={`${sora.variable} ${nunito.variable} ${jetbrains.variable}`}
    >
      {/* Browser extensions (e.g. Grammarly) add attributes to <body>; ignore those mismatches only. */}
      <body className="min-h-dvh" suppressHydrationWarning>
        <div hidden dangerouslySetInnerHTML={{ __html: CONTRACT }} />
        <a
          href="#main"
          className="fixed start-4 top-3 z-50 -translate-y-20 rounded-md bg-ink px-4 py-3 font-semibold text-white transition-transform focus:translate-y-0"
        >
          {t("skip")}
        </a>
        <SiteHeader locale={locale} />
        <main id="main" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <SiteFooter locale={locale} />
        <WhatsAppFab locale={locale} />
        <BusinessJsonLd locale={locale} />
        <RevealFallback />
        {process.env.VERCEL ? <Analytics /> : null}
      </body>
    </html>
  );
}
