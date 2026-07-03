export const siteConfig = {
  name: 'SJF Fitness Portlaoise',
  owner: 'Sandra Furney',
  tagline: 'Personal Trainer and Qualified Chef with nutrition, based in Portlaoise.',
  subtitle: 'Female Personal Trainer · Private Premises',
  phone: '086 2523947',
  phoneHref: 'tel:+353862523947',
  email: 'sandra@sjffitnessportlaoise.com',
  emailHref: 'mailto:sandra@sjffitnessportlaoise.com',
  address: {
    line1: 'The Office Box',
    line2: 'Kealew Business Park',
    city: 'Portlaoise',
    eircode: 'R32 K7TX',
    full: 'The Office Box, Kealew Business Park, Portlaoise, R32 K7TX',
  },
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.5!2d-7.300!3d53.034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sKealew+Business+Park!5e0!3m2!1sen!2sie!4v1',
  copyright: `Copyright SJF Fitness ${new Date().getFullYear()}`,
  highlights: [
    'Weight Loss',
    'Menu Planning & Nutrition Advice',
    'Body Conditioning & Toning',
    'Strength & Conditioning',
    'Outdoor Training Available',
  ],
  navLinks: [
    { label: 'Home', href: '/' },
    { label: 'Book Now', href: '/book' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
  booking: {
    slotDurationMinutes: 30,
    startHour: 7,
    endHour: 20,
    allowWeekends: true,
  },
} as const

export type SiteConfig = typeof siteConfig
