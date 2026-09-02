import { z } from 'zod'

export const bookingDetailsSchema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  phone: z
    .string()
    .min(7, 'Please enter a valid phone number')
    .regex(/^[\d\s+()-]+$/, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().optional(),
})

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Please enter a valid email address'),
  phone: z
    .string()
    .min(7, 'Please enter a valid phone number')
    .regex(/^[\d\s+()-]+$/, 'Please enter a valid phone number'),
  service: z.string().min(1, 'Service is required'),
  message: z.string().min(10, 'Please enter a message of at least 10 characters'),
  website: z.string().optional(),
})

export type BookingDetails = z.infer<typeof bookingDetailsSchema>
export type ContactFormData = z.infer<typeof contactFormSchema>

export interface BookingState {
  serviceId: string
  date: Date | undefined
  time: string
  details: BookingDetails
}

export function isFutureDate(date: Date): boolean {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const compare = new Date(date)
  compare.setHours(0, 0, 0, 0)
  return compare >= today
}
