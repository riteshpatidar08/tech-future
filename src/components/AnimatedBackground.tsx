
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const AnimatedBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create floating particles
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'absolute w-1 h-1 bg-purple-400/30 rounded-full';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      container.appendChild(particle);

      // Animate particle
      gsap.to(particle, {
        y: -100,
        x: Math.random() * 100 - 50,
        opacity: 0,
        duration: Math.random() * 3 + 2,
        ease: 'none',
        onComplete: () => {
          if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
          }
        }
      });
    };

    // Create particles continuously
    const interval = setInterval(createParticle, 300);

    // Animate gradient orbs
    gsap.to('.gradient-orb-1', {
      x: 100,
      y: 50,
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    gsap.to('.gradient-orb-2', {
      x: -80,
      y: -30,
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    gsap.to('.gradient-orb-3', {
      x: 60,
      y: -80,
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900"></div>
      
      {/* Animated Gradient Orbs */}
      <div className="gradient-orb-1 absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-full blur-3xl"></div>
      <div className="gradient-orb-2 absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full blur-3xl"></div>
      <div className="gradient-orb-3 absolute top-1/2 left-3/4 w-72 h-72 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 rounded-full blur-3xl"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(147,51,234,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Ccircle cx="7" cy="7" r="1"/%3E%3Ccircle cx="27" cy="27" r="1"/%3E%3Ccircle cx="47" cy="47" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
    </div>
  );
};

export default AnimatedBackground;
