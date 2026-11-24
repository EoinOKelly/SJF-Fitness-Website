import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { AppRoutes } from './App'
import { pageSeo } from './data/pageSeo'
import { siteConfig } from './data/siteConfig'

function escapeAttribute(value: string) {
  return value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;')
}

export function renderPage(path: string) {
  const metadata = Object.values(pageSeo).find((page) => page.path === path)
  if (!metadata) throw new Error(`Missing metadata for ${path}`)
  const body = renderToString(
    <HelmetProvider>
      <StaticRouter location={path}>
        <AppRoutes />
      </StaticRouter>
    </HelmetProvider>,
  )
  const title = `${metadata.title} | ${siteConfig.name}`
  const url = new URL(path, 'https://sjffitnessportlaoise.com').toString()
  const image = 'https://sjffitnessportlaoise.com/SJF_Hero.jpg'
  const head = `
    <title>${escapeAttribute(title)}</title>
    <meta name="description" content="${escapeAttribute(metadata.description)}" />
    <link rel="canonical" href="${url}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="${siteConfig.name}" />
    <meta property="og:title" content="${escapeAttribute(title)}" />
    <meta property="og:description" content="${escapeAttribute(metadata.description)}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:image" content="${image}" />
    <meta property="og:image:alt" content="Sandra Furney at SJF Fitness Portlaoise" />
    <meta name="twitter:card" content="summary_large_image" />`

  return { body, head }
}
