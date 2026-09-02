import assert from 'node:assert/strict'
import { chromium } from 'playwright-core'

const executablePath = process.env.CHROME_PATH || 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
const baseUrl = process.env.TEST_BASE_URL || 'http://127.0.0.1:4173'
const widths = [320, 375, 390, 430]
const routes = ['/', '/contact', '/testimonials']

const browser = await chromium.launch({ executablePath, headless: true })

try {
  for (const width of widths) {
    const page = await browser.newPage({ viewport: { width, height: 844 }, isMobile: true, hasTouch: true })
    page.setDefaultTimeout(5_000)
    await page.route('**/*', async (route) => {
      const requestUrl = new URL(route.request().url())
      if (requestUrl.hostname === '127.0.0.1') await route.continue()
      else await route.abort()
    })

    for (const route of routes) {
      await page.goto(`${baseUrl}${route}`, { waitUntil: 'domcontentloaded', timeout: 10_000 })
      await page.waitForTimeout(250)

      const layout = await page.evaluate(() => ({
        clientWidth: document.documentElement.clientWidth,
        scrollWidth: document.documentElement.scrollWidth,
        offenders: [...document.querySelectorAll('body *')]
          .filter((element) => {
            const rect = element.getBoundingClientRect()
            return rect.right > document.documentElement.clientWidth + 1 || rect.left < -1
          })
          .slice(0, 10)
          .map((element) => {
            const rect = element.getBoundingClientRect()
            return `${element.tagName.toLowerCase()}.${element.className} [${rect.left.toFixed(0)}, ${rect.right.toFixed(0)}]`
          }),
      }))

      assert.equal(
        layout.scrollWidth,
        layout.clientWidth,
        `${route} overflows at ${width}px: ${layout.offenders.join(', ')}`,
      )
    }

    await page.goto(`${baseUrl}/contact`, { waitUntil: 'domcontentloaded', timeout: 10_000 })
    const submit = page.getByRole('button', { name: 'Send Message' })
    assert.equal(await submit.isVisible(), true, `Submit button is not visible at ${width}px`)
    assert.equal(await submit.isEnabled(), true, `Submit button is not enabled at ${width}px`)

    const menu = page.getByRole('button', { name: 'Open menu' })
    await menu.click()
    assert.equal(await page.getByRole('navigation', { name: 'Mobile navigation' }).isVisible(), true)

    await page.close()
  }
} finally {
  await browser.close()
}

console.log('Mobile QA passed at 320, 375, 390, and 430 CSS pixels.')
