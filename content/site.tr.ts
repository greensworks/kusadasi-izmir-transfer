import { SiteContent } from "@/lib/i18n";

export const siteTr: SiteContent = {
  locale: "tr",
  languageCode: "tr-TR",
  nav: {
    reserve: "Rezervasyon",
    routes: "Güzergahlar",
    fleet: "Araçlar",
    faq: "SSS",
  },
  hero: {
    title: "Kuşadası, Davutlar ve Güzelçamlı için planlı havalimanı transferi.",
    subtitle:
      "İzmir Adnan Menderes Havalimanı (ADB) çıkışından konaklama noktanıza, sabit fiyatlı ve 7/24 takip edilen ulaşım.",
    ctaPrimary: "Rezervasyon Oluştur",
    ctaSecondary: "Rezervasyon Formu",
    imageAlt: "İzmir Adnan Menderes Havalimanı Kuşadası VIP transfer aracı",
  },
  routes: {
    sectionTitle: "Öne Çıkan Güzergahlar",
    sectionSubtitle: "Kuşadası İzmir Havalimanı Transfer için en çok tercih edilen VIP rotalar",
    cards: [
      {
        route: "İzmir Adnan Menderes Havalimanı - Kuşadası Transfer",
        distance: "68 km",
        duration: "70 Dakika",
        description: "Premium Class",
        priceTry: "₺2.400,00",
        priceEur: "€50,00",
        imageSrc: "/images/izmir-adnan-menderes-havalimani-kusadasi-transfer.webp",
        imageAlt: "İzmir Adnan Menderes Havalimanı Kuşadası transfer aracı",
      },
      {
        route: "İzmir Adnan Menderes Havalimanı - Davutlar/Kuşadası Transfer",
        distance: "85 km",
        duration: "85 Dakika",
        description: "Premium Class",
        priceTry: "₺2.600,00",
        priceEur: "€55,00",
        imageSrc: "/images/davutlar-kusadasi-fughafen.webp",
        imageAlt: "İzmir Adnan Menderes Havalimanı Davutlar transfer aracı",
      },
      {
        route: "İzmir Adnan Menderes Havalimanı - Güzelçamlı/Kuşadası Transfer",
        distance: "91 km",
        duration: "95 Dakika",
        description: "Premium Class",
        priceTry: "₺2.800,00",
        priceEur: "€60,00",
        imageSrc: "/images/guzelcamli-transfer.webp",
        imageAlt: "İzmir Adnan Menderes Havalimanı Güzelçamlı transfer aracı",
      },
    ],
  },
  whyUs: {
    sectionTitle: "Neden Ütopia İzmir Transfer?",
    items: [
      "Sabit Fiyat Garantisi: Trafik yoğunluğu veya uçak rötarları fiyatı etkilemez; sürpriz ücret yok.",
      "Karşılama Hizmeti: Terminal çıkışında isminizle karşılama ve bagaj desteği.",
      "Yasal ve Güvenli: Tüm araçlarımız D2 belgeli, TÜRSAB onaylı ve kapsamlı yolcu sigortalıdır.",
      "Modern Filo: 6-7 kişilik VIP Mercedes Vito ve kalabalık gruplar için 16 kişilik lüks minibüsler.",
      "Ücretsiz Hizmetler: Bebek koltuğu ve Wi-Fi hizmeti talebiniz üzerine ücretsiz sunulur.",
    ],
  },
  fleet: {
    sectionTitle: "Araçlarımız",
    vehicles: [
      {
        title: "VIP Business",
        description: "Özel deri koltuklar, ikramlar ve sessiz kabin konforu.",
        imageAlt: "VIP business transfer aracı",
      },
      {
        title: "Grup Transferi",
        description: "Geniş bagaj hacmi ile aileler ve arkadaş grupları için ideal çözümler.",
        imageAlt: "Grup transfer minibus",
      },
    ],
  },
  faq: {
    sectionTitle: "Sıkça Sorulan Sorular",
    items: [
      {
        question: "Uçağım gecikirse ne olur?",
        answer: "Uçuşunuzu anlık takip ediyoruz; gecikmelerde sizi bekliyoruz ve ek ücret almıyoruz.",
      },
      {
        question: "Ödeme seçenekleri nelerdir?",
        answer: "Ödeme yalnızca araçta şoföre nakit veya kart ile yapılır. Ön ödeme alınmaz.",
      },
      {
        question: "Rezervasyon iptali yapılabilir mi?",
        answer: "24 saat öncesine kadar ücretsiz iptal ve değişiklik hakkınız mevcuttur.",
      },
    ],
  },
  cta: {
    whatsappLabel: "WhatsApp ile Rezervasyon",
    quickFormTitle: "Hızlı Rezervasyon",
    successMessage: "Talebiniz WhatsApp üzerinden hazırlandı.",
    fields: {
      fullName: "Ad Soyad",
      contact: "Telefon / WhatsApp",
      route: "Güzergah",
      dateTime: "Tarih & Saat",
      passengers: "Kişi Sayısı",
      submit: "Teklif Al",
    },
  },
  seo: {
    title: "Kuşadası İzmir Havalimanı Transfer | VIP, Sabit Fiyat, 7/24",
    description:
      "Kuşadası, Davutlar ve Güzelçamlı için İzmir Adnan Menderes Havalimanı transfer hizmeti. Sabit fiyat, VIP araçlar ve 7/24 profesyonel şoför.",
    keywords: [
      "İzmir Kuşadası transfer fiyatları 2026",
      "Davutlar VIP transfer",
      "Güzelçamlı havalimanı ulaşım",
      "İzmir Adnan Menderes Kuşadası taksi",
      "kusadasiizmirhavalimanitransfer",
    ],
    ogTitle: "Kuşadası İzmir Havalimanı Transfer",
    ogDescription: "VIP transfer, sabit fiyat ve 7/24 güvenli ulaşım.",
  },
};
