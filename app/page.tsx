"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { DEFAULT_LOCALE } from "@/lib/i18n";

export default function HomeRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace(`/${DEFAULT_LOCALE}`);
  }, [router]);

  return null;
}
