
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Lightbulb, Trophy, Rocket, Zap, Globe, Shield, Heart } from "lucide-react";
import HandDrawnArrow from "./HandDrawnArrow";
import EducationIllustration from "./EducationIllustration";

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
      title: "Daily Live Classes",
      description: "Interactive classes with expert instructors to help you learn effectively",
      color: "#FFB300" // Data Science Yellow
    },
    {
      icon: <Globe className="h-10 w-10" />,
      title: "10 Million+ Resources",
      description: "Tests, sample papers, notes, and study materials to enhance your preparation",
      color: "#0DB7ED" // Docker Cyan
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "24x7 Support",
      description: "Round-the-clock doubt solving sessions to help you whenever you need",
      color: "#00D4AA" // React Teal
    },
    {
      icon: <Heart className="h-10 w-10" />,
      title: "Student First",
      description: "Every decision we make is driven by creating exceptional learning experiences",
      color: "#FF6F61" // Data Science Red
    },
    {
      icon: <Target className="h-10 w-10" />,
      title: "Expert Mentors",
      description: "Learn from India's best faculty with years of teaching experience",
      color: "#7F6DFF" // Data Science Purple
    },
    {
      icon: <Lightbulb className="h-10 w-10" />,
      title: "Innovative Learning",
      description: "Cutting-edge teaching methods and technology to make learning engaging",
      color: "#FFDE57" // Python Yellow
    },
    {
      icon: <Trophy className="h-10 w-10" />,
      title: "Proven Results",
      description: "Thousands of successful students placed in top tech companies",
      color: "#3776AB" // Python Blue
    },
    {
      icon: <Rocket className="h-10 w-10" />,
      title: "Career Growth",
      description: "Comprehensive programs designed to accelerate your career in tech",
      color: "#F89820" // Java Orange
    }
  ];

  return (
    <section ref={aboutRef} className="py-32 bg-white relative overflow-hidden">
      {/* Decorative illustrations */}
      <div className="absolute top-20 right-10 opacity-10 hidden lg:block">
        <EducationIllustration type="student" size={180} />
      </div>
      <div className="absolute bottom-20 left-10 opacity-10 hidden lg:block">
        <EducationIllustration type="laptop" size={150} />
      </div>
      <div className="absolute top-1/2 left-5 opacity-10 hidden xl:block transform rotate-12">
        <EducationIllustration type="teamwork" size={140} />
      </div>
      <div className="absolute bottom-1/3 right-5 opacity-10 hidden xl:block transform -rotate-6">
        <EducationIllustration type="brain" size={120} />
      </div>
      
      {/* Hand-drawn arrows */}
      <div className="absolute top-1/4 left-5 hidden xl:block animate-float">
        <HandDrawnArrow direction="right" color="#3776AB" className="w-16 h-16" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-20">
          <div className="about-content relative">
            {/* Arrow pointing to heading */}
            <div className="absolute -left-12 top-0 hidden xl:block animate-float" style={{ animationDelay: '0.5s' }}>
              <HandDrawnArrow direction="right" color="#00D4AA" className="w-14 h-14" />
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 md:mb-6 leading-tight tracking-tight">
              Why Choose
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Codex</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-4 md:mb-6 leading-relaxed font-normal">
              Codex is where students learn with 
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent font-semibold"> passion </span>
              and grow with guidance.
            </p>
            <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
              We successfully provide students with intensive courses by India's qualified & experienced faculties. 
              Codex strives to make the learning experience comprehensive and accessible for students of all sections. 
              Our main focus is to create accessible learning experiences for students all over India.
            </p>
          </div>
          
          <div className="about-content flex justify-center relative">
            {/* Arrow pointing to stat */}
            <div className="absolute -right-12 top-1/2 hidden xl:block animate-float" style={{ animationDelay: '1s' }}>
              <HandDrawnArrow direction="left" color="#7F6DFF" className="w-16 h-16" />
            </div>
            
            <div className="relative">
              <div className="w-80 h-80 rounded-full blur-3xl absolute -inset-10"
                   style={{ background: 'radial-gradient(circle, rgba(0,212,170,0.15) 0%, rgba(97,218,251,0.1) 100%)' }}></div>
              <div className="w-64 h-64 rounded-2xl border flex items-center justify-center relative overflow-hidden shadow-lg"
                   style={{ 
                     background: 'linear-gradient(135deg, rgba(0,212,170,0.1) 0%, rgba(97,218,251,0.05) 100%)',
                     borderColor: 'rgba(0,212,170,0.2)'
                   }}>
                <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  10K+
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="values-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Arrow pointing to values */}
          <div className="absolute -left-12 top-1/2 hidden xl:block animate-float" style={{ animationDelay: '1.5s' }}>
            <HandDrawnArrow direction="right" color="#F89820" className="w-12 h-12" />
          </div>
          
          {values.map((value, index) => (
            <div key={index} className="value-card p-8 rounded-2xl border shadow-md hover:shadow-lg transition-all duration-500 group hover:scale-105 cursor-pointer relative"
                 style={{ 
                   background: `linear-gradient(135deg, ${value.color}15, ${value.color}08)`,
                   borderColor: `${value.color}30`
                 }}>
              {/* Small arrow on hover */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <HandDrawnArrow direction="diagonal" color={value.color} className="w-8 h-8" />
              </div>
              
              <div className="value-icon mb-6 group-hover:scale-125 transition-all duration-500 flex justify-center"
                   style={{ color: value.color }}>
                {value.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 md:mb-4 group-hover:opacity-80 transition-all duration-300 leading-snug tracking-tight">
                {value.title}
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

