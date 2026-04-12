import type { Metadata } from "next";
import { Playfair_Display, UnifrakturMaguntia, Lora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import NewsChat from "@/components/NewsChat";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "600", "700", "900"], variable: "--font-playfair" });
const unifraktur = UnifrakturMaguntia({ subsets: ["latin"], weight: "400", variable: "--font-unifraktur" });
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });

export const metadata: Metadata = {
  title: "The Ashwin Jauhary",
  description: "A hyper-realistic newspaper portfolio — all the code that's fit to ship.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${unifraktur.variable} ${lora.variable} font-serif antialiased bg-[#f5f0e8] text-[#1a1a1a]`}>
        {/* Paper texture overlay */}
        <div className="fixed inset-0 pointer-events-none z-1 opacity-40" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cream-paper.png')" }} />
        {/* Center fold crease */}
        <div className="fixed inset-y-0 left-1/2 w-px bg-black/5 blur-[2px] z-2 pointer-events-none" />
        <div className="relative z-3">
          <Navbar />
          {children}
          <NewsChat />
        </div>
      </body>
    </html>
  );
}
