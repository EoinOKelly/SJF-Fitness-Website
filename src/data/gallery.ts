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
]
