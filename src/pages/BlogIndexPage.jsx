import { Link } from 'react-router-dom'
import SEO from '../components/SEO/SEO'
import { blogPosts } from '../data/blogPosts'

const blogListingSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Study Prime Blog',
  description:
    'Expert advice on SAT prep, ACT prep, math tutoring, and college admissions from the tutors at Study Prime.',
  url: 'https://studyprime.net/blog',
  publisher: {
    '@type': 'Organization',
    name: 'Study Prime',
    url: 'https://studyprime.net',
  },
  blogPost: blogPosts.map((post) => ({
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    url: `https://studyprime.net/blog/${post.slug}`,
    datePublished: post.publishDate,
    dateModified: post.lastUpdated,
    author: { '@type': 'Organization', name: 'Study Prime' },
  })),
}

function formatDate(dateStr) {
  const date = new Date(dateStr + 'T00:00:00')
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function CategoryBadge({ category }) {
  return (
    <span
      style={{
        display: 'inline-block',
        background: 'var(--accent-subtle)',
        color: 'var(--accent)',
        fontSize: '0.75rem',
        fontWeight: 600,
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
        padding: '3px 10px',
        borderRadius: '4px',
        border: '1px solid var(--accent-subtle-2)',
        whiteSpace: 'nowrap',
      }}
    >
      {category}
    </span>
  )
}

function BlogCard({ post }) {
  return (
    <article
      style={{
        background: 'var(--bg-secondary)',
        borderRadius: '12px',
        border: '1px solid rgba(122, 125, 133, 0.2)',
        padding: '28px',
        display: 'flex',
        flexDirection: 'column',
        gap: '14px',
        transition: 'border-color var(--transition-default), transform var(--transition-default), box-shadow var(--transition-default)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--accent-subtle-2)'
        e.currentTarget.style.transform = 'translateY(-3px)'
        e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.25)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(122, 125, 133, 0.2)'
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Category + read time row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
        <CategoryBadge category={post.category} />
        <span style={{ color: 'var(--text-tertiary)', fontSize: '0.8rem' }}>{post.readTime}</span>
      </div>

      {/* Title */}
      <h2
        style={{
          fontSize: '1.2rem',
          fontWeight: 700,
          lineHeight: 1.35,
          color: 'var(--text-primary)',
          margin: 0,
        }}
      >
        <Link
          to={`/blog/${post.slug}`}
          style={{
            color: 'inherit',
            textDecoration: 'none',
            transition: 'color var(--transition-fast)',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
        >
          {post.title}
        </Link>
      </h2>

      {/* Description */}
      <p
        style={{
          color: 'var(--text-secondary)',
          fontSize: '0.95rem',
          lineHeight: 1.65,
          margin: 0,
          flexGrow: 1,
        }}
      >
        {post.description}
      </p>

      {/* Footer row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '8px',
          marginTop: '4px',
          paddingTop: '16px',
          borderTop: '1px solid rgba(122, 125, 133, 0.15)',
        }}
      >
        <time
          dateTime={post.publishDate}
          style={{ color: 'var(--text-tertiary)', fontSize: '0.82rem' }}
        >
          {formatDate(post.publishDate)}
        </time>
        <Link
          to={`/blog/${post.slug}`}
          style={{
            color: 'var(--accent)',
            fontSize: '0.875rem',
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            textDecoration: 'none',
            transition: 'gap var(--transition-fast)',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.gap = '8px')}
          onMouseLeave={(e) => (e.currentTarget.style.gap = '4px')}
          aria-label={`Read more: ${post.title}`}
        >
          Read More
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  )
}

export default function BlogIndexPage() {
  return (
    <>
      <SEO
        title="SAT, ACT &amp; Tutoring Blog"
        description="Explore Study Prime's blog for expert SAT prep strategies, ACT tips, math tutoring advice, and college application guidance from experienced Bay Area tutors."
        canonical="/blog"
        schema={blogListingSchema}
      />

      <div style={{ paddingTop: '40px', paddingBottom: '80px' }}>
        {/* Hero header */}
        <div
          className="container"
          style={{ paddingTop: '40px', paddingBottom: '60px', textAlign: 'center' }}
        >
          <div
            style={{
              display: 'inline-block',
              background: 'var(--accent-subtle)',
              color: 'var(--accent)',
              fontSize: '0.8rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: '5px 14px',
              borderRadius: '4px',
              marginBottom: '20px',
            }}
          >
            Resources &amp; Insights
          </div>
          <h1 style={{ marginBottom: '16px', maxWidth: '720px', margin: '0 auto 16px' }}>
            Study Prime Blog: Tutoring Tips &amp; Test Prep Strategies
          </h1>
          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: '1.125rem',
              maxWidth: '600px',
              margin: '16px auto 0',
              lineHeight: 1.7,
            }}
          >
            Expert guidance on SAT prep, ACT strategy, math tutoring, and everything in between—
            written by the tutors who work with Bay Area students every day.
          </p>
        </div>

        {/* Blog grid */}
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: '24px',
            }}
          >
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className="container"
          style={{ marginTop: '80px', textAlign: 'center' }}
        >
          <div
            style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--accent-subtle-2)',
              borderRadius: '16px',
              padding: '48px 32px',
              maxWidth: '680px',
              margin: '0 auto',
            }}
          >
            <h2 style={{ fontSize: '1.75rem', marginBottom: '12px' }}>
              Ready to Get Started?
            </h2>
            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: '1rem',
                lineHeight: 1.7,
                marginBottom: '28px',
              }}
            >
              Book a free 30-minute consultation with one of our tutors. We'll assess your
              current level, set a realistic target, and show you exactly how we'll get there.
            </p>
            <a
              href="https://calendly.com/help-studyprime/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ display: 'inline-flex' }}
            >
              Book a Free Consultation
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
