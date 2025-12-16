import React from 'react';

interface BackgroundPatternProps {
  variant?: 'grid' | 'dots' | 'grid-dots';
  opacity?: number;
  className?: string;
}

const BackgroundPattern = ({
  variant = 'dots',
  opacity = 0.03,
  className = '',
}: BackgroundPatternProps) => {
  const patternStyle: React.CSSProperties = {
    opacity,
    pointerEvents: 'none',
  };

  if (variant === 'grid') {
    return (
      <div className={`absolute inset-0 ${className}`} style={patternStyle}>
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid-pattern"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#0F172A"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>
    );
  }

  if (variant === 'dots') {
    return (
      <div className={`absolute inset-0 ${className}`} style={patternStyle}>
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="dots-pattern"
              width="24"
              height="24"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="12" cy="12" r="1.5" fill="#0F172A" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots-pattern)" />
        </svg>
      </div>
    );
  }

  // grid-dots variant
  return (
    <div className={`absolute inset-0 ${className}`} style={patternStyle}>
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="grid-dots-pattern"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="16" cy="16" r="1" fill="#0F172A" />
            <path
              d="M 32 0 L 0 0 0 32"
              fill="none"
              stroke="#0F172A"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-dots-pattern)" />
      </svg>
    </div>
  );
};

export default BackgroundPattern;
