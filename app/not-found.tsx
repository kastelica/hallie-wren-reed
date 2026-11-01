import type { Metadata } from "next";
import Link from "next/link";
import { artist } from "@/app/lib/data";

export const metadata: Metadata = {
  title: "Page not found — Hallie Wren Reed",
  description: "That page isn’t on Hallie Wren Reed’s site.",
};

export default function NotFound() {
  return (
    <main className="column">
      <header className="profile">
        <p className="name">{artist.name}</p>
        <h1 className="tagline">This page isn’t here</h1>
      </header>
      <Link className="btn btn-feature" href="/">
        <span className="btn-label">Back home</span>
      </Link>
    </main>
  );
}
