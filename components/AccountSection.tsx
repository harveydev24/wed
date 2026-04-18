"use client";

import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

interface AccountInfo {
  bank: string;
  account: string;
  holder: string;
  prefix?: string;
}

const accounts: { side: string; label: string; items: AccountInfo[] }[] = [
  {
    side: "신랑측",
    label: "신랑측 계좌 확인하기",
    items: [
      { bank: "하나", account: "846-910320-25107", holder: "김진환" },
      { bank: "하나", account: "120-19-33550-8", holder: "김광국", prefix: "[父]" },
      { bank: "국민", account: "102-21-0848-197", holder: "김민희", prefix: "[母]" },
    ],
  },
  {
    side: "신부측",
    label: "신부측 계좌 확인하기",
    items: [
      { bank: "토스뱅크", account: "1000-2435-6025", holder: "이참결" },
      { bank: "농협", account: "313-12-393620", holder: "이대균", prefix: "[父]" },
      { bank: "신한", account: "110-177-271565", holder: "송지은", prefix: "[母]" },
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

function AccountGroup({ side, label, items }: { side: string; label: string; items: AccountInfo[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center justify-center gap-2 w-full py-3 border-b border-[#e8e2d9]"
      >
        <p
          className="text-xs text-[#8a8278] tracking-widest"
          style={{ fontFamily: "var(--font-body, 'Noto Serif KR', serif)", fontWeight: 300 }}
        >
          {label}
        </p>
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          stroke="#c4bdb5"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-transform duration-300"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <path d="M1 1.5L6 6.5L11 1.5" />
        </svg>
      </button>

      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? `${items.length * 72}px` : "0px" }}
      >
        <div className="space-y-0 pt-1">
          {items.map((item) => (
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
                  {item.prefix ? `${item.prefix} ` : ""}{item.holder}
                </p>
              </div>
              <CopyButton text={item.account} />
            </div>
          ))}
        </div>
      </div>
    </div>
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

        <div className="space-y-2">
          {accounts.map((group) => (
            <AccountGroup key={group.side} side={group.side} label={group.label} items={group.items} />
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}
