"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { DEFAULT_LOCALE, LOCALE_STORAGE_KEY, Locale, isLocale } from "@/lib/i18n";

function detectBrowserLocale(): Locale {
  const candidates = [...(navigator.languages ?? []), navigator.language].filter(Boolean);

  for (const candidate of candidates) {
    const lower = candidate.toLowerCase();
    if (lower.startsWith("tr")) return "tr";
    if (lower.startsWith("de")) return "de";
    if (lower.startsWith("en")) return "en";
  }

  return DEFAULT_LOCALE;
}

export default function HomeRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    const savedLocale = localStorage.getItem(LOCALE_STORAGE_KEY);
    const locale = savedLocale && isLocale(savedLocale) ? savedLocale : detectBrowserLocale();

    localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    document.cookie = `preferred-locale=${locale}; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`;
    router.replace(`/${locale}`);
  }, [router]);

  return null;
}
