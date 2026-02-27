import { FAQPage, LocalBusiness, Service, WithContext } from "schema-dts";

import { getSiteContent } from "@/lib/content";
import { Locale, SITE_CONFIG } from "@/lib/i18n";

export function buildFaqSchema(locale: Locale): WithContext<FAQPage> {
  const content = getSiteContent(locale);

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildServiceSchema(locale: Locale): WithContext<Service | LocalBusiness> {
  const content = getSiteContent(locale);

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: content.seo.ogTitle,
    serviceType: "Airport Transfer",
    provider: {
      "@type": "LocalBusiness",
      name: SITE_CONFIG.companyName,
      telephone: SITE_CONFIG.phone,
      areaServed: SITE_CONFIG.serviceAreas,
      url: `${SITE_CONFIG.domain}/${locale}`,
    },
    areaServed: SITE_CONFIG.serviceAreas,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "EUR",
      description:
        locale === "tr"
          ? "Sabit fiyatlı İzmir Havalimanı - Kuşadası VIP transfer"
          : locale === "de"
            ? "VIP transfer mit Festpreis vom Flughafen Izmir nach Kuşadası"
            : "Fixed-price VIP transfer from Izmir Airport to Kusadasi",
    },
  };
}
