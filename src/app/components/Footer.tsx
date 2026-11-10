import { Logo } from './Logo';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PORTAL_URL } from '@/lib/siteConfig';

const hoverColor = 'hover:text-brand-accent';
const hoverBgColor = 'hover:bg-brand-accent';

const productLinks = [
  { name: 'Ökostrom', href: '/okostrom' },
  { name: 'Gas', href: '/gas' },
];

const serviceLinks = [
  { name: 'Service-Übersicht', href: '/service' },
  { name: 'Umzug melden', href: '/service/umzug' },
  { name: 'Zählerstand übermitteln', href: '/service/zaehlerstand' },
  { name: 'Abschlag anpassen', href: '/service/abschlag' },
  { name: 'Zahlungsmethode ändern', href: '/service/sepa' },
  { name: 'Rechnungsadresse ändern', href: '/service/rechnungsadresse' },
  { name: 'Persönliche Daten ändern', href: '/service/persoenliche-daten' },
  { name: 'Simulationsrechnung', href: '/service/simulationsrechnung' },
  { name: 'Vertrag kündigen', href: '/service/kuendigung' },
  { name: 'Kontakt', href: '/service/kontakt' },
];

export function Footer() {
  return (
    <footer className="bg-brand-ink text-white pt-20 pb-10">
      <div className="container mx-auto max-w-screen-xl px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="w-32 xl:w-40">
              <Logo variant="light" />
            </div>
            <p className="text-gray-400 leading-relaxed">
              Ihr zuverlässiger Partner für Energie in Musterstadt. Wir gestalten die Zukunft
              nachhaltig.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className={`w-10 h-10 rounded-full bg-white/10 flex items-center justify-center ${hoverBgColor} hover:text-black transition-colors`}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="text-lg font-bold mb-6">Produkte</h4>
            <ul className="space-y-3 text-gray-400">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className={`${hoverColor} transition-colors`}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Column */}
          <div>
            <h4 className="text-lg font-bold mb-6">Service</h4>
            <ul className="space-y-3 text-gray-400">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className={`${hoverColor} transition-colors`}>
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={PORTAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${hoverColor} transition-colors`}
                >
                  Kundenportal
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-bold mb-6">Kontakt</h4>
            <ul className="space-y-4 text-gray-400">
              <li>
                <div className="leading-relaxed">
                  <p>2PUNKT0 AG</p>
                  <p>Musterstraße 1</p>
                  <p>12345 Musterstadt</p>
                </div>
              </li>
              <li className="pt-2">
                <span className="block text-sm text-gray-500">Kostenlose Service-Hotline</span>
                <a href="tel:08001234567" className={`text-xl font-bold text-white ${hoverColor}`}>
                  0800 123 456 78
                </a>
              </li>
              <li>
                <a href="mailto:service@sw-musterstadt.epilot.cloud" className={hoverColor}>
                  service@sw-musterstadt.epilot.cloud
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2026 2PUNKT0 AG</p>
          <div className="flex gap-8">
            <Link to="#" className="hover:text-white">
              Impressum
            </Link>
            <Link to="#" className="hover:text-white">
              Datenschutz
            </Link>
            <Link to="#" className="hover:text-white">
              AGB
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
