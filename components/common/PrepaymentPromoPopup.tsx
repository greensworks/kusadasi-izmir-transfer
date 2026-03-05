"use client";

import { useCallback, useEffect, useState } from "react";

import type { Locale } from "@/lib/i18n";

const DISMISS_KEY = "prepayment-popup-dismissed";

const popupTexts: Record<
  Locale,
  { badge: string; title: string; description: string; cta: string; closeLabel: string }
> = {
  tr: {
    badge: "Ön Ödeme Avantajı",
    title: "Transferinizi şimdi ayırtın.",
    description: "Hızlı rezervasyon için WhatsApp hattımıza yazın, yerinizi hemen garantiye alın.",
    cta: "Rezervasyon Yap",
    closeLabel: "Popup'ı kapat",
  },
  de: {
    badge: "Vorauszahlungsvorteil",
    title: "Sichern Sie jetzt Ihren Transfer.",
    description: "Schreiben Sie uns per WhatsApp und bestätigen Sie Ihre Reservierung in wenigen Minuten.",
    cta: "Jetzt reservieren",
    closeLabel: "Popup schließen",
  },
  en: {
    badge: "Prepayment Benefit",
    title: "Reserve your transfer now.",
    description: "Message us on WhatsApp and confirm your booking in just a few minutes.",
    cta: "Book Now",
    closeLabel: "Close popup",
  },
};

interface PrepaymentPromoPopupProps {
  locale: Locale;
  whatsappUrl: string;
  delayMs?: number;
}

export function PrepaymentPromoPopup({ locale, whatsappUrl, delayMs = 5000 }: PrepaymentPromoPopupProps) {
  const [isOpen, setIsOpen] = useState(false);

  const dismissPopup = useCallback(() => {
    setIsOpen(false);
    sessionStorage.setItem(DISMISS_KEY, "1");
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (sessionStorage.getItem(DISMISS_KEY) === "1") {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setIsOpen(true);
    }, delayMs);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [delayMs]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        dismissPopup();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeydown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [dismissPopup, isOpen]);

  const text = popupTexts[locale];

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 p-4"
      onClick={dismissPopup}
      role="presentation"
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="prepayment-popup-title"
        className="relative w-full max-w-md rounded-2xl border border-neutral-700 bg-[#151515] p-6 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          aria-label={text.closeLabel}
          onClick={dismissPopup}
          className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-600 text-neutral-300 transition hover:text-white"
        >
          ×
        </button>

        <p className="mb-2 inline-flex rounded-full bg-brand/20 px-3 py-1 text-xs font-semibold text-brand">{text.badge}</p>
        <h2 id="prepayment-popup-title" className="text-2xl font-semibold text-white">
          {text.title}
        </h2>
        <p className="mt-3 text-sm leading-6 text-neutral-300">{text.description}</p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          onClick={dismissPopup}
          className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition hover:brightness-95"
        >
          {text.cta}
        </a>
      </section>
    </div>
  );
}
