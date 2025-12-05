
import { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Award, Rocket, TrendingUp } from "lucide-react";
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import HandDrawnArrow from './HandDrawnArrow';
import EducationIllustration from './EducationIllustration';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const floatingElementsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Funky title animation with rotation and bounce
    tl.fromTo(titleRef.current,
      { y: 150, opacity: 0, scale: 0.8, rotation: -5 },
      { y: 0, opacity: 1, scale: 1, rotation: 0, duration: 1.5, ease: 'elastic.out(1, 0.5)' }
    )
    .fromTo(subtitleRef.current,
      { y: 80, opacity: 0, scale: 0.9 },
      { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out' },
      '-=0.8'
    )
    .fromTo(buttonsRef.current?.children,
      { y: 60, opacity: 0, scale: 0.8, rotation: (i) => i * 5 },
      { y: 0, opacity: 1, scale: 1, rotation: 0, duration: 0.8, stagger: 0.15, ease: 'back.out(1.7)' },
      '-=0.6'
    )
    .fromTo(statsRef.current?.children,
      { y: 80, opacity: 0, scale: 0.5, rotation: (i) => (i % 2 === 0 ? -15 : 15) },
      { y: 0, opacity: 1, scale: 1, rotation: (i) => (i % 2 === 0 ? -3 : 3), duration: 1, stagger: 0.2, ease: 'elastic.out(1, 0.5)' },
      '-=0.4'
    );

    // Funky floating animations for stats cards with rotations
    gsap.to('.stat-card', {
      y: (i) => -10 + (i * 3),
      rotation: (i) => (i % 2 === 0 ? -2 : 2) + Math.sin(i) * 1,
      duration: 3 + Math.random() * 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: 0.4
    });

    // Floating tech icons behind text
    gsap.to('.tech-icon-bg', {
      y: (i) => -20 + (i * 5),
      x: (i) => Math.sin(i) * 15,
      rotation: (i) => i * 10,
      scale: (i) => 1 + Math.sin(i) * 0.1,
      duration: 4 + Math.random() * 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: 0.5
    });

    // Subtle glow effect on buttons
    gsap.to('.hero-button', {
      boxShadow: '0 4px 20px rgba(37, 99, 235, 0.3)',
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white">
      {/* Decorative illustrations - more playful positioning */}
      <div className="absolute top-20 left-10 opacity-15 hidden lg:block transform rotate-12">
        <EducationIllustration type="student" size={150} />
      </div>
      <div className="absolute top-40 right-20 opacity-12 hidden xl:block transform -rotate-6">
        <EducationIllustration type="laptop" size={120} />
      </div>
      <div className="absolute bottom-20 left-20 opacity-12 hidden lg:block transform rotate-6">
        <EducationIllustration type="graduation" size={130} />
      </div>
      <div className="absolute top-1/2 right-10 opacity-10 hidden xl:block transform rotate-12">
        <EducationIllustration type="lightbulb" size={100} />
      </div>
      <div className="absolute bottom-40 right-20 opacity-12 hidden xl:block transform -rotate-12">
        <EducationIllustration type="certificate" size={110} />
      </div>
      <div className="absolute top-1/3 left-5 opacity-10 hidden lg:block transform rotate-45">
        <EducationIllustration type="rocket" size={90} />
      </div>
      
      {/* Hand-drawn arrows pointing to key elements - more funky */}
      <div className="absolute top-1/3 right-10 hidden xl:block animate-float transform rotate-12">
        <HandDrawnArrow direction="left" color="#3776AB" className="w-24 h-24" />
      </div>
      <div className="absolute bottom-1/4 left-10 hidden xl:block animate-float transform -rotate-12" style={{ animationDelay: '1s' }}>
        <HandDrawnArrow direction="right" color="#00D4AA" className="w-20 h-20" />
      </div>
      <div className="absolute top-1/4 left-5 hidden xl:block animate-float transform rotate-45" style={{ animationDelay: '0.7s' }}>
        <HandDrawnArrow direction="diagonal" color="#FFB300" className="w-16 h-16" />
      </div>
      
      <div className="container mx-auto px-4 text-center max-w-6xl relative z-10">
        <div className="relative">
          {/* Tech icons behind text like in logo */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Python icon behind */}
            <div className="tech-icon-bg absolute -left-20 top-0 opacity-20">
              <svg width="120" height="120" viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="70" fill="#3776AB"/>
                <circle cx="150" cy="100" r="70" fill="#FFDE57"/>
              </svg>
            </div>
            {/* React icon behind */}
            <div className="tech-icon-bg absolute left-10 -top-10 opacity-20">
              <svg width="100" height="100" viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="75" fill="#00D4AA"/>
                <circle cx="100" cy="100" r="20" fill="#61DAFB"/>
              </svg>
            </div>
            {/* Java icon behind */}
            <div className="tech-icon-bg absolute right-10 top-5 opacity-18">
              <svg width="110" height="110" viewBox="0 0 200 200">
                <path d="M100 60 C130 30, 170 70, 150 130" fill="none" stroke="#F89820" strokeWidth="60"/>
              </svg>
            </div>
            {/* Data Science bars behind */}
            <div className="tech-icon-bg absolute -right-20 -bottom-10 opacity-20">
              <svg width="100" height="100" viewBox="0 0 200 200">
                <rect x="30" y="50" width="35" height="100" fill="#7F6DFF"/>
                <rect x="75" y="70" width="35" height="80" fill="#FF6F61"/>
                <rect x="120" y="40" width="35" height="110" fill="#FFB300"/>
              </svg>
            </div>
          </div>
          
          <h1 ref={titleRef} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight relative z-10"
              style={{ 
                fontFamily: "'Dancing Script', 'Pacifico', 'Brush Script MT', cursive",
                fontWeight: 700,
                letterSpacing: '0.02em'
              }}>
            <span className="text-[#0F172A] inline-block transform hover:rotate-1 transition-transform">
              Master Tech Skills,
            </span>
            <br />
            <span className="text-[#0F172A] inline-block transform hover:-rotate-1 transition-transform">
              Shape Your Future
            </span>
          </h1>
          
          <p ref={subtitleRef} className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 mb-6 md:mb-8 max-w-4xl mx-auto leading-relaxed font-normal px-4 relative z-10">
            India's Trusted & Affordable Tech Education Platform
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent font-semibold">Unlock your potential</span> by signing up with Codex - The most affordable learning solution
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8 text-sm text-slate-600 relative z-10 px-4">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></span>
              <span>10,000+ Happy Students</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 bg-blue-500 rounded-full animate-pulse"></span>
              <span>500+ Live Classes</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 bg-purple-500 rounded-full animate-pulse"></span>
              <span>95% Placement Rate</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 bg-orange-500 rounded-full animate-pulse"></span>
              <span>Industry Experts</span>
            </div>
          </div>
          
          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-6 justify-center mb-16 relative z-10">
            {/* Arrow pointing to button */}
            <div className="absolute -left-20 top-1/2 hidden xl:block animate-float" style={{ animationDelay: '0.5s' }}>
              <HandDrawnArrow direction="right" color="#F89820" className="w-16 h-16" />
            </div>
            
            <Link to="/contact" className="transform hover:scale-105 transition-transform duration-300">
              <Button size="lg" className="hero-button bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:rotate-1 group border-0 tracking-tight"
                      style={{ fontFamily: "'Dancing Script', 'Pacifico', 'Brush Script MT', cursive", fontWeight: 700, fontSize: '0.95em' }}>
                Start Your Journey
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </Link>
            <Link to="/about" className="transform hover:scale-105 transition-transform duration-300">
              <Button variant="outline" size="lg" className="hero-button border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-3xl transition-all duration-500 hover:-rotate-1 hover:shadow-lg tracking-tight"
                      style={{ fontFamily: "'Dancing Script', 'Pacifico', 'Brush Script MT', cursive", fontWeight: 700, fontSize: '0.95em' }}>
                Learn More
              </Button>
            </Link>
          </div>
          
          <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto relative">
            {/* Arrow pointing to stats */}
            <div className="absolute -right-20 top-1/2 hidden xl:block animate-float" style={{ animationDelay: '1.5s' }}>
              <HandDrawnArrow direction="left" color="#7F6DFF" className="w-14 h-14" />
            </div>
            
            {/* Card 1 - Tilted left */}
            <div className="stat-card flex flex-col items-center justify-center p-6 rounded-2xl border shadow-md hover:shadow-lg transition-all duration-500 group hover:scale-110"
                 style={{ 
                   background: 'linear-gradient(135deg, rgba(55,118,171,0.12) 0%, rgba(255,222,87,0.08) 100%)', 
                   borderColor: 'rgba(55,118,171,0.25)',
                   transform: 'rotate(-2deg)'
                 }}>
              <Users className="h-8 w-8 mb-2 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" style={{ color: '#3776AB' }} />
              <div className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1 tracking-tight">10K+</div>
              <div className="text-slate-600 text-xs sm:text-sm font-medium">Happy Students</div>
            </div>
            
            {/* Card 2 - Tilted right */}
            <div className="stat-card flex flex-col items-center justify-center p-6 rounded-2xl border shadow-md hover:shadow-lg transition-all duration-500 group hover:scale-110"
                 style={{ 
                   background: 'linear-gradient(135deg, rgba(0,212,170,0.12) 0%, rgba(97,218,251,0.08) 100%)', 
                   borderColor: 'rgba(0,212,170,0.25)',
                   transform: 'rotate(2deg)'
                 }}>
              <Award className="h-8 w-8 mb-2 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" style={{ color: '#00D4AA' }} />
              <div className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1 tracking-tight">500+</div>
              <div className="text-slate-600 text-xs sm:text-sm font-medium">Live Classes</div>
            </div>
            
            {/* Card 3 - Tilted left */}
            <div className="stat-card flex flex-col items-center justify-center p-6 rounded-2xl border shadow-md hover:shadow-lg transition-all duration-500 group hover:scale-110"
                 style={{ 
                   background: 'linear-gradient(135deg, rgba(248,152,32,0.12) 0%, rgba(237,139,0,0.08) 100%)', 
                   borderColor: 'rgba(248,152,32,0.25)',
                   transform: 'rotate(-1.5deg)'
                 }}>
              <Rocket className="h-8 w-8 mb-2 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" style={{ color: '#F89820' }} />
              <div className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1 tracking-tight">24x7</div>
              <div className="text-slate-600 text-xs sm:text-sm font-medium">Doubt Solving</div>
            </div>

            {/* Card 4 - Tilted right */}
            <div className="stat-card flex flex-col items-center justify-center p-6 rounded-2xl border shadow-md hover:shadow-lg transition-all duration-500 group hover:scale-110"
                 style={{ 
                   background: 'linear-gradient(135deg, rgba(127,109,255,0.12) 0%, rgba(255,111,97,0.08) 100%)', 
                   borderColor: 'rgba(127,109,255,0.25)',
                   transform: 'rotate(2.5deg)'
                 }}>
              <TrendingUp className="h-8 w-8 mb-2 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" style={{ color: '#7F6DFF' }} />
              <div className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1 tracking-tight">100+</div>
              <div className="text-slate-600 text-xs sm:text-sm font-medium">Expert Mentors</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
