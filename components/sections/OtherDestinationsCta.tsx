import { Locale } from "@/lib/i18n";

interface OtherDestinationsCtaProps {
  locale: Locale;
}

const destinationUrl = "https://utopiaizmirtransfer.com";

export function OtherDestinationsCta({ locale }: OtherDestinationsCtaProps) {
  const content =
    locale === "tr"
      ? {
          title: "Ege'nin Diğer Destinasyonları için VIP Taşımacılık",
          subtitle: "Kuşadası dışındaki rotalar için de Ütopia İzmir Transfer ile doğrudan rezervasyon yapabilirsiniz.",
          ctas: [
            "İzmir Çeşme VIP Transfer",
            "İzmir Alaçatı VIP Transfer",
            "İzmir Foça VIP Transfer",
            "İzmir Seferihisar VIP Transfer",
            "İzmir Özdere VIP Transfer",
            "İzmir Didim VIP Transfer",
          ],
        }
      : locale === "de"
        ? {
            title: "VIP-Transfers für weitere Ziele in der Ägäis",
            subtitle: "Für Strecken außerhalb von Kuşadası können Sie direkt bei Ütopia Izmir Transfer reservieren.",
            ctas: [
              "Izmir - Çeşme VIP Transfer",
              "Izmir - Alaçatı VIP Transfer",
              "Izmir - Foça VIP Transfer",
              "Izmir - Seferihisar VIP Transfer",
              "Izmir - Özdere VIP Transfer",
              "Izmir - Didim VIP Transfer",
            ],
          }
        : {
            title: "VIP Transfers for Other Aegean Destinations",
            subtitle: "For routes beyond Kusadasi, you can book directly with Ütopia Izmir Transfer.",
            ctas: [
              "Izmir - Cesme VIP Transfer",
              "Izmir - Alacati VIP Transfer",
              "Izmir - Foca VIP Transfer",
              "Izmir - Seferihisar VIP Transfer",
              "Izmir - Ozdere VIP Transfer",
              "Izmir - Didim VIP Transfer",
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
