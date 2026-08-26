export interface FormSubmitResult {
  ok: boolean
  message: string
}

const DEFAULT_CONTACT_API_URL = '/api/contact'

export function getContactApiUrl(): string {
  return import.meta.env.VITE_CONTACT_API_URL || DEFAULT_CONTACT_API_URL
}

export interface ContactApiPayload {
  name: string
  email: string
  subject: string
  message: string
  website?: string
  site?: string
}

export async function submitToContactApi(
  payload: ContactApiPayload,
): Promise<FormSubmitResult> {
  try {
    const response = await fetch(getContactApiUrl(), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        site: 'sjf',
        ...payload,
      }),
    })

    const body = (await response.json()) as { message?: string }

    if (response.ok) {
      return { ok: true, message: body.message ?? 'Your message has been sent successfully.' }
    }

    return {
      ok: false,
      message: body.message ?? 'Something went wrong. Please try again or contact Sandra directly.',
    }
  } catch {
    return {
      ok: false,
      message: 'Unable to send your message. Please try again or contact Sandra directly.',
    }
  }
}

export interface BookingSubmission {
  service: string
  price?: string
  date: string
  time: string
  name: string
  phone: string
  email: string
  message?: string
}

export function formatBookingMessage(booking: BookingSubmission): string {
  const lines = [
    'NEW BOOKING REQUEST',
    '',
    `Service: ${booking.service}`,
  ]

  if (booking.price) {
    lines.push(`Price: ${booking.price}`)
  }

  lines.push(
    `Date: ${booking.date}`,
    `Time: ${booking.time}`,
    '',
    'Contact details:',
    `Name: ${booking.name}`,
    `Phone: ${booking.phone}`,
    `Email: ${booking.email}`,
  )

  if (booking.message?.trim()) {
    lines.push('', 'Additional message:', booking.message.trim())
  }

  return lines.join('\n')
}

export async function submitBookingRequest(
  booking: BookingSubmission,
): Promise<FormSubmitResult> {
  return submitToContactApi({
    name: booking.name,
    email: booking.email,
    subject: `Booking request: ${booking.service}`,
    message: formatBookingMessage(booking),
  })
}

export function formatBookingDate(date: Date): string {
  return date.toLocaleDateString('en-IE', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export function formatBookingDateISO(date: Date): string {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}
