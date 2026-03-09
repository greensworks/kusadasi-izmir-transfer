import Image from "next/image";

import { Locale } from "@/lib/i18n";

interface TestimonialsProps {
  locale: Locale;
}

interface TestimonialItem {
  name: string;
  text: string;
  route: string;
}

const testimonialMap: Record<Locale, TestimonialItem[]> = {
  tr: [
    {
      name: "Ece Ecili",
      route: "İzmir Havalimanı Transfer",
      text: "Taşıma mükemmeldi. Gayet güvenli bir hizmet aldım, aracı çok iyi kullanıyorlar.",
    },
    {
      name: "Güven İLTUZER",
      route: "İzmir Gaziemir Transfer",
      text: "İzmir Gaziemir mevkiinde güvenli ve kusursuz hizmet aldım. İsa Bey'e teşekkür ederiz.",
    },
    {
      name: "Ahmet Osman Kaya",
      route: "İzmir Havalimanı Transfer",
      text: "Gayet özenli bir taşımacılık hizmeti aldım. Çok memnun kaldım, kesinlikle tavsiye ederim.",
    },
    {
      name: "Aylin Taner",
      route: "İzmir Havalimanı Transfer",
      text: "Güvenli, sorunsuz ve stressiz bir yolculuk oldu. Tavsiye ederim, teşekkürler.",
    },
    {
      name: "Bahar Arasan",
      route: "İzmir Havalimanı Transfer",
      text: "Çok güvenilir ve profesyonel bir hizmet aldım. Araçlar temiz ve konforluydu, şoför zamanında geldi.",
    },
    {
      name: "Pınar CEBE",
      route: "Son Dakika İzmir Transfer",
      text: "Son anda ihtiyacımız olan transferi titizlikle organize ettiler. Ailem rötara rağmen sorunsuz şekilde evine ulaştı.",
    },
  ],
  de: [
    { name: "Ece Ecili", route: "Transfer ab Flughafen Izmir", text: "Der Transfer war perfekt. Sehr sicherer Service, das Fahrzeug wurde hervorragend gefahren." },
    { name: "Güven İLTUZER", route: "Transfer Izmir Gaziemir", text: "Im Raum Izmir Gaziemir habe ich einen sicheren und fehlerfreien Service erhalten. Vielen Dank an Herrn İsa." },
    { name: "Ahmet Osman Kaya", route: "Transfer ab Flughafen Izmir", text: "Sehr sorgfältiger Transportservice. Ich war sehr zufrieden und kann den Service klar empfehlen." },
    { name: "Aylin Taner", route: "Transfer ab Flughafen Izmir", text: "Es war eine sichere, problemlose und stressfreie Fahrt. Klare Empfehlung, vielen Dank." },
    { name: "Bahar Arasan", route: "Transfer ab Flughafen Izmir", text: "Ich habe einen sehr zuverlässigen und professionellen Service erhalten. Fahrzeuge waren sauber und komfortabel, der Fahrer war pünktlich." },
    { name: "Pınar CEBE", route: "Last-Minute Izmir Transfer", text: "Unser kurzfristiger Transferbedarf wurde sehr sorgfältig organisiert. Trotz Flugverspätung kam meine Familie problemlos nach Hause." },
  ],
  en: [
    { name: "Ece Ecili", route: "Izmir Airport Transfer", text: "The transfer was excellent. Very safe service and they drove the vehicle really well." },
    { name: "Güven İLTUZER", route: "Izmir Gaziemir Transfer", text: "I received a safe and flawless service in the Izmir Gaziemir area. Thanks to Mr. Isa." },
    { name: "Ahmet Osman Kaya", route: "Izmir Airport Transfer", text: "I received a very careful transport service. I was very satisfied and definitely recommend it." },
    { name: "Aylin Taner", route: "Izmir Airport Transfer", text: "It was a safe, smooth and stress-free journey. I recommend it, thank you." },
    { name: "Bahar Arasan", route: "Izmir Airport Transfer", text: "I received a very reliable and professional service. Vehicles were clean and comfortable, and the driver arrived on time." },
    { name: "Pınar CEBE", route: "Last-Minute Izmir Transfer", text: "They organized our last-minute transfer need with great care. Despite a flight delay, my family got home without any issues." },
  ],
};

const googleReviewsUrl =
  "https://www.google.com/search?sca_esv=82e1ade9a4b9d4d3&sxsrf=ANbL-n4xlJJt6WZRVxTP4Cem7_LB80-xVQ:1772215599608&q=%C3%BCtopiaizmirtransfer+maps&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOdWTK6BZWjWM7UaF17x5zsqNP1DxrSFpvJGOS9YXokQBBJ8EO9NdNgCmVV08lpiqTeE_OOM%3D&uds=ALYpb_kgbr9WnQ7cqOGSWrVQwMIXH3izw0wTsZzw7BHpI8fDrWL6vmD-HCdP3eFWO7EPvmzgrTh075UhurRy-_dNSQ_RXnr8TCfbN-88hQvAf4W3xiUrroJ7UBxuPBF4oM6iSJUkghjq&sa=X&ved=2ahUKEwjYuZ7KofqSAxU0RPEDHaZmBKQQ3PALegQIMRAF&biw=1512&bih=834&dpr=2";

export function Testimonials({ locale }: TestimonialsProps) {
  const items = testimonialMap[locale];
  const title = locale === "tr" ? "Müşteri Yorumları" : locale === "de" ? "Kundenstimmen" : "Customer Reviews";
  const subtitle =
    locale === "tr"
      ? "Doğrulanmış transfer rezervasyonlarından gelen yorumlar."
      : locale === "de"
        ? "Bewertungen aus bestätigten Transferreservierungen."
        : "Reviews from verified transfer reservations.";

  return (
    <section className="mt-14" id="testimonials">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">{title}</h2>
            <p className="mt-2 text-sm text-neutral-300 sm:text-base">{subtitle}</p>
          </div>
          <div className="flex items-center gap-3">
            <a href={googleReviewsUrl} target="_blank" rel="noreferrer" aria-label="Google Reviews">
              <Image
                src="/images/google-reviews.webp"
                alt={
                  locale === "tr"
                    ? "Google yorum puanı Ütopia İzmir Transfer"
                    : locale === "de"
                      ? "Google-Bewertung für Ütopia İzmir Transfer"
                      : "Google review rating for Ütopia İzmir Transfer"
                }
                width={150}
                height={38}
                className="h-8 w-auto object-contain"
              />
            </a>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <article key={`${item.name}-${item.route}`} className="flex h-full flex-col rounded-xl border border-neutral-700 bg-[#1a1a1a] p-5">
              <p className="text-sm tracking-wide text-brand">★★★★★</p>
              <p className="mt-3 flex-1 text-sm leading-7 text-neutral-100">“{item.text}”</p>
              <div className="mt-4 border-t border-neutral-700 pt-3">
                <p className="text-sm font-semibold text-white">{item.name}</p>
                <p className="text-xs text-brand">{item.route}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-brandDark"
          >
            {locale === "tr" ? "Gerçek kullanıcı yorumlarını gör" : locale === "de" ? "Echte Kundenbewertungen ansehen" : "See real customer reviews"}
          </a>
        </div>
      </div>
    </section>
  );
}
