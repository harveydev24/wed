"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
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

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const itemWidth = el.scrollWidth / TOTAL;
    const index = Math.round(el.scrollLeft / itemWidth);
    setActiveIndex(Math.min(Math.max(index, 0), TOTAL - 1));
  }, []);


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
              className="shrink-0 snap-center rounded-sm overflow-hidden"
              style={{ height: `${THUMB_HEIGHT}px` }}
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
    </section>
  );
}
