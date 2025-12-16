import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '@/components/Navigation';
import AnimatedBackground from '@/components/AnimatedBackground';
import BackgroundPattern from '@/components/BackgroundPattern';
import Footer from '@/components/Footer';
import PlatformStats from '@/components/PlatformStats';
import Testimonials from '@/components/Testimonials';
import {
  Target,
  Lightbulb,
  Trophy,
  Rocket,
  Users,
  Award,
  Globe,
  Star,
  Zap,
  Shield,
  Heart,
  BookOpen,
  TrendingUp,
  Code,
  Database,
  Brain,
} from 'lucide-react';
import Laptop3D from '@/components/Laptop3D';
import Certificate3D from '@/components/Certificate3D';
import CodeCube3D from '@/components/CodeCube3D';
import Phone3D from '@/components/Phone3D';
import VectorIllustrations from '@/components/VectorIllustrations';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Header animation
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current.children,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          delay: 0.3,
        }
      );
    }

    // Values cards animation
    if (valuesRef.current) {
      gsap.fromTo(
        '.value-card',
        { y: 50, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: valuesRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Stats animation
    if (statsRef.current) {
      gsap.fromTo(
        statsRef.current.children,
        { y: 40, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Mission section animation
    if (missionRef.current) {
      gsap.fromTo(
        missionRef.current.children,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: missionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, []);

  const values = [
    {
      icon: <Zap className="h-7 w-7" />,
      title: 'Daily Live Classes',
      description:
        'Interactive classes with expert instructors to help you learn effectively and stay engaged',
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
      icon: <Users className="h-8 w-8" />,
      number: '500+',
      label: 'Happy Students',
    },
    {
      icon: <Award className="h-8 w-8" />,
      number: '15+',
      label: 'Expert Instructors',
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      number: '12+',
      label: 'Courses Available',
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      number: '85%',
      label: 'Placement Rate',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <AnimatedBackground />
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pb-20 overflow-hidden">
        <BackgroundPattern variant="dots" opacity={0.03} />

        {/* Vector Illustrations - Decorative */}
        <div className="absolute top-20 right-10 opacity-10 hidden xl:block">
          <VectorIllustrations type="laptop-code" size={180} />
        </div>
        <div className="absolute bottom-20 left-10 opacity-10 hidden xl:block">
          <VectorIllustrations type="certificate" size={180} />
        </div>
        <div className="absolute top-1/2 right-20 opacity-10 hidden lg:block">
          <VectorIllustrations type="students" size={140} />
        </div>
        <div className="absolute bottom-1/3 left-20 opacity-10 hidden lg:block">
          <VectorIllustrations type="smartphone" size={140} />
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div ref={headerRef} className="text-center mt-12 mb-8 md:mb-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              About Syntaxim
            </h1>
            <p className="text-xs md:text-sm text-slate-600 max-w-4xl mx-auto leading-relaxed">
              We're committed to transforming careers through comprehensive,
              practical training programs. Our institute combines cutting-edge
              curriculum with personalized mentorship to ensure your success in
              the rapidly evolving tech industry.
            </p>
          </div>

          {/* Stats Section */}
          <div
            ref={statsRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-10"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-3 border-2 border-slate-200 hover:border-slate-900 shadow-md hover:shadow-lg transition-all duration-300 text-center group"
              >
                <div className="mb-3 text-slate-700 group-hover:text-slate-900 transition-colors flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl font-bold text-slate-900 mb-1 group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className="text-xs text-slate-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section
        ref={sectionRef}
        className="relative py-16 md:py-20 bg-white overflow-hidden"
      >
        <BackgroundPattern variant="grid-dots" opacity={0.025} />

        {/* 3D Laptop - Background Element */}
        <div className="absolute top-10 right-20 opacity-5 hidden xl:block">
          <Laptop3D className="scale-75" />
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-8 md:mb-10">
            <div className="inline-flex items-center gap-2 mb-3">
              <VectorIllustrations type="lightbulb" size={24} />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">
                Why Choose Us?
              </h2>
            </div>
            <p className="text-xs md:text-sm text-slate-600 max-w-3xl mx-auto">
              Discover what makes Syntaxim the preferred choice for tech
              education
            </p>
          </div>

          <div
            ref={valuesRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4"
          >
            {values.map((value, index) => (
              <div
                key={index}
                className="value-card bg-white rounded-xl p-4 border-2 border-slate-200 hover:border-slate-900 shadow-md hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <div className="mb-4">
                  <div className="p-3 rounded-xl bg-slate-50 group-hover:bg-slate-900 transition-all duration-300 inline-block group-hover:scale-110">
                    <div className="text-slate-700 group-hover:text-white transition-colors">
                      {value.icon}
                    </div>
                  </div>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-slate-700 transition-colors">
                  {value.title}
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section
        ref={missionRef}
        className="relative py-16 md:py-20 bg-white overflow-hidden"
      >
        <BackgroundPattern variant="dots" opacity={0.03} />

        {/* Floating tech icons */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 opacity-5 hidden lg:block">
            <Code className="h-16 w-16 text-slate-900" />
          </div>
          <div className="absolute bottom-20 right-10 opacity-5 hidden lg:block">
            <Database className="h-14 w-14 text-slate-900" />
          </div>
          <div className="absolute top-1/2 right-20 opacity-5 hidden lg:block">
            <Brain className="h-12 w-12 text-slate-900" />
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            {/* Mission */}
            <div className="bg-white rounded-xl p-5 border-2 border-slate-200 hover:border-slate-900 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
              {/* Decorative illustration */}
              <div className="absolute top-4 right-4 opacity-5">
                <VectorIllustrations type="rocket" size={100} />
              </div>

              <div className="relative z-10">
                <div className="mb-3">
                  <div className="p-2 rounded-xl bg-slate-900 inline-block mb-2 group-hover:scale-110 transition-transform">
                    <Target className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                    Our Mission
                  </h3>
                </div>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                  To democratize tech education and make quality learning
                  accessible to everyone. We believe that everyone deserves the
                  opportunity to build a successful career in technology,
                  regardless of their background or financial situation.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-xl p-5 border-2 border-slate-200 hover:border-slate-900 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
              {/* Decorative illustration */}
              <div className="absolute top-4 right-4 opacity-5">
                <VectorIllustrations type="graduation" size={100} />
              </div>

              <div className="relative z-10">
                <div className="mb-3">
                  <div className="p-2 rounded-xl bg-slate-900 inline-block mb-2 group-hover:scale-110 transition-transform">
                    <Lightbulb className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                    Our Vision
                  </h3>
                </div>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                  To become India's leading tech education platform, empowering
                  millions of students to achieve their career goals and
                  transform their lives through technology. We envision a future
                  where quality tech education is accessible to all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Content Section - Our Approach */}
      <section className="relative py-16 md:py-20 bg-slate-50 overflow-hidden">
        <BackgroundPattern variant="grid-dots" opacity={0.025} />

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-8 md:mb-10">
            <div className="inline-flex items-center gap-2 mb-3">
              <VectorIllustrations type="teamwork" size={24} />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">
                Our Approach
              </h2>
            </div>
            <p className="text-xs md:text-sm text-slate-600 max-w-3xl mx-auto">
              A comprehensive learning methodology designed for your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            <div className="bg-white rounded-xl p-4 border-2 border-slate-200 hover:border-slate-900 shadow-md hover:shadow-lg transition-all duration-300 group">
              <div className="p-3 rounded-lg bg-slate-50 group-hover:bg-slate-900 transition-all duration-300 inline-block mb-4">
                <BookOpen className="h-6 w-6 text-slate-700 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Hands-On Learning
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Real-world projects and practical exercises to build expertise
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-slate-200 hover:border-slate-900 shadow-md hover:shadow-lg transition-all duration-300 group">
              <div className="p-3 rounded-lg bg-slate-50 group-hover:bg-slate-900 transition-all duration-300 inline-block mb-4">
                <Users className="h-6 w-6 text-slate-700 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Expert Mentorship
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Learn from industry professionals with years of experience
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-slate-200 hover:border-slate-900 shadow-md hover:shadow-lg transition-all duration-300 group">
              <div className="p-3 rounded-lg bg-slate-50 group-hover:bg-slate-900 transition-all duration-300 inline-block mb-4">
                <Award className="h-6 w-6 text-slate-700 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Industry Recognition
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Certifications recognized by top tech companies worldwide
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-slate-200 hover:border-slate-900 shadow-md hover:shadow-lg transition-all duration-300 group">
              <div className="p-3 rounded-lg bg-slate-50 group-hover:bg-slate-900 transition-all duration-300 inline-block mb-4">
                <TrendingUp className="h-6 w-6 text-slate-700 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Career Growth
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Placement support and career guidance for long-term success
              </p>
            </div>
          </div>
        </div>
      </section>

      <PlatformStats />
      <Testimonials />

      <Footer />
    </div>
  );
};

export default About;
