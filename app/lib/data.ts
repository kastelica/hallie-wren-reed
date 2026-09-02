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

export const artist = {
  name: "Hallie Wren Reed",
  album: "Soft at the Elbows",
  tagline: "Night drives, almost-goodbyes, and the songs that stay.",
  setlist: ["Porch Light", "Come Back Slow"],
} as const;

export const links: ArtistLink[] = [
  {
    id: "youtube",
    label: "YouTube",
    detail: "Lyric videos & new songs",
    href: "https://www.youtube.com/@HallieWrenReed",
    live: true,
    icon: "youtube",
  },
  {
    id: "playlist",
    label: "Soft at the Elbows",
    detail: "The playlist",
    href: "https://www.youtube.com/playlist?list=PLaCVI_5B0S-o",
    live: true,
    icon: "playlist",
  },
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
