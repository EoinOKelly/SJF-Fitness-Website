import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircle2, Loader2 } from 'lucide-react'
import { contactFormSchema, type ContactFormData } from '../../lib/bookingValidation'
import { submitToFormspree } from '../../lib/formSubmit'
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

    const response = await submitToFormspree(import.meta.env.VITE_FORMSPREE_CONTACT_ID, {
      _subject: 'New contact form message',
      name: data.name,
      phone: data.phone,
      email: data.email,
      message: data.message,
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
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-teal/10">
          <CheckCircle2 className="h-7 w-7 text-teal" />
        </div>
        <p className="font-medium text-charcoal">{result.message}</p>
        <Button
          type="button"
          variant="outline"
          className="mt-4"
          onClick={() => setResult(null)}
        >
          Send another message
        </Button>
      </Card>
    )
  }

  return (
    <Card>
      <h2 className="mb-6 font-display text-xl font-bold text-charcoal">Send a message</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="contact-name" className="mb-1 block text-sm font-medium text-charcoal">
            Full name *
          </label>
          <input
            id="contact-name"
            type="text"
            autoComplete="name"
            className="w-full rounded-lg border border-cream-dark bg-white px-4 py-2.5 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
            {...register('name')}
          />
          {errors.name && <p className="mt-1 text-sm text-coral">{errors.name.message}</p>}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="contact-phone" className="mb-1 block text-sm font-medium text-charcoal">
              Phone *
            </label>
            <input
              id="contact-phone"
              type="tel"
              autoComplete="tel"
              className="w-full rounded-lg border border-cream-dark bg-white px-4 py-2.5 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
              {...register('phone')}
            />
            {errors.phone && <p className="mt-1 text-sm text-coral">{errors.phone.message}</p>}
          </div>

          <div>
            <label htmlFor="contact-email" className="mb-1 block text-sm font-medium text-charcoal">
              Email *
            </label>
            <input
              id="contact-email"
              type="email"
              autoComplete="email"
              className="w-full rounded-lg border border-cream-dark bg-white px-4 py-2.5 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
              {...register('email')}
            />
            {errors.email && <p className="mt-1 text-sm text-coral">{errors.email.message}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="contact-message" className="mb-1 block text-sm font-medium text-charcoal">
            Message *
          </label>
          <textarea
            id="contact-message"
            rows={5}
            className="w-full rounded-lg border border-cream-dark bg-white px-4 py-2.5 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
            {...register('message')}
          />
          {errors.message && <p className="mt-1 text-sm text-coral">{errors.message.message}</p>}
        </div>

        {result && !result.ok && (
          <p className="rounded-lg bg-coral/10 px-4 py-3 text-sm text-coral">{result.message}</p>
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
