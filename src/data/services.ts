import type { LucideIcon } from 'lucide-react'
import { Dumbbell, Heart, UtensilsCrossed } from 'lucide-react'

export interface Service {
  id: string
  title: string
  description: string
  icon: LucideIcon
}

export const services: Service[] = [
  {
    id: 'personal-training',
    title: 'Personal Training',
    description:
      'A programme built entirely around you: weight loss, body conditioning and toning, coached one-to-one in a private Portlaoise studio.',
    icon: Dumbbell,
  },
  {
    id: 'weight-loss-nutrition',
    title: 'Weight Loss & Nutrition Advice',
    description:
      'Real, sustainable change with no crash diets and no fads. As a trained chef, Sandra reviews how you eat and builds a menu plan you can actually live with, included as part of your training.',
    icon: UtensilsCrossed,
  },
  {
    id: 'weddings-new-mums',
    title: 'Weddings & New Mums',
    description:
      'Preparing for your wedding day, or finding your strength again after birth? A discreet, personal plan for the moments that matter, coached privately just for you.',
    icon: Heart,
  },
]

export function getServiceById(id: string): Service | undefined {
  return services.find((s) => s.id === id)
}
