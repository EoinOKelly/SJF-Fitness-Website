import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { bookingDetailsSchema, type BookingDetails } from '../../lib/bookingValidation'

interface DetailsFormProps {
  defaultValues: BookingDetails
  onSubmit: (data: BookingDetails) => void
}

export function DetailsForm({ defaultValues, onSubmit }: DetailsFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingDetails>({
    resolver: zodResolver(bookingDetailsSchema),
    defaultValues,
  })

  return (
    <form id="booking-details-form" onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-charcoal">
          Full name *
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          className="w-full rounded-lg border border-cream-dark bg-white px-4 py-2.5 text-charcoal focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
          {...register('name')}
        />
        {errors.name && <p className="mt-1 text-sm text-coral">{errors.name.message}</p>}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-medium text-charcoal">
            Phone *
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            className="w-full rounded-lg border border-cream-dark bg-white px-4 py-2.5 text-charcoal focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
            {...register('phone')}
          />
          {errors.phone && <p className="mt-1 text-sm text-coral">{errors.phone.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-charcoal">
            Email *
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            className="w-full rounded-lg border border-cream-dark bg-white px-4 py-2.5 text-charcoal focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
            {...register('email')}
          />
          {errors.email && <p className="mt-1 text-sm text-coral">{errors.email.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-charcoal">
          Message (optional)
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Tell Sandra about your goals or any questions..."
          className="w-full rounded-lg border border-cream-dark bg-white px-4 py-2.5 text-charcoal focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
          {...register('message')}
        />
      </div>
    </form>
  )
}
