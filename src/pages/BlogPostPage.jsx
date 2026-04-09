import { Link, useParams } from 'react-router-dom'
import SEO from '../components/SEO/SEO'
import { blogPosts } from '../data/blogPosts'

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
      }}
    >
      {category}
    </span>
  )
}

function ContentSection({ section }) {
  const baseParaStyle = {
    color: 'var(--text-secondary)',
    fontSize: '1.05rem',
    lineHeight: 1.8,
    margin: '0 0 20px',
  }

  switch (section.type) {
    case 'h2':
      return (
        <h2
          style={{
            fontSize: '1.6rem',
            fontWeight: 700,
            color: 'var(--text-primary)',
            margin: '44px 0 16px',
            paddingBottom: '10px',
            borderBottom: '1px solid rgba(122, 125, 133, 0.2)',
          }}
        >
          {section.content}
        </h2>
      )

    case 'h3':
      return (
        <h3
          style={{
            fontSize: '1.2rem',
            fontWeight: 600,
            color: 'var(--text-primary)',
            margin: '28px 0 12px',
          }}
        >
          {section.content}
        </h3>
      )

    case 'p':
      return <p style={baseParaStyle}>{section.content}</p>

    case 'ul':
      return (
        <ul
          style={{
            margin: '0 0 20px',
            paddingLeft: '0',
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          }}
        >
          {section.content.map((item, i) => (
            <li
              key={i}
              style={{
                color: 'var(--text-secondary)',
                fontSize: '1.025rem',
                lineHeight: 1.7,
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
              }}
            >
              <span
                style={{
                  flexShrink: 0,
                  marginTop: '7px',
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: 'var(--accent)',
                  display: 'inline-block',
                }}
              />
              {item}
            </li>
          ))}
        </ul>
      )

    case 'ol':
      return (
        <ol
          style={{
            margin: '0 0 20px',
            paddingLeft: '0',
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            counterReset: 'item',
          }}
        >
          {section.content.map((item, i) => (
            <li
              key={i}
              style={{
                color: 'var(--text-secondary)',
                fontSize: '1.025rem',
                lineHeight: 1.7,
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
              }}
            >
              <span
                style={{
                  flexShrink: 0,
                  width: '22px',
                  height: '22px',
                  borderRadius: '50%',
                  background: 'var(--accent-subtle)',
                  border: '1px solid var(--accent-subtle-2)',
                  color: 'var(--accent)',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: '3px',
                }}
              >
                {i + 1}
              </span>
              {item}
            </li>
          ))}
        </ol>
      )

    default:
      return null
  }
}

function RelatedPostCard({ post }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      style={{
        display: 'block',
        background: 'var(--bg-secondary)',
        borderRadius: '10px',
        border: '1px solid rgba(122, 125, 133, 0.2)',
        padding: '20px',
        textDecoration: 'none',
        transition:
          'border-color var(--transition-default), transform var(--transition-default), box-shadow var(--transition-default)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--accent-subtle-2)'
        e.currentTarget.style.transform = 'translateY(-2px)'
        e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.2)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(122, 125, 133, 0.2)'
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      <div style={{ marginBottom: '8px' }}>
        <CategoryBadge category={post.category} />
      </div>
      <h3
        style={{
          fontSize: '0.975rem',
          fontWeight: 600,
          color: 'var(--text-primary)',
          lineHeight: 1.45,
          margin: '0 0 6px',
        }}
      >
        {post.title}
      </h3>
      <span
        style={{
          color: 'var(--text-tertiary)',
          fontSize: '0.8rem',
        }}
      >
        {post.readTime}
      </span>
    </Link>
  )
}

function NotFoundContent() {
  return (
    <div
      style={{
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '40px 20px',
      }}
    >
      <div
        style={{
          fontSize: '4rem',
          fontWeight: 700,
          color: 'var(--accent)',
          marginBottom: '16px',
          lineHeight: 1,
        }}
      >
        404
      </div>
      <h1 style={{ fontSize: '1.75rem', marginBottom: '12px' }}>Post Not Found</h1>
      <p
        style={{
          color: 'var(--text-secondary)',
          maxWidth: '420px',
          lineHeight: 1.7,
          marginBottom: '32px',
        }}
      >
        Sorry, we couldn't find the article you're looking for. It may have been moved or
        removed.
      </p>
      <Link to="/blog" className="btn-primary">
        Back to Blog
      </Link>
    </div>
  )
}

