# SJF Fitness Portlaoise

Modern React website for [SJF Fitness Portlaoise](https://sjffitnessportlaoise.com) — Sandra Furney, personal trainer and nutrition expert.

## Features

- Responsive marketing site with Home, Book Now, Blog, and Contact pages
- Multi-step booking wizard (service → date → time → details → review)
- Static blog with migrated posts
- Contact form with map embed
- Formspree integration for booking and contact submissions

## Tech Stack

- Vite + React 19 + TypeScript
- Tailwind CSS v4
- React Router v7
- react-hook-form + zod
- react-day-picker
- react-helmet-async

## Getting Started

```bash
npm install
cp .env.example .env   # then add your Formspree form IDs
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Environment Variables

| Variable | Description |
|----------|-------------|
| `VITE_FORMSPREE_BOOKING_ID` | Formspree form ID for booking requests |
| `VITE_FORMSPREE_CONTACT_ID` | Formspree form ID for contact messages |

Without these set, forms show a fallback message directing users to call or email Sandra directly.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build |

## Adding Photos

Replace placeholder areas by adding images to `public/`:

- `public/hero.jpg` — hero section background
- `public/about.jpg` — about section photo

Update the Hero and About components to use `<img src="/hero.jpg" ... />` when photos are ready.

## Deployment

Build the site and deploy the `dist/` folder to any static host (Netlify, Vercel, GitHub Pages, etc.):

```bash
npm run build
```

Set environment variables in your hosting provider's dashboard.

## Content Updates

- Site config (phone, email, address): `src/data/siteConfig.ts`
- Services & pricing: `src/data/services.ts`
- Blog posts: `src/data/blogPosts.ts`
