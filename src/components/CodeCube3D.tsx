import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Code, Database, Brain, BarChart3 } from 'lucide-react';

interface CodeCube3DProps {
  className?: string;
}

const CodeCube3D = ({ className = '' }: CodeCube3DProps) => {
  const cubeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cubeRef.current) {
      gsap.to(cubeRef.current, {
        rotationY: 360,
        rotationX: 15,
        duration: 20,
        repeat: -1,
        ease: 'none',
      });
    }
  }, []);

  return (
    <div
      ref={cubeRef}
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
        {/* Front face */}
        <div
          className="absolute bg-slate-900 border-2 border-slate-700 flex items-center justify-center"
          style={{
            width: '120px',
            height: '120px',
            transform: 'translateZ(60px)',
          }}
        >
          <Code className="h-12 w-12 text-white" />
        </div>

        {/* Back face */}
        <div
          className="absolute bg-slate-800 border-2 border-slate-700 flex items-center justify-center"
          style={{
            width: '120px',
            height: '120px',
            transform: 'translateZ(-60px) rotateY(180deg)',
          }}
        >
          <Database className="h-12 w-12 text-white" />
        </div>

        {/* Right face */}
        <div
          className="absolute bg-slate-800 border-2 border-slate-700 flex items-center justify-center"
          style={{
            width: '120px',
            height: '120px',
            transform: 'rotateY(90deg) translateZ(60px)',
          }}
        >
          <Brain className="h-12 w-12 text-white" />
        </div>

        {/* Left face */}
        <div
          className="absolute bg-slate-800 border-2 border-slate-700 flex items-center justify-center"
          style={{
            width: '120px',
            height: '120px',
            transform: 'rotateY(-90deg) translateZ(60px)',
          }}
        >
          <BarChart3 className="h-12 w-12 text-white" />
        </div>

        {/* Top face */}
        <div
          className="absolute bg-slate-900 border-2 border-slate-700 flex items-center justify-center"
          style={{
            width: '120px',
            height: '120px',
            transform: 'rotateX(90deg) translateZ(60px)',
          }}
        >
          <div className="text-white font-mono text-xs font-bold">3D</div>
        </div>

        {/* Bottom face */}
        <div
          className="absolute bg-slate-800 border-2 border-slate-700 flex items-center justify-center"
          style={{
            width: '120px',
            height: '120px',
            transform: 'rotateX(-90deg) translateZ(60px)',
          }}
        >
          <div className="text-white font-mono text-xs font-bold">AI</div>
        </div>
      </div>
    </div>
  );
};

export default CodeCube3D;
