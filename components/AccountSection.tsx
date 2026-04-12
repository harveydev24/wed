"use client";

import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

interface AccountInfo {
  bank: string;
  account: string;
  holder: string;
}

const accounts: { side: string; items: AccountInfo[] }[] = [
  {
    side: "신랑측",
    items: [
      { bank: "은행명", account: "000-0000-0000", holder: "김광국" },
      { bank: "은행명", account: "000-0000-0000", holder: "김진환" },
    ],
  },
  {
    side: "신부측",
    items: [
      { bank: "은행명", account: "000-0000-0000", holder: "이대균" },
      { bank: "은행명", account: "000-0000-0000", holder: "이참결" },
    ],
  },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="text-xs text-[#F59E9E] border border-[#F59E9E] px-2 py-0.5 rounded-sm hover:bg-[#F59E9E] hover:text-white transition-colors duration-200"
      style={{ fontFamily: "var(--font-body, 'Noto Serif KR', serif)", fontWeight: 300 }}
    >
      {copied ? "복사됨" : "복사"}
    </button>
  );
}

export default function AccountSection() {
  return (
    <section className="py-24 px-6 bg-[#faf9f7]">
      <AnimatedSection className="">
        <p
          className="text-sm text-[#8a8278] text-center mb-10 leading-7"
          style={{ fontFamily: "var(--font-body, 'Noto Serif KR', serif)", fontWeight: 300 }}
        >
          축하의 마음을 전해주시려는 분들을 위해<br />
          계좌를 안내드립니다.
        </p>

        <div className="space-y-8">
          {accounts.map((group) => (
            <div key={group.side}>
              <p
                className="text-xs text-[#8a8278] tracking-widest mb-4"
                style={{ fontFamily: "var(--font-body, 'Noto Serif KR', serif)", fontWeight: 300 }}
              >
                {group.side}
              </p>
              <div className="space-y-3">
                {group.items.map((item) => (
                  <div
                    key={item.holder}
                    className="flex items-center justify-between py-3 border-b border-[#e8e2d9]"
                  >
                    <div>
                      <p
                        className="text-sm text-[#2c2c2c]"
                        style={{ fontFamily: "var(--font-body, 'Noto Serif KR', serif)", fontWeight: 300 }}
                      >
                        {item.bank} {item.account}
                      </p>
                      <p
                        className="text-xs text-[#8a8278] mt-0.5"
                        style={{ fontFamily: "var(--font-body, 'Noto Serif KR', serif)", fontWeight: 300 }}
                      >
                        {item.holder}
                      </p>
                    </div>
                    <CopyButton text={item.account} />
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
