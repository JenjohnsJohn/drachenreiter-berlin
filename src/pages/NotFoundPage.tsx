import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { ROUTES } from '@/lib/routes';
import SEO from '@/components/SEO';
import { NOT_FOUND_SEO } from '@/lib/seo';

const NotFoundPage = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <SEO
        title={NOT_FOUND_SEO.title}
        description={NOT_FOUND_SEO.description}
        noindex
      />
      <div className="text-center max-w-lg">
        <img src="/logo.png" alt="Drachenreiter" className="h-20 w-auto mx-auto mb-6" />
        <h1 className="font-display text-5xl sm:text-6xl font-bold text-berlin-charcoal mb-4">
          404
        </h1>
        <p className="font-display text-2xl text-berlin-charcoal mb-2">
          Seite nicht gefunden
        </p>
        <p className="font-body text-berlin-light mb-8">
          Die gesuchte Seite existiert leider nicht oder wurde verschoben.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to={ROUTES.HOME}
            className="inline-flex items-center gap-2 px-6 py-3 bg-dragon-green text-white font-ui font-semibold rounded-lg hover:bg-dragon-dark transition-all"
          >
            <Home className="w-5 h-5" />
            Zur Startseite
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-berlin-charcoal/20 text-berlin-charcoal font-ui font-semibold rounded-lg hover:border-dragon-green hover:text-dragon-green transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            Zurück
          </button>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
