import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TrendingUp } from 'lucide-react';

interface Chart3DProps {
  className?: string;
}

const Chart3D = ({ className = '' }: Chart3DProps) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      gsap.to(chartRef.current, {
        rotationX: 5,
        y: -8,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }
  }, []);

  return (
    <div
      ref={chartRef}
      className={`relative ${className}`}
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}
    >
      <div
        className="relative bg-slate-50 border-2 border-slate-200 rounded-lg p-4"
        style={{
          width: '180px',
          height: '140px',
          transform: 'rotateX(10deg) rotateY(-5deg)',
          transformStyle: 'preserve-3d',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
        }}
      >
        {/* Chart bars */}
        <div className="flex items-end justify-center gap-2 h-full">
          <div className="w-6 bg-slate-900 rounded-t" style={{ height: '40%' }}></div>
          <div className="w-6 bg-slate-700 rounded-t" style={{ height: '60%' }}></div>
          <div className="w-6 bg-slate-900 rounded-t" style={{ height: '80%' }}></div>
          <div className="w-6 bg-slate-700 rounded-t" style={{ height: '50%' }}></div>
          <div className="w-6 bg-slate-900 rounded-t" style={{ height: '90%' }}></div>
        </div>
        
        {/* Icon */}
        <div className="absolute top-2 right-2">
          <TrendingUp className="h-5 w-5 text-slate-900" />
        </div>
      </div>
    </div>
  );
};

export default Chart3D;

