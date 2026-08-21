export interface GalleryImage {
  src: string
  alt: string
  /** Tailwind grid class for asymmetric layout */
  className?: string
}

export const galleryImages: GalleryImage[] = [
  {
    src: '/gallery/01-sandra.jpg',
    alt: 'Sandra Furney, personal trainer at SJF Fitness',
    className: 'sm:col-span-2 sm:row-span-2',
  },
  {
    src: '/gallery/03-training.jpg',
    alt: 'Private training session at SJF Fitness',
  },
  {
    src: '/gallery/05-movement.jpg',
    alt: 'Movement and conditioning in the studio',
  },
  {
    src: '/gallery/02-studio.jpg',
    alt: 'Inside the SJF Fitness private studio',
    className: 'sm:col-span-2',
  },
  {
    src: '/gallery/06-focus.jpg',
    alt: 'Focused strength work with Sandra',
  },
]
