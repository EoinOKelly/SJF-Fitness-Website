import { useState } from 'react'
import { CheckCircle2, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react'
import { getServiceById } from '../../data/services'
import { siteConfig } from '../../data/siteConfig'
import type { BookingDetails } from '../../lib/bookingValidation'
import {
  formatBookingDate,
  formatBookingDateISO,
  submitToFormspree,
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

    const result = await submitToFormspree(import.meta.env.VITE_FORMSPREE_BOOKING_ID, {
      _subject: `New booking request: ${service.title}`,
      service: service.title,
      price: service.price,
      date: formatBookingDateISO(date),
      dateFormatted: formatBookingDate(date),
      time,
      name: details.name,
      phone: details.phone,
      email: details.email,
      message: details.message ?? '',
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
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal/10">
          <CheckCircle2 className="h-8 w-8 text-teal" />
        </div>
        <h2 className="font-display text-2xl font-bold text-charcoal">Booking Request Sent</h2>
        <p className="mt-3 text-muted">
          Thank you, {details.name}! Sandra will review your request and confirm your appointment
          shortly.
        </p>
        <p className="mt-4 text-sm text-muted">
          Need to reach her sooner? Call{' '}
          <a href={siteConfig.phoneHref} className="font-semibold text-teal">
            {siteConfig.phone}
          </a>{' '}
          or email{' '}
          <a href={siteConfig.emailHref} className="font-semibold text-teal">
            {siteConfig.email}
          </a>
        </p>
      </Card>
    )
  }

  return (
    <div>
      <div className="mb-8 flex items-center justify-center gap-2">
        {STEPS.map((label, index) => (
          <div key={label} className="flex items-center gap-2">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${
                index <= step ? 'bg-teal text-white' : 'bg-cream-dark text-muted'
              }`}
            >
              {index + 1}
            </div>
            <span
              className={`hidden text-sm sm:inline ${
                index <= step ? 'font-medium text-charcoal' : 'text-muted'
              }`}
            >
              {label}
            </span>
            {index < STEPS.length - 1 && (
              <div className={`mx-1 h-px w-6 sm:w-10 ${index < step ? 'bg-teal' : 'bg-cream-dark'}`} />
            )}
          </div>
        ))}
      </div>

      <Card className="mx-auto max-w-2xl">
        {step === 0 && (
          <>
            <h2 className="mb-4 font-display text-xl font-bold">Choose a service</h2>
            <ServiceSelect selectedId={serviceId} onSelect={setServiceId} />
          </>
        )}

        {step === 1 && (
          <>
            <h2 className="mb-4 font-display text-xl font-bold">Pick a date</h2>
            <DateSelect selected={date} onSelect={setDate} />
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="mb-4 font-display text-xl font-bold">Pick a time</h2>
            <TimeSelect selected={time} onSelect={setTime} />
          </>
        )}

        {step === 3 && (
          <>
            <h2 className="mb-4 font-display text-xl font-bold">Your details</h2>
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
            <h2 className="mb-4 font-display text-xl font-bold">Review your booking</h2>
            <dl className="space-y-3 text-sm">
              <div className="flex justify-between border-b border-cream-dark pb-3">
                <dt className="text-muted">Service</dt>
                <dd className="font-medium text-charcoal">{service.title}</dd>
              </div>
              <div className="flex justify-between border-b border-cream-dark pb-3">
                <dt className="text-muted">Price</dt>
                <dd className="font-medium text-coral">{service.price}</dd>
              </div>
              <div className="flex justify-between border-b border-cream-dark pb-3">
                <dt className="text-muted">Date</dt>
                <dd className="font-medium text-charcoal">{formatBookingDate(date)}</dd>
              </div>
              <div className="flex justify-between border-b border-cream-dark pb-3">
                <dt className="text-muted">Time</dt>
                <dd className="font-medium text-charcoal">{time}</dd>
              </div>
              <div className="flex justify-between border-b border-cream-dark pb-3">
                <dt className="text-muted">Name</dt>
                <dd className="font-medium text-charcoal">{details.name}</dd>
              </div>
              <div className="flex justify-between border-b border-cream-dark pb-3">
                <dt className="text-muted">Phone</dt>
                <dd className="font-medium text-charcoal">{details.phone}</dd>
              </div>
              <div className="flex justify-between border-b border-cream-dark pb-3">
                <dt className="text-muted">Email</dt>
                <dd className="font-medium text-charcoal">{details.email}</dd>
              </div>
              {details.message && (
                <div className="border-b border-cream-dark pb-3">
                  <dt className="text-muted">Message</dt>
                  <dd className="mt-1 font-medium text-charcoal">{details.message}</dd>
                </div>
              )}
            </dl>
            {error && (
              <p className="mt-4 rounded-lg bg-coral/10 px-4 py-3 text-sm text-coral">{error}</p>
            )}
          </>
        )}

        <div className="mt-8 flex items-center justify-between gap-4">
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
            <Button type="button" onClick={handleSubmit} disabled={submitting}>
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
