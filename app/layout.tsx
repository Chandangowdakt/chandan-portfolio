import type { Metadata } from "next";
import { Inter } from "next/font/google";
import PageTransition from "@/components/PageTransition";
import CursorGlow from "@/components/CursorGlow";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const siteUrl = "https://chandankt.dev";

export const metadata: Metadata = {
  title: "Chandan K T | Medical Electronics Engineer & Full Stack Developer",
  description:
    "Portfolio of Chandan K T — Medical Electronics Engineering student at BMSCE Bengaluru. Specializing in biomedical instrumentation, embedded systems, and full-stack web development.",
  keywords: [
    "Chandan K T",
    "Medical Electronics",
    "Biomedical Engineer",
    "BMSCE",
    "Full Stack Developer",
    "ESP32",
    "ECG monitoring",
    "Next.js",
  ],
  authors: [{ name: "Chandan K T" }],
  creator: "Chandan K T",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    title: "Chandan K T | Engineer & Developer",
    description:
      "Portfolio of Chandan K T — biomedical instrumentation, embedded systems, and full-stack development.",
    siteName: "Chandan K T Portfolio",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Chandan K T | Engineer & Developer",
    description: "Medical Electronics Engineer & Full Stack Developer",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <CursorGlow />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
