import AnimatedSection from "./AnimatedSection";

export default function InfoSection() {
  return (
    <section className="py-24 px-8 bg-[#f4f1ec]">
      <AnimatedSection className="max-w-sm mx-auto text-center">
        {/* Section label */}
        <p
          className="text-xs tracking-[0.3em] text-[#9c8b6e] uppercase mb-12"
          style={{ fontFamily: "var(--font-display, 'Cormorant Garamond', serif)" }}
        >
          Date &amp; Venue
        </p>

        {/* Date */}
        <div className="mb-10">
          <p
            className="text-lg text-[#2c2c2c] tracking-widest"
            style={{ fontFamily: "var(--font-body, 'Noto Serif KR', serif)", fontWeight: 300 }}
          >
            2026년 6월 13일 토요일 오후 1시
          </p>
        </div>

        <div className="w-8 h-px bg-[#9c8b6e] mx-auto mb-10" />

        {/* Venue */}
        <div>
          <p
            className="text-lg text-[#2c2c2c] mb-2"
            style={{ fontFamily: "var(--font-body, 'Noto Serif KR', serif)", fontWeight: 300 }}
          >
            네이버 1784 28F SKY HALL
          </p>
          <p
            className="text-sm text-[#8a8278]"
            style={{ fontFamily: "var(--font-body, 'Noto Serif KR', serif)", fontWeight: 300 }}
          >
            경기도 성남시 분당구 정자일로 95
          </p>
        </div>
      </AnimatedSection>
    </section>
  );
}
