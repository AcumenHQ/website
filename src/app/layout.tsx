import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Acumen - Solana Prediction & Education Platform",
  description: "The ultimate Solana prediction marketplace and Web3 education platform. Hold $ACUM tokens to unlock exclusive alpha and prediction opportunities.",
  keywords: "Solana, prediction, Web3, education, cryptocurrency, blockchain, $ACUM token",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
