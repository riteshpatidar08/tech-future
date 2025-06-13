
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const AnimatedBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Enhanced particle system with blue theme
    const createParticle = () => {
      const particle = document.createElement('div');
      const size = Math.random() * 3 + 1;
      const colors = ['blue-400/40', 'cyan-400/30', 'indigo-400/35', 'sky-400/25', 'slate-400/30'];
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      particle.className = `absolute bg-${color} rounded-full`;
      particle.style.width = size + 'px';
      particle.style.height = size + 'px';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.filter = 'blur(0.5px)';
      container.appendChild(particle);

      // Enhanced particle animation
      gsap.to(particle, {
        y: -200 - Math.random() * 300,
        x: (Math.random() - 0.5) * 200,
        rotation: Math.random() * 360,
        scale: Math.random() * 2 + 0.5,
        opacity: 0,
        duration: Math.random() * 4 + 3,
        ease: 'power2.out',
        onComplete: () => {
          if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
          }
        }
      });
    };

    // Create shooting stars with blue theme
    const createShootingStar = () => {
      const star = document.createElement('div');
      star.className = 'absolute w-1 h-1 bg-gradient-to-r from-white to-transparent rounded-full';
      star.style.left = '0%';
      star.style.top = Math.random() * 50 + '%';
      star.style.boxShadow = '0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(59,130,246,0.6)';
      container.appendChild(star);

      gsap.to(star, {
        x: window.innerWidth + 100,
        y: Math.random() * 200 + 100,
        duration: 1.5,
        ease: 'power2.out',
        onComplete: () => {
          if (star.parentNode) {
            star.parentNode.removeChild(star);
          }
        }
      });
    };

    // Create floating orbs with blue theme
    const createFloatingOrb = () => {
      const orb = document.createElement('div');
      const size = Math.random() * 100 + 50;
      orb.className = 'absolute rounded-full opacity-20 blur-2xl';
      orb.style.width = size + 'px';
      orb.style.height = size + 'px';
      orb.style.background = 'linear-gradient(45deg, rgba(59,130,246,0.3), rgba(6,182,212,0.3))';
      orb.style.left = Math.random() * 100 + '%';
      orb.style.top = Math.random() * 100 + '%';
      container.appendChild(orb);

      gsap.to(orb, {
        y: (Math.random() - 0.5) * 300,
        x: (Math.random() - 0.5) * 300,
        scale: Math.random() + 0.5,
        duration: Math.random() * 10 + 10,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      // Remove orb after some time to prevent memory leaks
      setTimeout(() => {
        if (orb.parentNode) {
          orb.parentNode.removeChild(orb);
        }
      }, 30000);
    };

    // Enhanced intervals for more activity
    const particleInterval = setInterval(createParticle, 200);
    const shootingStarInterval = setInterval(createShootingStar, 3000);
    const orbInterval = setInterval(createFloatingOrb, 5000);

    // Enhanced gradient orb animations with more complex patterns
    gsap.to('.gradient-orb-1', {
      x: 150,
      y: 80,
      rotation: 360,
      scale: 1.2,
      duration: 12,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    gsap.to('.gradient-orb-2', {
      x: -120,
      y: -60,
      rotation: -360,
      scale: 0.8,
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    gsap.to('.gradient-orb-3', {
      x: 100,
      y: -120,
      rotation: 180,
      scale: 1.1,
      duration: 15,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    // Pulsing effect for orbs
    gsap.to('.gradient-orb-1, .gradient-orb-2, .gradient-orb-3', {
      opacity: 0.8,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: 0.5
    });

    return () => {
      clearInterval(particleInterval);
      clearInterval(shootingStarInterval);
      clearInterval(orbInterval);
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 -z-10 overflow-hidden">
      {/* Enhanced Gradient Background with bluish and dark black theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-900/30 via-slate-900/20 to-black"></div>
      
      {/* Multiple layered gradient backgrounds for depth */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-900/10 to-cyan-900/20"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-indigo-900/10 via-transparent to-blue-900/15"></div>
      
      {/* Enhanced Animated Gradient Orbs with blue theme */}
      <div className="gradient-orb-1 absolute top-1/6 left-1/5 w-96 h-96 bg-gradient-to-br from-blue-600/30 to-cyan-600/30 rounded-full blur-3xl"></div>
      <div className="gradient-orb-2 absolute top-2/3 right-1/5 w-80 h-80 bg-gradient-to-br from-indigo-600/25 to-blue-600/25 rounded-full blur-3xl"></div>
      <div className="gradient-orb-3 absolute top-1/2 left-2/3 w-72 h-72 bg-gradient-to-br from-cyan-600/20 to-sky-600/20 rounded-full blur-3xl"></div>
      
      {/* Additional smaller orbs for more dynamic feel */}
      <div className="absolute top-1/4 right-1/3 w-48 h-48 bg-gradient-to-br from-slate-600/15 to-blue-600/15 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-gradient-to-br from-cyan-600/15 to-indigo-600/15 rounded-full blur-2xl animate-pulse"></div>
      
      {/* Enhanced Grid Pattern with blue theme */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.08)_1px,transparent_1px)] bg-[size:60px_60px] animate-pulse"></div>
      
      {/* Secondary grid for depth */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:120px_120px]"></div>
      
      {/* Enhanced Noise Texture */}
      <div 
        className="absolute inset-0 opacity-[0.02] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='27' cy='27' r='1'/%3E%3Ccircle cx='47' cy='47' r='1'/%3E%3Ccircle cx='17' cy='37' r='0.5'/%3E%3Ccircle cx='37' cy='17' r='0.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>

      {/* Radial gradient overlay for vignette effect with dark black */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/50"></div>
    </div>
  );
};

export default AnimatedBackground;
