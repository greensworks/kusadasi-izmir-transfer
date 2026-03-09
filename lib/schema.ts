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
  const provider: LocalBusiness = {
    "@type": "LocalBusiness",
    "@id": `${SITE_CONFIG.domain}/#utopia-izmir-transfer`,
    name: SITE_CONFIG.companyName,
    url: SITE_CONFIG.domain,
    telephone: SITE_CONFIG.phone,
    image: `${SITE_CONFIG.domain}/images/bg-hero.webp`,
    priceRange: "€€",
    openingHours: "Mo-Su 00:00-23:59",
    areaServed: SITE_CONFIG.serviceAreas,
    sameAs: [
      "https://www.instagram.com/birturizmtransfer/",
      "https://www.linkedin.com/company/utopia-izmir-transfer/",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "TR",
      addressRegion: "İzmir",
    },
  };

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_CONFIG.domain}/${locale}#service`,
    name: content.seo.ogTitle,
    description: content.seo.description,
    url: `${SITE_CONFIG.domain}/${locale}`,
    serviceType: "Airport Transfer",
    provider,
    areaServed: SITE_CONFIG.serviceAreas,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "EUR",
      url: `${SITE_CONFIG.domain}/${locale}`,
      description:
        locale === "tr"
          ? "Sabit fiyatlı İzmir Havalimanı - Kuşadası VIP transfer"
          : locale === "de"
            ? "VIP transfer mit Festpreis vom Flughafen Izmir nach Kuşadası"
            : "Fixed-price VIP transfer from Izmir Airport to Kusadasi",
    },
  };
}
