# Anthony Craythorn Sound Design

Astro + React rebuild of `anthonycraythorn.com`, intended for Netlify hosting.

## Stack

- Astro static site
- React island for the interactive Samply audio dashboard
- Netlify Forms for the contact form
- Netlify `_redirects` for Squarespace URL preservation

## Local development

```bash
npm install
npm run dev
```

Production preview:

```bash
npm run build
npm run preview
```

## Samply embeds

Samply embed docs: https://docs.samply.app/embedding.html

Edit `src/data/audioSamples.ts` and add either:

```ts
samplyPlayerId: 'YOUR_PLAYER_ID'
```

or:

```ts
samplyEmbedUrl: 'https://samply.app/embed/YOUR_PLAYER_ID'
```

The React dashboard renders the final iframe as:

```html
<iframe src="https://samply.app/embed/<Player ID>?color=ead3c2"></iframe>
```

## Netlify

Netlify build settings:

- Build command: `npm run build`
- Publish directory: `dist`
- Node version: `22`

These are already encoded in `netlify.toml`.

## Current URL redirects

Configured in `public/_redirects`:

- `/home` → `/`
- `/studio-1` → `/studio`
- `/store/p/vocal-recording` → `/studio#vocal-recording`
- `/store/p/production-polish` → `/studio#production-polish`
- `/store/p/mixing` → `/studio#mixing`
- `/store/p/mastering` → `/studio#mastering`
- `/post-submit` → `/thanks`