export default function BlogPostPage() {
  const { slug } = useParams()
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <>
        <SEO
          title="Post Not Found"
          description="The blog post you were looking for could not be found."
          robots="noindex, nofollow"
        />
        <NotFoundContent />
      </>
    )
  }

  const relatedPosts = post.relatedSlugs
    .map((s) => blogPosts.find((p) => p.slug === s))
    .filter(Boolean)

  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    author: {
      '@type': 'Organization',
      name: 'Study Prime',
      url: 'https://studyprime.net',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Study Prime',
      url: 'https://studyprime.net',
    },
    datePublished: post.publishDate,
    dateModified: post.lastUpdated,
    url: `https://studyprime.net/blog/${post.slug}`,
    keywords: post.tags.join(', '),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://studyprime.net/blog/${post.slug}`,
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://studyprime.net',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://studyprime.net/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://studyprime.net/blog/${post.slug}`,
      },
    ],
  }

  return (
    <>
      <SEO
        title={post.title}
        description={post.description}
        canonical={`/blog/${post.slug}`}
        schema={[blogPostingSchema, breadcrumbSchema]}
      />

      <div style={{ paddingTop: '40px', paddingBottom: '80px' }}>
        <div className="container">
          {/* Constrained article column */}
          <div
            style={{
              maxWidth: '800px',
              margin: '0 auto',
            }}
          >
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                flexWrap: 'wrap',
                marginBottom: '32px',
                paddingTop: '20px',
                fontSize: '0.875rem',
              }}
            >
              <Link
                to="/"
                style={{
                  color: 'var(--text-tertiary)',
                  textDecoration: 'none',
                  transition: 'color var(--transition-fast)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-tertiary)')}
              >
                Home
              </Link>
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--text-tertiary)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
              <Link
                to="/blog"
                style={{
                  color: 'var(--text-tertiary)',
                  textDecoration: 'none',
                  transition: 'color var(--transition-fast)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-tertiary)')}
              >
                Blog
              </Link>
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--text-tertiary)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
              <span
                style={{
                  color: 'var(--text-secondary)',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  maxWidth: '300px',
                }}
              >
                {post.title}
              </span>
            </nav>

            {/* Article header */}
            <header style={{ marginBottom: '40px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  flexWrap: 'wrap',
                  marginBottom: '20px',
                }}
              >
                <CategoryBadge category={post.category} />
                <span style={{ color: 'var(--text-tertiary)', fontSize: '0.85rem' }}>
                  {post.readTime}
                </span>
              </div>

              <h1
                style={{
                  fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                  fontWeight: 700,
                  lineHeight: 1.25,
                  marginBottom: '16px',
                  letterSpacing: '-0.02em',
                }}
              >
                {post.title}
              </h1>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  flexWrap: 'wrap',
                  color: 'var(--text-tertiary)',
                  fontSize: '0.85rem',
                  paddingBottom: '28px',
                  borderBottom: '1px solid rgba(122, 125, 133, 0.2)',
                }}
              >
                <span>By {post.author}</span>
                <span style={{ color: 'var(--text-tertiary)', opacity: 0.4 }}>·</span>
                <time dateTime={post.publishDate}>
                  Published {formatDate(post.publishDate)}
                </time>
                {post.lastUpdated !== post.publishDate && (
                  <>
                    <span style={{ color: 'var(--text-tertiary)', opacity: 0.4 }}>·</span>
                    <time dateTime={post.lastUpdated}>
                      Updated {formatDate(post.lastUpdated)}
                    </time>
                  </>
                )}
              </div>
            </header>

            {/* Article body */}
            <article>
              {post.content.map((section, i) => (
                <ContentSection key={i} section={section} />
              ))}
            </article>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                  marginTop: '40px',
                  paddingTop: '28px',
                  borderTop: '1px solid rgba(122, 125, 133, 0.2)',
                }}
              >
                <span
                  style={{
                    color: 'var(--text-tertiary)',
                    fontSize: '0.82rem',
                    fontWeight: 500,
                    alignSelf: 'center',
                    marginRight: '4px',
                  }}
                >
                  Tags:
                </span>
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      background: 'var(--bg-hover)',
                      color: 'var(--text-secondary)',
                      fontSize: '0.78rem',
                      padding: '4px 10px',
                      borderRadius: '4px',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* CTA */}
            <div
              style={{
                marginTop: '56px',
                background:
                  'linear-gradient(135deg, var(--accent-subtle) 0%, rgba(19, 174, 83, 0.05) 100%)',
                border: '1px solid var(--accent-subtle-2)',
                borderRadius: '14px',
                padding: '36px',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                  marginBottom: '10px',
                }}
              >
                {post.category}
              </div>
              <h2
                style={{
                  fontSize: '1.45rem',
                  fontWeight: 700,
                  marginBottom: '12px',
                }}
              >
                Need help with {post.category}?
              </h2>
              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.975rem',
                  lineHeight: 1.7,
                  maxWidth: '460px',
                  margin: '0 auto 24px',
                }}
              >
                Our expert tutors work one-on-one with Bay Area students. Book a free
                30-minute consultation—no commitment required.
              </p>
              <a
                href="https://calendly.com/help-studyprime/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ display: 'inline-flex' }}
              >
                Book Free Consultation
              </a>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <section style={{ marginTop: '64px' }}>
                <h2
                  style={{
                    fontSize: '1.35rem',
                    fontWeight: 700,
                    marginBottom: '20px',
                    paddingBottom: '12px',
                    borderBottom: '1px solid rgba(122, 125, 133, 0.2)',
                  }}
                >
                  Related Articles
                </h2>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                    gap: '16px',
                  }}
                >
                  {relatedPosts.map((related) => (
                    <RelatedPostCard key={related.slug} post={related} />
                  ))}
                </div>
              </section>
            )}

            {/* Back to blog link */}
            <div style={{ marginTop: '48px', textAlign: 'center' }}>
              <Link
                to="/blog"
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.9rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  textDecoration: 'none',
                  transition: 'color var(--transition-fast)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
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
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Back to Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
