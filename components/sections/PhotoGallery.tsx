"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

import { Locale } from "@/lib/i18n";

interface PhotoGalleryProps {
  locale: Locale;
}

const galleryImages = [
  "/images/gallery/gallery-1.webp",
  "/images/gallery/gallery-2.webp",
  "/images/gallery/gallery-3.webp",
  "/images/gallery/gallery-4.webp",
  "/images/gallery/gallery-5.webp",
  "/images/gallery/gallery-6.webp",
  "/images/gallery/gallery-7.webp",
  "/images/gallery/gallery-8.webp",
  "/images/gallery/gallery-9.webp",
  "/images/gallery/gallery-10.webp",
  "/images/gallery/gallery-11.webp",
  "/images/gallery/gallery-12.webp",
];

const MAX_DESKTOP_IMAGES = 8;

export function PhotoGallery({ locale }: PhotoGalleryProps) {
  const [visibleSlides, setVisibleSlides] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = useMemo(() => galleryImages.slice(0, MAX_DESKTOP_IMAGES), []);

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

  const maxIndex = useMemo(() => Math.max(0, images.length - visibleSlides), [images.length, visibleSlides]);
  const pageCount = maxIndex + 1;
  const safeIndex = Math.min(currentIndex, maxIndex > 0 ? maxIndex : 0);

  return (
    <section className="mt-10" id="photo-gallery">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">
            {locale === "tr" ? "Galeri" : locale === "de" ? "Galerie" : "Gallery"}
          </h2>
          <p className="mt-2 text-sm text-neutral-300 sm:text-base">
            {locale === "tr"
              ? "Transfer hizmetimizden kareler"
              : locale === "de"
                ? "Einblicke in unseren Transferservice"
                : "Snapshots from our transfer service"}
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
              key={`photo-dot-${index}`}
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
          {images.map((imageSrc, index) => (
            <div key={imageSrc} className="shrink-0 px-1.5" style={{ width: `${100 / visibleSlides}%` }}>
              <div className="overflow-hidden rounded-xl border border-neutral-700/80 bg-[#171717]">
                <div className="relative h-[560px] sm:h-[520px] lg:h-[540px]">
                <Image
                  src={imageSrc}
                  alt={
                    locale === "tr"
                      ? `Ütopia İzmir Transfer galeri görseli ${index + 1}`
                      : locale === "de"
                        ? `Ütopia Izmir Transfer Galeriebild ${index + 1}`
                        : `Ütopia İzmir Transfer gallery image ${index + 1}`
                  }
                  fill
                  sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                  loading="lazy"
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
