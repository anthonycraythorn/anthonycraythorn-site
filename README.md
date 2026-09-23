# anthonycraythorn.com

**The source for my personal website, [anthonycraythorn.com](https://anthonycraythorn.com). It covers my live sound and theatre credits, studio mixing work, listening samples and writing.**

| | |
|---|---|
| **Stack** | [Astro](https://astro.build) static site · TypeScript · a React island for the interactive audio player (Samply embeds) · Netlify Forms · Netlify hosting with continuous deploy from this repo |
| **Why** | A rebuild off Squarespace, for full control, speed, and a site I can extend myself |
| **Built with** | Built with Claude and AI coding agents as pair programmers (see `AGENTS.md`) |

## Structure
- `src/pages/` has the pages: home, live credits, studio, listen, contact, and the blog.
- `src/content/blog/` holds the blog, written in Markdown as an Astro content collection.
- `src/data/` holds typed data for show credits and audio samples, so adding a credit or a mix is a one-line change.
- `src/components/SamplyDashboard.tsx` is the React listening dashboard.
- `public/_redirects` keeps the old Squarespace URLs working after the migration.

## Run it locally
```bash
npm install
npm run dev      # local dev server
npm run build    # static build to dist/
```

---
Part of [Anthony Craythorn's portfolio](https://github.com/anthonycraythorn). I'm an audio engineer working on voice, restoration and AI audio.
