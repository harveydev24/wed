"use client";

import { useRef, useState, useCallback } from "react";
import AnimatedSection from "./AnimatedSection";

const TOTAL = 6;

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
        <p
          className="text-xs tracking-[0.3em] text-[#9c8b6e] uppercase mb-10 text-center"
          style={{ fontFamily: "var(--font-display, 'Cormorant Garamond', serif)" }}
        >
          Gallery
        </p>

        {/* Horizontal scroll carousel */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto gap-3 px-6 snap-x snap-mandatory"
          style={{
            scrollbarWidth: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {Array.from({ length: TOTAL }).map((_, i) => (
            <div
              key={i}
              className="shrink-0 snap-center aspect-[3/4] w-[72vw] max-w-[280px] bg-[#e8e2d9] rounded-sm flex items-center justify-center"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-[#c8bfb4]">
                <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
                <path d="M21 15l-5-5L5 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          ))}
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-5">
          {Array.from({ length: TOTAL }).map((_, i) => (
            <div
              key={i}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === activeIndex ? "16px" : "4px",
                height: "4px",
                backgroundColor: i === activeIndex ? "#9c8b6e" : "#e8e2d9",
              }}
            />
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}
