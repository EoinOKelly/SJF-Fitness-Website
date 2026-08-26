# SJF Fitness Portlaoise

Modern React website for [SJF Fitness Portlaoise](https://sjffitnessportlaoise.com): Sandra Furney, personal trainer, nutrition expert and trained chef.

## Features

- Responsive marketing site with Home, Testimonials, and Contact pages
- Contact form with name, email, phone, service selection, and message fields
- Client testimonials section
- Contact form with map embed
- Shared AOK Emails backend on Render for contact submissions

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
npm run dev
```

Open [http://localhost:5173](http://localhost:5173). Forms submit to the shared AOK Emails API on Render by default.

## Environment Variables

| Variable | Description |
|----------|-------------|
| `VITE_CONTACT_API_URL` | Optional frontend override. Defaults to `https://aok-website.onrender.com/api/contact`. |

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build |

## Adding Photos

Replace placeholder areas by adding images to `public/`:

- `public/hero.jpg` for the hero section background
- `public/about.jpg` for the about section photo

Update the Hero and About components to use `<img src="/hero.jpg" ... />` when photos are ready.

## Deployment

Build the site and deploy it as a Vite project on Vercel:

```bash
npm run build
```

The Render backend is responsible for validating submissions, sending the email, and allowing requests from the deployed website through CORS.

## Content Updates

- Site config (phone, email, address): `src/data/siteConfig.ts`
- Services: `src/data/services.ts`
- Testimonials: `src/data/testimonials.ts`
