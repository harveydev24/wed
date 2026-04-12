import AnimatedSection from "./AnimatedSection";

const NAVER_MAP_URL =
  "https://map.naver.com/v5/search/%EB%84%A4%EC%9D%B4%EB%B2%84%201784";

export default function LocationSection() {
  return (
    <section className="py-24 px-6 bg-[#f4f1ec]">
      <AnimatedSection className="max-w-sm mx-auto">
        {/* Section label */}
        <p
          className="text-xs tracking-[0.3em] text-[#c4788a] uppercase mb-10 text-center"
          style={{ fontFamily: "var(--font-display, 'Cormorant Garamond', serif)" }}
        >
          Location
        </p>

        {/* Venue name */}
        <div className="text-center mb-8">
          <p
            className="text-lg text-[#2c2c2c] mb-1"
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

        {/* Static map placeholder */}
        <div className="relative rounded-sm overflow-hidden mb-4 bg-[#e8e2d9] aspect-[4/3] flex items-center justify-center">
          {/* Grid lines to suggest a map */}
          <svg
            className="absolute inset-0 w-full h-full opacity-30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#c4788a" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            {/* Roads */}
            <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#d9b8bc" strokeWidth="3" />
            <line x1="0" y1="55%" x2="100%" y2="55%" stroke="#d9b8bc" strokeWidth="3" />
            <line x1="30%" y1="0" x2="30%" y2="100%" stroke="#e4c8c4" strokeWidth="1.5" />
            <line x1="70%" y1="0" x2="70%" y2="100%" stroke="#e4c8c4" strokeWidth="1.5" />
            <line x1="0" y1="30%" x2="100%" y2="30%" stroke="#e4c8c4" strokeWidth="1.5" />
            <line x1="0" y1="75%" x2="100%" y2="75%" stroke="#e4c8c4" strokeWidth="1.5" />
          </svg>

          {/* Location pin */}
          <div className="relative z-10 flex flex-col items-center">
            <svg width="32" height="40" viewBox="0 0 32 40" fill="none">
              <path
                d="M16 0C7.164 0 0 7.164 0 16c0 12 16 24 16 24s16-12 16-24C32 7.164 24.836 0 16 0z"
                fill="#c4788a"
              />
              <circle cx="16" cy="16" r="6" fill="white" />
            </svg>
            <div className="mt-2 bg-white/90 rounded px-3 py-1 shadow-sm">
              <p
                className="text-xs text-[#2c2c2c] whitespace-nowrap"
                style={{ fontFamily: "var(--font-body, 'Noto Serif KR', serif)" }}
              >
                네이버 1784
              </p>
            </div>
          </div>
        </div>

        {/* Naver map button */}
        <a
          href={NAVER_MAP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full py-3 border border-[#c4788a] text-center text-sm text-[#c4788a] tracking-widest hover:bg-[#c4788a] hover:text-white transition-colors duration-300 rounded-sm mb-10"
          style={{ fontFamily: "var(--font-body, 'Noto Serif KR', serif)", fontWeight: 300 }}
        >
          네이버 지도에서 보기
        </a>

        {/* Transportation */}
        <AnimatedSection delay={0.2} className="space-y-5">
          <TransportItem
            icon={<SubwayIcon />}
            title="지하철"
            description="신분당선 정자역 1번 출구에서 도보 5분"
          />
          <div className="w-full h-px bg-[#e8e2d9]" />
          <TransportItem
            icon={<BusIcon />}
            title="버스"
            description="정자역 정류장 하차 후 도보 5분"
          />
          <div className="w-full h-px bg-[#e8e2d9]" />
          <TransportItem
            icon={<CarIcon />}
            title="자가용"
            description="네이버 1784 지하주차장 이용 가능"
          />
        </AnimatedSection>
      </AnimatedSection>
    </section>
  );
}

function TransportItem({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="mt-0.5 shrink-0 text-[#c4788a]">{icon}</div>
      <div>
        <p
          className="text-sm text-[#2c2c2c] mb-0.5"
          style={{ fontFamily: "var(--font-body, 'Noto Serif KR', serif)", fontWeight: 400 }}
        >
          {title}
        </p>
        <p
          className="text-xs text-[#8a8278] leading-relaxed"
          style={{ fontFamily: "var(--font-body, 'Noto Serif KR', serif)", fontWeight: 300 }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

function SubwayIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="1" y="1" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="5.5" cy="11" r="1.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12.5" cy="11" r="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5 7h8M5 7V5h8v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BusIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="2" width="14" height="12" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2 7h14" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="5.5" cy="15.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12.5" cy="15.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5.5 14v-2M12.5 14v-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M3 9l1.5-4h9L15 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="1" y="9" width="16" height="5" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="5" cy="15" r="1.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="13" cy="15" r="1.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
