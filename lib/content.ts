import { siteDe } from "@/content/site.de";
import { siteEn } from "@/content/site.en";
import { siteTr } from "@/content/site.tr";
import { Locale, SiteContent } from "@/lib/i18n";

const contentMap: Record<Locale, SiteContent> = {
  tr: siteTr,
  de: siteDe,
  en: siteEn,
};

export function getSiteContent(locale: Locale): SiteContent {
  return contentMap[locale] ?? contentMap.tr;
}
