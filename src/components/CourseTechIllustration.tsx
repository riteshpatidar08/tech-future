import React from 'react';

interface CourseTechIllustrationProps {
  courseId: string;
  size?: number;
  className?: string;
}

const CourseTechIllustration: React.FC<CourseTechIllustrationProps> = ({ 
  courseId, 
  size = 200,
  className = ''
}) => {
  const getCourseTechs = (id: string) => {
    switch(id) {
      case 'fullstack':
        return {
          techs: [
            { name: 'React', color: '#61DAFB', shape: 'hexagon' },
            { name: 'Node', color: '#339933', shape: 'circle' },
            { name: 'MongoDB', color: '#47A248', shape: 'leaf' },
            { name: 'PostgreSQL', color: '#336791', shape: 'elephant' },
            { name: 'GraphQL', color: '#E10098', shape: 'diamond' },
            { name: 'Docker', color: '#0DB7ED', shape: 'whale' }
          ],
          primaryColor: '#00D4AA'
        };
      case 'python-ds':
        return {
          techs: [
            { name: 'Python', color: '#3776AB', shape: 'snake' },
            { name: 'Pandas', color: '#150458', shape: 'panda' },
            { name: 'NumPy', color: '#013243', shape: 'array' },
            { name: 'Jupyter', color: '#F37626', shape: 'notebook' },
            { name: 'Matplotlib', color: '#11557C', shape: 'chart' },
            { name: 'Seaborn', color: '#3776AB', shape: 'seaborn' }
          ],
          primaryColor: '#3776AB'
        };
      case 'machine-learning':
        return {
          techs: [
            { name: 'TensorFlow', color: '#FF6F00', shape: 'tensor' },
            { name: 'PyTorch', color: '#EE4C2C', shape: 'torch' },
            { name: 'Scikit', color: '#F7931E', shape: 'scikit' },
            { name: 'Keras', color: '#D00000', shape: 'keras' },
            { name: 'OpenCV', color: '#5C3EE8', shape: 'eye' },
            { name: 'NLTK', color: '#3776AB', shape: 'nlp' }
          ],
          primaryColor: '#7F6DFF'
        };
      case 'data-analytics':
        return {
          techs: [
            { name: 'Excel', color: '#217346', shape: 'excel' },
            { name: 'Power BI', color: '#F2C811', shape: 'powerbi' },
            { name: 'Tableau', color: '#E97627', shape: 'tableau' },
            { name: 'SQL', color: '#336791', shape: 'database' },
            { name: 'Python', color: '#3776AB', shape: 'python' },
            { name: 'R', color: '#276DC3', shape: 'r' }
          ],
          primaryColor: '#FF6F61'
        };
      default:
        return {
          techs: [
            { name: 'Tech', color: '#3B82F6', shape: 'default' }
          ],
          primaryColor: '#3B82F6'
        };
    }
  };

  const renderShape = (shape: string, x: number, y: number, size: number, color: string) => {
    const iconSize = size * 0.12;
    switch(shape) {
      case 'hexagon':
        return <polygon points={`${x},${y-iconSize} ${x+iconSize*0.866},${y-iconSize*0.5} ${x+iconSize*0.866},${y+iconSize*0.5} ${x},${y+iconSize} ${x-iconSize*0.866},${y+iconSize*0.5} ${x-iconSize*0.866},${y-iconSize*0.5}`} fill={color} opacity="0.3" stroke={color} strokeWidth="2"/>;
      case 'circle':
        return <circle cx={x} cy={y} r={iconSize*0.6} fill={color} opacity="0.3" stroke={color} strokeWidth="2"/>;
      case 'leaf':
        return <ellipse cx={x} cy={y} rx={iconSize*0.7} ry={iconSize*0.4} fill={color} opacity="0.3" stroke={color} strokeWidth="2" transform={`rotate(45 ${x} ${y})`}/>;
      case 'elephant':
        return <ellipse cx={x} cy={y} rx={iconSize*0.8} ry={iconSize*0.5} fill={color} opacity="0.3" stroke={color} strokeWidth="2"/>;
      case 'diamond':
        return <polygon points={`${x},${y-iconSize} ${x+iconSize},${y} ${x},${y+iconSize} ${x-iconSize},${y}`} fill={color} opacity="0.3" stroke={color} strokeWidth="2"/>;
      case 'whale':
        return <path d={`M ${x-iconSize} ${y} Q ${x-iconSize*0.5} ${y-iconSize*0.5} ${x} ${y} Q ${x+iconSize*0.5} ${y+iconSize*0.5} ${x+iconSize} ${y}`} fill={color} opacity="0.3" stroke={color} strokeWidth="2"/>;
      case 'snake':
        return <path d={`M ${x-iconSize} ${y} Q ${x-iconSize*0.3} ${y-iconSize*0.5} ${x} ${y} Q ${x+iconSize*0.3} ${y+iconSize*0.5} ${x+iconSize} ${y}`} fill={color} opacity="0.3" stroke={color} strokeWidth="2"/>;
      case 'panda':
        return <circle cx={x} cy={y} r={iconSize*0.6} fill={color} opacity="0.3" stroke={color} strokeWidth="2"/>;
      case 'array':
        return <rect x={x-iconSize*0.5} y={y-iconSize*0.5} width={iconSize} height={iconSize} fill={color} opacity="0.3" stroke={color} strokeWidth="2"/>;
      case 'notebook':
        return <rect x={x-iconSize*0.6} y={y-iconSize*0.7} width={iconSize*1.2} height={iconSize*1.4} rx="2" fill={color} opacity="0.3" stroke={color} strokeWidth="2"/>;
      case 'chart':
        return <path d={`M ${x-iconSize} ${y+iconSize*0.3} L ${x-iconSize*0.3} ${y-iconSize*0.3} L ${x} ${y+iconSize*0.1} L ${x+iconSize*0.3} ${y-iconSize*0.5} L ${x+iconSize} ${y}`} fill={color} opacity="0.3" stroke={color} strokeWidth="2"/>;
      case 'seaborn':
        return <path d={`M ${x-iconSize} ${y} L ${x} ${y-iconSize*0.5} L ${x+iconSize} ${y}`} fill={color} opacity="0.3" stroke={color} strokeWidth="2"/>;
      case 'tensor':
        return <rect x={x-iconSize*0.5} y={y-iconSize*0.5} width={iconSize} height={iconSize} fill={color} opacity="0.3" stroke={color} strokeWidth="2" transform={`rotate(45 ${x} ${y})`}/>;
      case 'torch':
        return <path d={`M ${x} ${y-iconSize} L ${x+iconSize*0.3} ${y} L ${x} ${y+iconSize} L ${x-iconSize*0.3} ${y} Z`} fill={color} opacity="0.3" stroke={color} strokeWidth="2"/>;
      case 'scikit':
        return <circle cx={x} cy={y} r={iconSize*0.6} fill={color} opacity="0.3" stroke={color} strokeWidth="2"/>;
      case 'keras':
        return <rect x={x-iconSize*0.5} y={y-iconSize*0.5} width={iconSize} height={iconSize} fill={color} opacity="0.3" stroke={color} strokeWidth="2"/>;
      case 'eye':
        return <circle cx={x} cy={y} r={iconSize*0.7} fill={color} opacity="0.3" stroke={color} strokeWidth="2"/>;
      case 'nlp':
        return <path d={`M ${x-iconSize} ${y} Q ${x} ${y-iconSize*0.5} ${x+iconSize} ${y}`} fill={color} opacity="0.3" stroke={color} strokeWidth="2"/>;
      case 'excel':
        return <rect x={x-iconSize*0.5} y={y-iconSize*0.5} width={iconSize} height={iconSize} fill={color} opacity="0.3" stroke={color} strokeWidth="2"/>;
      case 'powerbi':
        return <circle cx={x} cy={y} r={iconSize*0.6} fill={color} opacity="0.3" stroke={color} strokeWidth="2"/>;
      case 'tableau':
        return <rect x={x-iconSize*0.5} y={y-iconSize*0.5} width={iconSize} height={iconSize} fill={color} opacity="0.3" stroke={color} strokeWidth="2"/>;
      case 'database':
        return <ellipse cx={x} cy={y} rx={iconSize*0.7} ry={iconSize*0.4} fill={color} opacity="0.3" stroke={color} strokeWidth="2"/>;
      case 'python':
        return <circle cx={x} cy={y} r={iconSize*0.6} fill={color} opacity="0.3" stroke={color} strokeWidth="2"/>;
      case 'r':
        return <rect x={x-iconSize*0.5} y={y-iconSize*0.5} width={iconSize} height={iconSize} fill={color} opacity="0.3" stroke={color} strokeWidth="2"/>;
      default:
        return <circle cx={x} cy={y} r={iconSize*0.6} fill={color} opacity="0.3" stroke={color} strokeWidth="2"/>;
    }
  };

  const { techs, primaryColor } = getCourseTechs(courseId);
  const centerX = size / 2;
  const centerY = size / 2;
  const radius = size * 0.3;

  return (
    <svg 
      width={size} 
      height={size} 
      viewBox={`0 0 ${size} ${size}`} 
      className={className}
    >
      {/* Background circle with gradient */}
      <defs>
        <radialGradient id={`gradient-${courseId}`} cx="50%" cy="50%">
          <stop offset="0%" stopColor={primaryColor} stopOpacity="0.15" />
          <stop offset="100%" stopColor={primaryColor} stopOpacity="0.05" />
        </radialGradient>
      </defs>
      <circle 
        cx={centerX} 
        cy={centerY} 
        r={radius + 10} 
        fill={`url(#gradient-${courseId})`}
      />
      
      {/* Technology icons arranged in a circle */}
      {techs.map((tech, index) => {
        const angle = (index * 2 * Math.PI) / techs.length - Math.PI / 2;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        const iconSize = size * 0.12;
        
        return (
          <g key={tech.name}>
            {/* Icon background circle */}
            <circle 
              cx={x} 
              cy={y} 
              r={iconSize * 0.7} 
              fill={tech.color}
              opacity="0.15"
              stroke={tech.color}
              strokeWidth="2"
            />
            {/* Technology shape/icon */}
            {renderShape(tech.shape, x, y, size, tech.color)}
            {/* Tech name label */}
            <text 
              x={x} 
              y={y + iconSize * 1.2} 
              fontSize={size * 0.07}
              textAnchor="middle"
              fill={tech.color}
              fontWeight="600"
              opacity="0.9"
            >
              {tech.name}
            </text>
          </g>
        );
      })}
      
      {/* Central connecting lines */}
      {techs.map((_, index) => {
        const angle1 = (index * 2 * Math.PI) / techs.length - Math.PI / 2;
        const angle2 = ((index + 1) * 2 * Math.PI) / techs.length - Math.PI / 2;
        const x1 = centerX + radius * 0.5 * Math.cos(angle1);
        const y1 = centerY + radius * 0.5 * Math.sin(angle1);
        const x2 = centerX + radius * 0.5 * Math.cos(angle2);
        const y2 = centerY + radius * 0.5 * Math.sin(angle2);
        
        return (
          <line
            key={`line-${index}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={primaryColor}
            strokeWidth="1"
            opacity="0.2"
            strokeDasharray="2,2"
          />
        );
      })}
    </svg>
  );
};

export default CourseTechIllustration;

