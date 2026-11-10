import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';
import JourneyWebComponent from './JourneyComponent';
import { cn } from './ui/utils';

interface JourneyPageProps {
  journeyId?: string;
  mode?: 'inline' | 'full-screen';
}

export function JourneyPage({ journeyId, mode }: JourneyPageProps) {
  return (
    <div className="min-h-screen font-sans text-gray-900 selection:bg-brand-accent selection:text-black flex flex-col">
      <Navbar />
      <main
        className={cn(
          'flex flex-col items-center justify-center bg-brand-surface',
          !journeyId && 'h-[700px]'
        )}
      >
        {journeyId ? (
          <div className="w-full max-w-7xl rounded-3xl  mx-auto my-12">
            <JourneyWebComponent journeyId={journeyId} mode={mode} isPage />
          </div>
        ) : (
          <div className="text-center">
            <p className="text-4xl text-gray-400">Embed journey here</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
