"use client";

import { useState } from "react";

import { SiteContent } from "@/lib/i18n";

interface FaqProps {
  content: SiteContent;
}

export function Faq({ content }: FaqProps) {
  const ctaLabel =
    content.locale === "tr"
      ? "İzmir Havalimanı Transfer Formuna Geç"
      : content.locale === "de"
        ? "Zum Izmir-Transfer-Formular"
        : "Go to Izmir Transfer Form";
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="mt-14" id="faq">
      <h2 className="text-2xl font-semibold text-white sm:text-3xl">{content.faq.sectionTitle}</h2>
      <div className="mt-5 space-y-3">
        {content.faq.items.map((item, index) => (
          <article
            key={item.question}
            className={`rounded-lg border bg-[#1f1f1f] p-4 ${openIndex === index ? "border-brand/60" : "border-neutral-700"}`}
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-3 text-left"
              onClick={() => setOpenIndex(index)}
              aria-expanded={openIndex === index}
            >
              <span className="text-base font-semibold text-white">{item.question}</span>
              <span className="text-brand">{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index ? <p className="mt-3 text-sm leading-6 text-neutral-200">{item.answer}</p> : null}
          </article>
        ))}
      </div>
      <div className="mt-6 rounded-lg border border-neutral-700 bg-[#1f1f1f] p-5 text-center">
        <p className="text-sm text-neutral-200">
          {content.locale === "tr"
            ? "İzmir Adnan Menderes Havalimanı transfer rezervasyonu için tarih, saat ve güzergah bilginizi paylaşın; ekibimiz WhatsApp üzerinden hızlıca onaylasın."
            : content.locale === "de"
              ? "Für Ihre Transferreservierung ab Flughafen Izmir teilen Sie Datum, Uhrzeit und Route mit; unser Team bestätigt Ihre Anfrage schnell per WhatsApp."
              : "For your Izmir Airport transfer booking, share your date, time and route, and our team will quickly confirm it on WhatsApp."}
        </p>
        <a
          href="#booking-form"
          className="mt-3 inline-flex rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-brandDark transition hover:bg-brandDark hover:text-white"
        >
          {ctaLabel}
        </a>
      </div>
    </section>
  );
}
