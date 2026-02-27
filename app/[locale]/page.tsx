import { Metadata } from "next";
import { notFound } from "next/navigation";

import { FloatingWhatsAppButton } from "@/components/common/FloatingWhatsAppButton";
import { LanguageSwitcher } from "@/components/common/LanguageSwitcher";
import { QuickBookingForm } from "@/components/common/QuickBookingForm";
import { Faq } from "@/components/sections/Faq";
import { FunnelSteps } from "@/components/sections/FunnelSteps";
import { GalleryCta } from "@/components/sections/GalleryCta";
import { Hero } from "@/components/sections/Hero";
import { InstagramGallery } from "@/components/sections/InstagramGallery";
import { OtherDestinationsCta } from "@/components/sections/OtherDestinationsCta";
import { PhotoGallery } from "@/components/sections/PhotoGallery";
import { Routes } from "@/components/sections/Routes";
import { Testimonials } from "@/components/sections/Testimonials";
import { getSiteContent } from "@/lib/content";
import { buildWhatsAppLink, isLocale, Locale } from "@/lib/i18n";
import { buildFaqSchema, buildServiceSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

interface PageProps {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ route?: string | string[] }>;
}

export function generateStaticParams() {
  return [{ locale: "tr" }, { locale: "de" }, { locale: "en" }];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  return buildMetadata(locale as Locale);
}

