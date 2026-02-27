"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

import { LOCALE_COOKIE, Locale, normalizeLocale } from "@/lib/i18n";

interface LocaleAutoDetectProps {
  currentLocale: Locale;
}

export function LocaleAutoDetect({ currentLocale }: LocaleAutoDetectProps) {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const hasPreference = document.cookie
      .split(";")
      .map((entry) => entry.trim())
      .some((entry) => entry.startsWith(`${LOCALE_COOKIE}=`));

    if (hasPreference) {
      return;
    }

    const browserLocale = normalizeLocale(navigator.language);
    if (browserLocale === currentLocale) {
      return;
    }

    const segments = pathname.split("/").filter(Boolean);
    if (segments.length === 0) {
      router.replace(`/${browserLocale}`);
      return;
    }

    segments[0] = browserLocale;
    router.replace(`/${segments.join("/")}`);
  }, [currentLocale, pathname, router]);

  return null;
}
