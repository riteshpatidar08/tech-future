import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface Laptop3DProps {
  className?: string;
}

const Laptop3D = ({ className = '' }: Laptop3DProps) => {
  const laptopRef = useRef<HTMLDivElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (laptopRef.current) {
      // Floating animation
      gsap.to(laptopRef.current, {
        y: -10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // Subtle rotation
      gsap.to(laptopRef.current, {
        rotationY: 5,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }

    if (screenRef.current) {
      // Screen glow effect
      gsap.to(screenRef.current, {
        opacity: 0.8,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }
  }, []);

  return (
    <div
      ref={laptopRef}
      className={`relative ${className}`}
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Laptop Base */}
      <div
        className="relative"
        style={{
          transform: 'rotateX(15deg) rotateY(-5deg)',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Screen */}
        <div
          ref={screenRef}
          className="relative bg-slate-900 rounded-t-lg border-2 border-slate-700"
          style={{
            width: '280px',
            height: '180px',
            transform: 'rotateX(-25deg)',
            transformOrigin: 'bottom',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
          }}
        >
          {/* Screen Content */}
          <div className="absolute inset-2 bg-slate-50 rounded overflow-hidden">
            {/* Code lines */}
            <div className="p-3 space-y-2 font-mono text-xs">
              <div className="flex gap-2">
                <span className="text-slate-400">1</span>
                <span className="text-blue-600">const</span>
                <span className="text-slate-900">syntaxim</span>
                <span className="text-slate-600">=</span>
                <span className="text-green-600">'Success'</span>
              </div>
              <div className="flex gap-2">
                <span className="text-slate-400">2</span>
                <span className="text-purple-600">function</span>
                <span className="text-slate-900">learnTech</span>
                <span className="text-slate-600">()</span>
              </div>
              <div className="flex gap-2 pl-4">
                <span className="text-slate-400">3</span>
                <span className="text-slate-600">return</span>
                <span className="text-slate-900">syntaxim</span>
              </div>
            </div>
          </div>
          {/* Screen glow */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-transparent rounded-t-lg"
            style={{ opacity: 0.3 }}
          ></div>
        </div>

        {/* Keyboard Base */}
        <div
          className="relative bg-slate-800 rounded-b-lg border-2 border-slate-700"
          style={{
            width: '300px',
            height: '20px',
            marginTop: '-2px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
          }}
        >
          {/* Trackpad */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-slate-700 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default Laptop3D;

