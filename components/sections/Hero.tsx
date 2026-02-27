import { SiteContent } from "@/lib/i18n";
import Image from "next/image";

interface HeroProps {
  content: SiteContent;
  whatsappUrl: string;
}

export function Hero({ content, whatsappUrl }: HeroProps) {
  const trustItems =
    content.locale === "tr"
      ? ["Uçuş takibi yapılır", "Sabit fiyat ile çalışılır", "Belgeli ve sigortalı hizmet"]
      : content.locale === "de"
        ? ["Flugverfolgung inklusive", "Festpreis ohne Überraschungen", "Lizenziert und versichert"]
        : ["Flight tracking included", "Fixed price guarantee", "Licensed and insured service"];

  return (
    <section id="top" className="relative flex min-h-[86vh] items-center overflow-hidden py-14 sm:py-16">
      <Image
        src="/images/izmir-adnan-menderes-havalimani-kusadasi-transfer.webp"
        alt={
          content.locale === "tr"
            ? "İzmir Adnan Menderes Havalimanı Kuşadası VIP transfer hizmeti arka plan görseli"
            : "Hintergrundbild für VIP-Transfer vom Flughafen Izmir nach Kusadasi"
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

        <ul className="mt-6 grid gap-2 text-sm text-neutral-300 sm:grid-cols-3 sm:gap-3">
          {trustItems.map((item) => (
            <li key={item} className="rounded-md border border-white/20 bg-black/35 px-3 py-2">
              {item}
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
