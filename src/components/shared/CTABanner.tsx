import { Link } from 'react-router-dom';
import { Heart, ArrowRight } from 'lucide-react';
import { ROUTES } from '@/lib/routes';

interface CTABannerProps {
  title?: string;
  description?: string;
}

const CTABanner = ({
  title = 'Haben Sie Fragen?',
  description = 'Wir beraten Sie gerne zu unseren Angeboten. Nehmen Sie Kontakt mit uns auf.',
}: CTABannerProps) => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 gradient-cta" />
      <div className="container-custom relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-warm-white mb-4">
            {title}
          </h2>
          <p className="font-body text-lg text-warm-white/80 mb-8">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to={ROUTES.HOME + '#contact'}
              className="btn-cta inline-flex items-center gap-2"
            >
              Kontakt aufnehmen
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to={ROUTES.SPENDEN}
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-warm-white/30 text-warm-white font-ui font-semibold rounded-lg hover:bg-warm-white/10 transition-all"
            >
              <Heart className="w-5 h-5" />
              Spenden
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
