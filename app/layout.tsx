import type { Metadata } from "next";
import { DM_Sans, Cormorant_Garamond, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: "500",
  style: "normal",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pacolau.com"),
  title: "Paco Lau",
  description: "Paco Lau is a UC Berkeley Data Science & Economics student working across data science, design and photography.",
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${cormorant.variable} ${bebasNeue.variable} h-full`}>
      <body className="min-h-full bg-[#F5F0E8] text-[#181a18] antialiased">
        <ScrollToTop />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
