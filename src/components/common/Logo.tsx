import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  theme?: 'light' | 'dark';
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  isLink?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  theme = 'light',
  showTagline = false,
  size = 'md',
  className = '',
  isLink = true,
}) => {
  const isDark = theme === 'dark';

  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-11 h-11',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  const logoContent = (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* SVG Icon: Abstract G + Upward Growth Bars + Pilot Dynamic Arrow */}
      <div className={`relative flex-shrink-0 ${iconSizes[size]}`}>
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-xs"
        >
          <defs>
            <linearGradient id="gp-gradient-primary" x1="4" y1="32" x2="32" y2="4" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#7657FF" />
              <stop offset="100%" stopColor="#28D7E5" />
            </linearGradient>
          </defs>

          {/* Background rounded container */}
          <rect
            width="36"
            height="36"
            rx="9"
            fill={isDark ? '#1B1B45' : '#10152B'}
            className="transition-colors"
          />

          {/* Growth bar 1 */}
          <rect
            x="8"
            y="20"
            width="3.5"
            height="8"
            rx="1.75"
            fill="url(#gp-gradient-primary)"
            opacity="0.85"
          />

          {/* Growth bar 2 */}
          <rect
            x="14"
            y="14"
            width="3.5"
            height="14"
            rx="1.75"
            fill="url(#gp-gradient-primary)"
          />

          {/* Abstract G & Upward swooping trajectory */}
          <path
            d="M9 14C11 8.5 17 6.5 22 8.5C25.5 10 27.5 13.5 27.5 17.5C27.5 22.5 23.5 26.5 18.5 26.5C14 26.5 10 23.5 9.5 19.5"
            stroke="url(#gp-gradient-primary)"
            strokeWidth="2.8"
            strokeLinecap="round"
          />

          {/* Dynamic Pilot Arrow Head */}
          <path
            d="M19 16.5H27.5V8"
            stroke="#28D7E5"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M27.5 8L18 17.5"
            stroke="#28D7E5"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
          <circle cx="27.5" cy="8" r="1.8" fill="#28D7E5" />
        </svg>
      </div>

      {/* Brand Name & Tagline */}
      <div className="flex flex-col leading-none">
        <span
          className={`font-extrabold tracking-tight ${textSizes[size]} ${
            isDark ? 'text-white' : 'text-[#161B32]'
          }`}
        >
          Growth<span className="text-brand-violet">Pilots</span>
        </span>
        {showTagline && (
          <span
            className={`text-[10px] uppercase font-semibold tracking-wider mt-0.5 ${
              isDark ? 'text-slate-400' : 'text-brand-muted'
            }`}
          >
            Data. Automation. Growth.
          </span>
        )}
      </div>
    </div>
  );

  if (isLink) {
    return (
      <Link to="/" aria-label="GrowthPilots Home" className="focus:outline-none focus:ring-2 focus:ring-brand-violet rounded-md">
        {logoContent}
      </Link>
    );
  }

  return logoContent;
};
