import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Top Solaire Sghaier",
    short_name: "Top Solaire",
    description: "Installateur photovoltaïque agréé ANME à Sousse depuis 2015.",
    start_url: "/fr",
    lang: "fr-TN",
    display: "browser",
    background_color: "#F4F2EE",
    theme_color: "#F4F2EE",
    icons: [
      { src: "/brand/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { src: "/brand/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
