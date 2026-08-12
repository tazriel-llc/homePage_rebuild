import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import SmoothScroll from "@/components/motion/smooth-scroll";
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
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
