import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "@/components/providers";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Acumen | Web3 Skill Learning & Career Platform",
  description:
    "The first e-learning ecosystem with ETH-backed reputation. Master trending skills, verify your work on-chain, and get hired by top protocols.",
  keywords: [
    "Web3",
    "blockchain",
    "crypto",
    "e-learning",
    "job board",
    "skills",
    "career",
    "mentorship",
    "ETH",
    "reputation",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
        <Providers>
          {children}
        </Providers>
        <Script
          src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
