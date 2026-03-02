import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/hero-main.jpg"
          alt="Drachenreiter Berlin - Kinder und Betreuer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-dragon-green/90 via-deep-blue/80 to-deep-blue/90" />
        
        {/* Dragon Scale Pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='40' fill='none' stroke='rgba(255,255,255,0.2)' stroke-width='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Logo */}
        <div className="mb-8">
          <img
            src="/logo.png"
            alt="Drachenreiter"
            className="h-20 md:h-28 w-auto mx-auto animate-float brightness-0 invert"
          />
        </div>

        {/* Title */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-warm-white mb-6 leading-tight">
          Wir. Die Drachenreiter.
        </h1>

        {/* Subtitle */}
        <p className="font-body text-lg sm:text-xl md:text-2xl text-warm-white/90 mb-4 max-w-3xl mx-auto leading-relaxed">
          Gemeinsam stark. Individuell gefördert.
        </p>
        <p className="font-body text-base sm:text-lg md:text-xl text-warm-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
          Mit Herz, Verstand und dem Mut, neue Wege zu gehen.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection('#services')}
            className="btn-primary w-full sm:w-auto"
          >
            Unsere Angebote entdecken
          </button>
          <button
            onClick={() => scrollToSection('#contact')}
            className="btn-secondary w-full sm:w-auto"
          >
            Kontakt aufnehmen
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
        <button
          onClick={() => scrollToSection('#about')}
          className="text-warm-white/60 hover:text-warm-white transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-10 h-10" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