export default async function LocalePage({ params, searchParams }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const castLocale = locale as Locale;
  const content = getSiteContent(castLocale);

  const paramsQuery = await searchParams;
  const routeParam = Array.isArray(paramsQuery.route) ? paramsQuery.route[0] : paramsQuery.route;
  const selectedRoute = routeParam ? decodeURIComponent(routeParam) : "";

  const whatsappUrl = buildWhatsAppLink(
    castLocale === "tr"
      ? "Merhaba, Kuşadası İzmir Havalimanı transfer rezervasyonu yapmak istiyorum."
      : castLocale === "de"
        ? "Hallo, ich möchte einen Transfer vom Flughafen Izmir nach Kuşadası reservieren."
        : "Hello, I would like to book an airport transfer from Izmir to Kusadasi."
  );

  const faqSchema = buildFaqSchema(castLocale);
  const serviceSchema = buildServiceSchema(castLocale);

  return (
    <main className="w-full pb-20 pt-4 md:pb-0">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="sticky top-3 z-30 rounded-lg border border-neutral-700 bg-[#151515] px-4 py-3">
          <div className="flex items-center justify-between gap-3">
            <nav className="hidden min-w-0 flex-1 flex-nowrap items-center justify-center gap-5 overflow-x-auto whitespace-nowrap text-center text-xs font-medium text-neutral-300 sm:text-sm md:flex">
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="shrink-0 transition hover:text-white">
                {castLocale === "tr" ? "İzmir Kuşadası Transfer" : "Izmir Kusadasi Transfer"}
              </a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="shrink-0 transition hover:text-white">
                {castLocale === "tr" ? "İzmir Güzelçamlı Transfer" : "Izmir Guzelcamli Transfer"}
              </a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="shrink-0 transition hover:text-white">
                {castLocale === "tr" ? "İzmir Aydın Transfer" : "Izmir Aydin Transfer"}
              </a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="shrink-0 transition hover:text-white">
                {castLocale === "tr" ? "İzmir Efes Transfer" : "Izmir Ephesus Transfer"}
              </a>
            </nav>

            <div className="shrink-0 md:order-2">
              <LanguageSwitcher currentLocale={castLocale} />
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden shrink-0 items-center justify-center rounded-lg bg-[#25D366] px-3 py-2 text-xs font-semibold text-white sm:px-4 sm:text-sm md:inline-flex"
            >
              {castLocale === "tr" ? "Bize Ulaşın" : castLocale === "de" ? "Kontakt" : "Contact Us"}
            </a>

            <details className="group md:hidden">
              <summary className="inline-flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-lg border border-neutral-600 text-white marker:hidden">
                <span className="text-lg leading-none group-open:hidden">☰</span>
                <span className="hidden text-lg leading-none group-open:inline">✕</span>
              </summary>
              <div className="absolute left-0 right-0 top-[calc(100%+8px)] rounded-lg border border-neutral-700 bg-[#151515] p-3">
                <nav className="flex flex-col gap-2 text-sm font-medium text-neutral-200">
                  <a href={whatsappUrl} target="_blank" rel="noreferrer" className="rounded-md px-3 py-2 transition hover:bg-[#222222]">
                    {castLocale === "tr" ? "İzmir Kuşadası Transfer" : "Izmir Kusadasi Transfer"}
                  </a>
                  <a href={whatsappUrl} target="_blank" rel="noreferrer" className="rounded-md px-3 py-2 transition hover:bg-[#222222]">
                    {castLocale === "tr" ? "İzmir Güzelçamlı Transfer" : "Izmir Guzelcamli Transfer"}
                  </a>
                  <a href={whatsappUrl} target="_blank" rel="noreferrer" className="rounded-md px-3 py-2 transition hover:bg-[#222222]">
                    {castLocale === "tr" ? "İzmir Aydın Transfer" : "Izmir Aydin Transfer"}
                  </a>
                  <a href={whatsappUrl} target="_blank" rel="noreferrer" className="rounded-md px-3 py-2 transition hover:bg-[#222222]">
                    {castLocale === "tr" ? "İzmir Efes Transfer" : "Izmir Ephesus Transfer"}
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-flex items-center justify-center rounded-lg bg-[#25D366] px-3 py-2 text-xs font-semibold text-white"
                  >
                    {castLocale === "tr" ? "Bize Ulaşın" : castLocale === "de" ? "Kontakt" : "Contact Us"}
                  </a>
                </nav>
              </div>
            </details>
          </div>
        </header>
      </div>
      <Hero content={content} whatsappUrl={whatsappUrl} />

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <FunnelSteps locale={castLocale} />
      <Routes content={content} locale={castLocale} />
      <QuickBookingForm content={content} locale={castLocale} initialRoute={selectedRoute} />

      <section className="mt-8 rounded-lg border border-neutral-700 bg-[#1a1a1a] p-5 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-white">
            {castLocale === "tr" ? "Rezervasyonun son adımı" : castLocale === "de" ? "Letzter Reservierungsschritt" : "Final booking step"}
          </p>
          <p className="mt-1 text-sm leading-6 text-neutral-300">
            {castLocale === "tr"
              ? "Bilgileri kontrol edip WhatsApp üzerinden onayınızı iletebilirsiniz."
              : castLocale === "de"
                ? "Prüfen Sie Ihre Angaben und bestätigen Sie anschließend per WhatsApp."
                : "Review your details and confirm your reservation via WhatsApp."}
          </p>
        </div>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-flex rounded-lg bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-95 sm:mt-0"
        >
          {content.cta.whatsappLabel}
        </a>
      </section>

      <Testimonials locale={castLocale} />
      <Faq content={content} />
      <InstagramGallery locale={castLocale} />
      <GalleryCta locale={castLocale} whatsappUrl={whatsappUrl} />
      <PhotoGallery locale={castLocale} />
      <OtherDestinationsCta locale={castLocale} />

      <footer className="mt-14 border-t border-neutral-700 pt-8 text-sm text-neutral-300">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-sm font-semibold text-white">Ütopia İzmir Transfer</p>
            <p className="mt-3 text-sm leading-6 text-neutral-400">
              {castLocale === "tr"
                ? "İzmir Adnan Menderes Havalimanı çıkışlı Kuşadası, Davutlar ve Güzelçamlı transfer hizmeti."
                : castLocale === "de"
                  ? "Transferservice vom Flughafen Izmir Adnan Menderes nach Kuşadası, Davutlar und Güzelçamlı."
                  : "Transfer service from Izmir Adnan Menderes Airport to Kusadasi, Davutlar and Guzelcamli."}
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">{castLocale === "tr" ? "Hizmet Bölgeleri" : castLocale === "de" ? "Servicegebiete" : "Service Areas"}</p>
            <ul className="mt-3 space-y-2 text-sm text-neutral-400">
              <li>Kuşadası</li>
              <li>Davutlar</li>
              <li>Güzelçamlı</li>
              <li>
                <a
                  href="https://utopiaizmirtransfer.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-brand transition hover:text-white"
                >
                  {castLocale === "tr"
                    ? "Ege'nin diğer destinasyonları için VIP taşımacılık"
                    : castLocale === "de"
                      ? "VIP-Transfers zu weiteren Destinationen in der Ägäis"
                      : "VIP transfers for other destinations in the Aegean region"}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">{castLocale === "tr" ? "İletişim" : castLocale === "de" ? "Kontakt" : "Contact"}</p>
            <ul className="mt-3 space-y-2 text-sm text-neutral-400">
              <li>
                <a className="transition hover:text-white" href="tel:+905426910797">
                  +90 542 691 07 97
                </a>
              </li>
              <li>
                <a className="transition hover:text-white" href={whatsappUrl} target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
              </li>
              <li>{castLocale === "tr" ? "7/24 Rezervasyon Desteği" : castLocale === "de" ? "24/7 Reservierungsservice" : "24/7 Reservation Support"}</li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">{castLocale === "tr" ? "Yasal" : castLocale === "de" ? "Rechtliches" : "Legal"}</p>
            <ul className="mt-3 space-y-2 text-sm text-neutral-400">
              <li>{castLocale === "tr" ? "D2 Belgeli Taşımacılık" : castLocale === "de" ? "D2-lizenzierter Transport" : "D2 Licensed Transport"}</li>
              <li>{castLocale === "tr" ? "TÜRSAB Uyumlu Hizmet" : castLocale === "de" ? "TÜRSAB-konformer Service" : "TÜRSAB Compliant Service"}</li>
              <li>{castLocale === "tr" ? "Yolcu Sigortası Kapsamı" : castLocale === "de" ? "Passagierversicherung" : "Passenger Insurance Coverage"}</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-neutral-800 py-5 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            {castLocale === "tr"
              ? "Tüm Hakkı Saklıdır © 2026 Ütopia İzmir Transfer"
              : castLocale === "de"
                ? "Alle Rechte vorbehalten © 2026 Ütopia İzmir Transfer"
                : "All Rights Reserved © 2026 Ütopia İzmir Transfer"}
          </p>
          <p>
            Designed by{" "}
            <a
              href="https://pixelshield.studio"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-brand transition hover:text-white"
            >
              Pixel
            </a>
          </p>
        </div>
      </footer>

      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-neutral-700 bg-[#141414] p-3 md:hidden">
        <div className="mx-auto flex w-full max-w-6xl items-center gap-2">
          <a
            href="#booking-form"
            className="inline-flex flex-1 items-center justify-center rounded-lg bg-brand px-4 py-3 text-sm font-semibold text-brandDark"
          >
            {castLocale === "tr" ? "Forma Geç" : castLocale === "de" ? "Zum Formular" : "Go to Form"}
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex flex-1 items-center justify-center rounded-lg bg-[#25D366] px-4 py-3 text-sm font-semibold text-white"
          >
            WhatsApp
          </a>
        </div>
      </div>

      <FloatingWhatsAppButton />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      </div>
    </main>
  );
}
