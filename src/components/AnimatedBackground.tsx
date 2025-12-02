
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const AnimatedBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Subtle gradient orb animations
    gsap.to('.gradient-orb-1', {
      x: 150,
      y: 80,
      rotation: 360,
      scale: 1.2,
      duration: 20,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    gsap.to('.gradient-orb-2', {
      x: -120,
      y: -60,
      rotation: -360,
      scale: 0.8,
      duration: 15,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    gsap.to('.gradient-orb-3', {
      x: 100,
      y: -120,
      rotation: 180,
      scale: 1.1,
      duration: 25,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 -z-10 overflow-hidden bg-white">
      {/* Clean white background with logo color gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/15 to-slate-50/5"></div>
      
      {/* Python colors (Blue #3776AB, Yellow #FFDE57) */}
      <div className="gradient-orb-1 absolute top-1/6 left-1/5 w-96 h-96 rounded-full blur-3xl" 
           style={{ background: 'radial-gradient(circle, rgba(55,118,171,0.08) 0%, rgba(255,222,87,0.05) 100%)' }}></div>
      
      {/* React colors (Teal #00D4AA, Cyan #61DAFB) */}
      <div className="gradient-orb-2 absolute top-2/3 right-1/5 w-80 h-80 rounded-full blur-3xl"
           style={{ background: 'radial-gradient(circle, rgba(0,212,170,0.08) 0%, rgba(97,218,251,0.05) 100%)' }}></div>
      
      {/* Java colors (Orange #F89820, #ED8B00) */}
      <div className="gradient-orb-3 absolute top-1/2 left-2/3 w-72 h-72 rounded-full blur-3xl"
           style={{ background: 'radial-gradient(circle, rgba(248,152,32,0.06) 0%, rgba(237,139,0,0.04) 100%)' }}></div>
      
      {/* Data Science colors (Purple #7F6DFF, Red #FF6F61, Yellow #FFB300) */}
      <div className="absolute top-1/4 right-1/3 w-64 h-64 rounded-full blur-3xl"
           style={{ background: 'radial-gradient(circle, rgba(127,109,255,0.06) 0%, rgba(255,111,97,0.04) 50%, rgba(255,179,0,0.03) 100%)' }}></div>
      
      {/* Docker colors (Cyan #0DB7ED, Blue #2496ED) */}
      <div className="absolute bottom-1/4 left-1/3 w-56 h-56 rounded-full blur-3xl"
           style={{ background: 'radial-gradient(circle, rgba(13,183,237,0.06) 0%, rgba(36,150,237,0.04) 100%)' }}></div>
    </div>
  );
};

export default AnimatedBackground;
