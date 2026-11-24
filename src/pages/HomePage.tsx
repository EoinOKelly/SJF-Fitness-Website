import { PageMeta } from '../components/ui/PageMeta'
import { About } from '../components/home/About'
import { Gallery } from '../components/home/Gallery'
import { TestimonialsPreview } from '../components/home/TestimonialsPreview'
import { Hero } from '../components/home/Hero'
import { Services } from '../components/home/Services'
import { Studio } from '../components/home/Studio'
import { pageSeo } from '../data/pageSeo'

export function HomePage() {
  return (
    <PageMeta {...pageSeo.home}>
      <Hero />
      <About />
      <Studio />
      <Gallery />
      <Services />
      <TestimonialsPreview />
    </PageMeta>
  )
}
