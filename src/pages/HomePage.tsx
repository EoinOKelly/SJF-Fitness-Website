import { PageMeta } from '../components/ui/PageMeta'
import { About } from '../components/home/About'
import { BlogPreview } from '../components/home/BlogPreview'
import { Hero } from '../components/home/Hero'
import { Services } from '../components/home/Services'
import { Studio } from '../components/home/Studio'
import { siteConfig } from '../data/siteConfig'

export function HomePage() {
  return (
    <PageMeta
      title={siteConfig.name}
      description={`${siteConfig.owner} - female personal trainer, nutrition expert and qualified chef in Portlaoise. Private training studio.`}
    >
      <Hero />
      <About />
      <Studio />
      <Services />
      <BlogPreview />
    </PageMeta>
  )
}
