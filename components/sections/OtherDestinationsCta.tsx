import { Locale } from "@/lib/i18n";

interface OtherDestinationsCtaProps {
  locale: Locale;
}

const destinationUrl = "https://utopiaizmirtransfer.com";

export function OtherDestinationsCta({ locale }: OtherDestinationsCtaProps) {
  const content =
    locale === "tr"
      ? {
          title: "İzmir Adnan Menderes Havalimanı Çıkışlı Ege VIP Transfer Rotaları",
          subtitle:
            "Çeşme, Alaçatı, Foça, Seferihisar, Özdere ve Didim için 7/24 sabit fiyatlı VIP transfer rezervasyonunuzu Ütopia İzmir Transfer ile doğrudan oluşturun.",
          ctas: [
            "İzmir Havalimanı - Çeşme VIP Transfer",
            "İzmir Havalimanı - Alaçatı VIP Transfer",
            "İzmir Havalimanı - Foça VIP Transfer",
            "İzmir Havalimanı - Seferihisar VIP Transfer",
            "İzmir Havalimanı - Özdere VIP Transfer",
            "İzmir Havalimanı - Didim VIP Transfer",
          ],
        }
      : locale === "de"
        ? {
            title: "VIP-Transferrouten ab Flughafen Izmir in der Ägäis",
            subtitle:
              "Buchen Sie Ihren 24/7 VIP-Transfer mit Festpreis direkt bei Ütopia Izmir Transfer für Çeşme, Alaçatı, Foça, Seferihisar, Özdere und Didim.",
            ctas: [
              "Flughafen Izmir - Çeşme VIP Transfer",
              "Flughafen Izmir - Alaçatı VIP Transfer",
              "Flughafen Izmir - Foça VIP Transfer",
              "Flughafen Izmir - Seferihisar VIP Transfer",
              "Flughafen Izmir - Özdere VIP Transfer",
              "Flughafen Izmir - Didim VIP Transfer",
            ],
          }
        : {
            title: "Aegean VIP Transfer Routes from Izmir Airport",
            subtitle:
              "Book your 24/7 fixed-price VIP transfer directly with Ütopia Izmir Transfer for Cesme, Alacati, Foca, Seferihisar, Ozdere and Didim.",
            ctas: [
              "Izmir Airport - Cesme VIP Transfer",
              "Izmir Airport - Alacati VIP Transfer",
              "Izmir Airport - Foca VIP Transfer",
              "Izmir Airport - Seferihisar VIP Transfer",
              "Izmir Airport - Ozdere VIP Transfer",
              "Izmir Airport - Didim VIP Transfer",
            ],
          };

  return (
    <section className="mt-12 rounded-xl border border-neutral-700 bg-[#1a1a1a] p-5 sm:p-7" id="ege-destinations">
      <h2 className="text-2xl font-semibold text-white sm:text-3xl">{content.title}</h2>
      <p className="mt-2 max-w-3xl text-sm leading-7 text-neutral-300 sm:text-base">{content.subtitle}</p>

      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {content.ctas.map((label) => (
          <a
            key={label}
            href={destinationUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-brand/50 bg-brand/10 px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand hover:text-brandDark"
          >
            {label}
          </a>
        ))}
      </div>
    </section>
  );
}
