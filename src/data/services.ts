import type { LucideIcon } from 'lucide-react'
import { Dumbbell, Heart, Users, UtensilsCrossed } from 'lucide-react'

export interface Service {
  id: string
  title: string
  description: string
  price: string
  priceNote?: string
  icon: LucideIcon
}

export const services: Service[] = [
  {
    id: 'personal-training',
    title: 'Personal Training',
    description:
      'A programme built entirely around you — weight loss, body conditioning and toning, coached one-to-one in a private Portlaoise studio. Prefer the open air? Outdoor sessions are available.',
    price: '€40',
    priceNote: 'One hour',
    icon: Dumbbell,
  },
  {
    id: 'weight-loss-nutrition',
    title: 'Weight Loss & Nutrition Advice',
    description:
      'Real, sustainable change — no crash diets, no fads. Sandra reviews how you eat and builds a menu plan you can actually live with, included as part of your training.',
    price: '€40',
    priceNote: 'One hour',
    icon: UtensilsCrossed,
  },
  {
    id: 'weddings-new-mums',
    title: 'Weddings & New Mums',
    description:
      'Preparing for your wedding day, or finding your strength again after birth? A discreet, personal plan for the moments that matter — and new mums are welcome to bring baby to the private studio.',
    price: '€40',
    priceNote: 'One hour',
    icon: Heart,
  },
  {
    id: 'train-with-friend',
    title: 'Train With A Friend',
    description:
      'Share the experience. Train alongside someone you know and keep each other motivated, with personal attention throughout — at a favourable rate per person.',
    price: '€30',
    priceNote: 'One hour per person',
    icon: Users,
  },
]

export function getServiceById(id: string): Service | undefined {
  return services.find((s) => s.id === id)
}
