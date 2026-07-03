import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { formatBlogDate, getBlogPostBySlug } from '../data/blogPosts'
import { PageMeta } from '../components/ui/PageMeta'

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getBlogPostBySlug(slug) : undefined

  if (!post) {
    return (
      <PageMeta title="Post Not Found">
        <section className="container-page py-16 text-center">
          <h1 className="font-display text-2xl font-bold">Post not found</h1>
          <Link to="/blog" className="mt-4 inline-block text-teal hover:text-teal-dark">
            ← Back to blog
          </Link>
        </section>
      </PageMeta>
    )
  }

  return (
    <PageMeta title={post.title} description={post.excerpt}>
      <article className="py-12 lg:py-16">
        <div className="container-page">
          <Link
            to="/blog"
            className="mb-8 inline-flex items-center gap-1 text-sm font-semibold text-teal hover:text-teal-dark"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to blog
          </Link>

          <header className="mx-auto max-w-3xl">
            <time className="text-sm font-medium text-teal" dateTime={post.date}>
              {formatBlogDate(post.date)} · {post.author}
            </time>
            <h1 className="mt-2 font-display text-4xl font-bold text-charcoal">{post.title}</h1>
          </header>

          <div className="prose-custom mx-auto mt-10 max-w-3xl space-y-5">
            {post.content.map((paragraph, index) => (
              <p key={index} className="leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>
    </PageMeta>
  )
}
