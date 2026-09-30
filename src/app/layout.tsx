import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro, Playfair_Display } from "next/font/google";
import "./globals.css";

const sans = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-be-vietnam",
  display: "swap",
});

const display = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bốn Năm Đại Học: Trò Chơi Giải Quyết Mâu Thuẫn",
  description:
    "Game mô phỏng 9 học kỳ ngành Kỹ thuật phần mềm (SE) Đại học FPT: cân bằng GPA (Cung) và EXP (Cầu) để chuyển hóa mâu thuẫn, minh họa quy luật thống nhất và đấu tranh của các mặt đối lập.",
};

export const viewport: Viewport = {
  themeColor: "#100b09",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={`${sans.variable} ${display.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
