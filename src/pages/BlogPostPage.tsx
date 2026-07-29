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
        <section className="container-page py-28 text-center">
          <h1 className="font-display text-3xl text-ivory">Post not found</h1>
          <Link
            to="/blog"
            className="mt-6 inline-block text-[0.72rem] uppercase tracking-[0.2em] text-brand hover:text-brand-light"
          >
            ← Back to the journal
          </Link>
        </section>
      </PageMeta>
    )
  }

  return (
    <PageMeta title={post.title} description={post.excerpt}>
      <article className="py-20 lg:py-28">
        <div className="container-page">
          <Link
            to="/blog"
            className="mb-12 inline-flex items-center gap-2 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-ash transition-colors hover:text-brand"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to the journal
          </Link>

          <header className="mx-auto max-w-2xl">
            <time className="text-[0.66rem] uppercase tracking-[0.2em] text-brand" dateTime={post.date}>
              {formatBlogDate(post.date)} · {post.author}
            </time>
            <h1 className="mt-4 font-display text-4xl leading-tight text-ivory sm:text-5xl">
              {post.title}
            </h1>
          </header>

          <div className="mx-auto mt-12 max-w-2xl space-y-6 text-lg">
            {post.content.map((paragraph, index) => (
              <p key={index} className="leading-relaxed text-ash">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>
    </PageMeta>
  )
}
