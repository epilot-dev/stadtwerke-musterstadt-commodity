import { Check } from 'lucide-react';
import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';
import { TariffInfoCard, type Commodity } from './TariffInfoCard';

interface TariffPageProps {
  commodity: Commodity;
  title: string;
  intro: string;
  benefits: string[];
}

export function TariffPage({ commodity, title, intro, benefits }: TariffPageProps) {
  return (
    <div className="min-h-screen font-sans text-gray-900 selection:bg-brand-accent selection:text-black flex flex-col">
      <Navbar />
      <main className="flex-1 bg-brand-surface">
        <div className="container mx-auto max-w-screen-xl px-4 md:px-6 py-16 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-ink leading-tight mb-6">
              {title}
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">{intro}</p>
            <ul className="space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-gray-800">
                  <Check className="size-6 shrink-0 text-brand-accent" />
                  <span className="text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <TariffInfoCard commodity={commodity} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
