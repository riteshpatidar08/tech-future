import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, ArrowRight, BookOpen, Code, Database, Brain, BarChart3 } from 'lucide-react';
import HandDrawnArrow from './HandDrawnArrow';
import EducationIllustration from './EducationIllustration';

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
        description: 'Master HTML, CSS, JavaScript and modern frontend frameworks',
        duration: '6 weeks',
        topics: ['HTML5 & CSS3', 'JavaScript ES6+', 'React.js Basics', 'State Management', 'Responsive Design'],
        icon: <Code className="h-5 w-5" />,
        gradient: 'from-blue-500 to-cyan-500'
      },
      {
        step: 2,
        title: 'Backend Development',
        description: 'Build robust server-side applications with Node.js and databases',
        duration: '8 weeks',
        topics: ['Node.js & Express', 'RESTful APIs', 'MongoDB & PostgreSQL', 'Authentication', 'API Security'],
        icon: <Database className="h-5 w-5" />,
        gradient: 'from-cyan-500 to-blue-500'
      },
      {
        step: 3,
        title: 'Full Stack Integration',
        description: 'Connect frontend and backend, deploy applications',
        duration: '4 weeks',
        topics: ['Full Stack Projects', 'Deployment (AWS/Vercel)', 'DevOps Basics', 'CI/CD Pipeline', 'Production Best Practices'],
        icon: <Code className="h-5 w-5" />,
        gradient: 'from-blue-600 to-indigo-600'
      }
    ]
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
        topics: ['Python Basics', 'NumPy & Pandas', 'Data Cleaning', 'Data Visualization', 'Jupyter Notebooks'],
        icon: <Database className="h-5 w-5" />,
        gradient: 'from-cyan-500 to-blue-500'
      },
      {
        step: 2,
        title: 'Statistical Analysis',
        description: 'Master statistical methods and data analysis techniques',
        duration: '6 weeks',
        topics: ['Statistics & Probability', 'Hypothesis Testing', 'Regression Analysis', 'Time Series', 'Data Mining'],
        icon: <BarChart3 className="h-5 w-5" />,
        gradient: 'from-blue-500 to-purple-500'
      },
      {
        step: 3,
        title: 'Advanced Analytics',
        description: 'Build predictive models and create data-driven solutions',
        duration: '6 weeks',
        topics: ['Machine Learning Basics', 'Model Evaluation', 'Feature Engineering', 'Data Pipelines', 'Real-world Projects'],
        icon: <Brain className="h-5 w-5" />,
        gradient: 'from-purple-500 to-pink-500'
      }
    ]
  }
];

const LearningPath = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pathsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(sectionRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
    }

    if (pathsRef.current) {
      gsap.fromTo(pathsRef.current.children,
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
            toggleActions: 'play none none none'
          }
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 md:py-28 bg-gradient-to-br from-blue-50 via-white to-cyan-50 overflow-hidden">
      <div className="absolute top-10 left-10 opacity-10 hidden lg:block transform rotate-12">
        <EducationIllustration type="book" size={120} />
      </div>
      <div className="absolute bottom-10 right-10 opacity-10 hidden lg:block transform -rotate-12">
        <EducationIllustration type="lightbulb" size={100} />
      </div>

      <div className="absolute top-1/3 right-10 hidden xl:block animate-float transform rotate-12">
        <HandDrawnArrow direction="left" color="#3776AB" className="w-20 h-20" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <BookOpen className="h-6 w-6 text-blue-600" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A]"
                style={{ 
                  fontFamily: "'Dancing Script', 'Pacifico', 'Brush Script MT', cursive",
                  fontWeight: 700
                }}>
              Your Learning Journey
            </h2>
          </div>
          <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Structured learning paths designed by industry experts. Follow a clear roadmap from beginner to job-ready professional.
          </p>
        </div>

        <div ref={pathsRef} className="space-y-12">
          {learningPaths.map((path, pathIndex) => (
            <div key={pathIndex} className="relative">
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-4 rounded-2xl bg-gradient-to-br ${path.gradient} shadow-lg`}>
                  <div className="text-white">{path.icon}</div>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#0F172A]"
                      style={{ 
                        fontFamily: "'Dancing Script', 'Pacifico', 'Brush Script MT', cursive",
                        fontWeight: 700
                      }}>
                    {path.course} Path
                  </h3>
                  <p className="text-slate-600 mt-1">Complete roadmap to mastery</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {path.steps.map((step, stepIndex) => (
                  <Card key={stepIndex} className="border-2 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 relative overflow-hidden">
                    <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${step.gradient}`}></div>
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${step.gradient} shadow-md`}>
                          <div className="text-white">{step.icon}</div>
                        </div>
                        <span className="text-3xl font-bold text-slate-300">0{step.step}</span>
                      </div>
                      <CardTitle className="text-xl font-bold text-[#0F172A] mb-2">{step.title}</CardTitle>
                      <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
                      <div className="flex items-center gap-2 mt-3 text-sm font-semibold text-blue-600">
                        <span>{step.duration}</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {step.topics.map((topic, topicIndex) => (
                          <div key={topicIndex} className="flex items-center gap-2 text-sm">
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
          <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-3xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  style={{ fontFamily: "'Dancing Script', 'Pacifico', 'Brush Script MT', cursive", fontWeight: 700, fontSize: '1.1em' }}>
            Explore All Learning Paths
          </button>
        </div>
      </div>
    </section>
  );
};

export default LearningPath;

