# Logic Sieve — Supervive aut Mori EX

A forensic debate scoring tool built with React + Vite.

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## PWA Icons

The app is configured as a Progressive Web App. Before deploying, generate
the icon files and place them in the `public/` folder:

- `public/icon-192.png` — 192×192 px PNG icon
- `public/icon-512.png` — 512×512 px PNG icon (also used as maskable)

You can convert the included `public/favicon.svg` to PNG at any size using
a tool like https://cloudconvert.com/svg-to-png or Inkscape.

## Stack

- React 19
- Vite 6
- Tailwind CSS v4
- vite-plugin-pwa (Workbox)
- TypeScript

## PWA Install

Once deployed over HTTPS, users can install Logic Sieve directly to their
home screen via their browser's "Add to Home Screen" prompt.
