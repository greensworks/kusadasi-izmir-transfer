"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { LOCALE_STORAGE_KEY, Locale, SUPPORTED_LOCALES } from "@/lib/i18n";

interface LanguageSwitcherProps {
  currentLocale: Locale;
}

export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const pathname = usePathname();

  function buildPath(nextLocale: Locale): string {
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length === 0) {
      return `/${nextLocale}`;
    }

    segments[0] = nextLocale;
    return `/${segments.join("/")}`;
  }

  function handleSelect(nextLocale: Locale) {
    localStorage.setItem(LOCALE_STORAGE_KEY, nextLocale);
  }

  return (
    <div className="inline-flex rounded-full border border-neutral-600 bg-[#2f2f2f] p-1">
      {SUPPORTED_LOCALES.map((locale) => (
        <Link
          key={locale}
          href={buildPath(locale)}
          onClick={() => handleSelect(locale)}
          className={`rounded-full px-3 py-1 text-xs font-semibold transition sm:text-sm ${
            locale === currentLocale ? "bg-brand text-brandDark" : "text-neutral-300 hover:text-white"
          }`}
        >
          {locale.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
