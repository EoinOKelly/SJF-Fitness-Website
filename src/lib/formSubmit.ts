export interface FormSubmitResult {
  ok: boolean
  message: string
}

export async function submitToFormspree(
  formId: string | undefined,
  data: Record<string, string>,
): Promise<FormSubmitResult> {
  if (!formId) {
    return {
      ok: false,
      message:
        'Form submission is not configured yet. Please call or email Sandra directly to book.',
    }
  }

  try {
    const response = await fetch(`https://formspree.io/f/${formId}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (response.ok) {
      return { ok: true, message: 'Your message has been sent successfully.' }
    }

    const body = (await response.json()) as { error?: string }
    return {
      ok: false,
      message: body.error ?? 'Something went wrong. Please try again or contact Sandra directly.',
    }
  } catch {
    return {
      ok: false,
      message: 'Unable to send your message. Please try again or contact Sandra directly.',
    }
  }
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
