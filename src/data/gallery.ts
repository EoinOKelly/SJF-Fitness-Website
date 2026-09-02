export interface GalleryImage {
  src: string
  alt: string
  width: number
  height: number
  /** Tailwind grid class for asymmetric layout */
  className?: string
  /** Keeps the subject framed when a landscape image is cropped into the grid */
  objectPosition?: string
}

export const galleryImages: GalleryImage[] = [
  {
    src: '/gallery/01-studio.jpg',
    alt: 'The private SJF Fitness studio and training equipment',
    width: 1800,
    height: 1200,
    className: 'sm:col-span-2 lg:row-span-2',
  },
  {
    src: '/gallery/02-colour-weights.jpg',
    alt: 'Colourful weight plates ready for a strength session',
    width: 1800,
    height: 1200,
  },
  {
    src: '/gallery/06-free-weights.jpg',
    alt: 'Chrome free weights in the private studio',
    width: 1800,
    height: 1200,
  },
  {
    src: '/gallery/5.jpg',
    alt: 'Anatomy and movement guides in the studio',
    width: 1800,
    height: 1200,
  },
  {
    src: '/gallery/22.jpg',
    alt: 'Stability ball ready for a training session',
    width: 1800,
    height: 1200,
  },
  {
    src: '/gallery/26.jpg',
    alt: 'Strength training equipment in the private studio',
    width: 1800,
    height: 1200,
  },
  {
    src: '/gallery/39.jpg',
    alt: 'Colourful kettlebells and training equipment',
    width: 1800,
    height: 1200,
  },
  {
    src: '/gallery/45.jpg',
    alt: 'Adjustable weight stack for strength training',
    width: 1800,
    height: 1200,
  },
  {
    src: '/gallery/47.jpg',
    alt: 'Cable machine and rope attachments in the studio',
    width: 1800,
    height: 1200,
  },
]
