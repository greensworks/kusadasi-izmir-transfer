"use client";

import { useEffect } from "react";

import { LOCALE_STORAGE_KEY, Locale } from "@/lib/i18n";

interface LocaleAutoDetectProps {
  currentLocale: Locale;
}

export function LocaleAutoDetect({ currentLocale }: LocaleAutoDetectProps) {
  useEffect(() => {
    localStorage.setItem(LOCALE_STORAGE_KEY, currentLocale);
  }, [currentLocale]);

  return null;
}
