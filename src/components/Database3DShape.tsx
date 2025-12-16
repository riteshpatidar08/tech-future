import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Database } from 'lucide-react';

interface Database3DShapeProps {
  className?: string;
}

const Database3DShape = ({ className = '' }: Database3DShapeProps) => {
  const dbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (dbRef.current) {
      gsap.to(dbRef.current, {
        rotationY: 360,
        duration: 15,
        repeat: -1,
        ease: 'none',
      });
    }
  }, []);

  return (
    <div
      ref={dbRef}
      className={`relative ${className}`}
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
        width: '120px',
        height: '120px',
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Cylinder body */}
        <div
          className="absolute bg-slate-900 border-2 border-slate-700 rounded-full flex items-center justify-center"
          style={{
            width: '120px',
            height: '80px',
            transform: 'translateZ(0)',
            top: '20px',
          }}
        >
          <Database className="h-12 w-12 text-white" />
        </div>
        
        {/* Top ellipse */}
        <div
          className="absolute bg-slate-800 border-2 border-slate-700 rounded-full"
          style={{
            width: '120px',
            height: '30px',
            transform: 'rotateX(90deg) translateZ(40px)',
            top: '20px',
          }}
        ></div>
        
        {/* Bottom ellipse */}
        <div
          className="absolute bg-slate-800 border-2 border-slate-700 rounded-full"
          style={{
            width: '120px',
            height: '30px',
            transform: 'rotateX(-90deg) translateZ(40px)',
            bottom: '20px',
          }}
        ></div>
      </div>
    </div>
  );
};

export default Database3DShape;

