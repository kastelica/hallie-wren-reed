import Image from "next/image";
import { LinkRow } from "@/app/components/LinkRow";
import { artist, links } from "@/app/lib/data";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    name: artist.name,
    genre: "Country",
    description: artist.tagline,
    album: {
      "@type": "MusicAlbum",
      name: artist.album,
    },
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
          <div className="backdrop-image" />
          <div className="backdrop-wash" />
          <div className="backdrop-grain" />
        </div>

        <header className="masthead">
          <p className="masthead-kicker">{artist.name}</p>
          <p className="masthead-title">{artist.album}</p>
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

          <p className="kicker">{artist.album}</p>
          <h1 className="name">{artist.name}</h1>
          <p className="tagline">{artist.tagline}</p>
          <p className="setlist">
            <span className="setlist-label">From the record</span>
            {artist.setlist.join(" · ")}
          </p>

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
