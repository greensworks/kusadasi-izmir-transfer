import { SiteContent } from "@/lib/i18n";
import Image from "next/image";

interface HeroProps {
  content: SiteContent;
  whatsappUrl: string;
}

export function Hero({ content, whatsappUrl }: HeroProps) {
  const trustItems =
    content.locale === "tr"
      ? ["Ön ödemesiz rezervasyon", "Araçta ödeme kolaylığı", "7/24 WhatsApp destek hattı"]
      : content.locale === "de"
        ? ["Ohne Vorauszahlung reservieren", "Einfache Zahlung im Fahrzeug", "24/7 Support über WhatsApp"]
        : ["Book with no prepayment", "Easy in-car payment", "24/7 support on WhatsApp"];

  return (
    <section id="top" className="relative flex min-h-[86vh] items-center overflow-hidden py-14 sm:py-16">
      <Image
        src="/images/izmir-adnan-menderes-havalimani-kusadasi-transfer.webp"
        alt={
          content.locale === "tr"
            ? "İzmir Adnan Menderes Havalimanı Kuşadası VIP transfer hizmeti arka plan görseli"
            : content.locale === "de"
              ? "Hintergrundbild für VIP-Transfer vom Flughafen Izmir nach Kusadasi"
              : "Background image for VIP transfer service from Izmir Adnan Menderes Airport"
        }
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/35" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/25 to-black/20" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
        <p className="text-xs font-semibold tracking-[0.16em] text-brand">{content.locale === "tr" ? "İZMİR ADB TRANSFER" : "IZMIR ADB TRANSFER"}</p>

        <h1 className="mt-5 text-3xl font-semibold leading-tight text-white sm:text-5xl">
          {content.hero.title}
        </h1>

        <p className="mt-5 max-w-3xl text-base leading-8 text-neutral-200 sm:text-lg">{content.hero.subtitle}</p>

        <ul className="mt-6 grid gap-3 text-sm sm:grid-cols-3">
          {trustItems.map((item) => (
            <li
              key={item}
              className="group relative overflow-hidden rounded-xl border border-brand/45 bg-gradient-to-br from-brand/20 via-black/55 to-black/75 px-3.5 py-2.5 text-white shadow-[0_10px_24px_rgba(242,194,0,0.2)] backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-brand/80 hover:shadow-[0_14px_30px_rgba(242,194,0,0.28)]"
            >
              <span
                aria-hidden="true"
                className="absolute right-2 top-2 h-2 w-2 rounded-full bg-brand/85 shadow-[0_0_14px_rgba(242,194,0,0.9)]"
              />
              <span className="inline-flex items-center gap-2 pr-4">
                <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-brandDark">
                  <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-current" aria-hidden="true">
                    <path d="M7.8 13.9a1 1 0 0 1-.71-.3l-2.7-2.7a1 1 0 1 1 1.42-1.42l1.99 2 5.44-5.45a1 1 0 0 1 1.42 1.42l-6.15 6.16a1 1 0 0 1-.71.3z" />
                  </svg>
                </span>
                <span className="font-medium leading-5">{item}</span>
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            className="inline-flex items-center justify-center rounded-lg bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-95"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            {content.hero.ctaPrimary}
          </a>
          <a
            className="inline-flex items-center justify-center rounded-lg border border-neutral-500 px-6 py-3 text-sm font-semibold text-white transition hover:border-neutral-300"
            href="#booking-form"
          >
            {content.hero.ctaSecondary}
          </a>
          <a
            className="inline-flex items-center justify-center rounded-lg border border-brand/60 bg-black/35 px-6 py-3 text-sm font-semibold text-brand transition hover:bg-brand hover:text-brandDark"
            href="https://utopiaizmirtransfer.com"
            target="_blank"
            rel="noreferrer"
          >
            {content.locale === "tr"
              ? "Diğer Ege Rotaları"
              : content.locale === "de"
                ? "Weitere Ägäis-Routen"
                : "More Aegean Routes"}
          </a>
        </div>
        </div>
      </div>
    </section>
  );
}
