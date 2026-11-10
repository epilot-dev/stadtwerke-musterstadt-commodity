import { Flame, Leaf, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { cn } from './ui/utils';

export type Commodity = 'strom' | 'gas';

declare global {
  interface Window {
    // The epilot Website Chat, once its loader has run.
    epilotChat?: { open(opener?: HTMLElement): void };
  }
}

const tariffs = [
  {
    commodity: 'strom',
    title: 'Ökostrom',
    description: '100% Ökostrom aus Sonne, Wind und Wasser, zum festen oder dynamischen Preis.',
    icon: Leaf,
    href: '/okostrom',
  },
  {
    commodity: 'gas',
    title: 'Gas',
    description: 'Klimaneutrales Gas zu fairen Preisen, für Wohnung und Einfamilienhaus.',
    icon: Flame,
    href: '/gas',
  },
] as const;

interface TariffInfoCardProps {
  /** On a tariff's own page: leaves out the list of tariffs. */
  commodity?: Commodity;
  className?: string;
}

/**
 * Stands in for the tariff calculator. The organization has no new-customer
 * Strom or Gas journey right now, so this card only informs and points to the
 * two things that do work: the Website Chat and the contact form.
 */
export function TariffInfoCard({ commodity, className }: TariffInfoCardProps) {
  return (
    <div className={cn('w-full max-w-md rounded-3xl bg-white shadow-2xl p-8', className)}>
      <h3 className="text-2xl font-bold text-gray-900 mb-2">
        {commodity ? 'Fragen zum Tarif?' : 'Unsere Tarife'}
      </h3>

      {!commodity && (
        <ul className="mt-4 space-y-3">
          {tariffs.map(({ title, description, icon: Icon, href }) => (
            <li key={href}>
              <Link
                to={href}
                className="flex items-start gap-4 rounded-2xl bg-brand-surface p-4 hover:bg-brand/10 transition-colors"
              >
                <Icon className="size-6 shrink-0 text-brand-accent mt-0.5" />
                <span>
                  <span className="block font-semibold text-brand-ink">{title}</span>
                  <span className="block text-sm text-gray-600">{description}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}

      <p className="mt-5 text-sm text-gray-500">
        Der Online-Tarifrechner ist zurzeit nicht verfügbar. Fragen beantworten wir im Chat oder
        über das Kontaktformular.
      </p>

      <div className="mt-5 flex flex-wrap gap-3">
        <Button
          type="button"
          onClick={(event) => window.epilotChat?.open(event.currentTarget)}
          // Shown only once the chat is there, so the button never does nothing.
          className="h-11 px-6 rounded-full bg-brand hover:bg-brand-accent text-white font-semibold cursor-pointer [html:not([data-epilot-chat='ready'])_&]:hidden"
        >
          <MessageCircle className="size-5" />
          Chat öffnen
        </Button>
        <Button
          asChild
          variant="outline"
          className="h-11 px-6 rounded-full border-brand text-brand font-semibold"
        >
          <Link to="/service/kontakt">Kontakt aufnehmen</Link>
        </Button>
      </div>
    </div>
  );
}
