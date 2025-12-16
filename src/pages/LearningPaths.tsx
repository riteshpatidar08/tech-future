import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import AnimatedBackground from '@/components/AnimatedBackground';
import Footer from '@/components/Footer';
import BackgroundPattern from '@/components/BackgroundPattern';
import {
  Code,
  Database,
  Brain,
  BarChart3,
  Smartphone,
  Sparkles,
  BookOpen,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Star,
  TrendingUp,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const LearningPaths = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const pathsRef = useRef<HTMLDivElement>(null);

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

    // Paths animation
    if (pathsRef.current) {
      gsap.fromTo(
        pathsRef.current.children,
        { y: 100, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: pathsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, []);

  const learningPaths = [
    {
      id: 'python',
      name: 'Python Development Path',
      description:
        'Start with Python fundamentals and progress to web development, data science, and AI applications.',
      icon: Database,
      gradient: 'from-slate-600 to-slate-800',
      courses: [
        {
          id: 'python-core',
          title: 'Python Core',
          path: '/course/python-core',
          duration: '3 months',
          level: 'Beginner',
          description: 'Master Python programming from fundamentals to advanced concepts.',
        },
        {
          id: 'python-django',
          title: 'Python with Web Dev Django',
          path: '/course/python-django',
          duration: '5 months',
          level: 'Intermediate',
          description: 'Build powerful web applications with Django framework.',
        },
        {
          id: 'python-ds',
          title: 'Python Data Science',
          path: '/course/python-ds',
          duration: '4 months',
          level: 'Intermediate',
          description: 'Dive deep into data science with Python, pandas, and NumPy.',
        },
        {
          id: 'ai-python',
          title: 'AI with Python',
          path: '/course/ai-python',
          duration: '5 months',
          level: 'Advanced',
          description: 'Learn artificial intelligence concepts and build AI applications.',
        },
        {
          id: 'genai-llmops',
          title: 'GenAI LLMOps',
          path: '/course/genai-llmops',
          duration: '6 months',
          level: 'Advanced',
          description: 'Master Generative AI and Large Language Model Operations.',
        },
      ],
    },
    {
      id: 'web-dev',
      name: 'Web Development Path',
      description:
        'Learn modern web development from frontend to backend, and become a full-stack developer.',
      icon: Code,
      gradient: 'from-blue-600 to-slate-700',
      courses: [
        {
          id: 'frontend',
          title: 'Frontend Development',
          path: '/course/frontend',
          duration: '4 months',
          level: 'Beginner',
          description: 'Master modern frontend development with React, Next.js, and TypeScript.',
        },
        {
          id: 'backend',
          title: 'Backend Development',
          path: '/course/backend',
          duration: '5 months',
          level: 'Intermediate',
          description: 'Master server-side development with Node.js, Express, and databases.',
        },
        {
          id: 'fullstack',
          title: 'Full Stack Development',
          path: '/course/fullstack',
          duration: '6 months',
          level: 'Advanced',
          description: 'Master modern full-stack web development with Next.js 14+ and AI integration.',
        },
      ],
    },
    {
      id: 'data-science',
      name: 'Data Science & Analytics Path',
      description:
        'Transform data into insights. Learn analytics, visualization, and business intelligence.',
      icon: BarChart3,
      gradient: 'from-slate-600 to-blue-600',
      courses: [
        {
          id: 'python-ds',
          title: 'Python Data Science',
          path: '/course/python-ds',
          duration: '4 months',
          level: 'Intermediate',
          description: 'Dive deep into data science with Python, pandas, and NumPy.',
        },
        {
          id: 'data-analytics',
          title: 'Data Analytics',
          path: '/course/data-analytics',
          duration: '6 months',
          level: 'Beginner',
          description: 'Transform raw data into actionable insights with Excel, Power BI, and Tableau.',
        },
        {
          id: 'bi',
          title: 'Business Intelligence',
          path: '/course/bi',
          duration: '4 months',
          level: 'Intermediate',
          description: 'Master BI tools & data visualization with Power BI, Tableau, and QlikView.',
        },
        {
          id: 'big-data',
          title: 'Big Data Analytics',
          path: '/course/big-data',
          duration: '5 months',
          level: 'Advanced',
          description: 'Learn to process and analyze massive datasets using Hadoop, Spark, and Kafka.',
        },
      ],
    },
    {
      id: 'ai-ml',
      name: 'AI & Machine Learning Path',
      description:
        'Build intelligent systems. Learn machine learning, deep learning, and AI applications.',
      icon: Brain,
      gradient: 'from-blue-600 to-slate-800',
      courses: [
        {
          id: 'machine-learning',
          title: 'Machine Learning',
          path: '/course/machine-learning',
          duration: '5 months',
          level: 'Intermediate',
          description: 'Build intelligent systems with ML algorithms and deep neural networks.',
        },
        {
          id: 'ai-python',
          title: 'AI with Python',
          path: '/course/ai-python',
          duration: '5 months',
          level: 'Advanced',
          description: 'Learn artificial intelligence concepts and build AI applications.',
        },
        {
          id: 'genai-llmops',
          title: 'GenAI LLMOps',
          path: '/course/genai-llmops',
          duration: '6 months',
          level: 'Advanced',
          description: 'Master Generative AI and Large Language Model Operations.',
        },
      ],
    },
    {
      id: 'mobile',
      name: 'Mobile Development Path',
      description:
        'Build cross-platform mobile applications for iOS and Android with React Native.',
      icon: Smartphone,
      gradient: 'from-slate-700 to-slate-900',
      courses: [
        {
          id: 'react-native',
          title: 'Mobile App Development with React Native',
          path: '/course/react-native',
          duration: '5 months',
          level: 'Intermediate',
          description: 'Build cross-platform mobile applications with React Native.',
        },
      ],
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'Intermediate':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Advanced':
        return 'bg-purple-100 text-purple-700 border-purple-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <AnimatedBackground />
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-20 pb-12 md:pb-16 overflow-hidden">
        <BackgroundPattern variant="dots" opacity={0.03} />

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div ref={headerRef} className="text-center mt-8 mb-6 md:mb-8">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-slate-900 text-white">
                <BookOpen className="h-5 w-5" />
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
                Learning Paths
              </h1>
            </div>
            <p className="text-xs md:text-sm text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Structured learning paths designed by industry experts. Follow a
              clear roadmap from beginner to job-ready professional.
            </p>
          </div>
        </div>
      </section>

      {/* Learning Paths Section */}
      <section className="relative py-12 md:py-16 bg-white overflow-hidden">
        <BackgroundPattern variant="grid-dots" opacity={0.025} />

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div ref={pathsRef} className="space-y-12 md:space-y-16">
            {learningPaths.map((path, pathIndex) => {
              const IconComponent = path.icon;
              return (
                <div
                  key={pathIndex}
                  className="bg-white rounded-xl border-2 border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  {/* Path Header */}
                  <div className="bg-gradient-to-r from-slate-50 to-slate-100 p-6 border-b-2 border-slate-200">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-slate-900 flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                          {path.name}
                        </h2>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {path.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Courses List */}
                  <div className="p-6">
                    <div className="space-y-4">
                      {path.courses.map((course, courseIndex) => (
                        <Link
                          key={courseIndex}
                          to={course.path}
                          className="block group"
                        >
                          <div className="flex items-start gap-4 p-4 rounded-lg border-2 border-slate-200 hover:border-slate-900 bg-white hover:bg-slate-50 transition-all duration-300">
                            {/* Step Number */}
                            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold text-sm group-hover:scale-110 transition-transform">
                              {courseIndex + 1}
                            </div>

                            {/* Course Info */}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between gap-4 mb-2">
                                <div className="flex-1">
                                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1 group-hover:text-slate-700 transition-colors">
                                    {course.title}
                                  </h3>
                                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                    {course.description}
                                  </p>
                                </div>
                                <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-slate-900 transition-colors flex-shrink-0 mt-1" />
                              </div>

                              {/* Course Meta */}
                              <div className="flex flex-wrap items-center gap-3 mt-3">
                                <div className="flex items-center gap-1.5 text-xs text-slate-600">
                                  <Clock className="h-3.5 w-3.5" />
                                  <span className="font-medium">{course.duration}</span>
                                </div>
                                <div
                                  className={`px-2.5 py-1 rounded-md text-xs font-semibold border ${getLevelColor(
                                    course.level
                                  )}`}
                                >
                                  {course.level}
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12 md:mt-16">
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-8 md:p-12 border-2 border-slate-200">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Ready to start your journey?
              </h2>
              <p className="text-sm md:text-base text-slate-600 mb-6 max-w-2xl mx-auto">
                Choose a learning path that matches your career goals and start
                building your skills today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/courses"
                  className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-lg font-bold text-sm transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <BookOpen className="h-4 w-4" />
                  Explore All Courses
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-900 px-8 py-3 rounded-lg font-bold text-sm border-2 border-slate-900 transition-all duration-300"
                >
                  <TrendingUp className="h-4 w-4" />
                  Get Career Guidance
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LearningPaths;

