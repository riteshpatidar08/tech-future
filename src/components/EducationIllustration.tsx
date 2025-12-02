import React from 'react';

interface EducationIllustrationProps {
  type?: 'student' | 'book' | 'laptop' | 'graduation' | 'lightbulb';
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

