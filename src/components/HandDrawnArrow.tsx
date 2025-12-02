import React from 'react';

interface HandDrawnArrowProps {
  direction?: 'up' | 'down' | 'left' | 'right' | 'diagonal';
  className?: string;
  color?: string;
}

const HandDrawnArrow: React.FC<HandDrawnArrowProps> = ({ 
  direction = 'right', 
  className = '',
  color = '#3B82F6'
}) => {
  const getPath = () => {
    switch (direction) {
      case 'right':
        return (
          <path
            d="M 10 50 Q 30 45, 50 50 T 80 50"
            stroke={color}
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
          />
        );
      case 'down':
        return (
          <path
            d="M 50 10 Q 45 30, 50 50 T 50 80"
            stroke={color}
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
          />
        );
      case 'up':
        return (
          <path
            d="M 50 80 Q 45 60, 50 40 T 50 10"
            stroke={color}
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
          />
        );
      case 'left':
        return (
          <path
            d="M 80 50 Q 60 45, 40 50 T 10 50"
            stroke={color}
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
          />
        );
      case 'diagonal':
        return (
          <path
            d="M 20 80 Q 40 60, 60 40 T 80 20"
            stroke={color}
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
          />
        );
      default:
        return null;
    }
  };

  const getArrowHead = () => {
    const size = 8;
    switch (direction) {
      case 'right':
        return (
          <polygon
            points={`${80},${50} ${70},${45} ${70},${55}`}
            fill={color}
            style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
          />
        );
      case 'down':
        return (
          <polygon
            points={`${50},${80} ${45},${70} ${55},${70}`}
            fill={color}
            style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
          />
        );
      case 'up':
        return (
          <polygon
            points={`${50},${10} ${45},${20} ${55},${20}`}
            fill={color}
            style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
          />
        );
      case 'left':
        return (
          <polygon
            points={`${10},${50} ${20},${45} ${20},${55}`}
            fill={color}
            style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
          />
        );
      case 'diagonal':
        return (
          <polygon
            points={`${80},${20} ${72},${28} ${76},${32}`}
            fill={color}
            style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      className={className}
      style={{ 
        filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.15))',
        transform: 'rotate(-2deg)'
      }}
    >
      {getPath()}
      {getArrowHead()}
    </svg>
  );
};

export default HandDrawnArrow;

