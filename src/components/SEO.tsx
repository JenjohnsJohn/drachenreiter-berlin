import { useLocation } from 'react-router-dom';
import { SEO_DATA, SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from '@/lib/seo';

interface SEOProps {
  title?: string;
  description?: string;
  ogImage?: string;
  noindex?: boolean;
}

const SEO = ({ title, description, ogImage, noindex }: SEOProps) => {
  const { pathname } = useLocation();
  const data = SEO_DATA[pathname];

  const pageTitle = title ?? data?.title ?? SITE_NAME;
  const pageDescription =
    description ?? data?.description ?? '';
  const pageImage = ogImage ?? DEFAULT_OG_IMAGE;
  const canonicalUrl = `${SITE_URL}${pathname === '/' ? '' : pathname}`;

  return (
    <>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta
        name="robots"
        content={noindex ? 'noindex, nofollow' : 'index, follow'}
      />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:locale" content="de_DE" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImage} />
    </>
  );
};

export default SEO;
