"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const WEDDING_DATE = new Date("2026-06-13T13:00:00+09:00");
const YEAR = 2026;
const MONTH = 6;
const FIRST_DAY_OF_WEEK = 1; // June 1, 2026 = Monday
const DAYS_IN_MONTH = 30;
const WEDDING_DAY = 13;

interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  past: boolean;
}

function calcCountdown(): Countdown {
  const diff = WEDDING_DATE.getTime() - Date.now();
  const past = diff < 0;
  const abs = Math.abs(diff);
  return {
    days: Math.floor(abs / (1000 * 60 * 60 * 24)),
    hours: Math.floor((abs / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((abs / (1000 * 60)) % 60),
    seconds: Math.floor((abs / 1000) % 60),
    past,
  };
}

function CountUnit({ value, label }: { value: number; label: string }) {
  const prev = useRef(value);
  const changed = prev.current !== value;
  useEffect(() => { prev.current = value; });

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="w-14 h-14 relative overflow-hidden flex items-center justify-center">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={value}
            initial={changed ? { y: -20, opacity: 0 } : false}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute text-2xl text-[#2c2c2c]"
            style={{
              fontFamily: "var(--font-display, 'Cormorant Garamond', serif)",
              fontWeight: 300,
            }}
          >
            {String(value).padStart(2, "0")}
          </motion.span>
        </AnimatePresence>
      </div>
      <p
        className="text-[10px] text-[#8a8278] tracking-widest uppercase"
        style={{ fontFamily: "var(--font-display, 'Cormorant Garamond', serif)" }}
      >
        {label}
      </p>
    </div>
  );
}

export default function InfoSection() {
  const [countdown, setCountdown] = useState<Countdown | null>(null);

  useEffect(() => {
    setCountdown(calcCountdown());
    const id = setInterval(() => setCountdown(calcCountdown()), 1000);
    return () => clearInterval(id);
  }, []);

  const cells: (number | null)[] = [
    ...Array(FIRST_DAY_OF_WEEK).fill(null),
    ...Array.from({ length: DAYS_IN_MONTH }, (_, i) => i + 1),
  ];
  while (cells.length % 7 !== 0) cells.push(null);
  const weeks: (number | null)[][] = [];
  for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7));

  const dayLabels = ["일", "월", "화", "수", "목", "금", "토"];

  return (
    <section className="py-24 px-6 bg-[#f4f1ec]">
      <AnimatedSection className="text-center">
        {/* Section label */}
        <div className="flex flex-col items-center gap-1 mb-12">
          <p
            className="text-xs tracking-[0.3em] text-[#F59E9E] uppercase"
            style={{ fontFamily: "var(--font-display, 'Cormorant Garamond', serif)" }}
          >
            Date
          </p>
          <p
            className="text-xs text-[#F59E9E]"
            style={{ fontFamily: "var(--font-body, 'Noto Serif KR', serif)", fontWeight: 300 }}
          >
            예식 날짜
          </p>
        </div>

        {/* Date text */}
        <div className="mb-10">
          <p
            className="text-lg text-[#2c2c2c] tracking-widest"
            style={{ fontFamily: "var(--font-body, 'Noto Serif KR', serif)", fontWeight: 300 }}
          >
            2026년 6월 13일 토요일 오후 1시
          </p>
        </div>

        <div className="w-8 h-px bg-[#F59E9E] mx-auto mb-10" />

        {/* Calendar */}
        <div className="mb-8">
          <p
            className="text-sm text-[#8a8278] mb-5 tracking-widest"
            style={{ fontFamily: "var(--font-display, 'Cormorant Garamond', serif)" }}
          >
            {YEAR} · {String(MONTH).padStart(2, "0")}
          </p>

          <div className="grid grid-cols-7 mb-2">
            {dayLabels.map((d, i) => (
              <div
                key={d}
                className="text-center text-xs py-1"
                style={{
                  color: i === 0 ? "#c0897a" : i === 6 ? "#7a8fb0" : "#8a8278",
                  fontFamily: "var(--font-body, 'Noto Serif KR', serif)",
                  fontWeight: 300,
                }}
              >
                {d}
              </div>
            ))}
          </div>

          {weeks.map((week, wi) => (
            <div key={wi} className="grid grid-cols-7">
              {week.map((day, di) => {
                const isWedding = day === WEDDING_DAY;
                const isSun = di === 0;
                const isSat = di === 6;
                return (
                  <div key={di} className="flex items-center justify-center py-1">
                    {day !== null && (
                      <div
                        className="w-8 h-8 flex items-center justify-center rounded-full text-sm"
                        style={{
                          backgroundColor: isWedding ? "#F59E9E" : "transparent",
                          color: isWedding ? "#fff" : isSun ? "#c0897a" : isSat ? "#7a8fb0" : "#2c2c2c",
                          fontFamily: "var(--font-display, 'Cormorant Garamond', serif)",
                          fontWeight: isWedding ? 400 : 300,
                          fontSize: "0.9rem",
                        }}
                      >
                        {day}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Countdown */}
        {countdown && (
          <AnimatedSection delay={0.2}>
            <div className="flex flex-col items-center gap-4">
              <p
                className="text-sm text-[#8a8278]"
                style={{ fontFamily: "var(--font-body, 'Noto Serif KR', serif)", fontWeight: 300 }}
              >
                {countdown.past ? (
                  <>진환, 참결이 결혼한 지 <span className="text-[#F59E9E]">{countdown.days}</span>일 됐습니다.</>
                ) : (
                  <>진환, 참결의 결혼식이 <span className="text-[#F59E9E]">{countdown.days}</span>일 남았습니다.</>
                )}
              </p>
              <div className="flex items-start gap-1">
                <CountUnit value={countdown.days} label="days" />
                <span className="text-xl text-[#e8e2d9] mt-3">:</span>
                <CountUnit value={countdown.hours} label="hours" />
                <span className="text-xl text-[#e8e2d9] mt-3">:</span>
                <CountUnit value={countdown.minutes} label="min" />
                <span className="text-xl text-[#e8e2d9] mt-3">:</span>
                <CountUnit value={countdown.seconds} label="sec" />
              </div>
            </div>
          </AnimatedSection>
        )}
      </AnimatedSection>
    </section>
  );
}
