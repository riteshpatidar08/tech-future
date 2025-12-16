import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  CheckCircle2,
  ArrowRight,
  BookOpen,
  Code,
  Database,
  Brain,
  BarChart3,
} from 'lucide-react';
import Book3D from './Book3D';
import BackgroundPattern from './BackgroundPattern';

gsap.registerPlugin(ScrollTrigger);

interface PathStep {
  step: number;
  title: string;
  description: string;
  duration: string;
  topics: string[];
  icon: React.ReactNode;
  gradient: string;
}

const learningPaths = [
  {
    course: 'Full Stack Development',
    icon: <Code className="h-6 w-6" />,
    gradient: 'from-blue-600 to-cyan-600',
    steps: [
      {
        step: 1,
        title: 'Frontend Fundamentals',
        description:
          'Master HTML, CSS, JavaScript and modern frontend frameworks',
        duration: '6 weeks',
        topics: [
          'HTML5 & CSS3',
          'JavaScript ES6+',
          'React.js Basics',
          'State Management',
          'Responsive Design',
        ],
        icon: <Code className="h-5 w-5" />,
        gradient: 'from-blue-500 to-cyan-500',
      },
      {
        step: 2,
        title: 'Backend Development',
        description:
          'Build robust server-side applications with Node.js and databases',
        duration: '8 weeks',
        topics: [
          'Node.js & Express',
          'RESTful APIs',
          'MongoDB & PostgreSQL',
          'Authentication',
          'API Security',
        ],
        icon: <Database className="h-5 w-5" />,
        gradient: 'from-cyan-500 to-blue-500',
      },
      {
        step: 3,
        title: 'Full Stack Integration',
        description: 'Connect frontend and backend, deploy applications',
        duration: '4 weeks',
        topics: [
          'Full Stack Projects',
          'Deployment (AWS/Vercel)',
          'DevOps Basics',
          'CI/CD Pipeline',
          'Production Best Practices',
        ],
        icon: <Code className="h-5 w-5" />,
        gradient: 'from-blue-600 to-indigo-600',
      },
    ],
  },
  {
    course: 'Data Science',
    icon: <Database className="h-6 w-6" />,
    gradient: 'from-cyan-600 to-blue-600',
    steps: [
      {
        step: 1,
        title: 'Python Fundamentals',
        description: 'Learn Python programming and data manipulation',
        duration: '4 weeks',
        topics: [
          'Python Basics',
          'NumPy & Pandas',
          'Data Cleaning',
          'Data Visualization',
          'Jupyter Notebooks',
        ],
        icon: <Database className="h-5 w-5" />,
        gradient: 'from-cyan-500 to-blue-500',
      },
      {
        step: 2,
        title: 'Statistical Analysis',
        description: 'Master statistical methods and data analysis techniques',
        duration: '6 weeks',
        topics: [
          'Statistics & Probability',
          'Hypothesis Testing',
          'Regression Analysis',
          'Time Series',
          'Data Mining',
        ],
        icon: <BarChart3 className="h-5 w-5" />,
        gradient: 'from-blue-500 to-purple-500',
      },
      {
        step: 3,
        title: 'Advanced Analytics',
        description: 'Build predictive models and create data-driven solutions',
        duration: '6 weeks',
        topics: [
          'Machine Learning Basics',
          'Model Evaluation',
          'Feature Engineering',
          'Data Pipelines',
          'Real-world Projects',
        ],
        icon: <Brain className="h-5 w-5" />,
        gradient: 'from-purple-500 to-pink-500',
      },
    ],
  },
];

const LearningPath = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pathsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    if (pathsRef.current) {
      gsap.fromTo(
        pathsRef.current.children,
        { x: -50, opacity: 0, scale: 0.9 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: pathsRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 bg-white overflow-hidden"
    >
      {/* Background Pattern */}
      <BackgroundPattern variant="grid" opacity={0.02} />

      {/* 3D Book Elements */}
      <div className="absolute top-10 left-10 opacity-10 hidden lg:block">
        <Book3D className="scale-75" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-10 hidden lg:block">
        <Book3D className="scale-75" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="flex justify-center mb-6">
            <Book3D className="scale-75" />
          </div>
          <div className="inline-flex items-center gap-2 mb-4">
            <BookOpen className="h-6 w-6 text-blue-600" />
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0F172A]"
              style={{
                fontWeight: 700,
              }}
            >
              Your Learning Journey
            </h2>
          </div>
          <p className="text-xs md:text-sm text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Structured learning paths designed by industry experts. Follow a
            clear roadmap from beginner to job-ready professional.
          </p>
        </div>

        <div ref={pathsRef} className="space-y-12">
          {learningPaths.map((path, pathIndex) => (
            <div key={pathIndex} className="relative">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 rounded-lg bg-slate-100">
                  <div className="text-slate-900">{path.icon}</div>
                </div>
                <div>
                  <h3
                    className="text-xl md:text-2xl font-bold text-[#0F172A]"
                    style={{
                      fontWeight: 700,
                    }}
                  >
                    {path.course} Path
                  </h3>
                  <p className="text-slate-600 mt-1">
                    Complete roadmap to mastery
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {path.steps.map((step, stepIndex) => (
                  <Card
                    key={stepIndex}
                    className="border-2 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-full h-2 bg-slate-900"></div>
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="p-3 rounded-lg bg-slate-100">
                          <div className="text-slate-900">{step.icon}</div>
                        </div>
                        <span className="text-3xl font-bold text-slate-300">
                          0{step.step}
                        </span>
                      </div>
                      <CardTitle className="text-xl font-bold text-[#0F172A] mb-2">
                        {step.title}
                      </CardTitle>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {step.description}
                      </p>
                      <div className="flex items-center gap-2 mt-3 text-sm font-semibold text-blue-600">
                        <span>{step.duration}</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {step.topics.map((topic, topicIndex) => (
                          <div
                            key={topicIndex}
                            className="flex items-center gap-2 text-sm"
                          >
                            <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-slate-700">{topic}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-600 mb-4">Ready to start your journey?</p>
          <Link to="/learning-paths">
            <Button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              Explore All Learning Paths
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LearningPath;
