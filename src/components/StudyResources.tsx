import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, FileText, BookMarked } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Book3D from './Book3D';
import BackgroundPattern from './BackgroundPattern';

gsap.registerPlugin(ScrollTrigger);

const StudyResources = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = cardsRef.current?.children;
    if (!cards) return;

    gsap.fromTo(
      cards,
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
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  const resources = [
    {
      title: 'Reference Books',
      description:
        'Our experts have created thorough study materials that break down complicated concepts into easily understandable content',
      icon: BookOpen,
      link: '/resources',
    },
    {
      title: 'Study Notes',
      description:
        "Use Syntaxim's detailed study materials that simplify complex ideas into easily understandable language",
      icon: FileText,
      link: '/resources',
    },
    {
      title: 'Practice Materials',
      description:
        "Unlock academic excellence with Syntaxim's practice materials which provide you step-by-step solutions",
      icon: BookMarked,
      link: '/resources',
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 bg-slate-50 overflow-hidden">
      {/* Background Pattern */}
      <BackgroundPattern variant="grid" opacity={0.02} />
      
      {/* 3D Book Elements */}
      <div className="absolute top-20 right-20 opacity-10 hidden lg:block">
        <Book3D className="scale-75" />
      </div>
      <div className="absolute bottom-20 left-20 opacity-10 hidden lg:block">
        <Book3D className="scale-75" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Book3D className="scale-75" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-slate-900">
            Study Resources
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Access comprehensive study materials designed to help you excel in
            your learning journey.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {resources.map((resource, index) => {
            const IconComponent = resource.icon;
            return (
              <Link key={index} to={resource.link} className="group">
                <div className="h-full p-8 border border-slate-200 rounded-lg bg-white hover:border-slate-900 hover:shadow-lg transition-all duration-300">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 rounded-lg bg-slate-100 group-hover:bg-slate-900 transition-colors">
                      <IconComponent className="h-8 w-8 text-slate-900 group-hover:text-white transition-colors" />
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-slate-900 mb-3 text-center">
                    {resource.title}
                  </h3>

                  <p className="text-slate-600 text-center leading-relaxed">
                    {resource.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StudyResources;
