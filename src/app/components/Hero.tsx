import { Button } from './ui/button';
import { motion, useScroll, useTransform } from 'motion/react';
import JourneyComponent from './JourneyComponent';
import { JOURNEY_IDS } from '@/lib/siteConfig';
import { useCallback, useEffect, useRef, useState } from 'react';
import { cn } from './ui/utils';

// Type for journey page view event
interface JourneyPageViewEvent {
  type: 'EPILOT/USER_EVENT/PAGE_VIEW';
  journeyId: string;
  payload: {
    path: string;
    journeyName: string;
  };
}

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  const [isFullscreen, setIsFullscreen] = useState(false);
  // Track the first step for each sub-journey: Map<journeyId, { isLoaded: boolean, path: string }>
  const firstStepsRef = useRef<
    Map<
      string,
      {
        isLoaded: boolean;
        path: string;
      }
    >
  >(new Map());

  // Handle journey navigation events
  const handleJourneyMessage = useCallback((event: MessageEvent) => {
    if (
      !event?.data ||
      typeof event.data !== 'object' ||
      event.data.type !== 'EPILOT/USER_EVENT/PAGE_VIEW'
    ) {
      return;
    }

    const { payload, journeyId } = event.data as JourneyPageViewEvent;
    const { path } = payload;

    // Get the current first step for this journey (if exists)
    const firstStepData = firstStepsRef.current.get(journeyId);
    const firstStepPath = firstStepData?.path;
    const firstStepLoaded = firstStepData?.isLoaded;

    // If the first step is not loaded, set it to loaded and return
    if (!firstStepLoaded) {
      firstStepsRef.current.set(journeyId, { isLoaded: true, path });
      return;
    }

    if (firstStepPath === path) {
      // Navigated back to the first step - exit fullscreen
      setIsFullscreen(false);
    } else {
      // Navigated away from the first step - enter fullscreen
      setIsFullscreen(true);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('message', handleJourneyMessage);
    return () => {
      window.removeEventListener('message', handleJourneyMessage);
    };
  }, [handleJourneyMessage]);

  // Scroll to top when entering fullscreen
  useEffect(() => {
    if (isFullscreen) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [isFullscreen]);

  return (
    <section
      className={cn(
        'relative w-full',
        isFullscreen
          ? 'bg-[#f9fafb]'
          : 'min-h-[600px] lg:min-h-[700px] py-12 md:py-8 flex items-center bg-gray-900 overflow-hidden'
      )}
    >
      {/* Background Image with Parallax */}
      {!isFullscreen && (
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.img
            src="/hero.webp"
            alt="Modern sustainable city"
            className="w-full h-full object-cover"
            style={{ opacity }}
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
        </motion.div>
      )}

      {/* Main Content Container */}
      <div
        className={cn(
          'relative',
          isFullscreen
            ? 'w-full'
            : 'container mx-auto max-w-screen-xl px-4 md:px-6 flex flex-col lg:flex-row items-center gap-12'
        )}
      >
        {!isFullscreen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex-1 text-white max-w-2xl"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Energie für <span className="text-brand-accent">Morgen</span>.
              <br />
              Schon heute.
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg leading-relaxed">
              100% Ökostrom und klimaneutrales Gas für Musterstadt. Fair, transparent und lokal.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                className="bg-brand-accent hover:bg-brand-accent text-black h-12 px-8 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,157,224,0.6)]"
              >
                <a href="#products">Produkte entdecken</a>
              </Button>
            </div>
          </motion.div>
        )}

        <motion.div
          className={cn(
            isFullscreen
              ? 'w-full max-w-screen-lg mx-auto px-0 md:px-6 md:py-12'
              : 'w-full max-w-md rounded-3xl shadow-2xl bg-white pb-6'
          )}
        >
          {!isFullscreen && (
            <motion.div
              initial={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
              className="px-8 py-6 overflow-hidden"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Tarif berechnen</h3>
              <p className="text-gray-500">Finden Sie den passenden Tarif für Ihr Zuhause.</p>
            </motion.div>
          )}

          <JourneyComponent
            journeyId={JOURNEY_IDS.homepage}
            className={cn(isFullscreen ? 'rounded-2xl' : 'rounded-3xl')}
          />
        </motion.div>
      </div>
    </section>
  );
}
