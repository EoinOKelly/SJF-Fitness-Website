export interface GalleryImage {
  src: string
  alt: string
  /** Tailwind grid class for asymmetric layout */
  className?: string
  /** Keeps the subject framed when a landscape image is cropped into the grid */
  objectPosition?: string
}

export const galleryImages: GalleryImage[] = [
  {
    src: '/gallery/01-studio.jpg',
    alt: 'The private SJF Fitness studio and training equipment',
    className: 'sm:col-span-2 lg:row-span-2',
  },
  {
    src: '/gallery/02-colour-weights.jpg',
    alt: 'Colourful weight plates ready for a strength session',
  },
  {
    src: '/gallery/03-barbell-training.jpg',
    alt: 'Sandra demonstrating a controlled barbell squat',
    objectPosition: '50% 36%',
  },
  {
    src: '/gallery/04-bike-training.jpg',
    alt: 'Sandra training on the studio bike',
    objectPosition: '50% 28%',
  },
  {
    src: '/gallery/05-cable-training.jpg',
    alt: 'Sandra demonstrating a focused cable exercise',
    objectPosition: '50% 30%',
  },
  {
    src: '/gallery/06-free-weights.jpg',
    alt: 'Chrome free weights in the private studio',
  },
  {
    src: '/gallery/07-strength-training.jpg',
    alt: 'Sandra leading a strength training session',
    className: 'lg:col-span-2 lg:row-span-3',
    objectPosition: '50% 34%',
  },
  {
    src: '/gallery/08-personal-trainer.jpg',
    alt: 'Sandra Furney, personal trainer at SJF Fitness',
    className: 'lg:row-span-3',
    objectPosition: '50% 28%',
  },
]
