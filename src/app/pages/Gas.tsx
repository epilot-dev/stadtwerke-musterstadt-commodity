import { TariffPage } from '@/app/components/TariffPage';

export default function Gas() {
  return (
    <TariffPage
      commodity="gas"
      title="Gas für Musterstadt"
      intro="Klimaneutrales Gas zu fairen Preisen, für Wohnung und Einfamilienhaus."
      benefits={[
        'Klimaneutral durch Ausgleich der entstehenden Emissionen',
        'Faire Preise ohne versteckte Kosten',
        'Wechsel ohne Unterbrechung: Wir kündigen für Sie beim alten Anbieter',
      ]}
    />
  );
}
