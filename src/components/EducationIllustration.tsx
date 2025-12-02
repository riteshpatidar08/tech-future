import React from 'react';

interface EducationIllustrationProps {
  type?: 'student' | 'book' | 'laptop' | 'graduation' | 'lightbulb' | 'certificate' | 'coding' | 'teamwork' | 'online-learning' | 'rocket' | 'trophy' | 'brain';
  className?: string;
  size?: number;
}

const EducationIllustration: React.FC<EducationIllustrationProps> = ({ 
  type = 'student',
  className = '',
  size = 200
}) => {
  const illustrations = {
    student: (
      <svg width={size} height={size} viewBox="0 0 200 200" className={className}>
        {/* Student with book - hand-drawn style */}
        <circle cx="100" cy="80" r="25" fill="#FFDE57" opacity="0.3" stroke="#3776AB" strokeWidth="2"/>
        <path d="M 75 100 Q 75 120, 85 130 Q 95 140, 100 135 Q 105 140, 115 130 Q 125 120, 125 100" 
              fill="#61DAFB" opacity="0.2" stroke="#00D4AA" strokeWidth="2"/>
        <rect x="90" y="140" width="20" height="40" rx="5" fill="#7F6DFF" opacity="0.2" stroke="#7F6DFF" strokeWidth="2"/>
        <rect x="70" y="100" width="60" height="40" rx="5" fill="#F89820" opacity="0.2" stroke="#F89820" strokeWidth="2"/>
        <line x1="85" y1="110" x2="115" y2="110" stroke="#0F172A" strokeWidth="2" strokeLinecap="round"/>
        <line x1="85" y1="120" x2="115" y2="120" stroke="#0F172A" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    certificate: (
      <svg width={size} height={size} viewBox="0 0 200 200" className={className}>
        {/* Certificate/Award - professional vector style */}
        <rect x="40" y="50" width="120" height="100" rx="3" fill="#FFDE57" opacity="0.15" stroke="#F89820" strokeWidth="3"/>
        <rect x="45" y="55" width="110" height="90" rx="2" fill="#FFFFFF" opacity="0.8" stroke="#F89820" strokeWidth="2"/>
        <circle cx="100" cy="75" r="12" fill="#7F6DFF" opacity="0.3" stroke="#7F6DFF" strokeWidth="2"/>
        <path d="M 95 75 L 98 78 L 105 70" stroke="#7F6DFF" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <line x1="60" y1="95" x2="140" y2="95" stroke="#3776AB" strokeWidth="2" strokeLinecap="round"/>
        <line x1="60" y1="110" x2="140" y2="110" stroke="#3776AB" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="60" y1="125" x2="140" y2="125" stroke="#3776AB" strokeWidth="1.5" strokeLinecap="round"/>
        <rect x="50" y="40" width="100" height="15" rx="2" fill="#00D4AA" opacity="0.2" stroke="#00D4AA" strokeWidth="2"/>
      </svg>
    ),
    coding: (
      <svg width={size} height={size} viewBox="0 0 200 200" className={className}>
        {/* Coding/Programming - code brackets and symbols */}
        <rect x="50" y="60" width="100" height="80" rx="5" fill="#61DAFB" opacity="0.15" stroke="#00D4AA" strokeWidth="2"/>
        <path d="M 60 80 L 70 90 L 60 100" stroke="#3776AB" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M 140 80 L 130 90 L 140 100" stroke="#3776AB" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="100" cy="90" r="8" fill="#7F6DFF" opacity="0.4"/>
        <line x1="85" y1="120" x2="115" y2="120" stroke="#F89820" strokeWidth="2" strokeLinecap="round"/>
        <line x1="90" y1="130" x2="110" y2="130" stroke="#F89820" strokeWidth="2" strokeLinecap="round"/>
        <rect x="70" y="50" width="60" height="8" rx="2" fill="#FFDE57" opacity="0.3" stroke="#F89820" strokeWidth="1"/>
      </svg>
    ),
    teamwork: (
      <svg width={size} height={size} viewBox="0 0 200 200" className={className}>
        {/* Teamwork/Collaboration - multiple people */}
        <circle cx="70" cy="80" r="20" fill="#3776AB" opacity="0.2" stroke="#3776AB" strokeWidth="2"/>
        <circle cx="130" cy="80" r="20" fill="#00D4AA" opacity="0.2" stroke="#00D4AA" strokeWidth="2"/>
        <path d="M 50 100 Q 50 120, 60 130 Q 70 140, 70 135 Q 70 140, 80 130 Q 90 120, 90 100" 
              fill="#61DAFB" opacity="0.15" stroke="#00D4AA" strokeWidth="2"/>
        <path d="M 110 100 Q 110 120, 120 130 Q 130 140, 130 135 Q 130 140, 140 130 Q 150 120, 150 100" 
              fill="#7F6DFF" opacity="0.15" stroke="#7F6DFF" strokeWidth="2"/>
        <line x1="70" y1="140" x2="70" y2="170" stroke="#3776AB" strokeWidth="2"/>
        <line x1="130" y1="140" x2="130" y2="170" stroke="#00D4AA" strokeWidth="2"/>
        <path d="M 60 100 Q 100 110, 140 100" stroke="#F89820" strokeWidth="2" fill="none" strokeLinecap="round"/>
      </svg>
    ),
    'online-learning': (
      <svg width={size} height={size} viewBox="0 0 200 200" className={className}>
        {/* Online Learning - screen with play button */}
        <rect x="50" y="60" width="100" height="70" rx="5" fill="#61DAFB" opacity="0.15" stroke="#00D4AA" strokeWidth="2"/>
        <circle cx="100" cy="95" r="15" fill="#7F6DFF" opacity="0.3" stroke="#7F6DFF" strokeWidth="2"/>
        <path d="M 95 90 L 95 100 L 105 95 Z" fill="#FFFFFF" opacity="0.8"/>
        <rect x="40" y="130" width="120" height="8" rx="4" fill="#F89820" opacity="0.2" stroke="#F89820" strokeWidth="2"/>
        <circle cx="60" cy="150" r="5" fill="#3776AB" opacity="0.3"/>
        <circle cx="100" cy="150" r="5" fill="#00D4AA" opacity="0.3"/>
        <circle cx="140" cy="150" r="5" fill="#7F6DFF" opacity="0.3"/>
      </svg>
    ),
    rocket: (
      <svg width={size} height={size} viewBox="0 0 200 200" className={className}>
        {/* Rocket/Success - upward trajectory */}
        <path d="M 100 160 L 85 140 L 100 120 L 115 140 Z" fill="#F89820" opacity="0.3" stroke="#F89820" strokeWidth="2"/>
        <rect x="90" y="80" width="20" height="40" rx="10" fill="#3776AB" opacity="0.2" stroke="#3776AB" strokeWidth="2"/>
        <circle cx="100" cy="100" r="6" fill="#FFDE57" opacity="0.4"/>
        <path d="M 85 80 Q 85 60, 100 50 Q 115 60, 115 80" fill="#7F6DFF" opacity="0.2" stroke="#7F6DFF" strokeWidth="2"/>
        <path d="M 95 50 L 95 30 L 105 30 L 105 50" stroke="#00D4AA" strokeWidth="2" fill="none"/>
        <circle cx="88" cy="110" r="3" fill="#FF6F61" opacity="0.5"/>
        <circle cx="112" cy="110" r="3" fill="#FF6F61" opacity="0.5"/>
      </svg>
    ),
    trophy: (
      <svg width={size} height={size} viewBox="0 0 200 200" className={className}>
        {/* Trophy/Award */}
        <path d="M 80 50 Q 80 40, 90 40 L 110 40 Q 120 40, 120 50 L 120 80 Q 120 90, 110 90 L 90 90 Q 80 90, 80 80 Z" 
              fill="#FFDE57" opacity="0.2" stroke="#F89820" strokeWidth="2"/>
        <circle cx="100" cy="65" r="8" fill="#7F6DFF" opacity="0.3" stroke="#7F6DFF" strokeWidth="2"/>
        <rect x="85" y="90" width="30" height="40" rx="5" fill="#00D4AA" opacity="0.15" stroke="#00D4AA" strokeWidth="2"/>
        <rect x="70" y="130" width="60" height="8" rx="4" fill="#3776AB" opacity="0.2" stroke="#3776AB" strokeWidth="2"/>
        <path d="M 60 50 Q 60 40, 70 40 L 80 50" stroke="#F89820" strokeWidth="2" fill="none"/>
        <path d="M 140 50 Q 140 40, 130 40 L 120 50" stroke="#F89820" strokeWidth="2" fill="none"/>
      </svg>
    ),
    brain: (
      <svg width={size} height={size} viewBox="0 0 200 200" className={className}>
        {/* Brain/Intelligence */}
        <path d="M 100 60 Q 120 50, 130 70 Q 140 90, 130 110 Q 120 130, 100 140 Q 80 130, 70 110 Q 60 90, 70 70 Q 80 50, 100 60" 
              fill="#7F6DFF" opacity="0.15" stroke="#7F6DFF" strokeWidth="2"/>
        <path d="M 90 80 Q 100 75, 110 80" stroke="#3776AB" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <path d="M 90 100 Q 100 95, 110 100" stroke="#3776AB" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <path d="M 90 120 Q 100 115, 110 120" stroke="#3776AB" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <circle cx="85" cy="90" r="3" fill="#00D4AA" opacity="0.5"/>
        <circle cx="115" cy="90" r="3" fill="#00D4AA" opacity="0.5"/>
        <circle cx="100" cy="110" r="4" fill="#F89820" opacity="0.4"/>
      </svg>
    ),
    book: (
      <svg width={size} height={size} viewBox="0 0 200 200" className={className}>
        <rect x="60" y="50" width="80" height="100" rx="5" fill="#FFDE57" opacity="0.2" stroke="#3776AB" strokeWidth="2"/>
        <line x1="100" y1="50" x2="100" y2="150" stroke="#3776AB" strokeWidth="2"/>
        <line x1="70" y1="80" x2="130" y2="80" stroke="#0F172A" strokeWidth="2" strokeLinecap="round"/>
        <line x1="70" y1="100" x2="130" y2="100" stroke="#0F172A" strokeWidth="2" strokeLinecap="round"/>
        <line x1="70" y1="120" x2="130" y2="120" stroke="#0F172A" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    laptop: (
      <svg width={size} height={size} viewBox="0 0 200 200" className={className}>
        <rect x="50" y="60" width="100" height="70" rx="5" fill="#61DAFB" opacity="0.2" stroke="#00D4AA" strokeWidth="2"/>
        <rect x="55" y="65" width="90" height="60" fill="#0DB7ED" opacity="0.1"/>
        <rect x="40" y="130" width="120" height="10" rx="5" fill="#2496ED" opacity="0.2" stroke="#0DB7ED" strokeWidth="2"/>
        <circle cx="100" cy="95" r="8" fill="#7F6DFF" opacity="0.3"/>
      </svg>
    ),
    graduation: (
      <svg width={size} height={size} viewBox="0 0 200 200" className={className}>
        <path d="M 50 100 Q 100 50, 150 100" fill="#7F6DFF" opacity="0.2" stroke="#7F6DFF" strokeWidth="2"/>
        <rect x="90" y="100" width="20" height="50" rx="5" fill="#F89820" opacity="0.2" stroke="#F89820" strokeWidth="2"/>
        <circle cx="100" cy="95" r="15" fill="#FFDE57" opacity="0.3" stroke="#3776AB" strokeWidth="2"/>
        <line x1="30" y1="100" x2="170" y2="100" stroke="#0F172A" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    lightbulb: (
      <svg width={size} height={size} viewBox="0 0 200 200" className={className}>
        <circle cx="100" cy="80" r="40" fill="#FFB300" opacity="0.2" stroke="#FF6F61" strokeWidth="2"/>
        <rect x="90" y="120" width="20" height="30" rx="3" fill="#7F6DFF" opacity="0.2" stroke="#7F6DFF" strokeWidth="2"/>
        <path d="M 60 80 Q 80 60, 100 80 Q 120 60, 140 80" fill="none" stroke="#0F172A" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  };

  return illustrations[type] || illustrations.student;
};

export default EducationIllustration;

