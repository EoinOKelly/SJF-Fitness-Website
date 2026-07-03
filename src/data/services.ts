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
      'Whatever your goals are, an individual plan will help you get there. Sandra is a Personal Trainer and Nutrition Expert specialising in weight loss, body conditioning and toning. Workout in private premises on Portlaoise Main Street. Outdoor training is also available.',
    price: '€40',
    priceNote: 'One hour',
    icon: Dumbbell,
  },
  {
    id: 'weight-loss-nutrition',
    title: 'Weight Loss & Nutrition Advice',
    description:
      'As part of your individual plan Sandra will discuss your current diet and what you need to do to achieve your goals. There are no crash diets or fads, just good healthy eating. Healthy eating, menu planning and nutrition advice are included for all clients.',
    price: '€40',
    priceNote: 'One hour',
    icon: UtensilsCrossed,
  },
  {
    id: 'weddings-new-mums',
    title: 'Weddings & New Mums',
    description:
      'Do you need a plan to help you get ready for your wedding day? Or are you a new mother trying to get back in shape? New Mums, because you will be working out in a private studio you can even bring your baby with you!',
    price: '€40',
    priceNote: 'One hour',
    icon: Heart,
  },
  {
    id: 'train-with-friend',
    title: 'Train With A Friend',
    description:
      'Training with a friend can be a great way to stay motivated and have fun too. You will get the personal attention you need at great value prices.',
    price: '€30',
    priceNote: 'One hour per person',
    icon: Users,
  },
]

export function getServiceById(id: string): Service | undefined {
  return services.find((s) => s.id === id)
}
