import { NextRequest, NextResponse } from "next/server";

import { DEFAULT_LOCALE, isLocale, LOCALE_COOKIE, normalizeLocale } from "@/lib/i18n";

export const runtime = "edge";

function getLocaleFromRequest(request: NextRequest) {
  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  if (cookieLocale && isLocale(cookieLocale)) {
    return cookieLocale;
  }

  const headerLocale = request.headers.get("accept-language");
  return normalizeLocale(headerLocale);
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") ||
    pathname === "/favicon.ico"
  ) {
    return NextResponse.next();
  }

  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) {
    const locale = getLocaleFromRequest(request);
    const response = NextResponse.redirect(new URL(`/${locale}`, request.url));
    response.cookies.set(LOCALE_COOKIE, locale, {
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
      path: "/",
    });
    return response;
  }

  const localeSegment = segments[0];
  if (!isLocale(localeSegment)) {
    const locale = getLocaleFromRequest(request) ?? DEFAULT_LOCALE;
    const response = NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
    response.cookies.set(LOCALE_COOKIE, locale, {
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
      path: "/",
    });
    return response;
  }

  const response = NextResponse.next();
  response.cookies.set(LOCALE_COOKIE, localeSegment, {
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
    path: "/",
  });
  return response;
}

export const config = {
  matcher: ["/:path*"],
};
