import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Target,
  Lightbulb,
  Trophy,
  Rocket,
  Zap,
  Globe,
  Shield,
  Heart,
  Users,
  BookOpen,
  Award,
  TrendingUp,
} from 'lucide-react';
import Laptop3D from './Laptop3D';
import BackgroundPattern from './BackgroundPattern';
import VectorIllustrations from './VectorIllustrations';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Header animation
    gsap.fromTo(
      headerRef.current?.children,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 80%',
        },
      }
    );

    // Values cards animation
    gsap.fromTo(
      '.value-card',
      { y: 40, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: valuesRef.current,
          start: 'top 80%',
        },
      }
    );

    // Mission section animation
    gsap.fromTo(
      missionRef.current?.children,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: missionRef.current,
          start: 'top 80%',
        },
      }
    );

    // Hover animations for cards
    const cards = document.querySelectorAll('.value-card');
    cards.forEach((card) => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          y: -8,
          scale: 1.02,
          duration: 0.3,
          ease: 'power2.out',
        });
      });
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          duration: 0.3,
          ease: 'power2.out',
        });
      });
    });
  }, []);

  const values = [
    {
      icon: <Zap className="h-7 w-7" />,
      title: 'Daily Live Classes',
      description:
        'Interactive classes with expert instructors to help you learn effectively',
    },
    {
      icon: <Globe className="h-7 w-7" />,
      title: '10 Million+ Resources',
      description:
        'Access to a vast library of study materials, videos, and practice questions',
    },
    {
      icon: <Shield className="h-7 w-7" />,
      title: 'Affordable Pricing',
      description:
        'Quality education at the most affordable prices in the market',
    },
    {
      icon: <Trophy className="h-7 w-7" />,
      title: 'Expert Mentors',
      description:
        'Learn from industry experts with years of real-world experience',
    },
    {
      icon: <Rocket className="h-7 w-7" />,
      title: 'Career Support',
      description:
        'Get placement assistance and career guidance to land your dream job',
    },
    {
      icon: <Heart className="h-7 w-7" />,
      title: 'Student Success',
      description:
        'Our mission is your success - we are committed to your growth',
    },
  ];

  const stats = [
    {
      number: '500+',
      label: 'Happy Students',
      icon: <Users className="h-6 w-6" />,
    },
    {
      number: '15+',
      label: 'Expert Instructors',
      icon: <Award className="h-6 w-6" />,
    },
    {
      number: '12+',
      label: 'Courses Available',
      icon: <BookOpen className="h-6 w-6" />,
    },
    {
      number: '85%',
      label: 'Placement Rate',
      icon: <TrendingUp className="h-6 w-6" />,
    },
  ];

  return (
    <section
      ref={aboutRef}
      className="py-16 md:py-20 bg-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <BackgroundPattern variant="dots" opacity={0.03} />

      {/* Vector Illustrations */}
      <div className="absolute top-20 left-10 opacity-10 hidden lg:block">
        <VectorIllustrations type="laptop-code" size={150} />
      </div>
      <div className="absolute bottom-20 right-10 opacity-10 hidden lg:block">
        <VectorIllustrations type="certificate" size={150} />
      </div>
      <div className="absolute top-1/2 left-5 opacity-10 hidden xl:block">
        <VectorIllustrations type="smartphone" size={120} />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Header Section */}
        <div ref={headerRef} className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            About Syntaxim
          </h2>
          <p className="text-xs md:text-sm text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Syntaxim is India's most trusted and affordable tech education
            platform. We are committed to transforming careers through
            comprehensive training in cutting-edge technologies.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 md:mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm hover:shadow-lg hover:border-slate-900 transition-all duration-300 text-center group"
            >
              <div className="mb-3 text-slate-700 group-hover:text-slate-900 transition-colors flex justify-center">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-slate-900 mb-1 group-hover:scale-110 transition-transform">
                {stat.number}
              </div>
              <div className="text-xs text-slate-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Values Grid */}
        <div ref={valuesRef} className="mb-10 md:mb-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-3">
              <VectorIllustrations type="lightbulb" size={24} />
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Why Choose Syntaxim
              </h3>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((value, index) => (
              <div
                key={index}
                className="value-card bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-lg hover:border-slate-900 transition-all duration-300 cursor-pointer group"
              >
                <div className="mb-5">
                  <div className="p-4 rounded-xl bg-slate-50 group-hover:bg-slate-900 transition-all duration-300 inline-block">
                    <div className="text-slate-700 group-hover:text-white transition-colors">
                      {value.icon}
                    </div>
                  </div>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:scale-105 transition-transform">
                  {value.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div ref={missionRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-lg hover:border-slate-900 transition-all duration-300 group relative">
            <div className="absolute top-4 right-4 opacity-5">
              <VectorIllustrations type="rocket" size={80} />
            </div>
            <div className="mb-6">
              <div className="p-3 rounded-xl bg-slate-900 inline-block mb-4">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:scale-105 transition-transform">
                Our Mission
              </h3>
            </div>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
              To democratize tech education and make quality learning accessible
              to everyone. We believe that everyone deserves the opportunity to
              build a successful career in technology, regardless of their
              background or financial situation.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-lg hover:border-slate-900 transition-all duration-300 group relative">
            <div className="absolute top-4 right-4 opacity-5">
              <VectorIllustrations type="graduation" size={80} />
            </div>
            <div className="mb-6">
              <div className="p-3 rounded-xl bg-slate-900 inline-block mb-4">
                <Lightbulb className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:scale-105 transition-transform">
                Our Vision
              </h3>
            </div>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
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
