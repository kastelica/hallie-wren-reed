export type Track = {
  title: string;
  href: string;
};

export type Album = {
  id: string;
  title: string;
  playlistHref: string;
  featured?: boolean;
  tracks: Track[];
};

export type ComingSoon = {
  id: string;
  label: string;
};

const video = (id: string) => `https://youtu.be/${id}`;

export const artist = {
  name: "Hallie Wren Reed",
  tagline: "New album Half a Whisper, out now",
  youtube: "https://www.youtube.com/@HallieWrenReed",
  tiktok: "https://www.tiktok.com/@halliewrenreed",
  instagram: "https://www.instagram.com/halliewrenreed/",
};

export const socials = [
  { id: "youtube", label: "YouTube", href: artist.youtube },
  { id: "tiktok", label: "TikTok", href: artist.tiktok },
  { id: "instagram", label: "Instagram", href: artist.instagram },
] as const;

export const albums: Album[] = [
  {
    id: "half-a-whisper",
    title: "Half a Whisper",
    playlistHref: "https://www.youtube.com/playlist?list=PLbnMwUmQkSoo",
    featured: true,
    tracks: [
      { title: "Vacancy Sign", href: video("XwJjesYaVEw") },
      { title: "Vacancy Sign Alternate Version", href: video("0f8LktwK1_o") },
      { title: "Undertow", href: video("CF5hbFU8Fjc") },
      { title: "Velvet Hour", href: video("G2m2yUkO5IQ") },
      { title: "Headlights", href: video("mWMuXX31ea8") },
      { title: "The Space Between", href: video("tu_f_tALJwg") },
      { title: "Say It Quiet", href: video("IkNqUEHaiwU") },
    ],
  },
  {
    id: "green-country",
    title: "Green Country",
    playlistHref: "https://www.youtube.com/playlist?list=PLea4i6fOQvno",
    tracks: [
      { title: "Oklahoma Wind", href: video("kZ6-Bvaet0g") },
      { title: "Two Counties Over", href: video("XRRYDxmsgDI") },
      { title: "Where the Hills Stay Green", href: video("0cSuqZvZM3M") },
      { title: "Carry It Tonight", href: video("KIEiDqAIaCI") },
      { title: "Wide Open Friday", href: video("1NHfEdiDZJg") },
      { title: "Top of the Wheel", href: video("oJ12vFD_h0o") },
      { title: "Aisle Seven", href: video("i_MRL7b-GoY") },
      { title: "Paid in Full", href: video("zQ3TKYCfETk") },
      { title: "Radio Towers", href: video("tv6qKBp7dpo") },
      { title: "Pass the Aux", href: video("UuZOH1OiZBE") },
      { title: "Power's Out", href: video("Dnu9CtjhR8Q") },
      { title: "Satellites", href: video("nPQkDs7RAF8") },
      { title: "Thriving", href: video("oLeLUeR7URE") },
      { title: "Heat Lightning", href: video("IekvMp48qF4") },
    ],
  },
  {
    id: "soft-at-the-elbows",
    title: "Soft at the Elbows",
    playlistHref: "https://www.youtube.com/playlist?list=PLaCVI_5B0S-o",
    tracks: [
      { title: "Come Back Slow", href: video("7-PtIC78v8E") },
      { title: "Porch Light", href: video("vAtroDVOtSE") },
      { title: "Half a Tank", href: video("ZPmonPKlMqU") },
      { title: "Your Jacket", href: video("OiwpGBW0qHg") },
      { title: "BBGirl", href: video("tk2-YYGVk38") },
      { title: "Don't Text First", href: video("DoPC9ofNZ_Y") },
      { title: "One More Exit", href: video("IK8PQJz5lgI") },
      { title: "Still Home", href: video("1IruDY3T_Qg") },
      { title: "Blue Hour", href: video("cdihsLBc-cQ") },
      { title: "Rain Check", href: video("hgcwE1ymiAI") },
      { title: "First Night In", href: video("lfsmiMYeQKU") },
    ],
  },
];

export const shorts = {
  label: "Shorts",
  detail: "YouTube playlist",
  href: "https://www.youtube.com/playlist?list=PLZTYgCduM--Y",
};

export const comingSoon: ComingSoon[] = [
  { id: "spotify", label: "Spotify" },
  { id: "apple", label: "Apple Music" },
];

export const albumTeaser = "Album 4 · being recorded now";
