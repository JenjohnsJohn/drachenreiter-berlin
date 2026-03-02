import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Heart } from 'lucide-react';
import { ROUTES } from '@/lib/routes';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const navLinks = [
    { name: 'Home', href: '#home', to: ROUTES.HOME },
    { name: 'Über uns', href: '#about', to: ROUTES.TRAEGER },
    {
      name: 'Angebote',
      href: '#services',
      dropdown: [
        { name: 'KiTa Drachenhöhle', to: ROUTES.DRACHENHOEHLE },
        { name: 'KiTa Drachen Kids', to: ROUTES.DRACHENKIDS },
        { name: 'Eingliederungshilfe', to: ROUTES.EINGLIEDERUNGSHILFE },
        { name: 'Zusätzliche Betreuung', to: ROUTES.BETREUUNGSLEISTUNGEN },
        { name: 'Scotson Technique', to: ROUTES.SCOTSON_THERAPIE },
        { name: 'Konduktive Förderung', to: ROUTES.KONDUKTIVE_FOERDERUNG },
      ],
    },
    { name: 'Freiwillige', to: ROUTES.FREIWILLIGENBEREICH },
    { name: 'Neuigkeiten', to: ROUTES.NEUIGKEITEN },
    { name: 'Kontakt', href: '#contact' },
  ];

  const handleNavClick = (href?: string, to?: string) => {
    if (to) {
      navigate(to);
    } else if (href) {
      if (isHomePage) {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/' + href);
      }
    }
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  // On subpages, header is always solid
  const showSolid = !isHomePage || isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showSolid
          ? 'bg-warm-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to={ROUTES.HOME} className="flex items-center group">
            <img
              src="/logo.png"
              alt="Drachenreiter Berlin"
              className={`h-12 w-auto transition-all duration-300 group-hover:scale-105 ${
                showSolid ? '' : 'brightness-0 invert'
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Hauptnavigation" className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className={`flex items-center gap-1 font-ui font-medium text-sm transition-colors hover:text-dragon-green ${
                        showSolid ? 'text-berlin-charcoal' : 'text-white/90'
                      }`}
                    >
                      {link.name}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          isServicesOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {/* Dropdown — before:content creates invisible bridge over the gap */}
                    {isServicesOpen && (
                      <div className="absolute top-full left-0 w-64 before:content-[''] before:absolute before:-top-4 before:left-0 before:w-full before:h-4">
                        <div className="bg-white rounded-xl shadow-card-hover py-2">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            to={item.to}
                            className="block px-4 py-3 font-body text-sm text-berlin-charcoal hover:bg-sky-mist hover:text-dragon-green transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => handleNavClick(link.href, link.to)}
                    className={`font-ui font-medium text-sm transition-colors hover:text-dragon-green relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-dragon-green after:transition-all hover:after:w-full ${
                      showSolid ? 'text-berlin-charcoal' : 'text-white/90'
                    }`}
                  >
                    {link.name}
                  </button>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to={ROUTES.SPENDEN}
              className="inline-flex items-center gap-2 px-6 py-3 bg-dragon-green text-white font-ui font-semibold text-sm rounded-lg hover:bg-dragon-dark transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              <Heart className="w-4 h-4" />
              Spenden
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              showSolid ? 'text-berlin-charcoal' : 'text-white'
            }`}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-20 bg-warm-white z-40 animate-fade-in-up">
          <nav aria-label="Mobile Navigation" className="flex flex-col p-6 gap-2">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.dropdown ? (
                  <div>
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="flex items-center justify-between w-full py-3 font-ui font-medium text-berlin-charcoal"
                    >
                      {link.name}
                      <ChevronDown
                        className={`w-5 h-5 transition-transform ${
                          isServicesOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isServicesOpen && (
                      <div className="pl-4 border-l-2 border-sky-mist ml-2">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            to={item.to}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block py-2 font-body text-sm text-berlin-light hover:text-dragon-green"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => handleNavClick(link.href, link.to)}
                    className="block w-full text-left py-3 font-ui font-medium text-berlin-charcoal hover:text-dragon-green"
                  >
                    {link.name}
                  </button>
                )}
              </div>
            ))}
            <Link
              to={ROUTES.SPENDEN}
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-2 px-6 py-4 bg-dragon-green text-white font-ui font-semibold rounded-lg"
            >
              <Heart className="w-5 h-5" />
              Jetzt spenden
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
