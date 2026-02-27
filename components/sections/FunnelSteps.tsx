import { Locale } from "@/lib/i18n";

interface FunnelStepsProps {
  locale: Locale;
}

export function FunnelSteps({ locale }: FunnelStepsProps) {
  const steps =
    locale === "tr"
      ? [
          { title: "Rota seçin", detail: "Transfer hattınızı belirleyin." },
          { title: "Bilgileri girin", detail: "Tarih, saat ve yolcu sayısını yazın." },
          { title: "WhatsApp onayı", detail: "Rezervasyonunuzu tek mesajla tamamlayın." },
        ]
      : locale === "de"
        ? [
          { title: "Route wählen", detail: "Bestimmen Sie Ihre Transferstrecke." },
          { title: "Daten eingeben", detail: "Datum, Uhrzeit und Personenzahl eintragen." },
          { title: "WhatsApp-Bestätigung", detail: "Reservierung mit einer Nachricht abschließen." },
        ]
        : [
          { title: "Select route", detail: "Choose your transfer line." },
          { title: "Enter details", detail: "Add date, time and number of passengers." },
          { title: "WhatsApp confirmation", detail: "Complete your booking with one message." },
        ];

  return (
    <section className="mt-8 rounded-xl border border-neutral-700 bg-[#1a1a1a] p-4 sm:p-5">
      <ol className="grid gap-3 md:grid-cols-3">
        {steps.map((step, index) => (
          <li key={step.title} className="relative overflow-hidden rounded-xl border border-neutral-700 bg-white/[0.04] p-4 sm:p-5">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-2 -top-7 text-8xl font-bold leading-none text-white/[0.05]"
            >
              {index + 1}
            </span>
            <p className="relative z-10 text-xs font-semibold uppercase tracking-[0.08em] text-brand">
              {locale === "tr" ? `${index + 1}. adım` : locale === "de" ? `Schritt ${index + 1}` : `Step ${index + 1}`}
            </p>
            <h3 className="relative z-10 mt-1 text-base font-semibold text-white">{step.title}</h3>
            <p className="relative z-10 mt-1 text-sm leading-6 text-neutral-300">{step.detail}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
