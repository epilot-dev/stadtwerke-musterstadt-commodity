import { Navbar } from '@/app/components/Navbar';
import { Hero } from '@/app/components/Hero';
import { Features } from '@/app/components/Features';
import { Services } from '@/app/components/Services';
import { Footer } from '@/app/components/Footer';
import { isCustomChat } from '@/lib/chatMode';

export function HomePage() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-brand-accent selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Features />
        {!isCustomChat && <Services />}
      </main>
      <Footer />
    </div>
  );
}
