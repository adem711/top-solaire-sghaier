import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { localeMeta } from "@/i18n/locales";
import { serviceArea, site } from "@/content/site";
import { getProject, HERO_PROJECT } from "@/content/projects";

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // Escape "<" so content can never close the script tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export async function BusinessJsonLd({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "meta" });
  const s = await getTranslations({ locale, namespace: "services" });
  const url = `${site.url}/${locale}`;

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "HomeAndConstructionBusiness",
        "@id": `${site.url}/#business`,
        name: site.name,
        url,
        logo: `${site.url}/brand/logo-stacked.svg`,
        image: `${site.url}${getProject(HERO_PROJECT).images[0].src}`,
        description: t("home.description"),
        telephone: "+216 98 452 134",
        contactPoint: ["+216 98 452 134", "+216 54 109 627"].map((telephone) => ({
          "@type": "ContactPoint",
          telephone,
          contactType: "sales",
          areaServed: "TN",
          availableLanguage: ["fr", "ar"],
        })),
        email: site.email,
        foundingDate: String(site.foundingYear),
        founder: { "@type": "Person", name: site.owner },
        inLanguage: localeMeta[locale].htmlLang,
        address: { "@type": "PostalAddress", addressLocality: site.city, addressCountry: "TN" },
        areaServed: serviceArea.places.map((name) => ({ "@type": "Place", name })),
        sameAs: [site.facebook],
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Représentant agréé",
          recognizedBy: { "@type": "GovernmentOrganization", name: "ANME, Agence Nationale pour la Maîtrise de l'Énergie" },
        },
        makesOffer: (["residentiel", "pompage", "chauffeEau"] as const).map((k) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s(`${k}.title`), description: s(`${k}.text`) },
        })),
      }}
    />
  );
}
