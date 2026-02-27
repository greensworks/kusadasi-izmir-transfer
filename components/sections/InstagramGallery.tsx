"use client";

import { useEffect, useMemo, useState } from "react";

import { Locale } from "@/lib/i18n";

interface InstagramGalleryProps {
  locale: Locale;
}

const instagramPosts = [
  "https://www.instagram.com/p/DUi6dKVitCN/",
  "https://www.instagram.com/p/DRPyE4jjHqQ/",
  "https://www.instagram.com/p/DMf8Gdhqd-R/",
  "https://www.instagram.com/p/DLaV4RvqjWU/",
  "https://www.instagram.com/p/DLNlN7cqN8P/",
  "https://www.instagram.com/p/DKyp0NgIQbh/",
  "https://www.instagram.com/p/DOOrgwjivn5/",
  "https://www.instagram.com/p/DMQi0uLqxF2/",
];

const MAX_DESKTOP_POSTS = 8;

function toEmbedUrl(url: string): string {
  return `${url.replace(/\/$/, "")}/embed`;
}

export function InstagramGallery({ locale }: InstagramGalleryProps) {
  const [visibleSlides, setVisibleSlides] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const posts = useMemo(() => instagramPosts.slice(0, MAX_DESKTOP_POSTS), []);

  useEffect(() => {
    function updateSlides() {
      if (window.innerWidth >= 1280) {
        setVisibleSlides(4);
        return;
      }
      if (window.innerWidth >= 1024) {
        setVisibleSlides(3);
        return;
      }
      if (window.innerWidth >= 640) {
        setVisibleSlides(2);
        return;
      }
      setVisibleSlides(1);
    }

    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const maxIndex = useMemo(() => Math.max(0, posts.length - visibleSlides), [posts.length, visibleSlides]);
  const pageCount = maxIndex + 1;
  const safeIndex = Math.min(currentIndex, maxIndex > 0 ? maxIndex : 0);

  return (
    <section className="mt-14" id="instagram-gallery">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">
            {locale === "tr" ? "Instagram Galeri" : locale === "de" ? "Instagram Galerie" : "Instagram Gallery"}
          </h2>
          <p className="mt-2 text-sm text-neutral-300 sm:text-base">
            {locale === "tr" ? "Güncel transfer paylaşımlarımız" : locale === "de" ? "Unsere aktuellen Transfer-Beiträge" : "Our latest transfer posts"}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setCurrentIndex(safeIndex <= 0 ? maxIndex : safeIndex - 1)}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-600 text-neutral-200 transition hover:text-white"
            aria-label={locale === "tr" ? "Önceki" : locale === "de" ? "Zurück" : "Previous"}
          >
            ‹
          </button>
          {Array.from({ length: pageCount }).map((_, index) => (
            <button
              key={`gallery-dot-${index}`}
              type="button"
              onClick={() => setCurrentIndex(index)}
              className={index === safeIndex ? "h-1.5 w-8 rounded-full bg-brand" : "h-1.5 w-3 rounded-full bg-neutral-600"}
              aria-label={`${locale === "tr" ? "Slayt" : locale === "de" ? "Slide" : "Slide"} ${index + 1}`}
            />
          ))}
          <button
            type="button"
            onClick={() => setCurrentIndex(safeIndex >= maxIndex ? 0 : safeIndex + 1)}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-600 text-neutral-200 transition hover:text-white"
            aria-label={locale === "tr" ? "Sonraki" : locale === "de" ? "Weiter" : "Next"}
          >
            ›
          </button>
        </div>
      </div>

      <div className="mt-6 overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${(100 / visibleSlides) * safeIndex}%)` }}
        >
          {posts.map((url) => (
            <div key={url} className="shrink-0 px-1.5" style={{ width: `${100 / visibleSlides}%` }}>
              <div className="overflow-hidden rounded-xl border border-neutral-700/80 bg-[#171717]">
                <div className="h-[560px] sm:h-[520px] lg:h-[540px]">
                <iframe
                  src={toEmbedUrl(url)}
                  title={`instagram-post-${url.split("/").filter(Boolean).pop()}`}
                  className="block h-full w-full"
                  loading="lazy"
                  style={{ border: 0 }}
                />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
