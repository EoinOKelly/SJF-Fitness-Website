import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { blogPosts, formatBlogDate } from '../../data/blogPosts'
import { Button } from '../ui/Button'
import { SectionHeading } from '../ui/SectionHeading'

export function BlogPreview() {
  const latestPosts = blogPosts.slice(0, 2)

  return (
    <section className="bg-onyx py-24 lg:py-32">
      <div className="container-page">
        <SectionHeading eyebrow="Journal" title="Notes from the studio" align="center" />

        <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
          {latestPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group flex flex-col bg-obsidian p-9 transition-colors hover:bg-graphite"
            >
              <time className="text-[0.66rem] uppercase tracking-[0.2em] text-gold" dateTime={post.date}>
                {formatBlogDate(post.date)}
              </time>
              <h3 className="mt-4 font-display text-2xl text-ivory transition-colors group-hover:text-gold">
                {post.title}
              </h3>
              <p className="mt-4 flex-1 leading-relaxed text-ash">{post.excerpt}</p>
              <span className="mt-7 inline-flex items-center gap-2 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-ivory transition-colors group-hover:text-gold">
                Read
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button to="/blog" variant="outline">
            View the Journal
          </Button>
        </div>
      </div>
    </section>
  )
}
