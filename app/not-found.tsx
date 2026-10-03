import Image from "next/image";
import Link from "next/link";
import { artist } from "@/app/lib/data";

export default function NotFound() {
  return (
    <div className="stage">
      <div className="backdrop" aria-hidden="true">
        <Image
          className="backdrop-photo"
          src="/images/banner.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          unoptimized
        />
        <div className="backdrop-wash" />
        <div className="backdrop-grain" />
      </div>
      <main className="card">
        <div className="kickers">
          {artist.albums.map((album) => (
            <p className="kicker" key={album.id}>
              {album.title}
            </p>
          ))}
        </div>
        <h1 className="name">This porch is empty</h1>
        <p className="tagline">That page isn’t here. Head back to the house.</p>
        <nav className="links" aria-label="Home">
          <Link className="link-row" href="/">
            <span className="link-copy">
              <span className="link-label">Hallie Wren Reed</span>
              <span className="link-detail">Back to the homepage</span>
            </span>
            <span className="badge badge-live">Home</span>
          </Link>
        </nav>
      </main>
    </div>
  );
}
