import type { Metadata, Viewport } from "next";
import { Fraunces, Outfit, Alfa_Slab_One } from "next/font/google";
import { artist } from "@/app/lib/data";
import "./globals.css";

const albumTitle = artist.albums.map((album) => album.title).join(" & ");
const pageTitle = `${artist.name} — ${albumTitle}`;
const pageDescription = `${artist.tagline} Hallie Wren Reed’s homepage for Soft at the Elbows and Green Country — modern country, porch-light choruses, lyric videos on YouTube.`;

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const alfa = Alfa_Slab_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-alfa",
  display: "swap",
});

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: pageTitle,
  description: pageDescription,
  applicationName: "Hallie Wren Reed",
  authors: [{ name: "Hallie Wren Reed" }],
  keywords: [
    "Hallie Wren Reed",
    "Soft at the Elbows",
    "Green Country",
    "country music",
    "Porch Light",
    "Come Back Slow",
    "Oklahoma Wind",
    "Two Counties Over",
    "Where the Hills Stay Green",
    "Carry It Tonight",
    "Wide Open Friday",
  ],
  openGraph: {
    title: pageTitle,
    description: artist.tagline,
    type: "website",
    locale: "en_US",
    siteName: "Hallie Wren Reed",
    images: [
      {
        url: "/images/banner.jpg",
        width: 1920,
        height: 1080,
        alt: "Hallie Wren Reed — Soft at the Elbows and Green Country",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: artist.tagline,
    images: ["/images/banner.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#071018",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${fraunces.variable} ${alfa.variable}`}>
      <body>{children}</body>
    </html>
  );
}
