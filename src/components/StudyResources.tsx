import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, FileText, BookMarked } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import EducationIllustration from './EducationIllustration';
import HandDrawnArrow from './HandDrawnArrow';

gsap.registerPlugin(ScrollTrigger);

const StudyResources = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = cardsRef.current?.children;
    if (!cards) return;

    gsap.fromTo(cards,
      { y: 100, opacity: 0, scale: 0.8, rotation: (i) => (i % 2 === 0 ? -5 : 5) },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        rotation: (i) => (i % 2 === 0 ? -2 : 2),
        duration: 1,
        stagger: 0.2,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );

    // Floating animation for cards
    gsap.to('.resource-card', {
      y: (i) => -10 + (i * 2),
      rotation: (i) => (i % 2 === 0 ? -1 : 1),
      duration: 3 + Math.random() * 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: 0.3
    });
  }, []);

  const resources = [
    {
      title: 'Reference Books',
      description: 'Our experts have created thorough study materials that break down complicated concepts into easily understandable content',
      icon: BookOpen,
      gradient: 'from-blue-600 to-cyan-600',
      bgGradient: 'from-blue-50 to-cyan-50',
      borderColor: 'border-blue-200',
      iconColor: '#3776AB',
      link: '/resources'
    },
    {
      title: 'Study Notes',
      description: 'Use Codex\'s detailed study materials that simplify complex ideas into easily understandable language',
      icon: FileText,
      gradient: 'from-purple-600 to-pink-600',
      bgGradient: 'from-purple-50 to-pink-50',
      borderColor: 'border-purple-200',
      iconColor: '#7F6DFF',
      link: '/resources'
    },
    {
      title: 'Practice Materials',
      description: 'Unlock academic excellence with Codex\'s practice materials which provide you step-by-step solutions',
      icon: BookMarked,
      gradient: 'from-orange-600 to-yellow-600',
      bgGradient: 'from-orange-50 to-yellow-50',
      borderColor: 'border-orange-200',
      iconColor: '#F89820',
      link: '/resources'
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-20 md:py-28 bg-white overflow-hidden">
      {/* Decorative illustrations */}
      <div className="absolute top-10 left-10 opacity-10 hidden lg:block transform rotate-12">
        <EducationIllustration type="book" size={120} />
      </div>
      <div className="absolute bottom-10 right-10 opacity-10 hidden lg:block transform -rotate-12">
        <EducationIllustration type="lightbulb" size={100} />
      </div>
      <div className="absolute top-1/2 left-5 opacity-8 hidden xl:block transform rotate-45">
        <EducationIllustration type="coding" size={90} />
      </div>

      {/* Hand-drawn arrows */}
      <div className="absolute top-20 right-20 hidden xl:block animate-float transform rotate-12">
        <HandDrawnArrow direction="left" color="#3776AB" className="w-20 h-20" />
      </div>
      <div className="absolute bottom-20 left-20 hidden xl:block animate-float transform -rotate-12" style={{ animationDelay: '1s' }}>
        <HandDrawnArrow direction="right" color="#00D4AA" className="w-16 h-16" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6"
              style={{ 
                fontFamily: "'Dancing Script', 'Pacifico', cursive",
                background: 'linear-gradient(to right, #1e40af, #06b6d4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
            Study Resources
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto">
            A diverse array of learning materials to enhance your educational journey.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <Link
                key={index}
                to={resource.link}
                className="resource-card group"
              >
                <div
                  className={`relative h-full p-8 rounded-3xl border-2 ${resource.borderColor} bg-gradient-to-br ${resource.bgGradient} shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-rotate-1`}
                  style={{ transform: `rotate(${index % 2 === 0 ? '-2deg' : '2deg'})` }}
                >
                  {/* Icon */}
                  <div className="mb-6 flex justify-center">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${resource.gradient} shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 text-center"
                      style={{ 
                        fontFamily: "'Dancing Script', 'Pacifico', cursive"
                      }}>
                    {resource.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-base md:text-lg leading-relaxed text-center">
                    {resource.description}
                  </p>

                  {/* Decorative illustration */}
                  <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                    <EducationIllustration 
                      type={index === 0 ? 'book' : index === 1 ? 'certificate' : 'coding'} 
                      size={80} 
                    />
                  </div>

                  {/* Arrow indicator */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <HandDrawnArrow direction="right" color={resource.iconColor} className="w-12 h-12" />
                  </div>
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

