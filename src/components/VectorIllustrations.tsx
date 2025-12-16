import React from 'react';

interface VectorIllustrationProps {
  type:
    | 'laptop-code'
    | 'certificate'
    | 'students'
    | 'smartphone'
    | 'graduation'
    | 'rocket'
    | 'lightbulb'
    | 'teamwork';
  className?: string;
  size?: number;
}

const VectorIllustrations: React.FC<VectorIllustrationProps> = ({
  type,
  className = '',
  size = 200,
}) => {
  const illustrations = {
    'laptop-code': (
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        className={className}
      >
        {/* Laptop base */}
        <rect
          x="40"
          y="130"
          width="120"
          height="10"
          rx="5"
          fill="#0F172A"
          opacity="0.1"
          stroke="#0F172A"
          strokeWidth="2"
        />
        {/* Laptop screen */}
        <rect
          x="50"
          y="60"
          width="100"
          height="70"
          rx="5"
          fill="#0F172A"
          opacity="0.05"
          stroke="#0F172A"
          strokeWidth="2"
        />
        {/* Code lines */}
        <line
          x1="60"
          y1="75"
          x2="140"
          y2="75"
          stroke="#0F172A"
          strokeWidth="1.5"
          opacity="0.3"
        />
        <line
          x1="60"
          y1="85"
          x2="130"
          y2="85"
          stroke="#0F172A"
          strokeWidth="1.5"
          opacity="0.3"
        />
        <line
          x1="60"
          y1="95"
          x2="120"
          y2="95"
          stroke="#0F172A"
          strokeWidth="1.5"
          opacity="0.3"
        />
        <line
          x1="60"
          y1="105"
          x2="135"
          y2="105"
          stroke="#0F172A"
          strokeWidth="1.5"
          opacity="0.3"
        />
        <line
          x1="60"
          y1="115"
          x2="125"
          y2="115"
          stroke="#0F172A"
          strokeWidth="1.5"
          opacity="0.3"
        />
        {/* Code brackets */}
        <text
          x="65"
          y="100"
          fontSize="12"
          fill="#0F172A"
          opacity="0.4"
          fontWeight="bold"
        >
          {'<'}
        </text>
        <text x="75" y="100" fontSize="10" fill="#0F172A" opacity="0.3">
          const
        </text>
        <text x="110" y="100" fontSize="10" fill="#0F172A" opacity="0.3">
          syntaxim
        </text>
        <text
          x="155"
          y="100"
          fontSize="12"
          fill="#0F172A"
          opacity="0.4"
          fontWeight="bold"
        >
          {'>'}
        </text>
      </svg>
    ),
    certificate: (
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        className={className}
      >
        {/* Certificate frame */}
        <rect
          x="30"
          y="40"
          width="140"
          height="120"
          rx="5"
          fill="#FFFFFF"
          stroke="#0F172A"
          strokeWidth="2"
          opacity="0.9"
        />
        {/* Decorative border */}
        <rect
          x="40"
          y="50"
          width="120"
          height="100"
          fill="none"
          stroke="#0F172A"
          strokeWidth="1"
          opacity="0.2"
          strokeDasharray="3,3"
        />
        {/* Certificate text */}
        <text
          x="100"
          y="75"
          fontSize="14"
          fill="#0F172A"
          textAnchor="middle"
          fontWeight="bold"
          opacity="0.6"
        >
          CERTIFICATE
        </text>
        <text
          x="100"
          y="90"
          fontSize="10"
          fill="#0F172A"
          textAnchor="middle"
          opacity="0.5"
        >
          of Completion
        </text>
        <line
          x1="50"
          y1="100"
          x2="150"
          y2="100"
          stroke="#0F172A"
          strokeWidth="1"
          opacity="0.2"
        />
        <text
          x="100"
          y="120"
          fontSize="9"
          fill="#0F172A"
          textAnchor="middle"
          opacity="0.4"
        >
          Syntaxim Tech Education
        </text>
        {/* Ribbon decoration */}
        <path
          d="M 70 40 Q 100 30, 130 40"
          fill="none"
          stroke="#0F172A"
          strokeWidth="2"
          opacity="0.3"
        />
        <path
          d="M 70 160 Q 100 170, 130 160"
          fill="none"
          stroke="#0F172A"
          strokeWidth="2"
          opacity="0.3"
        />
      </svg>
    ),
    students: (
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        className={className}
      >
        {/* Student 1 */}
        <circle
          cx="70"
          cy="70"
          r="18"
          fill="#0F172A"
          opacity="0.1"
          stroke="#0F172A"
          strokeWidth="2"
        />
        <path
          d="M 52 88 Q 52 108, 62 118 Q 72 128, 70 123 Q 70 128, 80 118 Q 90 108, 88 88"
          fill="#0F172A"
          opacity="0.05"
          stroke="#0F172A"
          strokeWidth="2"
        />
        <rect
          x="60"
          y="128"
          width="20"
          height="35"
          rx="3"
          fill="#0F172A"
          opacity="0.1"
          stroke="#0F172A"
          strokeWidth="2"
        />
        {/* Student 2 */}
        <circle
          cx="130"
          cy="70"
          r="18"
          fill="#0F172A"
          opacity="0.1"
          stroke="#0F172A"
          strokeWidth="2"
        />
        <path
          d="M 112 88 Q 112 108, 122 118 Q 132 128, 130 123 Q 130 128, 140 118 Q 150 108, 148 88"
          fill="#0F172A"
          opacity="0.05"
          stroke="#0F172A"
          strokeWidth="2"
        />
        <rect
          x="120"
          y="128"
          width="20"
          height="35"
          rx="3"
          fill="#0F172A"
          opacity="0.1"
          stroke="#0F172A"
          strokeWidth="2"
        />
        {/* Connection line */}
        <line
          x1="88"
          y1="100"
          x2="112"
          y2="100"
          stroke="#0F172A"
          strokeWidth="1.5"
          opacity="0.2"
          strokeDasharray="2,2"
        />
      </svg>
    ),
    smartphone: (
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        className={className}
      >
        {/* Phone body */}
        <rect
          x="70"
          y="50"
          width="60"
          height="100"
          rx="8"
          fill="#0F172A"
          opacity="0.05"
          stroke="#0F172A"
          strokeWidth="2"
        />
        {/* Screen */}
        <rect
          x="75"
          y="60"
          width="50"
          height="80"
          rx="4"
          fill="#FFFFFF"
          stroke="#0F172A"
          strokeWidth="1"
          opacity="0.9"
        />
        {/* Screen content */}
        <rect
          x="80"
          y="70"
          width="40"
          height="25"
          rx="2"
          fill="#0F172A"
          opacity="0.1"
        />
        <line
          x1="85"
          y1="105"
          x2="115"
          y2="105"
          stroke="#0F172A"
          strokeWidth="1"
          opacity="0.2"
        />
        <line
          x1="85"
          y1="115"
          x2="110"
          y2="115"
          stroke="#0F172A"
          strokeWidth="1"
          opacity="0.2"
        />
        <line
          x1="85"
          y1="125"
          x2="105"
          y2="125"
          stroke="#0F172A"
          strokeWidth="1"
          opacity="0.2"
        />
        {/* Home button */}
        <circle cx="100" cy="155" r="4" fill="#0F172A" opacity="0.3" />
      </svg>
    ),
    graduation: (
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        className={className}
      >
        {/* Graduation cap */}
        <path
          d="M 50 100 Q 100 50, 150 100"
          fill="#0F172A"
          opacity="0.1"
          stroke="#0F172A"
          strokeWidth="2"
        />
        <rect
          x="90"
          y="100"
          width="20"
          height="50"
          rx="5"
          fill="#0F172A"
          opacity="0.1"
          stroke="#0F172A"
          strokeWidth="2"
        />
        <circle
          cx="100"
          cy="95"
          r="15"
          fill="#0F172A"
          opacity="0.15"
          stroke="#0F172A"
          strokeWidth="2"
        />
        {/* Tassel */}
        <line
          x1="150"
          y1="100"
          x2="160"
          y2="120"
          stroke="#0F172A"
          strokeWidth="2"
          opacity="0.3"
        />
        <circle cx="160" cy="125" r="3" fill="#0F172A" opacity="0.3" />
      </svg>
    ),
    rocket: (
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        className={className}
      >
        {/* Rocket body */}
        <rect
          x="85"
          y="80"
          width="30"
          height="60"
          rx="5"
          fill="#0F172A"
          opacity="0.1"
          stroke="#0F172A"
          strokeWidth="2"
        />
        {/* Rocket nose */}
        <path
          d="M 100 80 L 85 60 L 115 60 Z"
          fill="#0F172A"
          opacity="0.1"
          stroke="#0F172A"
          strokeWidth="2"
        />
        {/* Rocket fins */}
        <path
          d="M 85 140 L 70 160 L 85 150 Z"
          fill="#0F172A"
          opacity="0.1"
          stroke="#0F172A"
          strokeWidth="2"
        />
        <path
          d="M 115 140 L 130 160 L 115 150 Z"
          fill="#0F172A"
          opacity="0.1"
          stroke="#0F172A"
          strokeWidth="2"
        />
        {/* Window */}
        <circle
          cx="100"
          cy="110"
          r="6"
          fill="#FFFFFF"
          stroke="#0F172A"
          strokeWidth="1"
          opacity="0.8"
        />
        {/* Flame */}
        <path
          d="M 90 140 Q 100 150, 110 140"
          fill="#0F172A"
          opacity="0.2"
          stroke="#0F172A"
          strokeWidth="1.5"
        />
      </svg>
    ),
    lightbulb: (
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        className={className}
      >
        {/* Bulb */}
        <circle
          cx="100"
          cy="80"
          r="35"
          fill="#0F172A"
          opacity="0.1"
          stroke="#0F172A"
          strokeWidth="2"
        />
        {/* Base */}
        <rect
          x="90"
          y="115"
          width="20"
          height="25"
          rx="3"
          fill="#0F172A"
          opacity="0.1"
          stroke="#0F172A"
          strokeWidth="2"
        />
        {/* Filament */}
        <path
          d="M 75 80 Q 85 70, 100 80 Q 115 70, 125 80"
          fill="none"
          stroke="#0F172A"
          strokeWidth="2"
          opacity="0.3"
          strokeLinecap="round"
        />
        {/* Light rays */}
        <line
          x1="65"
          y1="80"
          x2="50"
          y2="80"
          stroke="#0F172A"
          strokeWidth="1.5"
          opacity="0.2"
          strokeLinecap="round"
        />
        <line
          x1="135"
          y1="80"
          x2="150"
          y2="80"
          stroke="#0F172A"
          strokeWidth="1.5"
          opacity="0.2"
          strokeLinecap="round"
        />
        <line
          x1="100"
          y1="45"
          x2="100"
          y2="30"
          stroke="#0F172A"
          strokeWidth="1.5"
          opacity="0.2"
          strokeLinecap="round"
        />
      </svg>
    ),
    teamwork: (
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        className={className}
      >
        {/* Person 1 */}
        <circle
          cx="60"
          cy="70"
          r="15"
          fill="#0F172A"
          opacity="0.1"
          stroke="#0F172A"
          strokeWidth="2"
        />
        <path
          d="M 45 85 Q 45 105, 55 115 Q 65 125, 60 120 Q 60 125, 70 115 Q 80 105, 75 85"
          fill="#0F172A"
          opacity="0.05"
          stroke="#0F172A"
          strokeWidth="2"
        />
        <rect
          x="55"
          y="125"
          width="10"
          height="30"
          rx="3"
          fill="#0F172A"
          opacity="0.1"
          stroke="#0F172A"
          strokeWidth="2"
        />
        {/* Person 2 */}
        <circle
          cx="100"
          cy="60"
          r="18"
          fill="#0F172A"
          opacity="0.1"
          stroke="#0F172A"
          strokeWidth="2"
        />
        <path
          d="M 82 78 Q 82 98, 92 108 Q 102 118, 100 113 Q 100 118, 110 108 Q 120 98, 118 78"
          fill="#0F172A"
          opacity="0.05"
          stroke="#0F172A"
          strokeWidth="2"
        />
        <rect
          x="95"
          y="118"
          width="10"
          height="35"
          rx="3"
          fill="#0F172A"
          opacity="0.1"
          stroke="#0F172A"
          strokeWidth="2"
        />
        {/* Person 3 */}
        <circle
          cx="140"
          cy="70"
          r="15"
          fill="#0F172A"
          opacity="0.1"
          stroke="#0F172A"
          strokeWidth="2"
        />
        <path
          d="M 125 85 Q 125 105, 135 115 Q 145 125, 140 120 Q 140 125, 150 115 Q 160 105, 155 85"
          fill="#0F172A"
          opacity="0.05"
          stroke="#0F172A"
          strokeWidth="2"
        />
        <rect
          x="135"
          y="125"
          width="10"
          height="30"
          rx="3"
          fill="#0F172A"
          opacity="0.1"
          stroke="#0F172A"
          strokeWidth="2"
        />
        {/* Connection lines */}
        <line
          x1="75"
          y1="90"
          x2="92"
          y2="78"
          stroke="#0F172A"
          strokeWidth="1"
          opacity="0.15"
          strokeDasharray="2,2"
        />
        <line
          x1="110"
          y1="78"
          x2="135"
          y2="90"
          stroke="#0F172A"
          strokeWidth="1"
          opacity="0.15"
          strokeDasharray="2,2"
        />
      </svg>
    ),
  };

  return illustrations[type] || illustrations['laptop-code'];
};

export default VectorIllustrations;
