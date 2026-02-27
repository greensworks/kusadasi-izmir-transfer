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
      name: "Mert krb",
      route: "İzmir Havalimanı Transfer",
      text: "Transfer hizmetinden çok memnun kaldım. Araç konforu, zamanında ulaşım ve şoförün güler yüzlü tavrı sayesinde yolculuğum çok rahattı.",
    },
    {
      name: "Büşra Yeşil",
      route: "İzmir Havalimanı → Özdere",
      text: "İzmir Havaalanından Özdere Merkez'e gelen misafirimiz için gidiş-dönüş hizmet aldık. İsa Bey ve ekibine teşekkür ederim, süreç sorunsuzdu.",
    },
    {
      name: "GÖKHAN MOY",
      route: "İzmir Transfer",
      text: "Çok profesyonel bir hizmet aldık. Zamanında ulaştık ve şoförümüz çok güler yüzlüydü.",
    },
    {
      name: "hsyn baloğlu",
      route: "İzmir Havalimanı → Otel",
      text: "Ailecek tercih ettik, çok memnun kaldık. VIP araçlarla bekletmeden alındık ve güvenle otelimize ulaştık.",
    },
    {
      name: "Bahar arasan",
      route: "İzmir Havalimanı Transfer",
      text: "Çok güvenilir ve profesyonel bir hizmet. Araçlar temiz ve konforlu, şoför tam zamanında geldi.",
    },
    {
      name: "Hasan Killik",
      route: "İzmir Transfer",
      text: "Güvenilir ve konforlu bir hizmet sundukları için teşekkür ederim.",
    },
  ],
  de: [
    { name: "Laura M.", route: "ADB → Kuşadası", text: "Trotz Flugverspätung wurden wir direkt am Ausgang empfangen. Alles war sehr gut organisiert." },
    { name: "Tobias R.", route: "ADB → Davutlar", text: "Nach der Buchung kamen alle Details klar und pünktlich. Die Fahrt war ruhig und sicher." },
    { name: "Nina S.", route: "ADB → Güzelçamlı", text: "Sauberes Fahrzeug, freundlicher Fahrer und exakte Ankunftszeit wie geplant." },
    { name: "Daniel H.", route: "ADB → Kuşadası", text: "Sehr gute Kommunikation vor der Landung. Treffpunkt und Fahrerinfo waren eindeutig." },
    { name: "Mara K.", route: "ADB → Davutlar", text: "Mit Kind unterwegs, der Kindersitz war vorbereitet. Sehr angenehme Fahrt." },
    { name: "Jonas B.", route: "ADB → Güzelçamlı", text: "Fester Preis ohne Überraschungen. Der Transfer lief zuverlässig und pünktlich." },
  ],
  en: [
    { name: "Laura M.", route: "ADB → Kusadasi", text: "Despite our flight delay, the driver met us at the terminal exit. Everything was well organized." },
    { name: "Tobias R.", route: "ADB → Davutlar", text: "All booking details were clear and on time. The ride was smooth and safe." },
    { name: "Nina S.", route: "ADB → Guzelcamli", text: "Clean vehicle, friendly driver and exact arrival timing as planned." },
    { name: "Daniel H.", route: "ADB → Kusadasi", text: "Very good communication before landing. Meeting point and driver details were clear." },
    { name: "Mara K.", route: "ADB → Davutlar", text: "We traveled with a child and the seat was prepared. Very comfortable journey." },
    { name: "Jonas B.", route: "ADB → Guzelcamli", text: "Fixed pricing with no surprises. Reliable and punctual transfer." },
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
