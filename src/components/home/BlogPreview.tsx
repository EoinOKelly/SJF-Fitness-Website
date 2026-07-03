import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { blogPosts, formatBlogDate } from '../../data/blogPosts'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'
import { SectionHeading } from '../ui/SectionHeading'

export function BlogPreview() {
  const latestPosts = blogPosts.slice(0, 2)

  return (
    <section className="bg-cream-dark py-16 lg:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Blog"
          title="Latest news on the blog"
          align="center"
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {latestPosts.map((post) => (
            <Card key={post.slug} hover>
              <time className="text-xs font-medium text-teal" dateTime={post.date}>
                {formatBlogDate(post.date)}
              </time>
              <h3 className="mt-2 font-display text-xl font-bold text-charcoal">
                <Link to={`/blog/${post.slug}`} className="hover:text-teal">
                  {post.title}
                </Link>
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{post.excerpt}</p>
              <Link
                to={`/blog/${post.slug}`}
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal hover:text-teal-dark"
              >
                Read more
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button to="/blog" variant="outline">
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  )
}
