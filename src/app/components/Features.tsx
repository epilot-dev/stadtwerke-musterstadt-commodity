import React from 'react';
import { PiggyBank, Leaf, MessageCircle } from 'lucide-react';

const features = [
  {
    icon: PiggyBank,
    title: 'Fair & transparent.',
    description:
      'Keine versteckten Kosten, keine Tricks. Ein Tarif, der zu Ihrem Leben passt, mit Preisen, die Sie verstehen.',
  },
  {
    icon: Leaf,
    title: '100% Öko? Logisch.',
    description:
      'Unser Strom kommt aus Sonne, Wind und Wasser. Null CO₂, null Atom, null Ausreden. So geht Energiewende heute.',
  },
  {
    icon: MessageCircle,
    title: 'Service ohne Warteschleife.',
    description:
      'Zählerstand übermitteln, Abschlag anpassen, Umzug melden: Das erledigen Sie online. Bei Fragen hilft unser Chat weiter.',
  },
];

export function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-screen-xl px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-ink mb-6">
            Mehr als nur Versorgung.
            <br />
            Energie, die Bock macht.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {features.map((feature, index) => {
            const Icon = feature.icon as React.ElementType;

            return (
              <div key={index} className="flex flex-col items-center">
                {/* Icon with graphical circle accent */}
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-brand-accent rounded-full scale-110 translate-x-1 translate-y-1 opacity-100" />
                  <div className="relative w-24 h-24 bg-white border-2 border-black rounded-full flex items-center justify-center">
                    <Icon className="w-10 h-10 text-black" strokeWidth={1.5} />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-brand-ink mb-4">{feature.title}</h3>

                <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
