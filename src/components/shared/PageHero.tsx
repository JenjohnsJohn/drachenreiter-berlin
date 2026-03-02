import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { ROUTES } from '@/lib/routes';

const SITE_URL = 'https://drachenreiter.bizbrew.dev';

interface Breadcrumb {
  label: string;
  to?: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
}

const PageHero = ({ title, subtitle, breadcrumbs }: PageHeroProps) => {
  const breadcrumbJsonLd = breadcrumbs && breadcrumbs.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Start',
            item: SITE_URL + ROUTES.HOME,
          },
          ...breadcrumbs.map((crumb, i) => ({
            '@type': 'ListItem',
            position: i + 2,
            name: crumb.label,
            ...(crumb.to ? { item: SITE_URL + crumb.to } : {}),
          })),
        ],
      }
    : null;

  return (
    <section className="relative pt-32 pb-16 md:pt-36 md:pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dragon-green via-dragon-dark to-deep-blue" />
      <div className="absolute inset-0 pattern-dragon opacity-10" />
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, rgba(212, 168, 75, 0.4) 0%, transparent 70%)',
          transform: 'translate(30%, -40%)',
        }}
      />

      {breadcrumbJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      )}

      <div className="container-custom relative z-10">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 mb-6 text-sm font-body text-warm-white/60">
            <Link to={ROUTES.HOME} className="hover:text-warm-white transition-colors">
              Start
            </Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5" />
                {crumb.to ? (
                  <Link to={crumb.to} className="hover:text-warm-white transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-warm-white/90">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-warm-white mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="font-body text-lg sm:text-xl text-warm-white/80 max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
