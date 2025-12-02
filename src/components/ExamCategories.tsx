import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Database, Brain, BarChart3, GraduationCap } from 'lucide-react';
import HandDrawnArrow from './HandDrawnArrow';
import EducationIllustration from './EducationIllustration';

gsap.registerPlugin(ScrollTrigger);

interface Category {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  subCategories?: string[];
  image?: string;
}

const ExamCategories = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const categories = categoriesRef.current?.children;
    if (!categories) return;

    gsap.fromTo(categories,
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

    // Floating animation
    gsap.to('.category-card', {
      y: (i) => -10 + (i * 2),
      rotation: (i) => (i % 2 === 0 ? -1 : 1),
      duration: 3 + Math.random() * 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: 0.3
    });
  }, []);

  // Sample categories - user will replace with actual course data
  const categories: Category[] = [
    {
      id: 'fullstack',
      name: 'Full Stack Development',
      description: 'Master modern web development',
      icon: <Code className="h-8 w-8" />,
      gradient: 'from-blue-600 to-cyan-600',
      subCategories: ['React.js', 'Node.js', 'MongoDB', 'PostgreSQL']
    },
    {
      id: 'python-ds',
      name: 'Python Data Science',
      description: 'Dive deep into data science',
      icon: <Database className="h-8 w-8" />,
      gradient: 'from-purple-600 to-pink-600',
      subCategories: ['Python', 'Pandas', 'NumPy', 'Data Visualization']
    },
    {
      id: 'machine-learning',
      name: 'Machine Learning',
      description: 'Build intelligent systems',
      icon: <Brain className="h-8 w-8" />,
      gradient: 'from-cyan-600 to-blue-600',
      subCategories: ['Deep Learning', 'TensorFlow', 'PyTorch', 'NLP']
    },
    {
      id: 'data-analytics',
      name: 'Data Analytics',
      description: 'Transform data into insights',
      icon: <BarChart3 className="h-8 w-8" />,
      gradient: 'from-orange-600 to-yellow-600',
      subCategories: ['Power BI', 'Tableau', 'SQL', 'Excel']
    }
  ];

  const getCategoryColors = (gradient: string) => {
    if (gradient.includes('blue-600')) return { bg: 'rgba(59,130,246,0.08)', border: 'rgba(59,130,246,0.2)', icon: '#3B82F6' };
    if (gradient.includes('purple-600')) return { bg: 'rgba(147,51,234,0.08)', border: 'rgba(147,51,234,0.2)', icon: '#9333EA' };
    if (gradient.includes('cyan-600')) return { bg: 'rgba(8,145,178,0.08)', border: 'rgba(8,145,178,0.2)', icon: '#0891B2' };
    if (gradient.includes('orange-600')) return { bg: 'rgba(234,88,12,0.08)', border: 'rgba(234,88,12,0.2)', icon: '#EA580C' };
    return { bg: 'rgba(59,130,246,0.08)', border: 'rgba(59,130,246,0.2)', icon: '#3B82F6' };
  };

  return (
    <section ref={sectionRef} className="relative py-20 md:py-28 bg-white overflow-hidden">
      {/* Decorative illustrations */}
      <div className="absolute top-10 left-10 opacity-10 hidden lg:block transform rotate-12">
        <EducationIllustration type="coding" size={120} />
      </div>
      <div className="absolute bottom-10 right-10 opacity-10 hidden lg:block transform -rotate-12">
        <EducationIllustration type="certificate" size={100} />
      </div>

      {/* Hand-drawn arrows */}
      <div className="absolute top-1/3 right-10 hidden xl:block animate-float transform rotate-12">
        <HandDrawnArrow direction="left" color="#3776AB" className="w-20 h-20" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4"
              style={{ 
                fontFamily: "'Dancing Script', 'Pacifico', cursive",
                background: 'linear-gradient(to right, #1e40af, #06b6d4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
            Course Categories
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
            Codex is preparing students for multiple tech domains. Scroll down to find the one you are preparing for.
          </p>
        </div>

        <div ref={categoriesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {categories.map((category, index) => {
            const colors = getCategoryColors(category.gradient);
            return (
              <Link
                key={index}
                to={`/course/${category.id}`}
                className="category-card group"
              >
                <div
                  className={`relative h-full p-6 rounded-3xl border-2 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105`}
                  style={{ 
                    transform: `rotate(${index % 4 === 0 ? '-2deg' : index % 4 === 1 ? '2deg' : index % 4 === 2 ? '-1deg' : '1deg'})`,
                    background: `linear-gradient(135deg, ${colors.bg}, rgba(255,255,255,0.9))`,
                    borderColor: colors.border
                  }}
                >
                  {/* Icon */}
                  <div className="mb-6 flex justify-center">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${category.gradient} shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                      <div className="text-white">
                        {category.icon}
                      </div>
                    </div>
                  </div>

                  {/* Category name */}
                  <h3 className="text-base md:text-lg font-bold text-slate-900 mb-2 text-center group-hover:text-blue-600 transition-colors"
                      style={{ fontFamily: "'Dancing Script', 'Pacifico', cursive" }}>
                    {category.name}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-xs md:text-sm text-center mb-3">
                    {category.description}
                  </p>

                  {/* Sub-categories */}
                  {category.subCategories && category.subCategories.length > 0 && (
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2 justify-center">
                        {category.subCategories.slice(0, 2).map((sub, subIndex) => (
                          <span
                            key={subIndex}
                            className="px-3 py-1 rounded-full text-xs font-medium bg-white border"
                            style={{ borderColor: colors.border, color: colors.icon }}
                          >
                            {sub}
                          </span>
                        ))}
                        {category.subCategories.length > 2 && (
                          <span className="px-3 py-1 rounded-full text-xs font-medium bg-white border text-slate-600"
                                style={{ borderColor: colors.border }}>
                            +{category.subCategories.length - 2}
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Explore button */}
                  <div className="flex items-center justify-center gap-2 text-sm font-semibold mt-4"
                       style={{ color: colors.icon }}>
                    <span>Explore Category</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>

                  {/* Decorative illustration */}
                  <div className="absolute bottom-2 right-2 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                    <EducationIllustration 
                      type={index === 0 ? 'coding' : index === 1 ? 'book' : index === 2 ? 'brain' : 'certificate'} 
                      size={50} 
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-3xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            style={{ fontFamily: "'Dancing Script', 'Pacifico', cursive", fontSize: '1.1em' }}
          >
            View All Categories
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExamCategories;

