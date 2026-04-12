import AnimatedSection from "./AnimatedSection";

const NAVER_MAP_URL =
  "https://map.naver.com/v5/search/%EB%84%A4%EC%9D%B4%EB%B2%84%201784";

export default function LocationSection() {
  return (
    <section className="py-24 px-6 bg-[#f4f1ec]">
      <AnimatedSection className="">
        {/* Section label */}
        <div className="flex flex-col items-center gap-1 mb-10">
          <p
            className="text-xs tracking-[0.3em] text-[#F59E9E] uppercase"
            style={{ fontFamily: "var(--font-display, 'Cormorant Garamond', serif)" }}
          >
            Location
          </p>
          <p
            className="text-xs text-[#F59E9E]"
            style={{ fontFamily: "var(--font-body, 'Noto Serif KR', serif)", fontWeight: 300 }}
          >
            오시는 길
          </p>
        </div>

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
          <p
            className="text-xs text-[#8a8278] mt-2 leading-6"
            style={{ fontFamily: "var(--font-body, 'Noto Serif KR', serif)", fontWeight: 300 }}
          >
            그린팩토리(초록색 건물) 옆 네이버1784(회색 건물)로<br />
            걸음해주시면 감사하겠습니다.
          </p>
        </div>

        {/* Google Maps embed */}
        <div className="relative rounded-sm overflow-hidden mb-4 aspect-[4/3]">
          <iframe
            src="https://maps.google.com/maps?q=네이버+1784+성남시+분당구+정자일로+95&t=&z=16&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, position: "absolute", inset: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Naver map button */}
        <a
          href={NAVER_MAP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full py-3 border border-[#F59E9E] text-center text-sm text-[#F59E9E] tracking-widest hover:bg-[#F59E9E] hover:text-white transition-colors duration-300 rounded-sm mb-10"
          style={{ fontFamily: "var(--font-body, 'Noto Serif KR', serif)", fontWeight: 300 }}
        >
          네이버 지도에서 보기
        </a>

        {/* Transportation */}
        <AnimatedSection delay={0.2} className="space-y-5">
          <TransportItem
            icon={<SubwayIcon />}
            title="지하철"
            description="신분당선 정자역 3번 출구에서 도보 15분"
          />
          <div className="w-full h-px bg-[#e8e2d9]" />
          <TransportItem
            icon={<BusIcon />}
            title="버스"
            description="정자역 3번 출구 버스 정류장에서 2번 또는 2-1번 탑승 후 네이버/미켈란쉐르빌 정류장 하차"
          />
          <div className="w-full h-px bg-[#e8e2d9]" />
          <TransportItem
            icon={<CarIcon />}
            title="자가용"
            description="네이버 1784 지하주차장 무료 주차"
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
      <div className="mt-0.5 shrink-0 text-[#F59E9E]">{icon}</div>
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
