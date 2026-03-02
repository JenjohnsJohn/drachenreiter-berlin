import { Link } from 'react-router-dom';
import { Sparkles, Palette, Scale, Sun } from 'lucide-react';
import { ROUTES } from '@/lib/routes';

const Mission = () => {
  const values = [
    {
      icon: Sparkles,
      title: 'Eigenart',
      description: 'Wir feiern Vielfalt als gesellschaftlichen Reichtum und achten die Einzigartigkeit jedes Menschen.',
      color: 'text-golden'
    },
    {
      icon: Palette,
      title: 'Gestaltung',
      description: 'Wir gestalten Leben und Gemeinschaft aktiv mit und schaffen Räume für Entwicklung.',
      color: 'text-dragon-green'
    },
    {
      icon: Scale,
      title: 'Einklang',
      description: 'Wir schaffen Balance zwischen Mensch und Umwelt für nachhaltiges Wohlbefinden.',
      color: 'text-sage'
    },
    {
      icon: Sun,
      title: 'Lebenslust',
      description: 'Wir bringen Vitalität und Freude in den täglichen Lebenszusammenhang.',
      color: 'text-coral'
    }
  ];

  return (
    <section id="about" className="section-padding bg-warm-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="inline-block font-ui font-semibold text-sm tracking-wider text-dragon-green uppercase mb-4">
              Unsere Mission
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-berlin-charcoal mb-6 leading-tight">
              Arbeit am Leben.
            </h2>
            <div className="space-y-4 font-body text-berlin-light leading-relaxed">
              <p>
                Die Drachenreiter gGmbH hat es sich zur Aufgabe gemacht, Menschen in ihrer Entwicklung 
                individuell und ressourcenorientiert zu unterstützen. Unsere Angebote richten sich vor 
                allem an Menschen in schwierigen Lebensituationen, Menschen mit Behinderung sowie Kinder 
                und Jugendliche.
              </p>
              <p>
                Die Drachenreiter stehen nicht von ungefähr für <strong className="text-berlin-charcoal">Eigenart, Gestaltung, 
                Einklang und Lebenslust</strong>. Die Eigenarten und Lebenswelten der Menschen, welche wir 
                unterstützen, achten wir als Ausdruck von Vielfalt und Selbstbestimmung.
              </p>
              <p>
                Deshalb ist es uns ein großes Anliegen, dass die Begegnungen innerhalb unserer Angebote 
                auf Augenhöhe stattfinden. Wir begleiten Wege und gehen diese Wege dabei ein Stück weit gemeinsam.
              </p>
            </div>
            
            <div className="mt-8 flex items-center gap-4">
              <Link
                to={ROUTES.TRAEGER}
                className="inline-flex items-center gap-2 font-ui font-semibold text-dragon-green hover:text-dragon-dark transition-colors"
              >
                Mehr über uns
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-card-hover">
              <img
                src="/team-photo.jpg"
                alt="Das Drachenreiter Team"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-golden/20 rounded-full blur-2xl" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-dragon-green/20 rounded-full blur-2xl" />
          </div>
        </div>

        {/* Values Grid */}
        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div 
              key={value.title}
              className="group bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-400 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-12 h-12 rounded-xl bg-sky-mist flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <value.icon className={`w-6 h-6 ${value.color}`} />
              </div>
              <h3 className="font-display text-xl font-semibold text-berlin-charcoal mb-2">
                {value.title}
              </h3>
              <p className="font-body text-sm text-berlin-light leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
