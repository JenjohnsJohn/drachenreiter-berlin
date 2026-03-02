import { Link } from 'react-router-dom';
import { Heart, ArrowRight, Users } from 'lucide-react';
import { ROUTES } from '@/lib/routes';

const CTA = () => {
  return (
    <section id="spenden" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-cta" />
      
      {/* Decorative Elements */}
      <div 
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(212, 168, 75, 0.3) 0%, transparent 70%)',
          transform: 'translate(30%, -50%)'
        }}
      />
      <div 
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%)',
          transform: 'translate(-30%, 50%)'
        }}
      />

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
            <Heart className="w-10 h-10 text-warm-white" />
          </div>

          {/* Title */}
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-warm-white mb-6">
            Gestalten Sie mit.
          </h2>

          {/* Description */}
          <p className="font-body text-lg sm:text-xl text-warm-white/90 mb-4 leading-relaxed">
            Unterstützen Sie unsere Arbeit mit einer Spende.
          </p>
          <p className="font-body text-base sm:text-lg text-warm-white/70 mb-12 max-w-xl mx-auto">
            Jeder Beitrag hilft uns, Menschen in Berlin individuell und nachhaltig zu fördern.
          </p>

          {/* CTA Button */}
          <Link
            to={ROUTES.SPENDEN}
            className="btn-cta inline-flex items-center gap-3"
          >
            <Heart className="w-6 h-6" />
            Jetzt spenden
          </Link>

          {/* Secondary CTA */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-2 text-warm-white/70">
            <span className="font-body">Oder werden Sie</span>
            <Link
              to={ROUTES.FREIWILLIGENBEREICH}
              className="inline-flex items-center gap-1 font-ui font-semibold text-golden hover:text-warm-white transition-colors group"
            >
              <Users className="w-4 h-4" />
              Freiwilliger
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <p className="font-body text-sm text-warm-white/50 mb-6">
              Mitglied der Initiative Transparente Zivilgesellschaft
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-warm-white/40">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-body text-sm">Steuerlich absetzbar</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-body text-sm">Spendenbescheinigung</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-body text-sm">Transparente Verwendung</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
