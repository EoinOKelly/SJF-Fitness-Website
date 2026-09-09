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
  const fullTitle = title === siteConfig.name ? title : `${title} | ${siteConfig.name}`
  const canonicalUrl = new URL(path, 'https://sjffitnessportlaoise.com').toString()

  return (
    <>
      <Helmet>
        <title>{fullTitle}</title>
        {description && <meta name="description" content={description} />}
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      {children}
    </>
  )
}
