import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircle2, Loader2 } from 'lucide-react'
import { contactFormSchema, type ContactFormData } from '../../lib/bookingValidation'
import { submitToContactApi } from '../../lib/formSubmit'
import { formatServiceOption, serviceOptions } from '../../data/services'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false)
  const [result, setResult] = useState<{ ok: boolean; message: string } | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  async function onSubmit(data: ContactFormData) {
    setSubmitting(true)
    setResult(null)

    const response = await submitToContactApi({
      name: data.name,
      email: data.email,
      phone: data.phone,
      service: data.service,
      message: data.message,
      website: data.website,
    })

    setSubmitting(false)
    setResult(response)

    if (response.ok) {
      reset()
    }
  }

  if (result?.ok) {
    return (
      <Card className="text-center">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-brand/40">
          <CheckCircle2 className="h-6 w-6 text-brand" />
        </div>
        <p className="text-ivory">{result.message}</p>
        <Button
          type="button"
          variant="outline"
          className="mt-6"
          onClick={() => setResult(null)}
        >
          Send another message
        </Button>
      </Card>
    )
  }

  return (
    <Card>
      <h2 className="mb-7 font-display text-2xl text-ivory">Send a message</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="absolute -left-[9999px]" aria-hidden="true">
          <label htmlFor="contact-website">Website</label>
          <input
            id="contact-website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register('website')}
          />
        </div>
        <div>
          <label htmlFor="contact-name" className="mb-2 block text-[0.68rem] font-medium uppercase tracking-[0.16em] text-ash">
            Full name *
          </label>
          <input
            id="contact-name"
            type="text"
            autoComplete="name"
            className="w-full border border-white/10 bg-obsidian px-4 py-3 text-ivory placeholder:text-ash-dim transition-colors focus:border-brand focus:outline-none"
            {...register('name')}
          />
          {errors.name && <p className="mt-2 text-sm text-red-300">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="contact-email" className="mb-2 block text-[0.68rem] font-medium uppercase tracking-[0.16em] text-ash">
            Email *
          </label>
          <input
            id="contact-email"
            type="email"
            autoComplete="email"
            className="w-full border border-white/10 bg-obsidian px-4 py-3 text-ivory placeholder:text-ash-dim transition-colors focus:border-brand focus:outline-none"
            {...register('email')}
          />
          {errors.email && <p className="mt-2 text-sm text-red-300">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="contact-phone" className="mb-2 block text-[0.68rem] font-medium uppercase tracking-[0.16em] text-ash">
            Phone number *
          </label>
          <input
            id="contact-phone"
            type="tel"
            autoComplete="tel"
            className="w-full border border-white/10 bg-obsidian px-4 py-3 text-ivory placeholder:text-ash-dim transition-colors focus:border-brand focus:outline-none"
            {...register('phone')}
          />
          {errors.phone && <p className="mt-2 text-sm text-red-300">{errors.phone.message}</p>}
        </div>

        <div>
          <label htmlFor="contact-service" className="mb-2 block text-[0.68rem] font-medium uppercase tracking-[0.16em] text-ash">
            What service would you like? *
          </label>
          <select
            id="contact-service"
            defaultValue=""
            className="w-full border border-white/10 bg-obsidian px-4 py-3 text-ivory transition-colors focus:border-brand focus:outline-none"
            {...register('service')}
          >
            <option value="" disabled>Choose a service</option>
            {serviceOptions.map((option) => (
              <option key={option.id} value={formatServiceOption(option)}>
                {formatServiceOption(option)}
              </option>
            ))}
          </select>
          {errors.service && <p className="mt-2 text-sm text-red-300">{errors.service.message}</p>}
        </div>

        <div>
          <label htmlFor="contact-message" className="mb-2 block text-[0.68rem] font-medium uppercase tracking-[0.16em] text-ash">
            Message *
          </label>
          <textarea
            id="contact-message"
            rows={5}
            className="w-full border border-white/10 bg-obsidian px-4 py-3 text-ivory placeholder:text-ash-dim transition-colors focus:border-brand focus:outline-none"
            {...register('message')}
          />
          {errors.message && <p className="mt-2 text-sm text-red-300">{errors.message.message}</p>}
        </div>

        {result && !result.ok && (
          <p className="border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-300">
            {result.message}
          </p>
        )}

        <Button type="submit" disabled={submitting} className="w-full sm:w-auto">
          {submitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            'Send Message'
          )}
        </Button>
      </form>
    </Card>
  )
}
