import type { Metadata } from "next";
import Link from "next/link";
import { artist } from "@/app/lib/data";

export const metadata: Metadata = {
  title: "Page not found — Hallie Wren Reed",
  description: "That page isn’t on Hallie Wren Reed’s site.",
};

export default function NotFound() {
  return (
    <main className="hero">
      <p className="eyebrow">{artist.name}</p>
      <h1 className="hero-title hero-title-quiet">This page isn’t here</h1>
      <div className="rule" aria-hidden="true" />
      <p className="lede">Head back home.</p>
      <Link className="button" href="/">
        Back home
      </Link>
    </main>
  );
}
