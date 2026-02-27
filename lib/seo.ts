import { Metadata } from "next";

import { getSiteContent } from "@/lib/content";
import { Locale, SITE_CONFIG } from "@/lib/i18n";

export function buildMetadata(locale: Locale): Metadata {
  const content = getSiteContent(locale);
  const localePath = `/${locale}`;
  const url = `${SITE_CONFIG.domain}${localePath}`;
  const canonical = `${SITE_CONFIG.domain}${localePath}`;

  return {
    metadataBase: new URL(SITE_CONFIG.domain),
    title: content.seo.title,
    description: content.seo.description,
    keywords: content.seo.keywords,
    category: "travel",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    alternates: {
      canonical,
      languages: {
        "tr-TR": `${SITE_CONFIG.domain}/tr`,
        "de-DE": `${SITE_CONFIG.domain}/de`,
        "en-US": `${SITE_CONFIG.domain}/en`,
        "x-default": `${SITE_CONFIG.domain}/en`,
      },
    },
    openGraph: {
      title: content.seo.ogTitle,
      description: content.seo.ogDescription,
      url,
      type: "website",
      siteName: SITE_CONFIG.companyName,
      locale: content.languageCode,
      alternateLocale:
        locale === "tr"
          ? ["de-DE", "en-US"]
          : locale === "de"
            ? ["tr-TR", "en-US"]
            : ["tr-TR", "de-DE"],
      images: [
        {
          url: "/images/bg-hero.webp",
          width: 1920,
          height: 900,
          alt: content.seo.ogTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: content.seo.ogTitle,
      description: content.seo.ogDescription,
      images: ["/images/bg-hero.webp"],
    },
  };
}
