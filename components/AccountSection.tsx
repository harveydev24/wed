"use client";

import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

interface AccountInfo {
  bank: string;
  account: string;
  holder: string;
  prefix?: string;
}

const accounts: { side: string; items: AccountInfo[] }[] = [
  {
    side: "신랑측",
    items: [
      { bank: "하나은행", account: "846-910320-25107", holder: "김진환" },
      { bank: "하나은행", account: "120-19-33550-8", holder: "김광국", prefix: "[父]" },
      { bank: "국민은행", account: "102-21-0848-197", holder: "김민희", prefix: "[母]" },
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

function AccountGroup({ side, items }: { side: string; items: AccountInfo[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center justify-between w-full py-3 border-b border-[#e8e2d9]"
      >
        <p
          className="text-xs text-[#8a8278] tracking-widest"
          style={{ fontFamily: "var(--font-body, 'Noto Serif KR', serif)", fontWeight: 300 }}
        >
          {side}
        </p>
        <span
          className="text-xs text-[#8a8278] transition-transform duration-300"
          style={{ display: "inline-block", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          ∨
        </span>
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
            <AccountGroup key={group.side} side={group.side} items={group.items} />
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}
