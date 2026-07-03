import { type ReactNode } from 'react'
import { Helmet } from 'react-helmet-async'
import { siteConfig } from '../../data/siteConfig'

interface PageMetaProps {
  title: string
  description?: string
  children?: ReactNode
}

export function PageMeta({ title, description, children }: PageMetaProps) {
  const fullTitle = title === siteConfig.name ? title : `${title} | ${siteConfig.name}`

  return (
    <>
      <Helmet>
        <title>{fullTitle}</title>
        {description && <meta name="description" content={description} />}
      </Helmet>
      {children}
    </>
  )
}
