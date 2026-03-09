import type { Metadata } from "next";

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

        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-339823997"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-339823997');",
          }}
        />
      </body>
    </html>
  );
}
