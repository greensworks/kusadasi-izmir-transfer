import { SiteContent } from "@/lib/i18n";

interface WhyUsProps {
  content: SiteContent;
}

export function WhyUs({ content }: WhyUsProps) {
  const intro =
    content.locale === "tr"
      ? "Transfer sürecini söz verdiğimiz şekilde, aynı netlikte ve aynı standartta tamamlamak için çalışıyoruz."
      : "Wir führen jeden Transfer mit derselben Klarheit, Verlässlichkeit und Servicequalität durch.";
  const label = content.locale === "tr" ? "NEDEN BİZ" : "WARUM WIR";

  return (
    <section className="mt-14" id="why-us">
      <div className="grid gap-5 lg:grid-cols-12 lg:items-start">
        <div className="rounded-2xl border border-neutral-700 bg-[#161616] p-6 sm:p-8 lg:col-span-4">
          <p className="text-xs font-semibold tracking-[0.14em] text-brand">{label}</p>
          <h2 className="mt-4 text-2xl font-semibold leading-tight text-white sm:text-3xl">{content.whyUs.sectionTitle}</h2>
          <p className="mt-4 text-sm leading-7 text-neutral-300 sm:text-base">{intro}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 lg:col-span-8">
          {content.whyUs.items.map((item, index) => {
            const [title, ...rest] = item.split(":");
            const detail = rest.join(":").trim();

            return (
              <article
                key={item}
                className="w-full max-w-[380px] rounded-2xl border border-neutral-700 bg-[#1c1c1c] p-5 sm:p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-md border border-brand/50 bg-[#121212] px-2 text-xs font-semibold text-brand">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-[15px] font-semibold leading-6 text-white sm:text-base">{title.trim()}</h3>
                </div>
                <p className="mt-3 border-l-2 border-brand/60 pl-3 text-sm leading-7 text-neutral-200">
                  {detail.length > 0 ? detail : item}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
