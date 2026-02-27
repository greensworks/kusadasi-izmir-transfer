import { Locale } from "@/lib/i18n";

interface GalleryCtaProps {
  locale: Locale;
  whatsappUrl: string;
}

export function GalleryCta({ locale, whatsappUrl }: GalleryCtaProps) {
  const instagramUrl = "https://www.instagram.com/birturizmtransfer/";

  return (
    <section className="mt-10 rounded-lg border border-neutral-700 bg-[#1a1a1a] p-5 sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white sm:text-xl">
            {locale === "tr"
              ? "Rota planınız hazırsa hızlıca rezervasyonunuzu tamamlayın"
              : locale === "de"
                ? "Wenn Ihre Route bereit ist, schließen Sie Ihre Reservierung direkt ab"
                : "If your route is ready, complete your reservation now"}
          </h3>
          <p className="mt-2 text-sm text-neutral-300">
            {locale === "tr"
              ? "Detayları WhatsApp üzerinden iletin veya güncel paylaşımlarımızı inceleyin."
              : locale === "de"
                ? "Senden Sie Ihre Details per WhatsApp oder sehen Sie sich unsere aktuellen Beiträge an."
                : "Share your details on WhatsApp or review our latest social updates."}
          </p>
        </div>
        <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-[#25D366] px-5 py-3 text-sm font-semibold text-white"
          >
            {locale === "tr" ? "WhatsApp ile Rezervasyon" : locale === "de" ? "Reservierung per WhatsApp" : "Reserve via WhatsApp"}
          </a>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-neutral-600 px-5 py-3 text-sm font-semibold text-white"
          >
            {locale === "tr" ? "Instagram'da Gör" : locale === "de" ? "Auf Instagram ansehen" : "View on Instagram"}
          </a>
        </div>
      </div>
    </section>
  );
}
