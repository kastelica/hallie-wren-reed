import Image from "next/image";
import { LinkRow } from "@/app/components/LinkRow";
import { artist, links, type Track } from "@/app/lib/data";

function TrackList({ tracks }: { tracks: Track[] }) {
  const linked = tracks.some((track) => track.href);

  if (!linked) {
    return <span className="setlist-tracks">{tracks.map((track) => track.title).join(" · ")}</span>;
  }

  return (
    <ul className="setlist-tracks">
      {tracks.map((track) => (
        <li key={track.title}>
          {track.href ? (
            <a href={track.href} target="_blank" rel="noopener noreferrer">
              {track.title}
              <span className="sr-only"> lyric video</span>
            </a>
          ) : (
            track.title
          )}
        </li>
      ))}
    </ul>
  );
}

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    name: artist.name,
    genre: "Country",
    description: artist.tagline,
    album: artist.albums.map((album) => ({
      "@type": "MusicAlbum",
      name: album.title,
      url: album.playlistHref,
      track: album.tracks.map((track) => ({
        "@type": "MusicRecording",
        name: track.title,
        ...(track.href ? { url: track.href } : {}),
      })),
    })),
    sameAs: ["https://www.youtube.com/@HallieWrenReed"],
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

        <header className="masthead">
          <p className="masthead-kicker">{artist.name}</p>
          <div className="masthead-albums">
            {artist.albums.map((album) => (
              <p className="masthead-title" key={album.id}>
                {album.title}
              </p>
            ))}
          </div>
        </header>

        <main className="card" id="home">
          <div className="avatar-wrap">
            <Image
              className="avatar"
              src="/images/avatar.jpg"
              alt="Hallie Wren Reed, smiling in golden-hour light"
              width={160}
              height={160}
              priority
            />
          </div>

          <div className="kickers">
            {artist.albums.map((album) => (
              <p className="kicker" key={album.id}>
                {album.title}
              </p>
            ))}
          </div>
          <h1 className="name">{artist.name}</h1>
          <p className="tagline">{artist.tagline}</p>

          <div className="records">
            {artist.albums.map((album) => (
              <section className="record" key={album.id} aria-labelledby={`${album.id}-label`}>
                <h2 className="setlist-label" id={`${album.id}-label`}>
                  {album.title}
                </h2>
                <div className="setlist">
                  <span className="sr-only">From the record. </span>
                  <TrackList tracks={album.tracks} />
                </div>
              </section>
            ))}
          </div>

          <nav id="links" aria-label="Listen and follow">
            <ul className="links">
              {links.map((link) => (
                <li key={link.id}>
                  <LinkRow link={link} />
                </li>
              ))}
            </ul>
          </nav>

          <p className="footnote">
            Porch-light country. More rooms of this house still to open.
          </p>
        </main>
      </div>
    </>
  );
}
