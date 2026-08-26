import type { LucideIcon } from 'lucide-react'
import { Dumbbell } from 'lucide-react'

export interface Service {
  id: string
  title: string
  description: string
  icon: LucideIcon
}

export interface ServiceOption {
  id: string
  name: string
  duration: string
  price: string
  priceNote?: string
}

export const serviceOptions: ServiceOption[] = [
  {
    id: 'first-consultation',
    name: 'First Consultation',
    duration: '1 hour',
    price: '€40',
  },
  {
    id: 'personal-training',
    name: 'Personal Training',
    duration: '1 hour',
    price: '€40',
  },
  {
    id: 'train-with-a-friend',
    name: 'Train with a Friend',
    duration: '1 hour',
    price: '€30',
    priceNote: 'per person',
  },
]

export function formatServiceOption(option: ServiceOption): string {
  return `${option.name} — ${option.duration} — ${option.price}${option.priceNote ? ` ${option.priceNote}` : ''}`
}

export const services: Service[] = [
  {
    id: 'personal-training',
    title: 'Personal Training & Nutrition Advice',
    description:
      'One complete programme built around you, combining private one-to-one training with practical nutrition and menu advice. Whether your goal is weight loss, strength, body conditioning, preparing for your wedding, or returning to exercise after having a baby, Sandra supports the whole journey with the added real-world knowledge of a trained chef.',
    icon: Dumbbell,
  },
]

export function getServiceById(id: string): Service | undefined {
  return services.find((s) => s.id === id)
}
