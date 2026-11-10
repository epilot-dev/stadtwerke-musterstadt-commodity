import { Leaf, Flame, Home, TrendingUp, Gauge, MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProductCard } from '@/app/components/ProductCard';

const tariffs = [
  {
    title: 'Ökostrom',
    description: '100% Ökostrom aus Sonne, Wind und Wasser. Berechnen Sie jetzt Ihren Tarif.',
    icon: Leaf,
    href: '/okostrom',
    cta: 'Tarif berechnen',
  },
  {
    title: 'Gas',
    description: 'Klimaneutrales Gas zu fairen Preisen. Berechnen Sie jetzt Ihren Tarif.',
    icon: Flame,
    href: '/gas',
    cta: 'Tarif berechnen',
  },
];

const services = [
  {
    title: 'Umzug melden',
    description:
      'Sie ziehen um? Teilen Sie uns Ihre neue Adresse mit, wir kümmern uns um den Rest.',
    icon: Home,
    href: '/service/umzug',
    cta: 'Jetzt melden',
  },
  {
    title: 'Abschlag anpassen',
    description: 'Passen Sie Ihre monatlichen Abschlagszahlungen an Ihren aktuellen Verbrauch an.',
    icon: TrendingUp,
    href: '/service/abschlag',
    cta: 'Jetzt anpassen',
  },
  {
    title: 'Zählerstand übermitteln',
    description: 'Übermitteln Sie Ihren aktuellen Zählerstand bequem online.',
    icon: Gauge,
    href: '/service/zaehlerstand',
    cta: 'Jetzt übermitteln',
  },
];

export function Services() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto max-w-screen-xl px-4 md:px-6">
        {/* Tariffs */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-ink mb-4">Unsere Tarife</h2>
          <p className="text-lg text-gray-600">
            Wir versorgen Musterstadt zuverlässig mit Strom und Gas.
            <br />
            Nachhaltig, sicher und zu fairen Preisen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tariffs.map((tariff) => (
            <ProductCard key={tariff.href} {...tariff} />
          ))}

          {/* Call to Action Card */}
          <div className="flex flex-col justify-between p-8 pb-8 bg-gradient-to-br from-brand-ink via-brand-ink to-brand rounded-3xl text-white relative overflow-hidden">
            {/* Accent glow from bottom right */}
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-accent rounded-full blur-[120px] opacity-20 translate-x-1/3 translate-y-1/3" />

            <div>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-white/10 mb-6 relative z-10">
                <MessageCircle className="w-7 h-7" />
              </div>

              <h3 className="text-2xl font-bold mb-4 relative z-10">Sie haben Fragen?</h3>
              <p className="text-gray-300 mb-8 relative z-10">
                Unser Kundenservice ist für Sie da. Schreiben Sie uns im Chat oder über das
                Kontaktformular.
              </p>
            </div>

            <Link to="/service/kontakt">
              <button className="w-full py-4 rounded-full bg-white text-brand-ink font-bold transition-all duration-300 relative z-10 cursor-pointer hover:bg-brand-accent hover:shadow-[0_0_30px_rgba(6,157,224,0.6)]">
                Kontakt aufnehmen
              </button>
            </Link>
          </div>
        </div>

        {/* Self-service */}
        <div className="text-center max-w-2xl mx-auto mt-24 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-ink mb-4">Service für Sie</h2>
          <p className="text-lg text-gray-600">
            Erledigen Sie Ihre Anliegen bequem online, wann immer es Ihnen passt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ProductCard key={service.href} {...service} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/service"
            className="inline-flex items-center font-bold text-brand-ink hover:text-brand transition-colors"
          >
            Alle Services ansehen <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
