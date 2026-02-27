import { SiteContent } from "@/lib/i18n";

export const siteEn: SiteContent = {
  locale: "en",
  languageCode: "en-US",
  nav: {
    reserve: "Reservation",
    routes: "Routes",
    fleet: "Fleet",
    faq: "FAQ",
  },
  hero: {
    title: "Planned airport transfer for Kusadasi, Davutlar and Guzelcamli.",
    subtitle:
      "From Izmir Adnan Menderes Airport (ADB) to your accommodation with fixed pricing and 24/7 flight tracking.",
    ctaPrimary: "Start Reservation",
    ctaSecondary: "Reservation Form",
    imageAlt: "VIP transfer vehicle from Izmir Airport to Kusadasi",
  },
  routes: {
    sectionTitle: "Featured Routes",
    sectionSubtitle: "Most preferred VIP routes for Izmir Airport transfers",
    cards: [
      {
        route: "Izmir Adnan Menderes Airport - Kusadasi Transfer",
        distance: "68 km",
        duration: "70 Minutes",
        description: "Premium Class",
        priceTry: "₺2.400,00",
        priceEur: "€50,00",
        imageSrc: "/images/izmir-adnan-menderes-havalimani-kusadasi-transfer.webp",
        imageAlt: "Transfer vehicle from Izmir Adnan Menderes Airport to Kusadasi",
      },
      {
        route: "Izmir Adnan Menderes Airport - Davutlar/Kusadasi Transfer",
        distance: "85 km",
        duration: "85 Minutes",
        description: "Premium Class",
        priceTry: "₺2.600,00",
        priceEur: "€55,00",
        imageSrc: "/images/davutlar-kusadasi-fughafen.webp",
        imageAlt: "Transfer vehicle from Izmir Adnan Menderes Airport to Davutlar",
      },
      {
        route: "Izmir Adnan Menderes Airport - Guzelcamli/Kusadasi Transfer",
        distance: "91 km",
        duration: "95 Minutes",
        description: "Premium Class",
        priceTry: "₺2.800,00",
        priceEur: "€60,00",
        imageSrc: "/images/guzelcamli-transfer.webp",
        imageAlt: "Transfer vehicle from Izmir Adnan Menderes Airport to Guzelcamli",
      },
    ],
  },
  whyUs: {
    sectionTitle: "Why Ütopia İzmir Transfer?",
    items: [
      "Fixed Price Guarantee: Traffic or flight delays do not affect the price.",
      "Meet and Greet: Welcome at terminal exit with name sign and luggage assistance.",
      "Legal and Safe: All vehicles are D2 licensed, TÜRSAB compliant and fully insured.",
      "Modern Fleet: VIP Mercedes Vito (6-7 seats) and 16-seat luxury minibuses.",
      "Free Extras: Child seat and Wi-Fi available on request at no extra cost.",
    ],
  },
  fleet: {
    sectionTitle: "Our Vehicles",
    vehicles: [
      {
        title: "VIP Business",
        description: "Leather seats, refreshments and quiet cabin comfort.",
        imageAlt: "VIP business transfer vehicle",
      },
      {
        title: "Group Transfer",
        description: "Ideal for families and groups with large luggage capacity.",
        imageAlt: "Luxury group transfer minibus",
      },
    ],
  },
  faq: {
    sectionTitle: "Frequently Asked Questions",
    items: [
      {
        question: "What if my flight is delayed?",
        answer: "We track your flight in real-time, wait in case of delay and charge no extra fee.",
      },
      {
        question: "What payment options are available?",
        answer: "Payment is made only in the vehicle to the driver by cash or card. No prepayment is required.",
      },
      {
        question: "Can I cancel my reservation?",
        answer: "Free cancellation and modification are available up to 24 hours before pickup.",
      },
    ],
  },
  cta: {
    whatsappLabel: "Reserve via WhatsApp",
    quickFormTitle: "Quick Reservation",
    successMessage: "Your request has been prepared for WhatsApp.",
    fields: {
      fullName: "Full Name",
      contact: "Phone / WhatsApp",
      route: "Route",
      dateTime: "Date & Time",
      passengers: "Passengers",
      submit: "Get Quote",
    },
  },
  seo: {
    title: "Izmir Airport Kusadasi Transfer | VIP, Fixed Price, 24/7",
    description:
      "Private transfer from Izmir Adnan Menderes Airport to Kusadasi, Davutlar and Guzelcamli. 24/7 service, fixed price and VIP vehicles.",
    keywords: [
      "Izmir airport Kusadasi transfer",
      "Davutlar VIP transfer",
      "Guzelcamli airport transfer",
      "Izmir Adnan Menderes to Kusadasi price",
      "Utopia Izmir Transfer",
    ],
    ogTitle: "Izmir Airport - Kusadasi VIP Transfer",
    ogDescription: "VIP transfer with fixed price and 24/7 support.",
  },
};
