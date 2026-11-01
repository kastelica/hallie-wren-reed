import Image from "next/image";
import {
  artist,
  comingSoon,
  featuredAlbum,
  greenCountry,
  shorts,
  softAtTheElbows,
  type Track,
} from "@/app/lib/data";

function SongButton({ track }: { track: Track }) {
  return (
    <a className="btn btn-slim" href={track.href} target="_blank" rel="noopener noreferrer">
      <span className="btn-label">{track.title}</span>
      <span className="sr-only"> on YouTube</span>
    </a>
  );
}

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    name: artist.name,
    url: "https://www.hallie.rocks",
    genre: ["Country", "Pop"],
    album: [
      {
        "@type": "MusicAlbum",
        name: featuredAlbum.title,
        url: featuredAlbum.playlistHref,
        track: featuredAlbum.tracks.map((track) => ({
          "@type": "MusicRecording",
          name: track.title,
          url: track.href,
        })),
      },
      {
        "@type": "MusicAlbum",
        name: greenCountry.title,
        url: greenCountry.playlistHref,
        track: greenCountry.tracks.map((track) => ({
          "@type": "MusicRecording",
          name: track.title,
          url: track.href,
        })),
      },
      {
        "@type": "MusicAlbum",
        name: softAtTheElbows.title,
        url: softAtTheElbows.playlistHref,
      },
    ],
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

        <nav id="links" className="stack" aria-label="Listen">
          <div className="group">
            <a
              className="btn btn-feature"
              href={featuredAlbum.playlistHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="btn-label">{featuredAlbum.title}</span>
              <span className="btn-detail">{featuredAlbum.detail}</span>
            </a>
            {featuredAlbum.tracks.map((track) => (
              <SongButton key={track.href} track={track} />
            ))}
          </div>

          <a className="btn" href={artist.youtube} target="_blank" rel="noopener noreferrer">
            <span className="btn-label">YouTube</span>
            <span className="btn-detail">{artist.handle}</span>
          </a>

          <div className="group">
            <a
              className="btn btn-next"
              href={greenCountry.playlistHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="btn-label">{greenCountry.title}</span>
              <span className="btn-detail">{greenCountry.detail}</span>
            </a>
            {greenCountry.tracks.map((track) => (
              <SongButton key={track.href} track={track} />
            ))}
          </div>

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

        <p className="soft">
          <a href={softAtTheElbows.playlistHref} target="_blank" rel="noopener noreferrer">
            {softAtTheElbows.title}
            <span className="sr-only"> playlist on YouTube</span>
          </a>
        </p>
      </main>
    </>
  );
}
