export type Track = {
  title: string;
  href: string;
};

export type ComingSoon = {
  id: string;
  label: string;
};

export const artist = {
  name: "Hallie Wren Reed",
  tagline: "New album Half a Whisper, out now",
  youtube: "https://www.youtube.com/@HallieWrenReed",
  handle: "@HallieWrenReed",
};

export const featuredAlbum = {
  id: "half-a-whisper",
  title: "Half a Whisper",
  detail: "The full album",
  playlistHref: "https://www.youtube.com/playlist?list=PLbnMwUmQkSoo",
  tracks: [
    { title: "Vacancy Sign", href: "https://youtu.be/XwJjesYaVEw" },
    { title: "Say It Quiet", href: "https://youtu.be/IkNqUEHaiwU" },
    { title: "The Space Between", href: "https://youtu.be/tu_f_tALJwg" },
    { title: "Headlights", href: "https://youtu.be/mWMuXX31ea8" },
    { title: "Velvet Hour", href: "https://youtu.be/G2m2yUkO5IQ" },
    { title: "Undertow", href: "https://youtu.be/CF5hbFU8Fjc" },
  ] satisfies Track[],
};

export const greenCountry = {
  id: "green-country",
  title: "Green Country",
  detail: "Album playlist",
  playlistHref: "https://www.youtube.com/playlist?list=PLea4i6fOQvno",
  tracks: [
    { title: "Satellites", href: "https://youtu.be/nPQkDs7RAF8" },
    { title: "Radio Towers", href: "https://youtu.be/tv6qKBp7dpo" },
  ] satisfies Track[],
};

export const softAtTheElbows = {
  id: "soft-at-the-elbows",
  title: "Soft at the Elbows",
  playlistHref: "https://www.youtube.com/playlist?list=PLaCVI_5B0S-o",
};

export const shorts = {
  label: "Shorts",
  detail: "YouTube playlist",
  href: "https://www.youtube.com/playlist?list=PLZTYgCduM--Y",
};

export const comingSoon: ComingSoon[] = [
  { id: "spotify", label: "Spotify" },
  { id: "apple", label: "Apple Music" },
  { id: "tiktok", label: "TikTok" },
  { id: "instagram", label: "Instagram" },
];
