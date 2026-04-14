import type { Metadata } from "next";
import { Playfair_Display, UnifrakturMaguntia, Lora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import NewsChat from "@/components/NewsChat";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "@/components/ThemeProvider";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "600", "700", "900"], variable: "--font-playfair" });
const unifraktur = UnifrakturMaguntia({ subsets: ["latin"], weight: "400", variable: "--font-unifraktur" });
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });

export const metadata: Metadata = {
  title: {
    default: "Ashwin Jauhary | Full Stack AI Architect & Lead Systems Developer",
    template: "%s | Ashwin Jauhary"
  },
  description: "Official Portfolio of Ashwin Jauhary. Investigating high-fidelity AI systems, full-stack scalability, and strategic technical architecture. All the code that's fit to ship.",
  applicationName: "Ashwin Jauhary",
  keywords: ["Ashwin Jauhary", "Full Stack Developer", "AI Engineer", "PSIT Kanpur", "Next.js Expert", "Software Engineering Portfolio", "Ashwin Jauhary Portfolio", "Technical Analyst"],
  authors: [{ name: "Ashwin Jauhary" }],
  creator: "Ashwin Jauhary",
  metadataBase: new URL("https://the-ashwin-jauhary.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://the-ashwin-jauhary.vercel.app",
    siteName: "Ashwin Jauhary",
    title: "Ashwin Jauhary | Official Portfolio & Technical Dossier",
    description: "Explore the investigative archives of Ashwin Jauhary's technical career. High-fidelity systems, neural orchestration, and production-level code.",
    images: [
      {
        url: "/Avatar.png",
        width: 800,
        height: 600,
        alt: "Ashwin Jauhary - Investigative Technical Analyst",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashwin Jauhary | Full Stack AI Architect",
    description: "Investigating high-fidelity AI systems and strategic technical architecture.",
    images: ["/Avatar.png"],
  },
  verification: {
    google: "6tL5BnCXfeKk0mb3gEPf62HjgG-Ad-lB49u1wWjMeKA",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ashwin Jauhary",
    "url": "https://the-ashwin-jauhary.vercel.app",
    "jobTitle": "Full Stack AI Architect & Systems Developer",
    "alumniOf": "PSIT Kanpur",
    "sameAs": [
      "https://linkedin.com/in/ashwin-jauhary",
      "https://github.com/Ashwinjauhary",
      "https://dev.to/ashwinjauhary"
    ],
    "description": "Ashwin Jauhary is a Full Stack AI Architect specializing in high-fidelity systems and strategic technical architecture."
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Ashwin Jauhary",
    "alternateName": ["The Ashwin Jauhary Broadsheet", "Ashwin Jauhary Portfolio", "Ashwin Jauhary's Portfolio"],
    "url": "https://the-ashwin-jauhary.vercel.app"
  }
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${playfair.variable} ${unifraktur.variable} ${lora.variable} font-serif antialiased bg-background text-foreground transition-colors duration-500`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {/* Paper texture overlay */}
          <div className="fixed inset-0 pointer-events-none z-1 opacity-40 dark:opacity-10" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cream-paper.png')" }} />
          {/* Center fold crease */}
          <div className="fixed inset-y-0 left-1/2 w-px bg-black/5 dark:bg-white/5 blur-[2px] z-2 pointer-events-none" />
          <div className="relative z-10">
            <Navbar />
            {children}
            <ScrollToTop />
            <NewsChat />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
