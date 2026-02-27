import { notFound } from "next/navigation";

import { LocaleAutoDetect } from "@/components/common/LocaleAutoDetect";
import { Locale, isLocale, localeToBcp47 } from "@/lib/i18n";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const castLocale = locale as Locale;

  return (
    <>
      <LocaleAutoDetect currentLocale={castLocale} />
      <div lang={localeToBcp47(castLocale)}>{children}</div>
    </>
  );
}
