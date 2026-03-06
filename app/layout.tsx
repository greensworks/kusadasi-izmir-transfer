import type { Metadata } from "next";
import Script from "next/script";

import "@/app/globals.css";
import { SITE_CONFIG } from "@/lib/i18n";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.domain),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body>
        {children}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-339823997"
          strategy="afterInteractive"
        />
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-339823997');
          `}
        </Script>
      </body>
    </html>
  );
}
