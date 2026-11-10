import svgPaths from '@/imports/svg-ontq014s5t';
import svgPathsWhite from '@/imports/svg-ts7smlwdzt';
import { cn } from './ui/utils';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  withStripe?: boolean;
}

export function Logo({ variant = 'dark', className = '', withStripe = false }: LogoProps) {
  if (variant === 'light') {
    // Footer version - white logo without stripe
    return (
      <div className={cn('relative w-full mt-1', className)}>
        <svg
          className="w-full h-auto"
          viewBox="0 0 300 75.122"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMinYMid meet"
        >
          {/* Stadtwerke text - top section */}
          <g transform="translate(41.06, 0)">
            <path d={svgPathsWhite.p43de80} fill="white" />
            <path d={svgPathsWhite.pd1eac00} fill="white" />
            <path d={svgPathsWhite.p19fcbe00} fill="white" />
            <path d={svgPathsWhite.p3ce5fec0} fill="white" />
            <path d={svgPathsWhite.p2b78c200} fill="white" />
            <path d={svgPathsWhite.p2805f420} fill="white" />
            <path d={svgPathsWhite.p29644b40} fill="white" />
            <path d={svgPathsWhite.p2796680} fill="white" />
            <path d={svgPathsWhite.p1febc7c0} fill="white" />
            <path d={svgPathsWhite.pc710280} fill="white" />
          </g>

          {/* 2PUNKT0 text - middle section */}
          <g transform="translate(0, 24.25)">
            <path d={svgPathsWhite.p3f226800} fill="white" />
            <path d={svgPathsWhite.p397fc480} fill="white" />
            <path d={svgPathsWhite.p1432c700} fill="white" />
            <path d={svgPathsWhite.p275a9400} fill="white" />
            <path d={svgPathsWhite.pc67a300} fill="white" />
            <path d={svgPathsWhite.p21c2df0} fill="white" />
            <path d={svgPathsWhite.p4f3a000} fill="white" />
          </g>
        </svg>
      </div>
    );
  }

  // Navbar version - with optional animated stripe
  return (
    <div className={`relative w-full ${className}`}>
      <svg
        className="w-full h-auto relative"
        viewBox="0 0 300 75.122"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMinYMid meet"
      >
        {/* Animated stripe - behind text, aligned with navbar selection bars */}
        {withStripe && (
          <rect
            x="0"
            y="50.93"
            width="300"
            height="24.192"
            fill="#069de0"
            className="origin-bottom animate-stripe-grow"
          />
        )}

        {/* Stadtwerke text - top section */}
        <g transform="translate(43.74, 0)">
          <path d={svgPaths.p43de80} fill="#002241" />
          <path d={svgPaths.pd1eac00} fill="#002241" />
          <path d={svgPaths.p19fcbe00} fill="#002241" />
          <path d={svgPaths.p3ce5fec0} fill="#002241" />
          <path d={svgPaths.p2b78c200} fill="#002241" />
          <path d={svgPaths.p2805f420} fill="#002241" />
          <path d={svgPaths.p29644b40} fill="#002241" />
          <path d={svgPaths.p2796680} fill="#002241" />
          <path d={svgPaths.p1febc7c0} fill="#002241" />
          <path d={svgPaths.pc710280} fill="#002241" />
        </g>

        {/* 2PUNKT0 text - middle section */}
        <g transform="translate(2.68, 24.25)">
          <path d={svgPaths.p3f226800} fill="#002241" />
          <path d={svgPaths.p397fc480} fill="#002241" />
          <path d={svgPaths.p1432c700} fill="#002241" />
          <path d={svgPaths.p275a9400} fill="#002241" />
          <path d={svgPaths.pc67a300} fill="#002241" />
          <path d={svgPaths.p21c2df0} fill="#002241" />
          <path d={svgPaths.p4f3a000} fill="#002241" />
        </g>
      </svg>
    </div>
  );
}
