
import { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Award, BookOpen } from "lucide-react";
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animate hero elements
    tl.fromTo(titleRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    )
    .fromTo(subtitleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      '-=0.5'
    )
    .fromTo(buttonsRef.current?.children,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.2, ease: 'power3.out' },
      '-=0.3'
    )
    .fromTo(statsRef.current?.children,
      { y: 40, opacity: 0, scale: 0.8 },
      { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.1, ease: 'back.out(1.7)' },
      '-=0.4'
    );

    // Floating animation for stats cards
    gsap.to('.stat-card', {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: 0.3
    });

  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="container mx-auto px-4 text-center max-w-6xl relative z-10">
        <div>
          <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Master Tech Skills
            </span>
            <br />
            <span className="text-4xl md:text-6xl text-white">Shape Your Future</span>
          </h1>
          
          <p ref={subtitleRef} className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your career with our comprehensive training programs in Full Stack Development, 
            Python Data Science, Machine Learning, and Data Analytics
          </p>
          
          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/courses">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
                Explore Courses
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-2 border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 backdrop-blur-sm">
                Free Consultation
              </Button>
            </Link>
          </div>
          
          <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="stat-card flex items-center justify-center space-x-3 p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-purple-500/20 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <Users className="h-8 w-8 text-purple-400 group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-gray-400">Students Trained</div>
              </div>
            </div>
            
            <div className="stat-card flex items-center justify-center space-x-3 p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-purple-500/20 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <Award className="h-8 w-8 text-cyan-400 group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <div className="text-2xl font-bold text-white">95%</div>
                <div className="text-gray-400">Job Placement</div>
              </div>
            </div>
            
            <div className="stat-card flex items-center justify-center space-x-3 p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-purple-500/20 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <BookOpen className="h-8 w-8 text-blue-400 group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <div className="text-2xl font-bold text-white">4</div>
                <div className="text-gray-400">Specialized Tracks</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
