import { cn } from './ui/utils';

type LogoProps = {
  variant?: 'light' | 'dark';
  className?: string;
};

const COLORS = {
  dark: { icon: '#0273a8', text: '#002241' },
  light: { icon: '#069de0', text: '#ffffff' },
};

export function Logo({ variant = 'dark', className = '' }: LogoProps) {
  const colors = COLORS[variant];

  return (
    <svg
      className={cn('w-full h-auto', className)}
      viewBox="0 0 300 75"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Stadtwerke Musterstadt"
      preserveAspectRatio="xMinYMid meet"
    >
      {/* Drop with bolt */}
      <g transform="translate(0 1.5) scale(1.5)">
        <path fill={colors.icon} d="M24 3C16 13 9 20.5 9 29a15 15 0 0 0 30 0C39 20.5 32 13 24 3Z" />
        <path fill="#ffffff" d="M26.5 17 17 30h6l-1.5 9L31 26h-6l1.5-9Z" />
      </g>

      <g fill={colors.text} fontFamily="'Open Sans Variable', system-ui, sans-serif">
        <text x="76" y="27" fontSize="16" fontWeight="600" letterSpacing="4.5">
          STADTWERKE
        </text>
        <text x="75" y="62" fontSize="35" fontWeight="800" letterSpacing="-0.5">
          Musterstadt
        </text>
      </g>
    </svg>
  );
}
