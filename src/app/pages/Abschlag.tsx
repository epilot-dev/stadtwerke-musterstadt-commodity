import { JourneyPage } from '@/app/components/JourneyPage';
import { JOURNEY_IDS } from '@/lib/siteConfig';

export default function Abschlag() {
  return <JourneyPage journeyId={JOURNEY_IDS.abschlag} />;
}
