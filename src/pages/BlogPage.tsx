import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { blogPosts, formatBlogDate } from '../data/blogPosts'
import { Card } from '../components/ui/Card'
import { PageMeta } from '../components/ui/PageMeta'
import { SectionHeading } from '../components/ui/SectionHeading'

export function BlogPage() {
  return (
    <PageMeta
      title="Blog"
      description="Fitness tips, nutrition advice and training insights from Sandra Furney at SJF Fitness Portlaoise."
    >
      <section className="py-12 lg:py-16">
        <div className="container-page">
          <SectionHeading
            eyebrow="Blog"
            title="Latest news"
            subtitle="Tips and insights on fitness, nutrition and healthy living."
            align="center"
          />

          <div className="mx-auto grid max-w-3xl gap-6">
            {blogPosts.map((post) => (
              <Card key={post.slug} hover>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <time className="text-xs font-medium text-teal" dateTime={post.date}>
                      {formatBlogDate(post.date)} · {post.author}
                    </time>
                    <h2 className="mt-1 font-display text-2xl font-bold text-charcoal">
                      <Link to={`/blog/${post.slug}`} className="hover:text-teal">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="mt-3 text-muted leading-relaxed">{post.excerpt}</p>
                  </div>
                </div>
                <Link
                  to={`/blog/${post.slug}`}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal hover:text-teal-dark"
                >
                  Read article
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageMeta>
  )
}
