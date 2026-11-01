import Image from "next/image";
import {
  albumTeaser,
  albums,
  artist,
  comingSoon,
  shorts,
  socials,
  type Album,
  type Track,
} from "@/app/lib/data";

function SocialIcon({ id }: { id: (typeof socials)[number]["id"] }) {
  if (id === "youtube") {
    return (
      <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M23.5 6.2a3.1 3.1 0 0 0-2.2-2.2C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.3.5A3.1 3.1 0 0 0 .5 6.2 32.5 32.5 0 0 0 0 12a32.5 32.5 0 0 0 .5 5.8 3.1 3.1 0 0 0 2.2 2.2c1.8.5 9.3.5 9.3.5s7.5 0 9.3-.5a3.1 3.1 0 0 0 2.2-2.2A32.5 32.5 0 0 0 24 12a32.5 32.5 0 0 0-.5-5.8zM9.75 15.57V8.43L15.84 12l-6.09 3.57z"
        />
      </svg>
    );
  }

  if (id === "tiktok") {
    return (
      <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.4a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.7a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.73a8.19 8.19 0 0 0 4.76 1.52V6.8a4.85 4.85 0 0 1-1-.11z"
        />
      </svg>
    );
  }

  return (
    <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85s.01-3.58.07-4.85c.15-3.23 1.66-4.77 4.92-4.92C8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95C23.73 2.69 21.31.27 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.41-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"
      />
    </svg>
  );
}

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
    <section
      className={album.featured ? `album album-${album.id} album-featured` : `album album-${album.id}`}
      aria-labelledby={`${album.id}-title`}
    >
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
    sameAs: socials.map((profile) => profile.href),
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
          <p className="album-teaser">{albumTeaser}</p>
        </div>

        <nav className="stack" aria-label="More">
          <ul className="socials">
            {socials.map((profile) => (
              <li key={profile.id}>
                <a className="btn social" href={profile.href} target="_blank" rel="noopener noreferrer">
                  <SocialIcon id={profile.id} />
                  <span className="btn-label">{profile.label}</span>
                </a>
              </li>
            ))}
          </ul>
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
