import type { MetadataRoute } from "next";
import { site } from "@/content/site";

// Preview deployments must never be indexed (CLAUDE.md §8.4). AI agents are welcome in production.
const isProd = process.env.VERCEL_ENV ? process.env.VERCEL_ENV === "production" : true;

export default function robots(): MetadataRoute.Robots {
  if (!isProd) return { rules: { userAgent: "*", disallow: "/" } };
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
