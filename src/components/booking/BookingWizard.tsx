import { useState } from 'react'
import { CheckCircle2, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react'
import { getServiceById } from '../../data/services'
import { siteConfig } from '../../data/siteConfig'
import type { BookingDetails } from '../../lib/bookingValidation'
import {
  formatBookingDate,
  submitBookingRequest,
} from '../../lib/formSubmit'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'
import { DateSelect } from './DateSelect'
import { DetailsForm } from './DetailsForm'
import { ServiceSelect } from './ServiceSelect'
import { TimeSelect } from './TimeSelect'

const STEPS = ['Service', 'Date', 'Time', 'Details', 'Review'] as const

const emptyDetails: BookingDetails = {
  name: '',
  phone: '',
  email: '',
  message: '',
}

export function BookingWizard() {
  const [step, setStep] = useState(0)
  const [serviceId, setServiceId] = useState('')
  const [date, setDate] = useState<Date | undefined>()
  const [time, setTime] = useState('')
  const [details, setDetails] = useState<BookingDetails>(emptyDetails)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const service = getServiceById(serviceId)

  function canProceed(): boolean {
    switch (step) {
      case 0:
        return !!serviceId
      case 1:
        return !!date
      case 2:
        return !!time
      case 3:
        return false
      default:
        return true
    }
  }

  function handleNext() {
    if (step < STEPS.length - 1 && canProceed()) {
      setStep((s) => s + 1)
    }
  }

  function handleBack() {
    if (step > 0) setStep((s) => s - 1)
  }

  async function handleSubmit() {
    if (!service || !date || !time) return

    setSubmitting(true)
    setError('')

    const result = await submitBookingRequest({
      service: service.title,
      date: formatBookingDate(date),
      time,
      name: details.name,
      phone: details.phone,
      email: details.email,
      message: details.message,
    })

    setSubmitting(false)

    if (result.ok) {
      setSubmitted(true)
    } else {
      setError(result.message)
    }
  }

  if (submitted) {
    return (
      <Card className="mx-auto max-w-lg text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-brand/40">
          <CheckCircle2 className="h-7 w-7 text-brand" />
        </div>
        <h2 className="font-display text-3xl text-ivory">Request received</h2>
        <p className="mt-4 text-ash">
          Thank you, {details.name}. Sandra will review your request and confirm your appointment
          personally.
        </p>
        <p className="mt-6 text-sm text-ash">
          Need her sooner? Call{' '}
          <a href={siteConfig.phoneHref} className="text-brand hover:text-brand-light">
            {siteConfig.phone}
          </a>{' '}
          or email{' '}
          <a href={siteConfig.emailHref} className="text-brand hover:text-brand-light">
            {siteConfig.email}
          </a>
        </p>
      </Card>
    )
  }

  return (
    <div>
      <div className="mb-8 flex items-center justify-center gap-1 overflow-hidden sm:mb-10 sm:gap-2" aria-label={`Booking progress: step ${step + 1} of ${STEPS.length}, ${STEPS[step]}`}>
        {STEPS.map((label, index) => (
          <div key={label} className="flex items-center gap-2">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium transition-colors ${
                index <= step
                  ? 'border-brand bg-brand text-obsidian'
                  : 'border-white/15 text-ash-dim'
              }`}
            >
              {index + 1}
            </div>
            <span
              className={`hidden text-[0.68rem] uppercase tracking-[0.18em] sm:inline ${
                index <= step ? 'text-ivory' : 'text-ash-dim'
              }`}
            >
              {label}
            </span>
            {index < STEPS.length - 1 && (
              <div
                className={`h-px w-3 min-[380px]:w-5 sm:mx-1 sm:w-10 ${index < step ? 'bg-brand' : 'bg-white/15'}`}
              />
            )}
          </div>
        ))}
      </div>

      <Card className="mx-auto max-w-2xl">
        {step === 0 && (
          <>
            <h2 className="mb-6 font-display text-2xl text-ivory">Choose a service</h2>
            <ServiceSelect selectedId={serviceId} onSelect={setServiceId} />
          </>
        )}

        {step === 1 && (
          <>
            <h2 className="mb-6 font-display text-2xl text-ivory">Pick a date</h2>
            <DateSelect selected={date} onSelect={setDate} />
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="mb-6 font-display text-2xl text-ivory">Pick a time</h2>
            <TimeSelect selected={time} onSelect={setTime} />
          </>
        )}

        {step === 3 && (
          <>
            <h2 className="mb-6 font-display text-2xl text-ivory">Your details</h2>
            <DetailsForm
              defaultValues={details}
              onSubmit={(data) => {
                setDetails(data)
                setStep(4)
              }}
            />
          </>
        )}

        {step === 4 && service && date && (
          <>
            <h2 className="mb-6 font-display text-2xl text-ivory">Review your booking</h2>
            <dl className="space-y-3 text-sm">
              <div className="flex justify-between border-b border-white/10 pb-3">
                <dt className="text-ash">Service</dt>
                <dd className="text-ivory">{service.title}</dd>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-3">
                <dt className="text-ash">Date</dt>
                <dd className="text-ivory">{formatBookingDate(date)}</dd>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-3">
                <dt className="text-ash">Time</dt>
                <dd className="text-ivory">{time}</dd>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-3">
                <dt className="text-ash">Name</dt>
                <dd className="text-ivory">{details.name}</dd>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-3">
                <dt className="text-ash">Phone</dt>
                <dd className="text-ivory">{details.phone}</dd>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-3">
                <dt className="text-ash">Email</dt>
                <dd className="text-ivory">{details.email}</dd>
              </div>
              {details.message && (
                <div className="border-b border-white/10 pb-3">
                  <dt className="text-ash">Message</dt>
                  <dd className="mt-1 text-ivory">{details.message}</dd>
                </div>
              )}
            </dl>
            {error && (
              <p className="mt-4 border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                {error}
              </p>
            )}
          </>
        )}

        <div className="mt-8 flex items-center justify-between gap-2 sm:gap-4">
          <Button
            type="button"
            variant="ghost"
            onClick={handleBack}
            disabled={step === 0}
            className={step === 0 ? 'invisible' : ''}
          >
            <ChevronLeft className="h-4 w-4" />
            Back
          </Button>

          {step < 3 && (
            <Button type="button" onClick={handleNext} disabled={!canProceed()}>
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          )}

          {step === 3 && (
            <Button type="submit" form="booking-details-form">
              Review
              <ChevronRight className="h-4 w-4" />
            </Button>
          )}

          {step === 4 && (
            <Button type="button" onClick={handleSubmit} disabled={submitting} className="px-4 sm:px-7">
              {submitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                'Submit Booking Request'
              )}
            </Button>
          )}
        </div>
      </Card>
    </div>
  )
}
