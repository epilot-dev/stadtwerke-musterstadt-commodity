import { Navbar } from '@/app/components/Navbar';
import { Hero } from '@/app/components/Hero';
import { Features } from '@/app/components/Features';
import { Services } from '@/app/components/Services';
import { Footer } from '@/app/components/Footer';

export function HomePage() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-brand-accent selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Services />
      </main>
      <Footer />
    </div>
  );
}
