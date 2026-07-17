import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ssfashionwear.com.au"),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline} | Strathfield`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "SS Fashion Wear",
    "denim Strathfield",
    "jeans Strathfield",
    "casual wear Strathfield",
    "clothing store Strathfield NSW",
    "24 hour clothing store",
  ],
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    locale: "en_AU",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className={inter.variable} suppressHydrationWarning>
      <body className="font-sans">{children}</body>
    </html>
  );
}
