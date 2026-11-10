import { LucideIcon, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  cta: string;
  external?: boolean;
  image?: string;
  imageSize?: string;
}

export function ProductCard({
  title,
  description,
  icon: Icon,
  href,
  cta,
  external = false,
  image,
  imageSize = 'w-80 h-80 -mr-28 -mt-28',
}: ProductCardProps) {
  const hoverBgColor = 'group-hover:bg-brand-accent';
  const accentColor = 'text-brand-accent';

  const content = (
    <>
      {image ? (
        <div
          className={`absolute top-0 right-0 ${imageSize} transition-all duration-500 group-hover:scale-105 z-0 pointer-events-none opacity-60 group-hover:opacity-100`}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain object-center"
            loading="lazy"
            decoding="async"
            width="280"
            height="280"
          />
        </div>
      ) : (
        <div
          className={`absolute top-0 right-0 -mr-12 -mt-12 transition-transform group-hover:scale-110 z-0 opacity-30 ${accentColor}`}
        >
          <Icon className="w-48 h-48" strokeWidth={1.5} />
        </div>
      )}

      <div className="relative z-10 mb-6">
        <div
          className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-white shadow-sm text-brand-ink transition-colors duration-300 ${hoverBgColor}`}
        >
          <Icon className="w-7 h-7" />
        </div>
      </div>

      <h3 className="relative z-10 text-2xl font-bold text-brand-ink mb-3">{title}</h3>

      <p className="relative z-10 text-gray-600 mb-6 flex-grow">{description}</p>

      <div className="relative z-10 flex items-center font-bold text-brand-ink group-hover:text-black transition-colors">
        {cta} <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
      </div>
    </>
  );

  const className =
    'group relative flex flex-col p-8 bg-gray-50 rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl overflow-hidden';

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {content}
      </a>
    );
  }

  return (
    <Link to={href} className={className}>
      {content}
    </Link>
  );
}
