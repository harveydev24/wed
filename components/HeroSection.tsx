"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-[#faf9f7] px-6 text-center overflow-hidden">
      {/* Top ornament line */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-[#e8e2d9]"
        initial={{ scaleY: 0, originY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      />

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center gap-8"
      >
        {/* Names */}
        <div className="flex flex-col items-center gap-3">
          <h1
            className="text-5xl font-light tracking-wide text-[#2c2c2c]"
            style={{ fontFamily: "var(--font-body, 'Noto Serif KR', serif)", fontWeight: 300 }}
          >
            김진환
          </h1>
          <span
            className="text-2xl font-light text-[#9c8b6e] italic"
            style={{ fontFamily: "var(--font-display, 'Cormorant Garamond', serif)" }}
          >
            &amp;
          </span>
          <h1
            className="text-5xl font-light tracking-wide text-[#2c2c2c]"
            style={{ fontFamily: "var(--font-body, 'Noto Serif KR', serif)", fontWeight: 300 }}
          >
            이참결
          </h1>
        </div>

        {/* Date Korean */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-8 h-px bg-[#9c8b6e]" />
          <p className="text-sm text-[#8a8278] tracking-widest">
            2026년 6월 13일 토요일 오후 1시
          </p>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
            <rect x="6.5" y="0.5" width="3" height="5" rx="1.5" fill="#9c8b6e" />
            <rect x="0.5" y="0.5" width="15" height="23" rx="7.5" stroke="#e8e2d9" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
