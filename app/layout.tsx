import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { CustomPointer } from "@/components/custom-pointer";
import { SmoothScroll } from "@/components/smooth-scroll";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Newtech Horizon Groupe | Solutions techniques à Rabat",
  description: "Réseaux, sécurité et audiovisuel : des solutions adaptées à vos espaces professionnels à Rabat.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll />
        {children}
        <CustomPointer />
      </body>
    </html>
  );
}
