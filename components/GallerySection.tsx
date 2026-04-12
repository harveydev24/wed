"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import AnimatedSection from "./AnimatedSection";

const images = [
  "/images/gallery_01.jpg",
  "/images/gallery_02.jpg",
  "/images/gallery_03.jpg",
  "/images/gallery_04.jpg",
  "/images/gallery_05.jpeg",
  "/images/gallery_06.jpeg",
  "/images/gallery_07.jpeg",
  "/images/gallery_08.jpeg",
  "/images/gallery_09.jpeg",
  "/images/gallery_10.jpeg",
  "/images/gallery_11.jpeg",
  "/images/gallery_12.jpeg",
  "/images/gallery_13.jpeg",
  "/images/gallery_14.jpeg",
  "/images/gallery_15.jpeg",
  "/images/gallery_16.jpeg",
  "/images/gallery_17.jpeg",
];

const TOTAL = images.length;
const THUMB_HEIGHT = 260;

export default function GallerySection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const itemWidth = el.scrollWidth / TOTAL;
    const index = Math.round(el.scrollLeft / itemWidth);
    setActiveIndex(Math.min(Math.max(index, 0), TOTAL - 1));
  }, []);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex((i) => (i !== null ? (i - 1 + TOTAL) % TOTAL : null));
  const next = () => setLightboxIndex((i) => (i !== null ? (i + 1) % TOTAL : null));

  return (
    <section className="py-24 bg-[#faf9f7]">
      <AnimatedSection>
        {/* Section label */}
        <div className="flex flex-col items-center gap-1 mb-10">
          <p
            className="text-xs tracking-[0.3em] text-[#F59E9E] uppercase"
            style={{ fontFamily: "var(--font-display, 'Cormorant Garamond', serif)" }}
          >
            Gallery
          </p>
          <p
            className="text-xs text-[#F59E9E]"
            style={{ fontFamily: "var(--font-body, 'Noto Serif KR', serif)", fontWeight: 300 }}
          >
            갤러리
          </p>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto gap-3 px-6 snap-x snap-mandatory items-center"
          style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
        >
          {images.map((src, i) => (
            <div
              key={i}
              className="shrink-0 snap-center cursor-pointer rounded-sm overflow-hidden"
              style={{ height: `${THUMB_HEIGHT}px` }}
              onClick={() => openLightbox(i)}
            >
              <Image
                src={src}
                alt={`갤러리 ${i + 1}`}
                width={1200}
                height={1200}
                style={{ height: `${THUMB_HEIGHT}px`, width: "auto" }}
                sizes="400px"
              />
            </div>
          ))}
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-5">
          {images.map((_, i) => (
            <div
              key={i}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === activeIndex ? "16px" : "4px",
                height: "4px",
                backgroundColor: i === activeIndex ? "#F59E9E" : "#e8e2d9",
              }}
            />
          ))}
        </div>
      </AnimatedSection>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeLightbox}
          >
            {/* Image with pinch-zoom */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-[92vw] max-h-[82vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <TransformWrapper
                initialScale={1}
                minScale={1}
                maxScale={4}
                doubleClick={{ mode: "toggle" }}
              >
                <TransformComponent
                  wrapperStyle={{ maxWidth: "92vw", maxHeight: "82vh" }}
                  contentStyle={{ maxWidth: "92vw", maxHeight: "82vh" }}
                >
                  <Image
                    src={images[lightboxIndex]}
                    alt={`갤러리 ${lightboxIndex + 1}`}
                    width={1200}
                    height={1200}
                    style={{ maxWidth: "92vw", maxHeight: "82vh", width: "auto", height: "auto" }}
                    sizes="92vw"
                  />
                </TransformComponent>
              </TransformWrapper>
            </motion.div>

            {/* Close */}
            <button
              className="absolute top-5 right-5 text-white/70 hover:text-white"
              onClick={closeLightbox}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
              </svg>
            </button>

            {/* Prev */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white"
              onClick={(e) => { e.stopPropagation(); prev(); }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Next */}
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white"
              onClick={(e) => { e.stopPropagation(); next(); }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Counter */}
            <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/50 text-xs tracking-widest"
              style={{ fontFamily: "var(--font-display, 'Cormorant Garamond', serif)" }}
            >
              {lightboxIndex + 1} / {TOTAL}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
