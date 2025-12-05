import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, BookOpen, Video, FileText, Award, Clock } from 'lucide-react';
import HandDrawnArrow from './HandDrawnArrow';
import EducationIllustration from './EducationIllustration';

gsap.registerPlugin(ScrollTrigger);

interface Stat {
  number: string;
  label: string;
  icon: React.ReactNode;
  gradient: string;
  iconColor: string;
}

const PlatformStats = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stats = statsRef.current?.children;
    if (!stats) return;

    // Convert HTMLCollection to Array
    const statsArray = Array.from(stats);

    // Animate numbers counting up
    const animateNumbers = () => {
      statsArray.forEach((stat, index) => {
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
      { y: 100, opacity: 0, scale: 0.5 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.15,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          onEnter: animateNumbers,
        },
      }
    );

    // Floating animation
    gsap.to('.stat-item', {
      y: (i) => -10 + i * 2,
      rotation: (i) => (i % 2 === 0 ? -1 : 1),
      duration: 3 + Math.random() * 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: 0.2,
    });
  }, []);

  // Sample stats - user will replace with actual data
  const stats: Stat[] = [
    {
      number: '10000+',
      label: 'Happy Students',
      icon: <Users className="h-10 w-10" />,
      gradient: 'from-blue-600 to-cyan-600',
      iconColor: '#3776AB',
    },
    {
      number: '100000+',
      label: 'Mock Tests',
      icon: <FileText className="h-10 w-10" />,
      gradient: 'from-purple-600 to-pink-600',
      iconColor: '#7F6DFF',
    },
    {
      number: '50000+',
      label: 'Video Lectures',
      icon: <Video className="h-10 w-10" />,
      gradient: 'from-cyan-600 to-blue-600',
      iconColor: '#00D4AA',
    },
    {
      number: '50000+',
      label: 'Practice Papers',
      icon: <BookOpen className="h-10 w-10" />,
      gradient: 'from-orange-600 to-yellow-600',
      iconColor: '#F89820',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 bg-white overflow-hidden"
    >
      {/* Decorative illustrations */}
      <div className="absolute top-10 left-10 opacity-10 hidden lg:block transform rotate-12">
        <EducationIllustration type="trophy" size={120} />
      </div>
      <div className="absolute bottom-10 right-10 opacity-10 hidden lg:block transform -rotate-12">
        <EducationIllustration type="certificate" size={100} />
      </div>

      {/* Hand-drawn arrows */}
      <div className="absolute top-1/4 right-10 hidden xl:block animate-float transform rotate-12">
        <HandDrawnArrow
          direction="left"
          color="#3776AB"
          className="w-20 h-20"
        />
      </div>
      <div
        className="absolute bottom-1/4 left-10 hidden xl:block animate-float transform -rotate-12"
        style={{ animationDelay: '1s' }}
      >
        <HandDrawnArrow
          direction="right"
          color="#00D4AA"
          className="w-16 h-16"
        />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-[#0F172A]"
            style={{
              fontFamily:
                "'Dancing Script', 'Pacifico', 'Brush Script MT', cursive",
              fontWeight: 700,
            }}
          >
            A Platform Trusted by Students
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
            Codex aims to transform not just through words, but provide results
            with numbers!
          </p>
        </div>

        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {stats.map((stat, index) => (
            <div key={index} className="stat-item relative">
              <div
                className={`relative h-full p-6 md:p-8 rounded-3xl border-2 bg-gradient-to-br shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 text-center`}
                style={{
                  transform: `rotate(${index % 2 === 0 ? '-2deg' : '2deg'})`,
                  borderColor: 'rgba(59, 130, 246, 0.2)',
                  background: `linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(6, 182, 212, 0.05))`,
                }}
              >
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div
                    className={`p-4 rounded-2xl bg-gradient-to-br ${stat.gradient} shadow-lg`}
                  >
                    <div style={{ color: 'white' }}>{stat.icon}</div>
                  </div>
                </div>

                {/* Number */}
                <div className="mb-3">
                  <div
                    className="stat-number text-2xl md:text-3xl lg:text-4xl font-bold mb-1"
                    style={{
                      background: `linear-gradient(to right, ${stat.iconColor}, ${stat.iconColor}dd)`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {stat.number}
                  </div>
                </div>

                {/* Label */}
                <div className="text-sm md:text-base font-semibold text-slate-700">
                  {stat.label}
                </div>

                {/* Decorative illustration */}
                <div className="absolute bottom-2 right-2 opacity-5 hover:opacity-10 transition-opacity duration-300">
                  <EducationIllustration
                    type={
                      index === 0
                        ? 'student'
                        : index === 1
                        ? 'book'
                        : index === 2
                        ? 'online-learning'
                        : 'certificate'
                    }
                    size={40}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button
            className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-3xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            style={{
              fontFamily:
                "'Dancing Script', 'Pacifico', 'Brush Script MT', cursive",
              fontWeight: 700,
              fontSize: '1.1em',
            }}
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default PlatformStats;
