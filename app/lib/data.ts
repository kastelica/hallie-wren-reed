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

export type ComingSoon = {
  id: string;
  label: string;
  detail: string;
};

export const featuredAlbum: Album & { releaseLine: string } = {
  id: "half-a-whisper",
  title: "Half a Whisper",
  releaseLine: "the new album · out now",
  playlistHref: "https://www.youtube.com/playlist?list=PLbnMwUmQkSoo",
  tracks: [
    { title: "Vacancy Sign", href: "https://youtu.be/XwJjesYaVEw" },
    { title: "Say It Quiet", href: "https://youtu.be/IkNqUEHaiwU" },
    { title: "The Space Between", href: "https://youtu.be/tu_f_tALJwg" },
    { title: "Headlights", href: "https://youtu.be/mWMuXX31ea8" },
    { title: "Velvet Hour", href: "https://youtu.be/G2m2yUkO5IQ" },
    { title: "Undertow", href: "https://youtu.be/CF5hbFU8Fjc" },
  ],
};

export const earlierAlbums: Album[] = [
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
  youtube: "https://www.youtube.com/@HallieWrenReed",
  handle: "@HallieWrenReed",
};

export const comingSoon: ComingSoon[] = [
  { id: "spotify", label: "Spotify", detail: "Streaming" },
  { id: "apple", label: "Apple Music", detail: "Streaming" },
  { id: "tiktok", label: "TikTok", detail: "Shorts & behind the songs" },
  { id: "instagram", label: "Instagram", detail: "Photos from the road" },
];
