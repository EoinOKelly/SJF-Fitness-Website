import { type ReactNode } from 'react'
import { Helmet } from 'react-helmet-async'
import { siteConfig } from '../../data/siteConfig'

interface PageMetaProps {
  title: string
  description?: string
  path?: string
  children?: ReactNode
}

export function PageMeta({ title, description, path = '/', children }: PageMetaProps) {
  // The pre-render step writes metadata into <head>; avoid a second server copy.
  if (typeof window === 'undefined') return <>{children}</>

  const fullTitle = title === siteConfig.name ? title : `${title} | ${siteConfig.name}`
  const canonicalUrl = new URL(path, 'https://sjffitnessportlaoise.com').toString()
  const imageUrl = 'https://sjffitnessportlaoise.com/SJF_Hero.jpg'

  return (
    <>
      <Helmet>
        <title>{fullTitle}</title>
        {description && <meta name="description" content={description} />}
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={siteConfig.name} />
        <meta property="og:title" content={fullTitle} />
        {description && <meta property="og:description" content={description} />}
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:alt" content="Sandra Furney at SJF Fitness Portlaoise" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      {children}
    </>
  )
}
