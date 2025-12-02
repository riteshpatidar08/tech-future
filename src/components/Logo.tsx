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
      {/* Background (transparent) */}
      <rect width="560" height="200" fill="none"/>

      {/* 1. Python snake – behind C */}
      <g opacity="0.22">
        <circle cx="100" cy="100" r="70" fill="#3776AB"/>
        <circle cx="150" cy="100" r="70" fill="#FFDE57"/>
        <path d="M110 70 Q150 100 110 130" stroke="#3776AB" strokeWidth="30" fill="none"/>
      </g>

      {/* 2. React atom – behind o */}
      <g opacity="0.20">
        <circle cx="240" cy="100" r="75" fill="#00D4AA"/>
        <circle cx="240" cy="100" r="20" fill="#61DAFB"/>
        <circle cx="240" cy="100" r="130" fill="none" stroke="#00D4AA" strokeWidth="18" opacity="0.4"/>
      </g>

      {/* 3. Java coffee cup – behind d */}
      <g opacity="0.18">
        <path d="M340 60 C380 30, 430 70, 410 130" fill="none" stroke="#F89820" strokeWidth="60"/>
        <path d="M350 80 C380 60, 410 90, 395 130" fill="none" stroke="#ED8B00" strokeWidth="40"/>
      </g>

      {/* 4. Data Science bar chart – behind e */}
      <g opacity="0.20">
        <rect x="430" y="50" width="35" height="100" fill="#7F6DFF"/>
        <rect x="475" y="70" width="35" height="80" fill="#FF6F61"/>
        <rect x="520" y="40" width="35" height="110" fill="#FFB300"/>
      </g>

      {/* 5. Docker whale / DevOps – behind x */}
      <g opacity="0.20">
        <path d="M600 40 C640 10, 700 60, 680 130" fill="none" stroke="#0DB7ED" strokeWidth="70"/>
        <rect x="590" y="80" width="80" height="50" rx="10" fill="#2496ED"/>
      </g>

      {/* Main cursive "Codex" in front – bold, beautiful, readable */}
      <text 
        x="280" 
        y="135" 
        fontFamily="'Dancing Script', 'Pacifico', 'Brush Script MT', cursive"
        fontSize="150" 
        fontWeight="bold"
        letterSpacing="4"
        textAnchor="middle"
        fill="#0F172A"
        stroke="#0F172A"
        strokeWidth="3"
      >
        Codex
      </text>
    </svg>
  );
};

export default Logo;

