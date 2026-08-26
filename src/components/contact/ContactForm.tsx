import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircle2, ChevronDown, Loader2, Send } from 'lucide-react'
import { contactFormSchema, type ContactFormData } from '../../lib/bookingValidation'
import { submitToContactApi } from '../../lib/formSubmit'
import { formatServiceOption, serviceOptions } from '../../data/services'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'

const fieldClass =
  'min-h-12 w-full rounded-sm border border-white/15 bg-obsidian px-4 text-base text-ivory shadow-inner shadow-black/10 transition-[border-color,box-shadow,background-color] duration-200 placeholder:text-ash-dim hover:border-white/25 focus:border-brand focus:bg-onyx focus:outline-none focus:ring-2 focus:ring-brand/20'

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false)
  const [result, setResult] = useState<{ ok: boolean; message: string } | null>(null)
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  async function onSubmit(data: ContactFormData) {
    setSubmitting(true)
    setResult(null)
    const response = await submitToContactApi(data)
    setSubmitting(false)
    setResult(response)
    if (response.ok) reset()
  }

  if (result?.ok) {
    return (
      <Card className="text-center shadow-2xl shadow-black/15">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-brand/40 bg-brand/5">
          <CheckCircle2 className="h-6 w-6 text-brand" />
        </div>
        <h2 className="font-display text-2xl text-ivory">Message sent</h2>
        <p className="mt-3 text-ash">{result.message}</p>
        <Button type="button" variant="outline" className="mt-6 w-full sm:w-auto" onClick={() => setResult(null)}>
          Send another message
        </Button>
      </Card>
    )
  }

  return (
    <Card className="relative overflow-hidden shadow-2xl shadow-black/15">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/70 to-transparent" />
      <div className="mb-7 border-b border-white/10 pb-6">
        <p className="eyebrow">Enquire</p>
        <h2 className="mt-3 font-display text-2xl text-ivory sm:text-3xl">Send Sandra a message</h2>
        <p className="mt-2 text-sm leading-relaxed text-ash">Complete the form and Sandra will get back to you personally.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
        <div className="pointer-events-none fixed left-0 top-0 h-px w-px overflow-hidden opacity-0" aria-hidden="true">
          <label htmlFor="contact-website">Website</label>
          <input id="contact-website" type="text" tabIndex={-1} autoComplete="off" {...register('website')} />
        </div>

        <div>
          <label htmlFor="contact-name" className="mb-2 block text-[0.68rem] font-medium uppercase tracking-[0.16em] text-ash">Full name *</label>
          <input id="contact-name" type="text" autoComplete="name" className={fieldClass} aria-invalid={errors.name ? 'true' : 'false'} {...register('name')} />
          {errors.name && <p className="mt-2 text-sm text-red-300">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="contact-email" className="mb-2 block text-[0.68rem] font-medium uppercase tracking-[0.16em] text-ash">Email *</label>
          <input id="contact-email" type="email" autoComplete="email" className={fieldClass} aria-invalid={errors.email ? 'true' : 'false'} {...register('email')} />
          {errors.email && <p className="mt-2 text-sm text-red-300">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="contact-phone" className="mb-2 block text-[0.68rem] font-medium uppercase tracking-[0.16em] text-ash">Phone number *</label>
          <input id="contact-phone" type="tel" inputMode="tel" autoComplete="tel" className={fieldClass} aria-invalid={errors.phone ? 'true' : 'false'} {...register('phone')} />
          {errors.phone && <p className="mt-2 text-sm text-red-300">{errors.phone.message}</p>}
        </div>

        <div>
          <label htmlFor="contact-service" className="mb-2 block text-[0.68rem] font-medium uppercase tracking-[0.16em] text-ash">What service would you like? *</label>
          <div className="group relative">
            <select id="contact-service" defaultValue="" className={`${fieldClass} cursor-pointer appearance-none truncate pr-12`} aria-invalid={errors.service ? 'true' : 'false'} {...register('service')}>
              <option value="" disabled>Choose a service</option>
              {serviceOptions.map((option) => (
                <option key={option.id} value={formatServiceOption(option)}>{formatServiceOption(option)}</option>
              ))}
            </select>
            <span className="pointer-events-none absolute inset-y-px right-px flex w-11 items-center justify-center border-l border-white/10 bg-onyx text-brand transition-colors group-focus-within:bg-brand/10">
              <ChevronDown className="h-4 w-4" aria-hidden="true" />
            </span>
          </div>
          {errors.service && <p className="mt-2 text-sm text-red-300">{errors.service.message}</p>}
        </div>

        <div>
          <label htmlFor="contact-message" className="mb-2 block text-[0.68rem] font-medium uppercase tracking-[0.16em] text-ash">Message *</label>
          <textarea id="contact-message" rows={5} className={`${fieldClass} min-h-36 resize-y py-3`} aria-invalid={errors.message ? 'true' : 'false'} {...register('message')} />
          {errors.message && <p className="mt-2 text-sm text-red-300">{errors.message.message}</p>}
        </div>

        {result && !result.ok && (
          <p role="alert" className="border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-300">{result.message}</p>
        )}

        <Button type="submit" disabled={submitting} className="w-full sm:w-auto">
          {submitting ? <><Loader2 className="h-4 w-4 animate-spin" />Sending...</> : <><span>Send Message</span><Send className="h-4 w-4" aria-hidden="true" /></>}
        </Button>
      </form>
    </Card>
  )
}
