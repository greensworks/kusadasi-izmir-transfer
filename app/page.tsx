import type { Metadata } from "next";

import { HomeRedirectClient } from "@/components/common/HomeRedirectClient";
import { SITE_CONFIG } from "@/lib/i18n";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: `${SITE_CONFIG.domain}/tr`,
  },
};

export default function HomePage() {
  return <HomeRedirectClient />;
}
