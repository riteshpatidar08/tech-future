import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CourseCard from './CourseCard';
import {
  Code,
  Database,
  Brain,
  BarChart3,
  Smartphone,
  Sparkles,
} from 'lucide-react';
import CodeCube3D from './CodeCube3D';
import BackgroundPattern from './BackgroundPattern';

gsap.registerPlugin(ScrollTrigger);

const Courses = () => {
  const coursesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      '.courses-header',
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: coursesRef.current,
          start: 'top 80%',
        },
      }
    );

    gsap.fromTo(
      '.course-card',
      { y: 80, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.15,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.courses-grid',
          start: 'top 80%',
        },
      }
    );
  }, []);

  const courses = [
    {
      id: 'frontend',
      title: 'Frontend Development',
      description:
        'Master modern frontend development with React, Next.js, and modern UI frameworks. Build responsive and interactive web applications.',
      duration: '4 months',
      students: '45+ students',
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
      id: 'react-native',
      title: 'Mobile App Development with React Native',
      description:
        'Build cross-platform mobile applications with React Native. Create native iOS and Android apps with a single codebase.',
      duration: '5 months',
      students: '35+ students',
      rating: '4.8',
      icon: <Smartphone className="h-6 w-6" />,
      gradient: 'from-purple-600 to-pink-600',
      features: [
        'React Native Fundamentals',
        'iOS & Android Development',
        'Native Modules & APIs',
        'State Management',
        'App Deployment',
      ],
    },
    {
      id: 'python-core',
      title: 'Python Core',
      description:
        'Master Python programming from fundamentals to advanced concepts. Learn core Python syntax, data structures, and best practices.',
      duration: '3 months',
      students: '60+ students',
      rating: '4.9',
      icon: <Database className="h-6 w-6" />,
      gradient: 'from-green-600 to-emerald-600',
      features: [
        'Python Fundamentals',
        'Data Structures & Algorithms',
        'Object-Oriented Programming',
        'File Handling & Modules',
        'Error Handling & Testing',
      ],
    },
    {
      id: 'python-django',
      title: 'Python with Web Dev Django',
      description:
        'Build powerful web applications with Django framework. Learn to create scalable, secure, and maintainable web applications.',
      duration: '5 months',
      students: '40+ students',
      rating: '4.8',
      icon: <Code className="h-6 w-6" />,
      gradient: 'from-emerald-600 to-teal-600',
      features: [
        'Django Framework',
        'RESTful APIs',
        'Database Models & ORM',
        'Authentication & Security',
        'Deployment & Production',
      ],
    },
    {
      id: 'genai-llmops',
      title: 'GenAI LLMOps',
      description:
        'Master Generative AI and Large Language Model Operations. Learn to build, deploy, and manage AI applications with LLMs.',
      duration: '6 months',
      students: '30+ students',
      rating: '4.9',
      icon: <Sparkles className="h-6 w-6" />,
      gradient: 'from-violet-600 to-indigo-600',
      features: [
        'Large Language Models',
        'Prompt Engineering',
        'Model Fine-tuning',
        'LLM Deployment & Scaling',
        'AI Application Development',
      ],
    },
    {
      id: 'fullstack',
      title: 'Full Stack Development',
      description:
        'Master modern web development with React, Node.js, and databases. Build complete web applications from frontend to backend.',
      duration: '6 months',
      students: '60+ students',
      rating: '4.9',
      icon: <Code className="h-6 w-6" />,
      gradient: 'from-blue-600 to-cyan-600',
      features: [
        'React.js & Next.js',
        'Node.js & Express',
        'MongoDB & PostgreSQL',
        'RESTful APIs & GraphQL',
        'Deployment & DevOps',
      ],
    },
    {
      id: 'python-ds',
      title: 'Python Data Science',
      description:
        'Dive deep into data science with Python. Learn pandas, NumPy, and advanced statistical analysis techniques.',
      duration: '4 months',
      students: '35+ students',
      rating: '4.8',
      icon: <Database className="h-6 w-6" />,
      gradient: 'from-cyan-600 to-blue-600',
      features: [
        'Python Programming',
        'Pandas & NumPy',
        'Data Visualization',
        'Statistical Analysis',
        'Jupyter Notebooks',
      ],
    },
    {
      id: 'machine-learning',
      title: 'Machine Learning',
      description:
        'Build intelligent systems with ML algorithms. From supervised learning to deep neural networks.',
      duration: '5 months',
      students: '25+ students',
      rating: '4.9',
      icon: <Brain className="h-6 w-6" />,
      gradient: 'from-indigo-600 to-blue-600',
      features: [
        'Supervised Learning',
        'Deep Learning',
        'TensorFlow & PyTorch',
        'Model Deployment',
        'Computer Vision & NLP',
      ],
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics',
      description:
        'Transform raw data into actionable insights. Master visualization tools and business intelligence.',
      duration: '3 months',
      students: '30+ students',
      rating: '4.7',
      icon: <BarChart3 className="h-6 w-6" />,
      gradient: 'from-orange-600 to-red-600',
      features: [
        'Excel & Power BI',
        'SQL & Databases',
        'Tableau Visualization',
        'Business Intelligence',
        'Reporting & Dashboards',
      ],
    },
  ];

  return (
    <section
      ref={coursesRef}
      className="py-16 md:py-20 bg-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <BackgroundPattern variant="dots" opacity={0.025} />

      {/* 3D Code Cube Elements */}
      <div className="absolute top-10 left-5 opacity-10 hidden lg:block">
        <CodeCube3D className="scale-75" />
      </div>
      <div className="absolute bottom-10 right-5 opacity-10 hidden lg:block">
        <CodeCube3D className="scale-75" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16 px-4 relative">
          <div className="flex justify-center mb-6">
            <CodeCube3D className="scale-75" />
          </div>

          <h2 className="courses-header text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4 leading-tight tracking-tight">
            Our Training Programs
          </h2>
          <p className="courses-header text-xs sm:text-sm md:text-base text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Syntaxim is preparing students for tech careers. Choose from our
            comprehensive courses designed to take you from beginner to
            industry-ready professional
          </p>
        </div>

        <div className="courses-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto relative">
          {courses.map((course, index) => (
            <div key={index} className="course-card relative">
              <CourseCard {...course} courseId={course.id} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
