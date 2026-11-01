# Hallie Wren Reed

Homepage for **Hallie Wren Reed**, a compact link-in-bio. Every song on *Half a Whisper*, *Green Country*, and *Soft at the Elbows* is a numbered button.

Quiet late-night column: near-black blue, one cool glow, cream Cormorant Garamond titles, wide-tracked Jost labels. YouTube is live. Spotify, Apple Music, TikTok, and Instagram stay marked **Coming soon** until real URLs exist.

## Local development

Requires Node.js 20+.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Command | What it does |
| --- | --- |
| `npm run dev` | Next.js dev server |
| `npm run build` | Production build (must succeed before deploy) |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint via Next.js |

## Deploy on Vercel

This repo is a standard Next.js App Router app. `vercel.json` sets the framework and a few security / image-cache headers. Leave that file and the domain settings as they are.

Preview deploys on pull requests use the same settings. Open Graph image URLs resolve from the deployment host.

## Editing

Album titles, track links, and coming-soon rows live in `app/lib/data.ts`. To turn a coming-soon row live, give it a real URL in the page — do not add a placeholder profile.

The social image is `public/images/og-half-a-whisper.jpg` (1200×630).
