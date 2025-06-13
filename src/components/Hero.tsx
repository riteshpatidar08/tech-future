
import { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Award, Rocket, TrendingUp } from "lucide-react";
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const floatingElementsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Enhanced title animation with more dynamic effects
    tl.fromTo(titleRef.current,
      { y: 150, opacity: 0, scale: 0.8, rotationX: 45 },
      { y: 0, opacity: 1, scale: 1, rotationX: 0, duration: 1.5, ease: 'power4.out' }
    )
    .fromTo(subtitleRef.current,
      { y: 80, opacity: 0, scale: 0.9 },
      { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out' },
      '-=0.8'
    )
    .fromTo(buttonsRef.current?.children,
      { y: 60, opacity: 0, scale: 0.8, rotation: 10 },
      { y: 0, opacity: 1, scale: 1, rotation: 0, duration: 0.8, stagger: 0.15, ease: 'back.out(1.7)' },
      '-=0.6'
    )
    .fromTo(statsRef.current?.children,
      { y: 80, opacity: 0, scale: 0.5, rotation: 180 },
      { y: 0, opacity: 1, scale: 1, rotation: 0, duration: 1, stagger: 0.2, ease: 'elastic.out(1, 0.5)' },
      '-=0.4'
    );

    // Enhanced floating animations for stats cards
    gsap.to('.stat-card', {
      y: (i) => -15 + (i * 5),
      rotation: (i) => Math.sin(i) * 2,
      duration: 3 + Math.random() * 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: 0.4
    });

    // Floating background elements
    gsap.to('.floating-element', {
      y: (i) => -30 + (i * 10),
      x: (i) => Math.sin(i) * 20,
      rotation: (i) => i * 45,
      duration: 4 + Math.random() * 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: 0.3
    });

    // Continuous glow effect on buttons
    gsap.to('.hero-button', {
      boxShadow: '0 0 30px rgba(147, 51, 234, 0.6), 0 0 60px rgba(6, 182, 212, 0.4)',
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Enhanced floating background elements */}
      <div ref={floatingElementsRef} className="absolute inset-0 pointer-events-none">
        <div className="floating-element absolute top-20 left-10 w-4 h-4 bg-purple-500/30 rounded-full"></div>
        <div className="floating-element absolute top-40 right-20 w-6 h-6 bg-cyan-500/20 rounded-full"></div>
        <div className="floating-element absolute bottom-40 left-20 w-3 h-3 bg-blue-500/40 rounded-full"></div>
        <div className="floating-element absolute bottom-60 right-10 w-5 h-5 bg-purple-400/25 rounded-full"></div>
        <div className="floating-element absolute top-60 left-1/3 w-2 h-2 bg-cyan-400/35 rounded-full"></div>
        <div className="floating-element absolute bottom-20 right-1/3 w-4 h-4 bg-blue-400/30 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 text-center max-w-6xl relative z-10">
        <div>
          <h1 ref={titleRef} className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
              Innovate
            </span>
            <br />
            <span className="text-5xl md:text-7xl text-white">Transform</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Succeed
            </span>
          </h1>
          
          <p ref={subtitleRef} className="text-2xl md:text-3xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed font-light">
            We're revolutionizing the tech industry with cutting-edge solutions that drive 
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-semibold"> exponential growth </span>
            for forward-thinking businesses
          </p>
          
          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link to="/contact">
              <Button size="lg" className="hero-button bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-110 group border-0">
                Start Your Journey
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg" className="hero-button border-3 border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white px-12 py-6 text-xl font-bold rounded-2xl transition-all duration-500 backdrop-blur-sm hover:scale-105 hover:shadow-2xl">
                Learn More
              </Button>
            </Link>
          </div>
          
          <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="stat-card flex flex-col items-center justify-center p-8 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl backdrop-blur-sm border border-purple-500/30 shadow-2xl hover:shadow-3xl transition-all duration-500 group hover:scale-105">
              <Users className="h-12 w-12 text-purple-400 mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
              <div className="text-4xl font-bold text-white mb-2">10K+</div>
              <div className="text-gray-400 text-lg">Happy Clients</div>
            </div>
            
            <div className="stat-card flex flex-col items-center justify-center p-8 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl backdrop-blur-sm border border-cyan-500/30 shadow-2xl hover:shadow-3xl transition-all duration-500 group hover:scale-105">
              <Award className="h-12 w-12 text-cyan-400 mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-400 text-lg">Awards Won</div>
            </div>
            
            <div className="stat-card flex flex-col items-center justify-center p-8 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl backdrop-blur-sm border border-blue-500/30 shadow-2xl hover:shadow-3xl transition-all duration-500 group hover:scale-105">
              <Rocket className="h-12 w-12 text-blue-400 mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
              <div className="text-4xl font-bold text-white mb-2">200+</div>
              <div className="text-gray-400 text-lg">Projects Launched</div>
            </div>

            <div className="stat-card flex flex-col items-center justify-center p-8 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl backdrop-blur-sm border border-purple-500/30 shadow-2xl hover:shadow-3xl transition-all duration-500 group hover:scale-105">
              <TrendingUp className="h-12 w-12 text-purple-400 mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
              <div className="text-4xl font-bold text-white mb-2">300%</div>
              <div className="text-gray-400 text-lg">Growth Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
