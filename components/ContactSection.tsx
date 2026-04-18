"use client";

import AnimatedSection from "./AnimatedSection";

interface ContactInfo {
  holder: string;
  phone: string;
  prefix?: string;
}

const contacts: { side: string; items: ContactInfo[] }[] = [
  {
    side: "신랑측",
    items: [
      { holder: "김진환", phone: "01042069924" },
      { holder: "김광국", phone: "01073145555", prefix: "[父]" },
      { holder: "김민희", phone: "01057365546", prefix: "[母]" },
    ],
  },
  {
    side: "신부측",
    items: [
      { holder: "이참결", phone: "01062973846" },
      { holder: "이대균", phone: "01044144949", prefix: "[父]" },
      { holder: "송지은", phone: "01020440722", prefix: "[母]" },
    ],
  },
];

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.64a16 16 0 006.27 6.27l1.06-1.16a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    </svg>
  );
}

export default function ContactSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <AnimatedSection>
        {/* Section label */}
        <div className="flex flex-col items-center gap-1 mb-10">
          <p
            className="text-xs tracking-[0.3em] text-[#F59E9E] uppercase"
            style={{ fontFamily: "var(--font-display, 'Cormorant Garamond', serif)" }}
          >
            Contact
          </p>
          <p
            className="text-xs text-[#F59E9E]"
            style={{ fontFamily: "var(--font-body, 'Noto Serif KR', serif)", fontWeight: 300 }}
          >
            연락처
          </p>
        </div>

        <div className="space-y-8">
          {contacts.map((group) => (
            <div key={group.side}>
              <p
                className="text-xs text-[#8a8278] tracking-widest mb-4"
                style={{ fontFamily: "var(--font-body, 'Noto Serif KR', serif)", fontWeight: 300 }}
              >
                {group.side}
              </p>
              <div className="space-y-0">
                {group.items.map((item) => (
                  <div
                    key={item.holder}
                    className="flex items-center justify-between py-3 border-b border-[#e8e2d9]"
                  >
                    <p
                      className="text-sm text-[#2c2c2c]"
                      style={{ fontFamily: "var(--font-body, 'Noto Serif KR', serif)", fontWeight: 300 }}
                    >
                      {item.prefix ? `${item.prefix} ` : ""}{item.holder}
                    </p>
                    <div className="flex items-center gap-3">
                      <a
                        href={`tel:${item.phone}`}
                        className="text-[#8a8278] hover:text-[#F59E9E] transition-colors duration-200"
                        aria-label={`${item.holder}에게 전화하기`}
                      >
                        <PhoneIcon />
                      </a>
                      <a
                        href={`sms:${item.phone}`}
                        className="text-[#8a8278] hover:text-[#F59E9E] transition-colors duration-200"
                        aria-label={`${item.holder}에게 문자하기`}
                      >
                        <MessageIcon />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}
