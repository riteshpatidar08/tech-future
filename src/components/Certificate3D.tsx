import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Award } from 'lucide-react';

interface Certificate3DProps {
  className?: string;
}

const Certificate3D = ({ className = '' }: Certificate3DProps) => {
  const certRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (certRef.current) {
      gsap.to(certRef.current, {
        rotationZ: 3,
        y: -10,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }
  }, []);

  return (
    <div
      ref={certRef}
      className={`relative ${className}`}
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}
    >
      <div
        className="relative bg-gradient-to-br from-slate-50 to-slate-100 border-4 border-slate-900 rounded-lg"
        style={{
          width: '200px',
          height: '150px',
          transform: 'rotateY(-10deg) rotateX(5deg)',
          transformStyle: 'preserve-3d',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)',
        }}
      >
        {/* Seal/Badge */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
          <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center">
            <Award className="h-8 w-8 text-white" />
          </div>
        </div>
        
        {/* Text */}
        <div className="absolute bottom-6 left-0 right-0 text-center">
          <div className="text-slate-900 font-bold text-sm mb-1">CERTIFICATE</div>
          <div className="text-slate-600 text-xs">of Completion</div>
        </div>

        {/* Decorative corners */}
        <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-slate-900"></div>
        <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-slate-900"></div>
        <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-slate-900"></div>
        <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-slate-900"></div>
      </div>
    </div>
  );
};

export default Certificate3D;

