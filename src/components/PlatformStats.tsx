import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, BookOpen, Video, FileText } from 'lucide-react';
import Chart3D from './Chart3D';

gsap.registerPlugin(ScrollTrigger);

interface Stat {
  number: string;
  label: string;
  icon: React.ReactNode;
}

const PlatformStats = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stats = statsRef.current?.children;
    if (!stats) return;

    const statsArray = Array.from(stats);

    const animateNumbers = () => {
      statsArray.forEach((stat) => {
        const numberElement = stat.querySelector('.stat-number');
        if (!numberElement) return;

        const targetText = numberElement.textContent || '';
        const targetNumber = parseInt(targetText.replace(/[^0-9]/g, ''));
        const suffix = targetText.replace(/[0-9]/g, '');

        if (isNaN(targetNumber)) return;

        const obj = { value: 0 };
        gsap.to(obj, {
          value: targetNumber,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: stat,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          onUpdate: function () {
            numberElement.textContent =
              Math.floor(obj.value).toLocaleString() + suffix;
          },
        });
      });
    };

    gsap.fromTo(
      statsArray,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          onEnter: animateNumbers,
        },
      }
    );
  }, []);

  const stats: Stat[] = [
    {
      number: '10000+',
      label: 'Happy Students',
      icon: <Users className="h-8 w-8" />,
    },
    {
      number: '100000+',
      label: 'Mock Tests',
      icon: <FileText className="h-8 w-8" />,
    },
    {
      number: '50000+',
      label: 'Video Lectures',
      icon: <Video className="h-8 w-8" />,
    },
    {
      number: '50000+',
      label: 'Practice Papers',
      icon: <BookOpen className="h-8 w-8" />,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-slate-50 overflow-hidden"
    >
      {/* 3D Chart Elements */}
      <div className="absolute top-10 left-10 opacity-10 hidden lg:block">
        <Chart3D className="scale-75" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-10 hidden lg:block">
        <Chart3D className="scale-75" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Chart3D className="scale-75" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-slate-900">
            A Platform Trusted by Students
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Syntaxim aims to transform not just through words, but provide results
            with numbers!
          </p>
        </div>

        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <div key={index} className="relative">
              <div className="h-full p-8 bg-white border border-slate-200 rounded-lg text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-lg bg-slate-100">
                    <div className="text-slate-900">{stat.icon}</div>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="stat-number text-3xl md:text-4xl font-bold mb-1 text-slate-900">
                    {stat.number}
                  </div>
                </div>

                <div className="text-base font-medium text-slate-600">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-slate-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-slate-800 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default PlatformStats;
