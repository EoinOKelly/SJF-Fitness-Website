declare const process: {
  env: Record<string, string | undefined>
}

const RESEND_ENDPOINT = 'https://api.resend.com/emails'
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

interface ContactRequest {
  name?: unknown
  email?: unknown
  subject?: unknown
  message?: unknown
  website?: unknown
}

function cleanString(value: unknown, maxLength: number): string | null {
  if (typeof value !== 'string') return null
  const cleaned = value.trim()
  if (!cleaned || cleaned.length > maxLength) return null
  return cleaned
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#039;',
      '"': '&quot;',
    }
    return entities[character] ?? character
  })
}

function json(message: string, status: number): Response {
  return Response.json(
    { message },
    {
      status,
      headers: {
        'Cache-Control': 'no-store',
        'Content-Type': 'application/json',
      },
    },
  )
}

export default {
  async fetch(request: Request): Promise<Response> {
    if (request.method !== 'POST') {
      return json('Method not allowed.', 405)
    }

    const contentType = request.headers.get('content-type') ?? ''
    if (!contentType.includes('application/json')) {
      return json('Content-Type must be application/json.', 415)
    }

    let body: ContactRequest
    try {
      body = (await request.json()) as ContactRequest
    } catch {
      return json('Invalid request body.', 400)
    }

    // Bots commonly fill fields hidden from real visitors. Return success so they do not retry.
    if (typeof body.website === 'string' && body.website.trim()) {
      return json('Your message has been sent successfully.', 200)
    }

    const name = cleanString(body.name, 100)
    const email = cleanString(body.email, 254)
    const subject = cleanString(body.subject, 150)
    const message = cleanString(body.message, 5_000)

    if (!name || !email || !subject || !message || !EMAIL_PATTERN.test(email)) {
      return json('Please provide a valid name, email, subject, and message.', 400)
    }

    const apiKey = process.env.RESEND_API_KEY
    const from = process.env.CONTACT_FROM_EMAIL
    const to = process.env.CONTACT_TO_EMAIL

    if (!apiKey || !from || !to) {
      console.error('Missing RESEND_API_KEY, CONTACT_FROM_EMAIL, or CONTACT_TO_EMAIL')
      return json('Email service is not configured.', 500)
    }

    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safeSubject = escapeHtml(subject)
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br>')

    try {
      const resendResponse = await fetch(RESEND_ENDPOINT, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from,
          to: [to],
          reply_to: email,
          subject: `[SJF Fitness] ${subject}`,
          text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
          html: `<h2>SJF Fitness website enquiry</h2><p><strong>Name:</strong> ${safeName}</p><p><strong>Email:</strong> ${safeEmail}</p><p><strong>Subject:</strong> ${safeSubject}</p><hr><p>${safeMessage}</p>`,
        }),
      })

      if (!resendResponse.ok) {
        const errorBody = await resendResponse.text()
        console.error('Resend rejected contact email', resendResponse.status, errorBody)
        return json('Unable to send your message. Please try again later.', 502)
      }

      return json('Your message has been sent successfully.', 200)
    } catch (error) {
      console.error('Contact email request failed', error)
      return json('Unable to send your message. Please try again later.', 502)
    }
  },
}
