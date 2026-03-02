import Hero from '@/sections/Hero';
import Mission from '@/sections/Mission';
import Services from '@/sections/Services';
import Stats from '@/sections/Stats';
import Testimonials from '@/sections/Testimonials';
import News from '@/sections/News';
import CTA from '@/sections/CTA';
import Contact from '@/sections/Contact';
import { SITE_URL } from '@/lib/seo';

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Drachenreiter gGmbH',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    'Partner für Kinder- und Jugendhilfe, Eingliederungshilfe sowie ganzheitliche Förderangebote in Berlin.',
  foundingDate: '2012',
  founder: {
    '@type': 'Person',
    name: 'Sebastian Bürger',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Langhansstr. 97',
    addressLocality: 'Berlin',
    postalCode: '13086',
    addressCountry: 'DE',
  },
  telephone: '+493092103398',
  email: 'info@drachenreiter.berlin',
};

const HomePage = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <Hero />
      <Mission />
      <Services />
      <Stats />
      <Testimonials />
      <News />
      <CTA />
      <Contact />
    </>
  );
};

export default HomePage;
