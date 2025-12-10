import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Lightbulb, Trophy, Rocket, Zap, Globe, Shield, Heart } from 'lucide-react';
import Laptop3D from './Laptop3D';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      '.about-content',
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top 80%',
        },
      }
    );

    gsap.fromTo(
      '.value-card',
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.values-grid',
          start: 'top 80%',
        },
      }
    );
  }, []);

  const values = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Daily Live Classes',
      description: 'Interactive classes with expert instructors to help you learn effectively',
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: '10 Million+ Resources',
      description: 'Access to a vast library of study materials, videos, and practice questions',
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Affordable Pricing',
      description: 'Quality education at the most affordable prices in the market',
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: 'Expert Mentors',
      description: 'Learn from industry experts with years of real-world experience',
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: 'Career Support',
      description: 'Get placement assistance and career guidance to land your dream job',
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Student Success',
      description: 'Our mission is your success - we are committed to your growth',
    },
  ];

  return (
    <section ref={aboutRef} className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* 3D Laptop Elements */}
      <div className="absolute top-20 left-10 opacity-10 hidden lg:block">
        <Laptop3D className="scale-75" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-10 hidden lg:block">
        <Laptop3D className="scale-75" />
      </div>
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16 about-content">
          <div className="flex justify-center mb-6">
            <Laptop3D className="scale-75" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-slate-900">
            About Syntaxim
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Syntaxim is India's most trusted and affordable tech education platform.
            We are committed to transforming careers through comprehensive training
            in cutting-edge technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 values-grid mb-16">
          {values.map((value, index) => (
            <div
              key={index}
              className="value-card p-8 border border-slate-200 rounded-lg bg-white hover:shadow-md transition-shadow"
            >
              <div className="mb-4">
                <div className="p-3 rounded-lg bg-slate-100 inline-block">
                  <div className="text-slate-900">{value.icon}</div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                {value.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center about-content">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Our Mission
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              To democratize tech education and make quality learning accessible
              to everyone. We believe that everyone deserves the opportunity to
              build a successful career in technology, regardless of their
              background or financial situation.
            </p>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Vision</h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              To become India's leading tech education platform, empowering
              millions of students to achieve their career goals and transform
              their lives through technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
