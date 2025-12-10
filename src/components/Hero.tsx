import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Award, Rocket, TrendingUp, Code, Database, Brain, BarChart3, PlayCircle } from 'lucide-react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import Laptop3D from './Laptop3D';
import Phone3D from './Phone3D';
import Tablet3D from './Tablet3D';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const floatingIconsRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Logo animation
    if (logoRef.current) {
      gsap.fromTo(
        logoRef.current,
        { scale: 0, rotation: -180, opacity: 0 },
        { scale: 1, rotation: 0, opacity: 1, duration: 1, ease: 'back.out(1.7)' }
      );
    }

    // Title animation
    tl.fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
    )
      .fromTo(
        subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
        '-=0.4'
      )
      .fromTo(
        buttonsRef.current?.children,
        { y: 30, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.15, ease: 'back.out(1.7)' },
        '-=0.3'
      )
      .fromTo(
        statsRef.current?.children,
        { y: 30, opacity: 0, scale: 0.8 },
        { y: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.1, ease: 'back.out(1.7)' },
        '-=0.2'
      );

    // Floating icons animation
    if (floatingIconsRef.current) {
      const icons = floatingIconsRef.current.children;
      Array.from(icons).forEach((icon, i) => {
        gsap.to(icon, {
          y: -20 + (i * 5),
          x: Math.sin(i) * 15,
          rotation: (i % 2 === 0 ? 1 : -1) * 5,
          duration: 3 + (i * 0.5),
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: i * 0.2,
        });
      });
    }

    // Continuous pulse for logo
    if (logoRef.current) {
      gsap.to(logoRef.current.querySelector('circle'), {
        scale: 1.1,
        opacity: 0.15,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-20 bg-white overflow-hidden"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(15, 23, 42, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Floating tech icons */}
      <div ref={floatingIconsRef} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 opacity-10">
          <Code className="h-16 w-16 text-slate-900" />
        </div>
        <div className="absolute top-40 right-20 opacity-10">
          <Database className="h-12 w-12 text-slate-900" />
        </div>
        <div className="absolute bottom-40 left-20 opacity-10">
          <Brain className="h-14 w-14 text-slate-900" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-10">
          <BarChart3 className="h-12 w-12 text-slate-900" />
        </div>
        <div className="absolute top-1/2 left-5 opacity-10">
          <Rocket className="h-10 w-10 text-slate-900" />
        </div>
        <div className="absolute top-1/3 right-5 opacity-10">
          <Award className="h-10 w-10 text-slate-900" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left side - Content */}
          <div className="text-center lg:text-left">
            {/* Logo */}
            <div className="mb-8 flex justify-center lg:justify-start">
              <svg
                ref={logoRef}
                width="200"
                height="80"
                viewBox="0 0 560 200"
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-auto"
              >
                <circle cx="100" cy="100" r="80" fill="#0F172A" opacity="0.1" />
                <g transform="translate(60, 60)">
                  <path
                    d="M 20 20 L 40 40 L 20 60 M 60 20 L 40 40 L 60 60"
                    stroke="#0F172A"
                    strokeWidth="6"
                    strokeLinecap="round"
                    fill="none"
                  />
                </g>
                <text
                  x="280"
                  y="135"
                  fontFamily="Geist, sans-serif"
                  fontSize="120"
                  fontWeight="800"
                  letterSpacing="4"
                  textAnchor="middle"
                  fill="#0F172A"
                >
                  Syntaxim
                </text>
                <line
                  x1="180"
                  y1="150"
                  x2="380"
                  y2="150"
                  stroke="#0F172A"
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity="0.3"
                />
              </svg>
            </div>

            <h1
              ref={titleRef}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-slate-900"
            >
              Master Tech Skills,
              <br />
              <span className="bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
                Shape Your Future
              </span>
            </h1>

            <p
              ref={subtitleRef}
              className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              India's Trusted & Affordable Tech Education Platform
              <br />
              <span className="text-slate-900 font-semibold">
                Unlock your potential
              </span>{' '}
              by signing up with Syntaxim - The most affordable learning solution
            </p>

            {/* Quick stats */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mb-8 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>10,000+ Happy Students</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span>500+ Live Classes</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-purple-500 rounded-full animate-pulse"></div>
                <span>95% Placement Rate</span>
              </div>
            </div>

            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-6 text-base font-medium rounded-lg shadow-lg hover:shadow-xl transition-all group"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/courses">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-slate-900 text-slate-900 hover:bg-slate-50 px-8 py-6 text-base font-medium rounded-lg group"
                >
                  <PlayCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </Button>
              </Link>
            </div>

            {/* Stats grid */}
            <div
              ref={statsRef}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto lg:mx-0"
            >
              <div className="flex flex-col items-center lg:items-start p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-slate-900 transition-colors">
                <Users className="h-6 w-6 mb-2 text-slate-900" />
                <div className="text-2xl font-bold text-slate-900 mb-1">10K+</div>
                <div className="text-xs text-slate-600">Happy Students</div>
              </div>

              <div className="flex flex-col items-center lg:items-start p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-slate-900 transition-colors">
                <Award className="h-6 w-6 mb-2 text-slate-900" />
                <div className="text-2xl font-bold text-slate-900 mb-1">500+</div>
                <div className="text-xs text-slate-600">Live Classes</div>
              </div>

              <div className="flex flex-col items-center lg:items-start p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-slate-900 transition-colors">
                <Rocket className="h-6 w-6 mb-2 text-slate-900" />
                <div className="text-2xl font-bold text-slate-900 mb-1">24x7</div>
                <div className="text-xs text-slate-600">Doubt Solving</div>
              </div>

              <div className="flex flex-col items-center lg:items-start p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-slate-900 transition-colors">
                <TrendingUp className="h-6 w-6 mb-2 text-slate-900" />
                <div className="text-2xl font-bold text-slate-900 mb-1">100+</div>
                <div className="text-xs text-slate-600">Expert Mentors</div>
              </div>
            </div>
          </div>

          {/* Right side - 3D Visual elements */}
          <div className="hidden lg:flex items-center justify-center relative h-[600px]">
            <div className="relative w-full max-w-2xl">
              {/* Main 3D Laptop - Center */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <Laptop3D />
              </div>

              {/* 3D Phone - Top Right */}
              <div className="absolute top-10 right-10 z-10">
                <Phone3D />
              </div>

              {/* 3D Tablet - Bottom Left */}
              <div className="absolute bottom-10 left-10 z-10">
                <Tablet3D />
              </div>

              {/* Floating badges */}
              <div className="absolute top-20 left-20 bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg z-30">
                <Award className="inline h-4 w-4 mr-1" />
                Certified
              </div>
              <div className="absolute bottom-20 right-20 bg-white border-2 border-slate-900 px-4 py-2 rounded-lg text-sm font-bold shadow-lg z-30">
                <TrendingUp className="inline h-4 w-4 mr-1" />
                95% Success
              </div>

              {/* Decorative circles */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-slate-200 rounded-full opacity-30 blur-3xl -z-10"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-slate-200 rounded-full opacity-30 blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
