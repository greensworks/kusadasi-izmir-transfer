import { SiteContent } from "@/lib/i18n";
import Image from "next/image";

interface RoutesProps {
  content: SiteContent;
}

export function Routes({ content }: RoutesProps) {
  const ctaLabel = content.locale === "tr" ? "Bu rotayı seç" : content.locale === "de" ? "Diese Route wählen" : "Select this route";

  return (
    <section className="mt-14" id="routes">
      <h2 className="text-2xl font-semibold text-white sm:text-3xl">{content.routes.sectionTitle}</h2>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-neutral-300 sm:text-base">{content.routes.sectionSubtitle}</p>

      <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {content.routes.cards.map((card) => (
          <article key={card.route} className="overflow-hidden rounded-lg border border-neutral-700 bg-[#1f1f1f] p-4 sm:p-5">
            <div className="relative mb-4 h-40 w-full overflow-hidden rounded-md border border-neutral-700 bg-[#171717] sm:h-44">
              <Image
                src={card.imageSrc}
                alt={card.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold leading-snug text-white">{card.route}</h3>
            <p className="mt-2 text-sm text-neutral-200">{card.description}</p>

            <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-neutral-300">
              <span className="rounded-md bg-[#2b2b2b] px-3 py-2">{card.distance}</span>
              <span className="rounded-md bg-[#2b2b2b] px-3 py-2">{card.duration}</span>
            </div>

            <div className="mt-2 grid grid-cols-2 gap-2 text-sm font-semibold">
              <span className="rounded-md bg-brand/20 px-3 py-2 text-brand">{card.priceTry}</span>
              <span className="rounded-md bg-[#2b2b2b] px-3 py-2 text-neutral-100">{card.priceEur}</span>
            </div>

            <a
              href="#booking-form"
              className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white transition hover:brightness-95"
            >
              {ctaLabel}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
