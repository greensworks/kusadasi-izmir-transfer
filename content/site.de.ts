import { SiteContent } from "@/lib/i18n";

export const siteDe: SiteContent = {
  locale: "de",
  languageCode: "de-DE",
  nav: {
    reserve: "Reservierung",
    routes: "Routen",
    fleet: "Fahrzeuge",
    faq: "FAQ",
  },
  hero: {
    title: "Transferzentrum für Fahrten ab dem Flughafen Izmir Adnan Menderes.",
    subtitle:
      "Vom Flughafen Izmir (ADB) bis zu Ihrer Unterkunft: fester Preis, verlässlicher Ablauf und 24/7 Flugverfolgung.",
    ctaPrimary: "Reservierung starten",
    ctaSecondary: "Reservierungsformular",
    imageAlt: "VIP Transferfahrzeug vom Flughafen Izmir nach Kusadasi",
  },
  routes: {
    sectionTitle: "Top-Routen",
    sectionSubtitle: "Die beliebtesten VIP-Strecken für den Transfer Izmir Flughafen - Kuşadası",
    cards: [
      {
        route: "Flughafen Izmir Adnan Menderes - Kuşadası Transfer",
        distance: "68 km",
        duration: "70 Minuten",
        description: "Premium Class",
        priceTry: "₺2.400,00",
        priceEur: "€50,00",
        imageSrc: "/images/izmir-adnan-menderes-havalimani-kusadasi-transfer.webp",
        imageAlt: "Transferfahrzeug vom Flughafen Izmir Adnan Menderes nach Kusadasi",
      },
      {
        route: "Flughafen Izmir Adnan Menderes - Davutlar/Kuşadası Transfer",
        distance: "85 km",
        duration: "85 Minuten",
        description: "Premium Class",
        priceTry: "₺2.600,00",
        priceEur: "€55,00",
        imageSrc: "/images/davutlar-kusadasi-fughafen.webp",
        imageAlt: "Transferfahrzeug vom Flughafen Izmir Adnan Menderes nach Davutlar",
      },
      {
        route: "Flughafen Izmir Adnan Menderes - Güzelçamlı/Kuşadası Transfer",
        distance: "91 km",
        duration: "95 Minuten",
        description: "Premium Class",
        priceTry: "₺2.800,00",
        priceEur: "€60,00",
        imageSrc: "/images/guzelcamli-transfer.webp",
        imageAlt: "Transferfahrzeug vom Flughafen Izmir Adnan Menderes nach Guzelcamli",
      },
    ],
  },
  whyUs: {
    sectionTitle: "Warum Ütopia İzmir Transfer?",
    items: [
      "Festpreisgarantie: Verkehr oder Flugverspätungen beeinflussen den Preis nicht.",
      "Meet-and-Greet: Empfang am Terminal mit Namensschild und Gepäckhilfe.",
      "Legal und sicher: Alle Fahrzeuge sind D2-lizenziert, TÜRSAB-bestätigt und versichert.",
      "Moderne Flotte: VIP Mercedes Vito (6-7 Personen) und luxuriöse Minibusse für 16 Personen.",
      "Kostenlose Extras: Kindersitz und Wi-Fi auf Anfrage ohne Aufpreis.",
    ],
  },
  fleet: {
    sectionTitle: "Unsere Fahrzeuge",
    vehicles: [
      {
        title: "VIP Business",
        description: "Exklusive Ledersitze, Erfrischungen und ruhiger Kabinenkomfort.",
        imageAlt: "VIP Business Transferfahrzeug",
      },
      {
        title: "Gruppentransfer",
        description: "Ideal für Familien und Gruppen dank großem Gepäckraum.",
        imageAlt: "Luxuriöser Gruppentransfer Minibus",
      },
    ],
  },
  faq: {
    sectionTitle: "Häufige Fragen zum Transfer ab Flughafen Izmir",
    items: [
      {
        question: "Was passiert bei Flugverspätungen?",
        answer: "Wir verfolgen Ihren Flug am Flughafen Izmir Adnan Menderes live, warten bei Verspätungen am Terminalausgang und berechnen keine zusätzliche Wartegebühr.",
      },
      {
        question: "Welche Zahlungsmöglichkeiten gibt es?",
        answer: "Die Transferkosten zahlen Sie direkt im Fahrzeug beim Fahrer in bar oder mit Karte. Eine Vorauszahlung ist nicht erforderlich.",
      },
      {
        question: "Sind Stornierung und Änderung möglich?",
        answer: "Bis 24 Stunden vor Transferbeginn sind Stornierung oder Änderung kostenlos möglich. Bei kurzfristigen Fällen hilft unser WhatsApp-Support sofort weiter.",
      },
    ],
  },
  cta: {
    whatsappLabel: "Reservierung via WhatsApp",
    quickFormTitle: "Schnellanfrage",
    successMessage: "Ihre Anfrage wurde für WhatsApp vorbereitet.",
    fields: {
      fullName: "Vor- und Nachname",
      contact: "Telefon / WhatsApp",
      route: "Route",
      dateTime: "Datum & Uhrzeit",
      passengers: "Personenzahl",
      submit: "Angebot anfragen",
    },
  },
  seo: {
    title: "Flughafen Izmir Kuşadası Transfer | VIP Shuttle mit Festpreis",
    description:
      "Privattransfer vom Flughafen Izmir Adnan Menderes nach Kuşadası, Davutlar und Güzelçamlı. 24/7 Service, Festpreis und VIP Fahrzeuge.",
    keywords: [
      "Flughafen Izmir Kuşadası Transfer",
      "VIP Shuttle Davutlar",
      "Privattransfer Güzelçamlı",
      "Izmir Adnan Menderes nach Kuşadası Fahrpreis",
    ],
    ogTitle: "Flughafen Izmir - Kuşadası VIP Transfer",
    ogDescription: "24/7 Privattransfer mit Festpreisgarantie.",
  },
};
