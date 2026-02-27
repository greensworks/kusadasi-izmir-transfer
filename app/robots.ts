import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/i18n";

const baseUrl = SITE_CONFIG.domain;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
