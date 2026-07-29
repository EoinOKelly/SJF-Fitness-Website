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
        <label htmlFor="name" className="mb-2 block text-[0.68rem] font-medium uppercase tracking-[0.16em] text-ash">
          Full name *
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          className="w-full border border-white/10 bg-obsidian px-4 py-3 text-ivory placeholder:text-ash-dim transition-colors focus:border-brand focus:outline-none"
          {...register('name')}
        />
        {errors.name && <p className="mt-2 text-sm text-red-300">{errors.name.message}</p>}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-2 block text-[0.68rem] font-medium uppercase tracking-[0.16em] text-ash">
            Phone *
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            className="w-full border border-white/10 bg-obsidian px-4 py-3 text-ivory placeholder:text-ash-dim transition-colors focus:border-brand focus:outline-none"
            {...register('phone')}
          />
          {errors.phone && <p className="mt-2 text-sm text-red-300">{errors.phone.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-[0.68rem] font-medium uppercase tracking-[0.16em] text-ash">
            Email *
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            className="w-full border border-white/10 bg-obsidian px-4 py-3 text-ivory placeholder:text-ash-dim transition-colors focus:border-brand focus:outline-none"
            {...register('email')}
          />
          {errors.email && <p className="mt-2 text-sm text-red-300">{errors.email.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-[0.68rem] font-medium uppercase tracking-[0.16em] text-ash">
          Message (optional)
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Tell Sandra about your goals or any questions..."
          className="w-full border border-white/10 bg-obsidian px-4 py-3 text-ivory placeholder:text-ash-dim transition-colors focus:border-brand focus:outline-none"
          {...register('message')}
        />
      </div>
    </form>
  )
}
