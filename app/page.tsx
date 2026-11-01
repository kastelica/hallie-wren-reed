import { artist, comingSoon, earlierAlbums, featuredAlbum, type Track } from "@/app/lib/data";

function TrackLink({ track }: { track: Track }) {
  if (!track.href) {
    return <span>{track.title}</span>;
  }

  return (
    <a href={track.href} target="_blank" rel="noopener noreferrer">
      {track.title}
      <span className="sr-only"> on YouTube</span>
    </a>
  );
}

export default function HomePage() {
  const albums = [featuredAlbum, ...earlierAlbums];

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
      byArtist: { "@type": "MusicGroup", name: artist.name },
      track: album.tracks.map((track) => ({
        "@type": "MusicRecording",
        name: track.title,
        ...(track.href ? { url: track.href } : {}),
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
      <a className="skip-link" href="#tracklist">
        Skip to tracklist
      </a>

      <header className="hero">
        <p className="eyebrow">{artist.name}</p>
        <h1 className="hero-title">{featuredAlbum.title}</h1>
        <div className="rule" aria-hidden="true" />
        <p className="lede">{featuredAlbum.releaseLine}</p>
        <a
          className="button"
          href={featuredAlbum.playlistHref}
          target="_blank"
          rel="noopener noreferrer"
        >
          Play the album
          <span className="sr-only">, {featuredAlbum.title}, on YouTube</span>
        </a>
        <a className="channel" href={artist.youtube} target="_blank" rel="noopener noreferrer">
          <span className="channel-kicker">YouTube</span>
          <span className="channel-handle">{artist.handle}</span>
        </a>
      </header>

      <main>
        <section className="band" id="tracklist" aria-labelledby="tracklist-label">
          <h2 className="section-label" id="tracklist-label">
            Tracklist
          </h2>
          <ol className="tracks">
            {featuredAlbum.tracks.map((track, index) =>
              track.href ? (
                <li key={track.title}>
                  <a href={track.href} target="_blank" rel="noopener noreferrer">
                    <span className="num" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="track-title">{track.title}</span>
                    <span className="sr-only"> on YouTube</span>
                  </a>
                </li>
              ) : null,
            )}
          </ol>
        </section>

        <section className="band earlier" aria-labelledby="earlier-label">
          <h2 className="section-label" id="earlier-label">
            Earlier albums
          </h2>
          <div className="earlier-grid">
            {earlierAlbums.map((album) => (
              <article className="earlier-album" key={album.id} aria-labelledby={`${album.id}-title`}>
                <h3 className="earlier-title" id={`${album.id}-title`}>
                  {album.title}
                </h3>
                <ul className="earlier-tracks">
                  {album.tracks.map((track) => (
                    <li key={track.title}>
                      <TrackLink track={track} />
                    </li>
                  ))}
                </ul>
                <a
                  className="text-link"
                  href={album.playlistHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Playlist
                  <span className="sr-only"> for {album.title} on YouTube</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="band soon" aria-labelledby="soon-label">
          <h2 className="section-label" id="soon-label">
            Streaming & social
          </h2>
          <ul className="soon-list">
            {comingSoon.map((item) => (
              <li key={item.id}>
                <span className="soon-copy">
                  <span className="soon-label">{item.label}</span>
                  <span className="soon-detail">{item.detail}</span>
                </span>
                <span className="soon-state">Coming soon</span>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="footer">
        <p className="eyebrow">{artist.name}</p>
      </footer>
    </>
  );
}
