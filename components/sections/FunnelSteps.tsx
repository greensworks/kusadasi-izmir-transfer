import { Locale } from "@/lib/i18n";

interface FunnelStepsProps {
  locale: Locale;
}

export function FunnelSteps({ locale }: FunnelStepsProps) {
  const steps =
    locale === "tr"
      ? [
          {
            title: "Transfer rotanızı seçin",
            detail: "İzmir Adnan Menderes Havalimanı çıkışlı Kuşadası, Davutlar veya Güzelçamlı hattını seçin.",
          },
          { title: "Yolculuk bilgilerini girin", detail: "Uçuş tarihi, iniş saati ve yolcu sayısını paylaşın." },
          { title: "WhatsApp'tan onaylayın", detail: "Rezervasyonunuzu tek mesajla kesinleştirip anında dönüş alın." },
        ]
      : locale === "de"
        ? [
          {
            title: "Transferroute wählen",
            detail: "Wählen Sie Ihre Strecke ab dem Flughafen Izmir Adnan Menderes nach Kuşadası, Davutlar oder Güzelçamlı.",
          },
          { title: "Fahrtdaten eingeben", detail: "Teilen Sie Flugdatum, Landezeit und Personenzahl mit." },
          { title: "Per WhatsApp bestätigen", detail: "Schließen Sie Ihre Reservierung mit einer Nachricht ab und erhalten Sie sofort eine Rückmeldung." },
        ]
        : [
          {
            title: "Choose your transfer route",
            detail: "Select your line from Izmir Adnan Menderes Airport to Kusadasi, Davutlar or Guzelcamli.",
          },
          { title: "Enter trip details", detail: "Share your flight date, landing time and passenger count." },
          { title: "Confirm on WhatsApp", detail: "Finalize your reservation with one message and get an instant response." },
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
