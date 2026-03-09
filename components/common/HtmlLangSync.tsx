"use client";

import { useEffect } from "react";

interface HtmlLangSyncProps {
  lang: string;
}

export function HtmlLangSync({ lang }: HtmlLangSyncProps) {
  useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);

  return null;
}
