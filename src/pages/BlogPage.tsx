import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { blogPosts, formatBlogDate } from '../data/blogPosts'
import { PageMeta } from '../components/ui/PageMeta'
import { SectionHeading } from '../components/ui/SectionHeading'

export function BlogPage() {
  return (
    <PageMeta
      title="Blog"
      description="Fitness tips, nutrition advice and training insights from Sandra Furney at SJF Fitness Portlaoise."
    >
      <section className="py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Journal"
            title="Notes from the studio"
            subtitle="Considered thoughts on training, nutrition and living well."
            align="center"
          />

          <div className="mx-auto max-w-3xl border-t border-white/10">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group block border-b border-white/10 py-9 transition-colors"
              >
                <time className="text-[0.66rem] uppercase tracking-[0.2em] text-brand" dateTime={post.date}>
                  {formatBlogDate(post.date)} · {post.author}
                </time>
                <h2 className="mt-3 font-display text-3xl text-ivory transition-colors group-hover:text-brand">
                  {post.title}
                </h2>
                <p className="mt-4 leading-relaxed text-ash">{post.excerpt}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-ivory transition-colors group-hover:text-brand">
                  Read article
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageMeta>
  )
}
