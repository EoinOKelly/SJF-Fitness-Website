# SJF Fitness Portlaoise

Modern React website for [SJF Fitness Portlaoise](https://sjffitnessportlaoise.com): Sandra Furney, personal trainer, nutrition expert and trained chef.

## Features

- Responsive marketing site with Home, Testimonials, and Contact pages
- Simple contact form with name, email, subject, and message fields
- Client testimonials section
- Contact form with map embed
- Same-origin Vercel Function for contact submissions via Resend

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

Open [http://localhost:5173](http://localhost:5173). In production, forms submit to the same-origin `/api/contact` Vercel Function.

## Environment Variables

| Variable | Description |
|----------|-------------|
| `RESEND_API_KEY` | Required server-side Resend API key. Do not prefix it with `VITE_`. |
| `CONTACT_FROM_EMAIL` | Required sender using a domain verified in Resend, e.g. `SJF Fitness <website@sjffitnessportlaoise.com>`. |
| `CONTACT_TO_EMAIL` | Required inbox that receives website enquiries. |
| `VITE_CONTACT_API_URL` | Optional frontend override. Defaults to `/api/contact`. |

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

Deploy the repository as a Vite project on Vercel. Add `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, and `CONTACT_TO_EMAIL` under Project Settings → Environment Variables for Production and Preview, then redeploy:

```bash
npm run build
```

The sender domain in `CONTACT_FROM_EMAIL` must be verified in Resend. The visitor's email is applied as the reply-to address, so replying to an enquiry goes directly to them.

## Content Updates

- Site config (phone, email, address): `src/data/siteConfig.ts`
- Services: `src/data/services.ts`
- Testimonials: `src/data/testimonials.ts`
