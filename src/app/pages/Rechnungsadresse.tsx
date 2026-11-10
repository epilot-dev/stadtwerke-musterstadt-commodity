import { JourneyPage } from '@/app/components/JourneyPage';
import { JOURNEY_IDS } from '@/lib/siteConfig';

export default function Rechnungsadresse() {
  return <JourneyPage journeyId={JOURNEY_IDS.rechnungsadresse} />;
}
