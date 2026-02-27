import type { Metadata } from "next";

import "@/app/globals.css";
import { SITE_CONFIG } from "@/lib/i18n";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.domain),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
