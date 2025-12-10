import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { BookOpen } from 'lucide-react';

interface Book3DProps {
  className?: string;
}

const Book3D = ({ className = '' }: Book3DProps) => {
  const bookRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bookRef.current) {
      gsap.to(bookRef.current, {
        rotationY: 5,
        y: -8,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }
  }, []);

  return (
    <div
      ref={bookRef}
      className={`relative ${className}`}
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}
    >
      <div
        className="relative"
        style={{
          transform: 'rotateY(-15deg)',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Book cover */}
        <div
          className="relative bg-slate-900 border-2 border-slate-700 rounded"
          style={{
            width: '140px',
            height: '180px',
            transform: 'translateZ(10px)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
          }}
        >
          <div className="absolute inset-4 flex items-center justify-center">
            <BookOpen className="h-16 w-16 text-white" />
          </div>
          {/* Pages edge */}
          <div
            className="absolute left-0 top-0 bottom-0 w-2 bg-slate-700"
            style={{
              transform: 'translateX(-2px)',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Book3D;

