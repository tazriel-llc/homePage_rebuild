import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import SmoothScroll from "@/components/motion/smooth-scroll";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import "./globals.css";

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tazriel.com"),
  title: "Tazriel — Specialists who work the way you already do",
  description:
    "Tazriel places senior operators inside your process — across seven disciplines, on two continents.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" dir="ltr" className={`${display.variable} ${sans.variable}`}>
      <body>
        <div className="curtain" aria-hidden />
        <SmoothScroll />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-60 focus:bg-paper focus:px-4 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
