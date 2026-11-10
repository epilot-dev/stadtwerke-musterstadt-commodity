import { Button } from './ui/button';
import { motion, useScroll, useTransform } from 'motion/react';
import { TariffInfoCard } from './TariffInfoCard';

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  return (
    <section className="relative w-full min-h-[600px] lg:min-h-[700px] py-12 md:py-8 flex items-center bg-gray-900 overflow-hidden">
      {/* Background Image with Parallax */}
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

      <div className="relative container mx-auto max-w-screen-xl px-4 md:px-6 flex flex-col lg:flex-row items-center gap-12">
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

        <TariffInfoCard />
      </div>
    </section>
  );
}
