import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { GraduationCap } from 'lucide-react';

interface GraduationCap3DProps {
  className?: string;
}

const GraduationCap3D = ({ className = '' }: GraduationCap3DProps) => {
  const capRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (capRef.current) {
      gsap.to(capRef.current, {
        rotationY: 360,
        y: -10,
        duration: 8,
        repeat: -1,
        ease: 'none',
      });
    }
  }, []);

  return (
    <div
      ref={capRef}
      className={`relative ${className}`}
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}
    >
      <div
        className="relative"
        style={{
          transform: 'rotateX(15deg)',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Cap base */}
        <div
          className="relative bg-slate-900 rounded-t-full"
          style={{
            width: '120px',
            height: '40px',
            transform: 'translateZ(20px)',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <GraduationCap className="h-8 w-8 text-white" />
          </div>
        </div>
        
        {/* Tassel */}
        <div
          className="absolute top-0 right-4 w-1 h-16 bg-slate-700"
          style={{
            transform: 'translateZ(25px)',
          }}
        >
          <div className="absolute bottom-0 w-3 h-3 bg-slate-600 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default GraduationCap3D;

