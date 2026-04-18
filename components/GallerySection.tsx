"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import { TransformWrapper, TransformComponent, ReactZoomPanPinchContentRef } from "react-zoom-pan-pinch";

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

function Lightbox({
  index,
  onClose,
  onNavigate,
}: {
  index: number;
  onClose: () => void;
  onNavigate: (next: number) => void;
}) {
  const transformRef = useRef<ReactZoomPanPinchContentRef>(null);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const scaleRef = useRef(1);
  const [panDisabled, setPanDisabled] = useState(true);

  // body 스크롤 잠금
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  // 키보드 화살표 키 네비게이션
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" && index > 0) onNavigate(index - 1);
      if (e.key === "ArrowRight" && index < TOTAL - 1) onNavigate(index + 1);
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [index, onNavigate, onClose]);

  // 이미지 전환 시 줌 리셋
  useEffect(() => {
    transformRef.current?.resetTransform();
    scaleRef.current = 1;
    setPanDisabled(true);
  }, [index]);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      touchStartX.current = e.touches[0].clientX;
      touchStartY.current = e.touches[0].clientY;
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (scaleRef.current > 1) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0 && index < TOTAL - 1) onNavigate(index + 1);
      if (dx > 0 && index > 0) onNavigate(index - 1);
    }
  };

  return (
    <div
      style={{ position: "fixed", inset: 0, zIndex: 50, background: "black" }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <TransformWrapper
        ref={transformRef}
        minScale={1}
        maxScale={5}
        limitToBounds
        panning={{ disabled: panDisabled }}
        onTransform={(ref) => {
          const s = ref.state.scale;
          scaleRef.current = s;
          const shouldDisable = s <= 1;
          setPanDisabled((prev) => (prev !== shouldDisable ? shouldDisable : prev));
        }}
      >
        <TransformComponent
          wrapperStyle={{ width: "100vw", height: "100dvh" }}
          contentStyle={{ width: "100vw", height: "100dvh" }}
        >
          <div style={{ width: "100vw", height: "100dvh", position: "relative" }}>
            <Image
              src={images[index]}
              alt={`갤러리 ${index + 1}`}
              fill
              style={{ objectFit: "contain" }}
              sizes="100vw"
              priority
            />
          </div>
        </TransformComponent>
      </TransformWrapper>

      {/* 닫기 버튼 */}
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: "1rem",
          right: "1rem",
          zIndex: 51,
          color: "white",
          fontSize: "1.5rem",
          lineHeight: 1,
          padding: "0.5rem",
          background: "rgba(0,0,0,0.4)",
          borderRadius: "50%",
          width: "2.5rem",
          height: "2.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        ✕
      </button>

      {/* 이전 버튼 */}
      {index > 0 && (
        <button
          onClick={() => onNavigate(index - 1)}
          style={{
            position: "absolute",
            left: "1rem",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 51,
            color: "white",
            fontSize: "1.25rem",
            background: "rgba(0,0,0,0.4)",
            borderRadius: "50%",
            width: "2.5rem",
            height: "2.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          ‹
        </button>
      )}

      {/* 다음 버튼 */}
      {index < TOTAL - 1 && (
        <button
          onClick={() => onNavigate(index + 1)}
          style={{
            position: "absolute",
            right: "1rem",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 51,
            color: "white",
            fontSize: "1.25rem",
            background: "rgba(0,0,0,0.4)",
            borderRadius: "50%",
            width: "2.5rem",
            height: "2.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          ›
        </button>
      )}

      {/* 이미지 카운터 */}
      <p
        style={{
          position: "absolute",
          bottom: "1.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 51,
          color: "rgba(255,255,255,0.7)",
          fontSize: "0.75rem",
          letterSpacing: "0.1em",
          fontFamily: "var(--font-body, 'Noto Serif KR', serif)",
          fontWeight: 300,
        }}
      >
        {index + 1} / {TOTAL}
      </p>
    </div>
  );
}

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
              className="shrink-0 snap-center rounded-sm overflow-hidden cursor-pointer"
              style={{ height: `${THUMB_HEIGHT}px` }}
              onClick={() => setLightboxIndex(i)}
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
      {lightboxIndex !== null && (
        <Lightbox
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </section>
  );
}
