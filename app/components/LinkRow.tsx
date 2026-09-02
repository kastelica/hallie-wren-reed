import type { ArtistLink } from "@/app/lib/data";
import {
  AppleMusicIcon,
  InstagramIcon,
  PlaylistIcon,
  SpotifyIcon,
  TikTokIcon,
  YouTubeIcon,
} from "@/app/components/icons";

const icons = {
  youtube: YouTubeIcon,
  playlist: PlaylistIcon,
  spotify: SpotifyIcon,
  apple: AppleMusicIcon,
  tiktok: TikTokIcon,
  instagram: InstagramIcon,
};

export function LinkRow({ link }: { link: ArtistLink }) {
  const Icon = icons[link.icon];

  const inner = (
    <>
      <span className="link-icon" aria-hidden="true">
        <Icon />
      </span>
      <span className="link-copy">
        <span className="link-label">{link.label}</span>
        <span className="link-detail">{link.detail}</span>
      </span>
      {link.live ? (
        <span className="badge badge-live">Live</span>
      ) : (
        <span className="badge badge-soon">Coming soon</span>
      )}
    </>
  );

  if (link.live) {
    return (
      <a
        className="link-row"
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {inner}
      </a>
    );
  }

  return (
    <div className="link-row is-soon" aria-disabled="true">
      {inner}
    </div>
  );
}
