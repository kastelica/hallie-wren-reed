# Hallie Wren Reed

Custom artist homepage for **Hallie Wren Reed** — a link tree for *Soft at the Elbows* and *Green Country*.

Night-porch country: YouTube is live. Spotify, Apple Music, TikTok, and Instagram stay marked **Coming soon** until real URLs exist (no placeholder social links).

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

This repo is a standard Next.js App Router app. `vercel.json` sets the framework and a few security / image-cache headers.

1. Push the repo to GitHub (already the case for this project).
2. In [Vercel](https://vercel.com), **Add New → Project** and import `hallie-wren-reed`.
3. Framework preset: **Next.js**. Build command `npm run build`, output detected automatically. No env vars required.
4. Deploy. Attach a custom domain when you have one. On Vercel, Open Graph image URLs resolve from the deployment host automatically.

Preview deploys on pull requests work with the same settings.

## Editing links

Links live in `app/lib/data.ts`, in display order. To turn a **Coming soon** row live, add a real `href` and set `live: true`. Do not add fake profile URLs.

Artwork is in `public/images/` (`banner.jpg` night-porch album art, `avatar.jpg` profile photo).
