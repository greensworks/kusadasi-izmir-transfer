export const SUPPORTED_LOCALES = ["tr", "de", "en"] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "tr";
export const LOCALE_COOKIE = "preferred-locale";

export const SITE_CONFIG = {
  domain: "https://kusadasiizmirhavalimanitransfer.com",
  phone: "+905426910797",
  whatsappNumber: "905426910797",
  companyName: "Ütopia İzmir Transfer",
  serviceAreas: ["Kuşadası", "Davutlar", "Güzelçamlı"],
};

export interface RouteCard {
  route: string;
  distance: string;
  duration: string;
  description: string;
  priceTry: string;
  priceEur: string;
  imageSrc: string;
  imageAlt: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SiteContent {
  locale: Locale;
  languageCode: "tr-TR" | "de-DE" | "en-US";
  nav: {
    reserve: string;
    routes: string;
    fleet: string;
    faq: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    imageAlt: string;
  };
  routes: {
    sectionTitle: string;
    sectionSubtitle: string;
    cards: RouteCard[];
  };
  whyUs: {
    sectionTitle: string;
    items: string[];
  };
  fleet: {
    sectionTitle: string;
    vehicles: Array<{ title: string; description: string; imageAlt: string }>;
  };
  faq: {
    sectionTitle: string;
    items: FaqItem[];
  };
  cta: {
    whatsappLabel: string;
    quickFormTitle: string;
    successMessage: string;
    fields: {
      fullName: string;
      contact: string;
      route: string;
      dateTime: string;
      passengers: string;
      submit: string;
    };
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogTitle: string;
    ogDescription: string;
  };
}

const localeToLanguageCode: Record<Locale, SiteContent["languageCode"]> = {
  tr: "tr-TR",
  de: "de-DE",
  en: "en-US",
};

export function isLocale(value: string): value is Locale {
  return SUPPORTED_LOCALES.includes(value as Locale);
}

export function normalizeLocale(value: string | null | undefined): Locale {
  if (!value) {
    return DEFAULT_LOCALE;
  }

  const lower = value.toLowerCase();
  if (lower.startsWith("tr")) {
    return "tr";
  }
  if (lower.startsWith("de")) {
    return "de";
  }
  if (lower.startsWith("en")) {
    return "en";
  }

  return DEFAULT_LOCALE;
}

export function localeToBcp47(locale: Locale): SiteContent["languageCode"] {
  return localeToLanguageCode[locale];
}

export function buildWhatsAppLink(message: string): string {
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
