import { useEffect, useRef, useState } from 'react';
import { Users, Calendar, Award, Heart } from 'lucide-react';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const stats = [
    {
      icon: Users,
      value: 500,
      suffix: '+',
      label: 'Kinder jährlich',
      description: 'in unseren KiTas betreut'
    },
    {
      icon: Calendar,
      value: 20,
      suffix: '+',
      label: 'Jahre Erfahrung',
      description: 'in der sozialen Arbeit'
    },
    {
      icon: Award,
      value: 15,
      suffix: '',
      label: 'Fachkräfte',
      description: 'mit Herz und Expertise'
    },
    {
      icon: Heart,
      value: 100,
      suffix: '%',
      label: 'Engagement',
      description: 'für jeden Einzelnen'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #2E4A62 0%, #1a2d3d 100%)' }}
    >
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(212, 168, 75, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(125, 153, 8, 0.2) 0%, transparent 50%)`
        }}
      />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block font-ui font-semibold text-sm tracking-wider text-golden uppercase mb-4">
            Unsere Wirkung
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-warm-white mb-6">
            Zahlen, die bewegen
          </h2>
          <p className="font-body text-lg text-warm-white/70 leading-relaxed">
            Seit über 20 Jahren setzen wir uns für die Förderung von Menschen in Berlin ein.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-golden/20 flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-golden" />
              </div>

              {/* Value */}
              <div className="font-display text-4xl sm:text-5xl font-bold text-warm-white mb-2">
                {isVisible ? (
                  <CountUp end={stat.value} duration={2000} />
                ) : (
                  '0'
                )}
                {stat.suffix}
              </div>

              {/* Label */}
              <div className="font-ui font-semibold text-lg text-warm-white/90 mb-1">
                {stat.label}
              </div>

              {/* Description */}
              <div className="font-body text-sm text-warm-white/60">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 font-ui font-semibold text-golden hover:text-warm-white transition-colors"
          >
            Mehr über unsere Arbeit
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

// CountUp Component
const CountUp = ({ end, duration }: { end: number; duration: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count}</span>;
};

export default Stats;
