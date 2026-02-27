import Image from "next/image";

import { SiteContent } from "@/lib/i18n";

interface FleetProps {
  content: SiteContent;
}

const imageMap = ["/images/fleet-vip.svg", "/images/fleet-group.svg"];

export function Fleet({ content }: FleetProps) {
  const ctaLabel = content.locale === "tr" ? "Bu Araçla Rezervasyon Yap" : "Mit diesem Fahrzeug reservieren";

  return (
    <section className="mt-14" id="fleet">
      <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">{content.fleet.sectionTitle}</h2>
      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        {content.fleet.vehicles.map((vehicle, index) => (
          <article key={vehicle.title} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
            <div className="relative h-56 sm:h-64">
              <Image
                src={imageMap[index] ?? imageMap[0]}
                alt={vehicle.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-vipNavy/50 via-vipNavy/10 to-transparent" />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold text-slate-900">{vehicle.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{vehicle.description}</p>
              <a
                href="#booking-form"
                className="mt-4 inline-flex rounded-xl bg-vipNavy px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                {ctaLabel}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
