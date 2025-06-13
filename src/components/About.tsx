
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Lightbulb, Trophy, Rocket, Zap, Globe, Shield, Heart } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Enhanced content animations
    gsap.fromTo('.about-content',
      { y: 100, opacity: 0, scale: 0.95, rotationY: 15 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        rotationY: 0,
        duration: 1.5,
        stagger: 0.3,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top 80%',
        }
      }
    );

    // Enhanced value cards with more dynamic animations
    gsap.fromTo('.value-card',
      { y: 60, opacity: 0, scale: 0.8, rotation: (i) => i * 10 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'elastic.out(1, 0.5)',
        scrollTrigger: {
          trigger: '.values-grid',
          start: 'top 80%',
        }
      }
    );

    // Continuous hover animations
    gsap.to('.value-card', {
      y: (i) => -5 + (i % 2) * 10,
      duration: 2 + Math.random(),
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: 0.2
    });

    // Icon rotation animation
    gsap.to('.value-icon', {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: 'none'
    });

  }, []);

  const values = [
    {
      icon: <Zap className="h-10 w-10" />,
      title: "Lightning Fast",
      description: "Cutting-edge technology that delivers results at unprecedented speed",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      icon: <Globe className="h-10 w-10" />,
      title: "Global Reach",
      description: "Expanding your business presence across continents with our worldwide network",
      gradient: "from-blue-400 to-cyan-500"
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Enterprise Security",
      description: "Bank-level security protocols protecting your most valuable digital assets",
      gradient: "from-green-400 to-emerald-500"
    },
    {
      icon: <Heart className="h-10 w-10" />,
      title: "Customer First",
      description: "Every decision we make is driven by creating exceptional customer experiences",
      gradient: "from-pink-400 to-rose-500"
    },
    {
      icon: <Target className="h-10 w-10" />,
      title: "Precision Focus",
      description: "Laser-focused strategies that hit your business targets with remarkable accuracy",
      gradient: "from-purple-400 to-violet-500"
    },
    {
      icon: <Lightbulb className="h-10 w-10" />,
      title: "Innovation Hub",
      description: "Where breakthrough ideas become game-changing solutions for tomorrow's challenges",
      gradient: "from-amber-400 to-yellow-500"
    },
    {
      icon: <Trophy className="h-10 w-10" />,
      title: "Award Winning",
      description: "Industry-recognized excellence with 50+ awards from leading tech organizations",
      gradient: "from-indigo-400 to-purple-500"
    },
    {
      icon: <Rocket className="h-10 w-10" />,
      title: "Scale Rapidly",
      description: "Proven methodologies that accelerate growth from startup to industry leader",
      gradient: "from-cyan-400 to-blue-500"
    }
  ];

  return (
    <section ref={aboutRef} className="py-32 bg-transparent relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-600/10 to-transparent rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-cyan-600/10 to-transparent rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-20">
          <div className="about-content">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Why We're
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"> Different</span>
            </h2>
            <p className="text-2xl text-gray-300 mb-8 leading-relaxed font-light">
              We don't just build technology – we craft digital experiences that 
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-semibold"> revolutionize industries </span>
              and redefine what's possible.
            </p>
            <p className="text-xl text-gray-400 leading-relaxed">
              Our team of visionary engineers, designers, and strategists work tirelessly to push the boundaries 
              of innovation, delivering solutions that don't just meet expectations – they exceed them exponentially.
            </p>
          </div>
          
          <div className="about-content flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-full blur-3xl absolute -inset-10"></div>
              <div className="w-64 h-64 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl backdrop-blur-sm border border-purple-500/30 flex items-center justify-center relative overflow-hidden">
                <div className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  10K+
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-cyan-600/10 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="values-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div key={index} className={`value-card p-8 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl backdrop-blur-sm border border-white/20 hover:border-white/40 hover:shadow-2xl transition-all duration-500 group hover:scale-105 cursor-pointer`}>
              <div className={`value-icon text-transparent bg-gradient-to-r ${value.gradient} bg-clip-text mb-6 group-hover:scale-125 transition-all duration-500 flex justify-center`}>
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                {value.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {value.description}
              </p>
              <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
