export type Track = {
  title: string;
  href?: string;
};

export type Album = {
  id: string;
  title: string;
  tracks: Track[];
  playlistHref: string;
};

export type ArtistLink =
  | {
      id: string;
      label: string;
      detail: string;
      href: string;
      live: true;
      icon: "youtube" | "playlist" | "spotify" | "apple" | "tiktok" | "instagram";
    }
  | {
      id: string;
      label: string;
      detail: string;
      href?: undefined;
      live: false;
      icon: "youtube" | "playlist" | "spotify" | "apple" | "tiktok" | "instagram";
    };

export const albums: Album[] = [
  {
    id: "soft-at-the-elbows",
    title: "Soft at the Elbows",
    tracks: [{ title: "Porch Light" }, { title: "Come Back Slow" }],
    playlistHref: "https://www.youtube.com/playlist?list=PLaCVI_5B0S-o",
  },
  {
    id: "green-country",
    title: "Green Country",
    tracks: [
      { title: "Oklahoma Wind", href: "https://youtu.be/kZ6-Bvaet0g" },
      { title: "Two Counties Over", href: "https://youtu.be/XRRYDxmsgDI" },
      { title: "Where the Hills Stay Green", href: "https://youtu.be/0cSuqZvZM3M" },
      { title: "Carry It Tonight", href: "https://youtu.be/KIEiDqAIaCI" },
      { title: "Wide Open Friday", href: "https://youtu.be/1NHfEdiDZJg" },
    ],
    playlistHref: "https://www.youtube.com/playlist?list=PLea4i6fOQvno",
  },
];

export const artist = {
  name: "Hallie Wren Reed",
  tagline: "Night drives, almost-goodbyes, and the songs that stay.",
  albums,
};

const playlistLinks: ArtistLink[] = albums.map((album) => ({
  id: `playlist-${album.id}`,
  label: album.title,
  detail: "The playlist",
  href: album.playlistHref,
  live: true,
  icon: "playlist",
}));

export const links: ArtistLink[] = [
  {
    id: "youtube",
    label: "YouTube",
    detail: "Lyric videos & new songs",
    href: "https://www.youtube.com/@HallieWrenReed",
    live: true,
    icon: "youtube",
  },
  ...playlistLinks,
  {
    id: "spotify",
    label: "Spotify",
    detail: "Streaming",
    live: false,
    icon: "spotify",
  },
  {
    id: "apple",
    label: "Apple Music",
    detail: "Streaming",
    live: false,
    icon: "apple",
  },
  {
    id: "tiktok",
    label: "TikTok",
    detail: "Shorts & behind the songs",
    live: false,
    icon: "tiktok",
  },
  {
    id: "instagram",
    label: "Instagram",
    detail: "Photos from the road",
    live: false,
    icon: "instagram",
  },
];
