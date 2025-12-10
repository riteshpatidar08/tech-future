import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface Tablet3DProps {
  className?: string;
}

const Tablet3D = ({ className = '' }: Tablet3DProps) => {
  const tabletRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tabletRef.current) {
      gsap.to(tabletRef.current, {
        y: -12,
        rotationZ: -3,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }
  }, []);

  return (
    <div
      ref={tabletRef}
      className={`relative ${className}`}
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}
    >
      <div
        className="relative bg-slate-900 rounded-xl border-4 border-slate-700"
        style={{
          width: '180px',
          height: '240px',
          transform: 'rotateY(20deg) rotateX(-5deg)',
          transformStyle: 'preserve-3d',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
        }}
      >
        {/* Screen */}
        <div className="absolute inset-2 bg-slate-50 rounded-lg overflow-hidden">
          <div className="p-3 space-y-1.5 font-mono text-[10px]">
            <div className="flex gap-1">
              <span className="text-purple-600">function</span>
              <span className="text-slate-900">learn</span>
              <span className="text-slate-600">()</span>
            </div>
            <div className="flex gap-1 pl-3">
              <span className="text-slate-600">return</span>
              <span className="text-slate-900">'Success'</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tablet3D;

