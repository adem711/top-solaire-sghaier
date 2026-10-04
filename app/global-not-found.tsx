import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Nunito_Sans, Sora } from "next/font/google";
import "./globals.css";

// URLs outside /fr and /ar land here. Bilingual because we can't know the visitor's language.
const sora = Sora({ subsets: ["latin"], variable: "--font-sora", display: "swap" });
const nunito = Nunito_Sans({ subsets: ["latin"], variable: "--font-nunito", display: "swap" });

export const metadata: Metadata = {
  title: "Page introuvable | Top Solaire Sghaier",
  robots: { index: false },
};

export default function GlobalNotFound() {
  return (
    <html lang="fr-TN" className={`${sora.variable} ${nunito.variable}`}>
      <body className="min-h-dvh">
        <main className="container-page flex min-h-dvh flex-col justify-center py-16">
          <Image src="/brand/logo-horizontal.svg" alt="Top Solaire Sghaier" width={880} height={168} unoptimized className="h-10 w-auto self-start" />
          <h1 className="mt-12 font-display text-4xl font-bold tracking-display sm:text-5xl">Cette page n&apos;existe pas.</h1>
          <p className="mt-4 max-w-[52ch] text-lg text-graphite">
            Le lien est peut-être ancien ou mal copié.
          </p>
          <p lang="ar" dir="rtl" className="mt-2 max-w-[52ch] text-lg text-graphite">
            الصفحة هاذي موش موجودة.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/fr" className="btn btn-primary">Retour à l&apos;accueil</Link>
            <Link href="/ar" lang="ar" className="btn btn-outline">الرجوع للرئيسية</Link>
          </div>
        </main>
      </body>
    </html>
  );
}
