import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import OG from './og.png'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Holidays2Cherish | Customized Holiday Packages & Travel Deals",
    template: "%s | Holidays2Cherish",
  },
  description:
    "Holidays2Cherish offers customized domestic and international holiday packages, honeymoon tours, family vacations, and exclusive travel deals at the best prices.",
  keywords: [
    "holiday packages",
    "international tours",
    "honeymoon packages",
    "family vacation",
    "travel deals",
    "customized holidays",
    "Holidays2Cherish",
  ],
  authors: [{ name: "Holidays2Cherish" }],
  creator: "Holidays2Cherish",
  metadataBase: new URL("https://www.holidays2cherish.com"),

  openGraph: {
    title: "Holidays2Cherish | Customized Holiday Packages & Travel Deals",
    description:
      "Plan your perfect vacation with Holidays2Cherish. Explore domestic & international holiday packages, honeymoon trips, and exclusive travel deals.",
    url: "https://www.holidays2cherish.com/",
    siteName: "Holidays2Cherish",
    images: [
      {
        url: OG.src,
        width: 1200,
        height: 630,
        alt: "Holidays2Cherish Travel Packages",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Holidays2Cherish | Customized Holiday Packages & Travel Deals",
    description:
      "Discover unforgettable travel experiences with Holidays2Cherish. Customized holiday packages for every traveler.",
    images: [OG.src],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
