import { TariffPage } from '@/app/components/TariffPage';

export default function Okostrom() {
  return (
    <TariffPage
      commodity="strom"
      title="Ökostrom für Musterstadt"
      intro="100% Ökostrom aus Sonne, Wind und Wasser, zum festen oder dynamischen Preis."
      benefits={[
        'Strom aus erneuerbaren Quellen, ohne Aufpreis für das gute Gewissen',
        'Fester Preis oder dynamischer Tarif, der dem Börsenpreis folgt',
        'Wechsel ohne Unterbrechung: Wir kündigen für Sie beim alten Anbieter',
      ]}
    />
  );
}
