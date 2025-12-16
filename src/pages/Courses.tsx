import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import CourseCard from '@/components/CourseCard';
import Navigation from '@/components/Navigation';
import AnimatedBackground from '@/components/AnimatedBackground';
import Footer from '@/components/Footer';
import StudyResources from '@/components/StudyResources';
import Testimonials from '@/components/Testimonials';
import {
  Code,
  Database,
  Brain,
  BarChart3,
  Smartphone,
  Sparkles,
  ChevronRight,
} from 'lucide-react';
import BackgroundPattern from '@/components/BackgroundPattern';

gsap.registerPlugin(ScrollTrigger);

const Courses = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const coursesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Header animation
    gsap.fromTo(
      headerRef.current?.children,
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

    // Course cards animation on scroll
    gsap.fromTo(
      '.course-card',
      { y: 100, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: coursesRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
        },
      }
    );
  }, []);

  const courseCategories = [
    {
      name: 'Python',
      icon: Database,
      courses: [
        {
          id: 'python-core',
          title: 'Python Core',
          description:
            'Master Python programming from fundamentals to advanced concepts. Learn core Python syntax, data structures, and best practices.',
          duration: '3 months',
          students: '180+ students',
          rating: '4.9',
          icon: <Database className="h-6 w-6" />,
          gradient: 'from-slate-600 to-slate-800',
          features: [
            'Python Fundamentals',
            'Data Structures',
            'OOP',
            'File Handling',
            'Testing',
          ],
        },
        {
          id: 'python-django',
          title: 'Python with Web Dev Django',
          description:
            'Build powerful web applications with Django framework. Learn to create scalable, secure, and maintainable web applications.',
          duration: '5 months',
          students: '170+ students',
          rating: '4.8',
          icon: <Code className="h-6 w-6" />,
          gradient: 'from-slate-700 to-slate-900',
          features: [
            'Django Framework',
            'RESTful APIs',
            'Database ORM',
            'Authentication',
            'Deployment',
          ],
        },
        {
          id: 'genai-llmops',
          title: 'GenAI LLMOps',
          description:
            'Master Generative AI and Large Language Model Operations. Learn to build, deploy, and manage AI applications with LLMs.',
          duration: '6 months',
          students: '150+ students',
          rating: '4.9',
          icon: <Sparkles className="h-6 w-6" />,
          gradient: 'from-slate-600 to-blue-600',
          features: [
            'Large Language Models',
            'Prompt Engineering',
            'Model Fine-tuning',
            'LLM Deployment',
            'AI Applications',
          ],
        },
        {
          id: 'python-ds',
          title: 'Python Data Science',
          description:
            'Dive deep into data science with Python. Learn pandas, NumPy, and advanced statistical analysis techniques.',
          duration: '4 months',
          students: '175+ students',
          rating: '4.8',
          icon: <Database className="h-6 w-6" />,
          gradient: 'from-blue-600 to-slate-700',
          features: [
            'Python Programming',
            'Pandas & NumPy',
            'Data Visualization',
            'Statistical Analysis',
            'Jupyter Notebooks',
          ],
        },
        {
          id: 'ai-python',
          title: 'AI with Python',
          description:
            'Learn artificial intelligence concepts and implementation using Python. Build intelligent systems and AI applications.',
          duration: '5 months',
          students: '160+ students',
          rating: '4.9',
          icon: <Brain className="h-6 w-6" />,
          gradient: 'from-blue-600 to-indigo-600',
          features: [
            'AI Fundamentals',
            'Neural Networks',
            'TensorFlow & PyTorch',
            'NLP',
            'Computer Vision',
          ],
        },
      ],
    },
    {
      name: 'Web Development',
      icon: Code,
      courses: [
        {
          id: 'fullstack',
          title: 'Full Stack Development',
          description:
            'Master modern full-stack web development with Next.js 14+, TypeScript, React Server Components, and AI integration.',
          duration: '6 months',
          students: '200+ students',
          rating: '4.9',
          icon: <Code className="h-6 w-6" />,
          gradient: 'from-blue-600 to-slate-700',
          features: [
            'Next.js 14+ & TypeScript',
            'React Server Components',
            'Node.js & Express',
            'MongoDB & PostgreSQL',
            'AI Integration',
          ],
        },
        {
          id: 'frontend',
          title: 'Frontend Development',
          description:
            'Master modern frontend development with React, Next.js, and modern UI frameworks. Build responsive and interactive web applications.',
          duration: '4 months',
          students: '190+ students',
          rating: '4.9',
          icon: <Code className="h-6 w-6" />,
          gradient: 'from-blue-600 to-cyan-600',
          features: [
            'React.js & Next.js',
            'TypeScript & JavaScript',
            'Modern UI Frameworks',
            'State Management',
            'Responsive Design',
          ],
        },
        {
          id: 'backend',
          title: 'Backend Development',
          description:
            'Master server-side development with Node.js, Express, databases, and APIs. Build scalable and secure backend systems.',
          duration: '5 months',
          students: '180+ students',
          rating: '4.8',
          icon: <Database className="h-6 w-6" />,
          gradient: 'from-slate-700 to-blue-600',
          features: [
            'Node.js & Express',
            'RESTful APIs',
            'MongoDB & PostgreSQL',
            'Authentication',
            'API Security',
          ],
        },
      ],
    },
    {
      name: 'Data Science & Analytics',
      icon: BarChart3,
      courses: [
        {
          id: 'python-ds',
          title: 'Python Data Science',
          description:
            'Dive deep into data science with Python. Learn pandas, NumPy, and advanced statistical analysis techniques.',
          duration: '4 months',
          students: '175+ students',
          rating: '4.8',
          icon: <Database className="h-6 w-6" />,
          gradient: 'from-blue-600 to-slate-700',
          features: [
            'Python Programming',
            'Pandas & NumPy',
            'Data Visualization',
            'Statistical Analysis',
            'Jupyter Notebooks',
          ],
        },
        {
          id: 'data-analytics',
          title: 'Data Analytics',
          description:
            'Transform raw data into actionable insights. Master visualization tools and business intelligence.',
          duration: '6 months',
          students: '200+ students',
          rating: '4.9',
          icon: <BarChart3 className="h-6 w-6" />,
          gradient: 'from-slate-600 to-blue-600',
          features: [
            'Excel & Power BI',
            'SQL & Databases',
            'Tableau Visualization',
            'Business Intelligence',
            'Reporting & Dashboards',
          ],
        },
        {
          id: 'big-data',
          title: 'Big Data Analytics',
          description:
            'Learn to process and analyze massive datasets using Hadoop, Spark, Kafka, and cloud platforms.',
          duration: '5 months',
          students: '155+ students',
          rating: '4.8',
          icon: <Database className="h-6 w-6" />,
          gradient: 'from-blue-600 to-indigo-600',
          features: [
            'Hadoop Ecosystem',
            'Apache Spark',
            'Apache Kafka',
            'Cloud Platforms',
            'Data Pipelines',
          ],
        },
        {
          id: 'bi',
          title: 'Business Intelligence',
          description:
            'Master BI tools & data visualization. Create powerful dashboards using Power BI, Tableau, and QlikView.',
          duration: '4 months',
          students: '165+ students',
          rating: '4.7',
          icon: <BarChart3 className="h-6 w-6" />,
          gradient: 'from-blue-600 to-slate-800',
          features: [
            'Power BI',
            'Tableau',
            'QlikView',
            'Data Modeling',
            'Dashboard Design',
          ],
        },
      ],
    },
    {
      name: 'AI & Machine Learning',
      icon: Brain,
      courses: [
        {
          id: 'machine-learning',
          title: 'Machine Learning',
          description:
            'Build intelligent systems with ML algorithms. From supervised learning to deep neural networks.',
          duration: '5 months',
          students: '185+ students',
          rating: '4.9',
          icon: <Brain className="h-6 w-6" />,
          gradient: 'from-blue-600 to-purple-600',
          features: [
            'Supervised Learning',
            'Deep Learning',
            'TensorFlow & PyTorch',
            'Model Deployment',
            'MLOps',
          ],
        },
        {
          id: 'ai-python',
          title: 'AI with Python',
          description:
            'Learn artificial intelligence concepts and implementation using Python. Build intelligent systems and AI applications.',
          duration: '5 months',
          students: '160+ students',
          rating: '4.9',
          icon: <Brain className="h-6 w-6" />,
          gradient: 'from-blue-600 to-indigo-600',
          features: [
            'AI Fundamentals',
            'Neural Networks',
            'TensorFlow & PyTorch',
            'NLP',
            'Computer Vision',
          ],
        },
      ],
    },
    {
      name: 'Mobile Development',
      icon: Smartphone,
      courses: [
        {
          id: 'react-native',
          title: 'Mobile App Development with React Native',
          description:
            'Build cross-platform mobile applications with React Native. Create native iOS and Android apps with a single codebase.',
          duration: '5 months',
          students: '170+ students',
          rating: '4.8',
          icon: <Smartphone className="h-6 w-6" />,
          gradient: 'from-slate-700 to-slate-900',
          features: [
            'React Native Fundamentals',
            'iOS & Android Development',
            'Native Modules',
            'State Management',
            'App Deployment',
          ],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <AnimatedBackground />
      <Navigation />

      <section className="pt-20 pb-16 md:pb-20 relative overflow-hidden">
        <BackgroundPattern variant="dots" opacity={0.03} />

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div ref={headerRef} className="text-center mt-8 mb-10 md:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Our Training Programs
            </h1>
            <p className="text-xs md:text-sm text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Choose from our comprehensive courses designed to take you from
              beginner to industry-ready professional
            </p>
          </div>

          <div ref={coursesRef} className="space-y-12 md:space-y-16">
            {courseCategories.map((category, categoryIndex) => {
              const CategoryIcon = category.icon;
              return (
                <div key={categoryIndex} className="course-category">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-slate-900">
                      <CategoryIcon className="h-5 w-5 text-white" />
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">
                      {category.name}
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {category.courses.map((course, courseIndex) => (
                      <div key={courseIndex} className="course-card">
                        <CourseCard {...course} courseId={course.id} />
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <StudyResources />
      <Testimonials />

      <Footer />
    </div>
  );
};

export default Courses;
