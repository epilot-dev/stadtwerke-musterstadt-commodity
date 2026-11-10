import { JourneyPage } from '@/app/components/JourneyPage';
import { JOURNEY_IDS } from '@/lib/siteConfig';

export default function Okostrom() {
  return <JourneyPage journeyId={JOURNEY_IDS.okostrom} />;
}
