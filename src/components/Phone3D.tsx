import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface Phone3DProps {
  className?: string;
}

const Phone3D = ({ className = '' }: Phone3DProps) => {
  const phoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (phoneRef.current) {
      gsap.to(phoneRef.current, {
        y: -8,
        rotationZ: 2,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }
  }, []);

  return (
    <div
      ref={phoneRef}
      className={`relative ${className}`}
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}
    >
      <div
        className="relative bg-slate-900 rounded-[2rem] border-4 border-slate-700"
        style={{
          width: '120px',
          height: '240px',
          transform: 'rotateY(-15deg) rotateX(5deg)',
          transformStyle: 'preserve-3d',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
        }}
      >
        {/* Screen */}
        <div className="absolute inset-2 bg-slate-50 rounded-[1.5rem] overflow-hidden">
          <div className="p-2 space-y-1 font-mono text-[8px]">
            <div className="flex gap-1">
              <span className="text-blue-600">const</span>
              <span className="text-slate-900">app</span>
              <span className="text-slate-600">=</span>
              <span className="text-green-600">'Syntaxim'</span>
            </div>
          </div>
        </div>

        {/* Home indicator */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-slate-700 rounded-full"></div>
      </div>
    </div>
  );
};

export default Phone3D;

