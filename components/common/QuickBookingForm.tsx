"use client";

import { FormEvent, useMemo, useState } from "react";
import Image from "next/image";

import { Locale, SiteContent, SITE_CONFIG } from "@/lib/i18n";

interface QuickBookingFormProps {
  content: SiteContent;
  locale: Locale;
}

interface FormState {
  fullName: string;
  contact: string;
  route: string;
  dateTime: string;
  passengers: string;
}

const initialState: FormState = {
  fullName: "",
  contact: "",
  route: "",
  dateTime: "",
  passengers: "",
};

export function QuickBookingForm({ content, locale }: QuickBookingFormProps) {
  const [formState, setFormState] = useState<FormState>({
    ...initialState,
    route: "",
  });
  const [error, setError] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const whatsappText = useMemo(() => {
    const heading = locale === "tr" ? "Yeni transfer talebi" : locale === "de" ? "Neue Transferanfrage" : "New transfer request";

    return [
      heading,
      `${content.cta.fields.fullName}: ${formState.fullName}`,
      `${content.cta.fields.contact}: ${formState.contact}`,
      `${content.cta.fields.route}: ${formState.route}`,
      `${content.cta.fields.dateTime}: ${formState.dateTime}`,
      `${content.cta.fields.passengers}: ${formState.passengers}`,
    ].join("\\n");
  }, [content, formState, locale]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const requiredValues = Object.values(formState).map((value) => value.trim());
    if (requiredValues.some((value) => value.length === 0)) {
      setError(locale === "tr" ? "Lütfen tüm alanları doldurun." : locale === "de" ? "Bitte alle Felder ausfüllen." : "Please fill in all fields.");
      setSubmitted(false);
      return;
    }

    setError("");
    setSubmitted(true);
    const url = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(whatsappText)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section id="booking-form" className="mt-14">
      <div className="grid gap-4 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="relative h-64 overflow-hidden rounded-xl border border-neutral-700 bg-[#1a1a1a] sm:h-80 lg:h-full lg:min-h-[520px]">
            <Image
              src="/images/bize-ulasin.webp"
              alt={
                content.locale === "tr"
                  ? "İzmir Adnan Menderes Havalimanı transfer rezervasyon hizmeti görseli"
                  : content.locale === "de"
                    ? "Bild für die Reservierung von VIP-Transfers ab Flughafen Izmir"
                    : "Image for Izmir airport VIP transfer reservation"
              }
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover"
              priority={false}
            />
          </div>
        </div>

        <div className="lg:col-span-7 rounded-xl border border-neutral-700 bg-[#1a1a1a] p-5 sm:p-7 lg:p-8">
          <div className="mx-auto w-full max-w-2xl pt-2 sm:pt-3">
          <div className="mb-5 border-b border-neutral-700 pb-4 text-left">
            <h2 className="text-xl font-semibold leading-snug text-white sm:text-3xl">
              {content.locale === "tr" ? "2. Adım: Rezervasyon Bilgileri" : content.locale === "de" ? "Schritt 2: Reservierungsdaten" : "Step 2: Booking Details"}
            </h2>
            <p className="mt-2 text-sm text-neutral-300">
              {content.locale === "tr"
                ? "Aşağıdaki bilgileri girin, ardından WhatsApp üzerinden onaylayın."
                : content.locale === "de"
                  ? "Bitte tragen Sie die Daten ein und bestätigen Sie anschließend per WhatsApp."
                  : "Enter your details below, then confirm via WhatsApp."}
            </p>
          </div>

          <form className="mx-auto grid w-full max-w-xl gap-3 md:grid-cols-2" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder={content.cta.fields.fullName}
              className="rounded-lg border border-neutral-600 bg-[#232323] px-4 py-3 text-sm text-white outline-none transition placeholder:text-neutral-400 focus:border-brand"
              value={formState.fullName}
              onChange={(event) => setFormState((prev) => ({ ...prev, fullName: event.target.value }))}
            />
            <input
              type="text"
              placeholder={content.cta.fields.contact}
              className="rounded-lg border border-neutral-600 bg-[#232323] px-4 py-3 text-sm text-white outline-none transition placeholder:text-neutral-400 focus:border-brand"
              value={formState.contact}
              onChange={(event) => setFormState((prev) => ({ ...prev, contact: event.target.value }))}
            />
            <input
              type="text"
              placeholder={content.cta.fields.route}
              className="rounded-lg border border-neutral-600 bg-[#232323] px-4 py-3 text-sm text-white outline-none transition placeholder:text-neutral-400 focus:border-brand"
              value={formState.route}
              onChange={(event) => setFormState((prev) => ({ ...prev, route: event.target.value }))}
            />
            <input
              type="datetime-local"
              aria-label={content.cta.fields.dateTime}
              className="rounded-lg border border-neutral-600 bg-[#232323] px-4 py-3 text-sm text-white outline-none transition focus:border-brand"
              value={formState.dateTime}
              onChange={(event) => setFormState((prev) => ({ ...prev, dateTime: event.target.value }))}
            />
            <input
              type="number"
              min="1"
              placeholder={content.cta.fields.passengers}
              className="rounded-lg border border-neutral-600 bg-[#232323] px-4 py-3 text-sm text-white outline-none transition placeholder:text-neutral-400 focus:border-brand md:col-span-2"
              value={formState.passengers}
              onChange={(event) => setFormState((prev) => ({ ...prev, passengers: event.target.value }))}
            />
            <button
              className="md:col-span-2 inline-flex items-center justify-center rounded-lg bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-95"
              type="submit"
            >
              {content.locale === "tr" ? "3. Adım: WhatsApp ile Onayla" : content.locale === "de" ? "Schritt 3: Per WhatsApp bestätigen" : "Step 3: Confirm on WhatsApp"}
            </button>
          </form>

          {error ? <p className="mt-3 text-left text-sm font-medium text-red-400">{error}</p> : null}
          {submitted && !error ? <p className="mt-3 text-left text-sm font-medium text-brand">{content.cta.successMessage}</p> : null}
          </div>
        </div>
      </div>
    </section>
  );
}
