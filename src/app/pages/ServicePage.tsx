import { Link } from 'react-router-dom';
import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';
import {
  Home,
  TrendingUp,
  CreditCard,
  XCircle,
  LogIn,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Gauge,
  UserCog,
  Calculator,
  MessageCircle,
} from 'lucide-react';
import { PORTAL_URL } from '@/lib/siteConfig';

const serviceCards = [
  {
    title: 'Umzug melden',
    description:
      'Ziehen Sie um? Teilen Sie uns Ihre neue Adresse mit und wir kümmern uns um den Rest.',
    icon: Home,
    href: '/service/umzug',
    cta: 'Jetzt melden',
  },
  {
    title: 'Zählerstand übermitteln',
    description: 'Übermitteln Sie Ihren aktuellen Zählerstand bequem online.',
    icon: Gauge,
    href: '/service/zaehlerstand',
    cta: 'Jetzt übermitteln',
  },
  {
    title: 'Abschlag anpassen',
    description: 'Passen Sie Ihre monatlichen Abschlagszahlungen an Ihren aktuellen Verbrauch an.',
    icon: TrendingUp,
    href: '/service/abschlag',
    cta: 'Jetzt anpassen',
  },
  {
    title: 'Zahlungsmethode ändern',
    description: 'Richten Sie ein SEPA-Lastschriftmandat ein oder ändern Sie Ihre Bankverbindung.',
    icon: CreditCard,
    href: '/service/sepa',
    cta: 'Jetzt ändern',
  },
  {
    title: 'Rechnungsadresse ändern',
    description: 'Ihre Rechnung soll an eine andere Adresse gehen? Teilen Sie uns die neue mit.',
    icon: MapPin,
    href: '/service/rechnungsadresse',
    cta: 'Jetzt ändern',
  },
  {
    title: 'Persönliche Daten ändern',
    description: 'Halten Sie Name, E-Mail-Adresse und Telefonnummer aktuell.',
    icon: UserCog,
    href: '/service/persoenliche-daten',
    cta: 'Jetzt ändern',
  },
  {
    title: 'Simulationsrechnung',
    description: 'Erfahren Sie schon vor der Jahresabrechnung, womit Sie rechnen können.',
    icon: Calculator,
    href: '/service/simulationsrechnung',
    cta: 'Jetzt berechnen',
  },
  {
    title: 'Vertrag kündigen',
    description:
      'Sie möchten Ihren Vertrag beenden? Hier finden Sie alle Informationen zur Kündigung.',
    icon: XCircle,
    href: '/service/kuendigung',
    cta: 'Kündigung einreichen',
  },
  {
    title: 'Kontakt',
    description: 'Ihr Anliegen ist nicht dabei? Schreiben Sie uns, wir melden uns bei Ihnen.',
    icon: MessageCircle,
    href: '/service/kontakt',
    cta: 'Kontakt aufnehmen',
  },
];

export function ServicePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-grow">
        {/* Service Cards Section */}
        <section className="py-12 md:py-20 lg:py-24 bg-white">
          <div className="container mx-auto max-w-[1440px] px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-brand-ink mb-4">
                Wie können wir Ihnen helfen?
              </h2>
              <p className="text-lg text-gray-600">
                Wählen Sie Ihr Anliegen und erledigen Sie alles bequem online.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceCards.map((service, index) => (
                <Link
                  key={index}
                  to={service.href}
                  className="group relative flex flex-col p-8 bg-gray-50 rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl overflow-hidden"
                >
                  <div
                    className={`absolute top-0 right-0 -mr-12 -mt-12 transition-transform group-hover:scale-110 z-0 opacity-30 text-brand-accent`}
                  >
                    <service.icon className="w-48 h-48" strokeWidth={1.5} />
                  </div>

                  <div className="relative z-10 mb-6">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-white shadow-sm text-brand-ink transition-colors duration-300 group-hover:bg-brand-accent">
                      <service.icon className="w-7 h-7" />
                    </div>
                  </div>

                  <h3 className="relative z-10 text-2xl font-bold text-brand-ink mb-3">
                    {service.title}
                  </h3>

                  <p className="relative z-10 text-gray-600 mb-6 flex-grow">
                    {service.description}
                  </p>

                  <div className="relative z-10 flex items-center font-bold text-brand-ink group-hover:text-black transition-colors">
                    {service.cta}{' '}
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}

              {/* Kundenportal Login Card */}
              <div className="flex flex-col justify-between p-8 pb-8 bg-gradient-to-br from-brand-ink via-brand-ink to-brand rounded-3xl text-white relative overflow-hidden">
                {/* Accent glow from bottom right */}
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-accent rounded-full blur-[120px] opacity-20 translate-x-1/3 translate-y-1/3" />

                <div>
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-white/10 mb-6 relative z-10">
                    <LogIn className="w-7 h-7" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4 relative z-10">Kundenportal Login</h3>
                  <p className="text-gray-300 mb-8 relative z-10">
                    Zugriff auf Ihre Verträge, Rechnungen und Verbrauchsdaten. Jederzeit und
                    überall.
                  </p>
                </div>

                <a href={PORTAL_URL} target="_blank" rel="noopener noreferrer">
                  <button className="w-full py-4 rounded-full bg-white text-brand-ink font-bold transition-all duration-300 relative z-10 cursor-pointer hover:bg-brand-accent hover:shadow-[0_0_30px_var(--color-brand-accent)]">
                    Zum Kundenportal
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Help Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto max-w-screen-xl px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-brand-ink mb-6 text-center">
                Weitere Hilfe benötigt?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-brand-accent flex items-center justify-center mx-auto mb-3">
                    <Phone className="w-6 h-6 text-brand-ink" />
                  </div>
                  <h3 className="font-bold text-brand-ink mb-1">Telefon</h3>
                  <p className="text-gray-600">0800 123 456 78</p>
                  <p className="text-sm text-gray-500 mt-1">Mo-Fr 8-18 Uhr</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-brand-accent flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-brand-ink" />
                  </div>
                  <h3 className="font-bold text-brand-ink mb-1">E-Mail</h3>
                  <p className="text-gray-600">service@sw-musterstadt.epilot.cloud</p>
                  <p className="text-sm text-gray-500 mt-1">24/7 erreichbar</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-brand-accent flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-6 h-6 text-brand-ink" />
                  </div>
                  <h3 className="font-bold text-brand-ink mb-1">Kundenzentrum</h3>
                  <p className="text-gray-600">Musterstraße 1, 12345 Musterstadt</p>
                  <p className="text-sm text-gray-500 mt-1">Mo-Fr 9-17 Uhr</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
