import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Database, Brain, BarChart3 } from 'lucide-react';
import CodeCube3D from './CodeCube3D';

gsap.registerPlugin(ScrollTrigger);

interface Category {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  subCategories?: string[];
}

const ExamCategories = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const categories = categoriesRef.current?.children;
    if (!categories) return;

    gsap.fromTo(
      categories,
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

  const categories: Category[] = [
    {
      id: 'fullstack',
      name: 'Full Stack Development',
      description: 'Master modern web development',
      icon: <Code className="h-6 w-6" />,
      subCategories: ['React.js', 'Node.js', 'MongoDB', 'PostgreSQL'],
    },
    {
      id: 'python-ds',
      name: 'Python Data Science',
      description: 'Dive deep into data science',
      icon: <Database className="h-6 w-6" />,
      subCategories: ['Python', 'Pandas', 'NumPy', 'Data Visualization'],
    },
    {
      id: 'machine-learning',
      name: 'Machine Learning',
      description: 'Build intelligent systems',
      icon: <Brain className="h-6 w-6" />,
      subCategories: ['Deep Learning', 'TensorFlow', 'PyTorch', 'NLP'],
    },
    {
      id: 'data-analytics',
      name: 'Data Analytics',
      description: 'Transform data into insights',
      icon: <BarChart3 className="h-6 w-6" />,
      subCategories: ['Power BI', 'Tableau', 'SQL', 'Excel'],
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-white overflow-hidden"
    >
      {/* 3D Background Element */}
      <div className="absolute top-20 right-10 opacity-10 hidden lg:block">
        <CodeCube3D className="scale-75" />
      </div>
      <div className="absolute bottom-20 left-10 opacity-10 hidden lg:block">
        <CodeCube3D className="scale-75" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <CodeCube3D className="scale-50" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-slate-900">
            Course Categories
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Syntaxim is preparing students for multiple tech domains. Find the one
            you are preparing for.
          </p>
        </div>

        <div
          ref={categoriesRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {categories.map((category, index) => (
            <Link
              key={index}
              to={`/course/${category.id}`}
              className="group"
            >
              <div className="h-full p-8 border border-slate-200 rounded-lg hover:border-slate-900 hover:shadow-lg transition-all duration-300 bg-white">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 rounded-lg bg-slate-100 group-hover:bg-slate-900 transition-colors">
                    <div className="text-slate-900 group-hover:text-white transition-colors">
                      {category.icon}
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-slate-900 mb-2 text-center">
                  {category.name}
                </h3>

                <p className="text-slate-600 text-sm text-center mb-4">
                  {category.description}
                </p>

                {category.subCategories && category.subCategories.length > 0 && (
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2 justify-center">
                      {category.subCategories.slice(0, 2).map((sub, subIndex) => (
                        <span
                          key={subIndex}
                          className="px-3 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700"
                        >
                          {sub}
                        </span>
                      ))}
                      {category.subCategories.length > 2 && (
                        <span className="px-3 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-600">
                          +{category.subCategories.length - 2}
                        </span>
                      )}
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-center gap-2 text-sm font-medium text-slate-900 group-hover:gap-3 transition-all">
                  <span>Explore Category</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-slate-800 transition-colors"
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
