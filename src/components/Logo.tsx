import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "h-10 w-auto" }) => {
  return (
    <svg
      width="140"
      height="50"
      viewBox="0 0 560 200"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background circle */}
      <circle cx="100" cy="100" r="80" fill="#0F172A" opacity="0.1" />
      
      {/* Tech icon - Code symbol */}
      <g transform="translate(60, 60)">
        <path
          d="M 20 20 L 40 40 L 20 60 M 60 20 L 40 40 L 60 60"
          stroke="#0F172A"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
      </g>
      
      {/* Main "Syntaxim" text */}
      <text
        x="280"
        y="135"
        fontFamily="Geist, sans-serif"
        fontSize="120"
        fontWeight="800"
        letterSpacing="4"
        textAnchor="middle"
        fill="#0F172A"
      >
        Syntaxim
      </text>
      
      {/* Decorative line under text */}
      <line
        x1="180"
        y1="150"
        x2="380"
        y2="150"
        stroke="#0F172A"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.3"
      />
    </svg>
  );
};

export default Logo;
