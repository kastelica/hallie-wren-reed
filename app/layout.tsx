import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Fraunces, Jost, Zilla_Slab } from "next/font/google";
import { albums } from "@/app/lib/data";
import "./globals.css";

const pageTitle = "Hallie Wren Reed — Half a Whisper";
const pageDescription =
  "Half a Whisper, the new album from Hallie Wren Reed. Hushed, late-night country-pop, out now — songs on YouTube.";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jost",
  display: "swap",
});

const zilla = Zilla_Slab({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-zilla",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
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
    ...albums.flatMap((album) => [album.title, ...album.tracks.map((track) => track.title)]),
    "country music",
    "country-pop",
  ],
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: "website",
    locale: "en_US",
    siteName: "Hallie Wren Reed",
    url: "/",
    images: [
      {
        url: "/images/og-half-a-whisper.jpg",
        width: 1200,
        height: 630,
        alt: "Hallie Wren Reed — Half a Whisper, the new album, out now",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/images/og-half-a-whisper.jpg"],
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
  themeColor: "#080B14",
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
    <html lang="en" className={`${cormorant.variable} ${jost.variable} ${zilla.variable} ${fraunces.variable}`}>
      <body>{children}</body>
    </html>
  );
}
