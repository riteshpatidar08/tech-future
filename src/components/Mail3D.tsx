import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Mail } from 'lucide-react';

interface Mail3DProps {
  className?: string;
}

const Mail3D = ({ className = '' }: Mail3DProps) => {
  const mailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mailRef.current) {
      gsap.to(mailRef.current, {
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
      ref={mailRef}
      className={`relative ${className}`}
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}
    >
      <div
        className="relative bg-slate-900 rounded-lg border-2 border-slate-700"
        style={{
          width: '140px',
          height: '100px',
          transform: 'rotateY(-10deg) rotateX(5deg)',
          transformStyle: 'preserve-3d',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)',
        }}
      >
        {/* Mail body */}
        <div className="absolute inset-2 bg-slate-50 rounded flex items-center justify-center">
          <Mail className="h-12 w-12 text-slate-900" />
        </div>
        
        {/* Mail flap */}
        <div
          className="absolute top-2 left-2 right-2 h-8 bg-slate-800 rounded-t border-2 border-slate-700"
          style={{
            transform: 'rotateX(-15deg)',
            transformOrigin: 'bottom',
          }}
        ></div>
      </div>
    </div>
  );
};

export default Mail3D;

