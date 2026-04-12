import AnimatedSection from "./AnimatedSection";

export default function GreetingSection() {
  return (
    <section className="py-24 px-8 bg-[#faf9f7]">
      <AnimatedSection className="max-w-sm mx-auto text-center">
        {/* Section label */}
        <p
          className="text-xs tracking-[0.3em] text-[#c4788a] uppercase mb-8"
          style={{ fontFamily: "var(--font-display, 'Cormorant Garamond', serif)" }}
        >
          Invitation
        </p>

        {/* Message */}
        <div
          className="text-[15px] leading-9 text-[#2c2c2c] space-y-6"
          style={{ fontFamily: "var(--font-body, 'Noto Serif KR', serif)", fontWeight: 300 }}
        >
          <p>
            서로가 서로의 곁에 있어<br />
            든든한 사람이 되겠습니다.
          </p>
          <div className="w-4 h-px bg-[#e8e2d9] mx-auto" />
          <p>
            저희 두 사람이 하나가 되는 날,<br />
            귀한 걸음 해주셔서<br />
            자리를 빛내주세요.
          </p>
        </div>

        {/* Family info */}
        <AnimatedSection delay={0.2} className="mt-14 pt-12 border-t border-[#e8e2d9]">
          <div className="flex justify-center gap-6 text-sm text-[#2c2c2c]">
            <div className="flex flex-col items-center gap-2">
              <p className="text-xs text-[#8a8278] tracking-widest mb-1">신랑</p>
              <p style={{ fontWeight: 300 }}>김광국 · 김민희의 아들</p>
              <p className="text-base mt-1">김진환</p>
            </div>
            <div className="w-px bg-[#e8e2d9]" />
            <div className="flex flex-col items-center gap-2">
              <p className="text-xs text-[#8a8278] tracking-widest mb-1">신부</p>
              <p style={{ fontWeight: 300 }}>이대균 · 송지은의 딸</p>
              <p className="text-base mt-1">이참결</p>
            </div>
          </div>
        </AnimatedSection>
      </AnimatedSection>
    </section>
  );
}
