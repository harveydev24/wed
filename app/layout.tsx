import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Noto_Serif_KR } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const notoSerifKR = Noto_Serif_KR({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-body",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "김진환 ♥ 이참결",
  description: "2026년 6월 13일, 저희 두 사람이 하나가 되는 날에 함께해 주세요.",
  openGraph: {
    title: "김진환 ♥ 이참결",
    description: "2026년 6월 13일 토요일 오후 1시 · 네이버 1784 SKY HALL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${cormorant.variable} ${notoSerifKR.variable}`}>
      <body style={{ fontFamily: "var(--font-body, 'Noto Serif KR', serif)" }}>
        {children}
      </body>
    </html>
  );
}
