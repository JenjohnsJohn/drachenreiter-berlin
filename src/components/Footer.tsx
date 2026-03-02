import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Send, Heart, ExternalLink } from 'lucide-react';
import { ROUTES } from '@/lib/routes';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const footerLinks = {
    angebote: [
      { name: 'KiTa Drachenhöhle', to: ROUTES.DRACHENHOEHLE },
      { name: 'KiTa Drachen Kids', to: ROUTES.DRACHENKIDS },
      { name: 'Eingliederungshilfe', to: ROUTES.EINGLIEDERUNGSHILFE },
      { name: 'Scotson Technique', to: ROUTES.SCOTSON_THERAPIE },
      { name: 'Konduktive Förderung', to: ROUTES.KONDUKTIVE_FOERDERUNG },
    ],
    about: [
      { name: 'Träger', to: ROUTES.TRAEGER },
      { name: 'Transparenz', to: ROUTES.TRANSPARENZ },
      { name: 'Freiwilligenbereich', to: ROUTES.FREIWILLIGENBEREICH },
      { name: 'Spielstraße', to: ROUTES.SPIELSTRASSE },
    ],
    legal: [
      { name: 'Impressum', to: ROUTES.IMPRESSUM },
      { name: 'Datenschutz', to: ROUTES.IMPRESSUM + '#datenschutz' },
      { name: 'Transparente Zivilgesellschaft', href: 'https://www.transparente-zivilgesellschaft.de/', external: true },
    ],
  };

  return (
    <footer className="bg-berlin-charcoal text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to={ROUTES.HOME} className="flex items-center mb-6">
              <img
                src="/logo.png"
                alt="Drachenreiter Berlin"
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="font-body text-white/70 leading-relaxed max-w-sm mb-8">
              Arbeit am Leben. Mit Herz, Verstand und dem Mut, neue Wege zu gehen.
              Seit über 20 Jahren für Berlin da.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://facebook.com/drachenreiter.berlin"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-dragon-green transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/drachenreiter_berlin"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-dragon-green transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Angebote */}
          <div>
            <h4 className="font-ui font-semibold text-sm tracking-wider text-white uppercase mb-6">
              Angebote
            </h4>
            <ul className="space-y-3">
              {footerLinks.angebote.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className="font-body text-white/70 hover:text-golden transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Über uns */}
          <div>
            <h4 className="font-ui font-semibold text-sm tracking-wider text-white uppercase mb-6">
              Über uns
            </h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className="font-body text-white/70 hover:text-golden transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="font-ui font-semibold text-sm tracking-wider text-white uppercase mb-6">
              Newsletter
            </h4>
            <p className="font-body text-sm text-white/70 mb-4">
              Bleiben Sie informiert über unsere Arbeit.
            </p>

            {isSubscribed ? (
              <div className="flex items-center gap-2 text-sage">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-body text-sm">Vielen Dank!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ihre E-Mail"
                  required
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg font-body text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-golden transition-colors"
                />
                <button
                  type="submit"
                  className="px-4 py-3 bg-golden text-berlin-charcoal rounded-lg hover:bg-golden-dark transition-colors"
                  aria-label="Anmelden"
                >
                  <Send className="w-5 h-5" />
                </button>
              </form>
            )}

            {/* Legal Links */}
            <div className="mt-8 space-y-2">
              {footerLinks.legal.map((link) => (
                <div key={link.name}>
                  {'external' in link && link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-body text-sm text-white/50 hover:text-white transition-colors"
                    >
                      {link.name}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <Link
                      to={link.to!}
                      className="inline-flex items-center gap-1 font-body text-sm text-white/50 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-sm text-white/50">
              © {new Date().getFullYear()} Drachenreiter gGmbH. Alle Rechte vorbehalten.
            </p>
            <p className="flex items-center gap-2 font-body text-sm text-white/50">
              Mit <Heart className="w-4 h-4 text-dragon-green fill-dragon-green" /> gemacht in Berlin
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
