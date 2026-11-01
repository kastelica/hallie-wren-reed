import Image from "next/image";
import { albums, artist, comingSoon, shorts, type Album, type Track } from "@/app/lib/data";

function TrackButton({ index, track }: { index: number; track: Track }) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <li>
      <a className="btn btn-slim" href={track.href} target="_blank" rel="noopener noreferrer">
        <span className="num">{number}</span>
        <span className="btn-label">{track.title}</span>
        <span className="sr-only"> on YouTube</span>
      </a>
    </li>
  );
}

function AlbumSection({ album }: { album: Album }) {
  return (
    <section className={album.featured ? "album album-featured" : "album"} aria-labelledby={`${album.id}-title`}>
      <div className="album-head">
        <h2 className="album-title" id={`${album.id}-title`}>
          {album.title}
        </h2>
        <a className="playlist-link" href={album.playlistHref} target="_blank" rel="noopener noreferrer">
          Full playlist
          <span className="sr-only"> for {album.title}</span>
        </a>
      </div>
      <ul className="songs">
        {album.tracks.map((track, index) => (
          <TrackButton key={track.href} index={index} track={track} />
        ))}
      </ul>
    </section>
  );
}

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    name: artist.name,
    url: "https://www.hallie.rocks",
    genre: ["Country", "Pop"],
    album: albums.map((album) => ({
      "@type": "MusicAlbum",
      name: album.title,
      url: album.playlistHref,
      track: album.tracks.map((track) => ({
        "@type": "MusicRecording",
        name: track.title,
        url: track.href,
      })),
    })),
    sameAs: [artist.youtube],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <a className="skip-link" href="#links">
        Skip to links
      </a>
      <main className="column">
        <header className="profile">
          <Image
            className="avatar"
            src="/images/avatar.jpg"
            alt="Hallie Wren Reed"
            width={144}
            height={144}
            priority
          />
          <h1 className="name">{artist.name}</h1>
          <p className="tagline">{artist.tagline}</p>
        </header>

        <div id="links" className="albums">
          {albums.map((album) => (
            <AlbumSection key={album.id} album={album} />
          ))}
        </div>

        <nav className="stack" aria-label="More">
          <a className="btn" href={artist.youtube} target="_blank" rel="noopener noreferrer">
            <span className="btn-label">YouTube</span>
            <span className="btn-detail">{artist.handle}</span>
          </a>
          <a className="btn" href={shorts.href} target="_blank" rel="noopener noreferrer">
            <span className="btn-label">{shorts.label}</span>
            <span className="btn-detail">{shorts.detail}</span>
          </a>
        </nav>

        <ul className="soon" aria-label="Coming soon">
          {comingSoon.map((item) => (
            <li key={item.id}>
              <span className="soon-label">{item.label}</span>
              <span className="soon-state">Coming soon</span>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
