import { Helmet } from 'react-helmet-async'

/**
 * Reusable SEO component for per-page meta tags and schema markup.
 *
 * @param {Object} props
 * @param {string} props.title - Page title (50-60 chars recommended)
 * @param {string} props.description - Meta description (150-160 chars)
 * @param {string} [props.canonical] - Canonical URL
 * @param {string} [props.ogImage] - Open Graph image URL
 * @param {Object|Object[]} [props.schema] - JSON-LD schema object(s)
 * @param {string} [props.robots] - robots meta content (default: index, follow)
 */
export default function SEO({
  title,
  description,
  canonical,
  ogImage = 'https://studyprime.net/og-image.jpg',
  schema,
  robots = 'index, follow',
}) {
  const fullTitle = title
    ? `${title} | Study Prime`
    : 'Study Prime | Expert SAT, ACT & K-12 Tutoring Bay Area'

  const siteUrl = 'https://studyprime.net'
  const canonicalUrl = canonical ? `${siteUrl}${canonical}` : undefined

  const schemas = schema
    ? Array.isArray(schema)
      ? schema
      : [schema]
    : []

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />

      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl || siteUrl} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD Schema */}
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  )
}
