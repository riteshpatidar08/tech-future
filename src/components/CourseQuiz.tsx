import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Code, Database, Brain, BarChart3, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import CodeCube3D from './CodeCube3D';

gsap.registerPlugin(ScrollTrigger);

interface Question {
  id: number;
  question: string;
  options: { text: string; scores: { fullstack: number; python: number; ml: number; analytics: number } }[];
}

const questions: Question[] = [
  {
    id: 1,
    question: 'What interests you most?',
    options: [
      { text: 'Building websites and web applications', scores: { fullstack: 3, python: 1, ml: 0, analytics: 1 } },
      { text: 'Analyzing data and finding patterns', scores: { fullstack: 1, python: 3, ml: 2, analytics: 3 } },
      { text: 'Creating intelligent systems and AI', scores: { fullstack: 1, python: 2, ml: 3, analytics: 1 } },
      { text: 'Visualizing data and creating reports', scores: { fullstack: 0, python: 1, ml: 1, analytics: 3 } }
    ]
  },
  {
    id: 2,
    question: "What's your programming experience?",
    options: [
      { text: 'Complete beginner', scores: { fullstack: 2, python: 3, ml: 1, analytics: 3 } },
      { text: 'Some basics (HTML/CSS)', scores: { fullstack: 3, python: 1, ml: 0, analytics: 1 } },
      { text: 'Know a programming language', scores: { fullstack: 2, python: 2, ml: 2, analytics: 2 } },
      { text: 'Experienced programmer', scores: { fullstack: 3, python: 2, ml: 3, analytics: 2 } }
    ]
  },
  {
    id: 3,
    question: "What's your career goal?",
    options: [
      { text: 'Web Developer / Full Stack Developer', scores: { fullstack: 3, python: 0, ml: 0, analytics: 0 } },
      { text: 'Data Scientist', scores: { fullstack: 0, python: 3, ml: 3, analytics: 2 } },
      { text: 'ML Engineer / AI Specialist', scores: { fullstack: 1, python: 2, ml: 3, analytics: 1 } },
      { text: 'Business Analyst / Data Analyst', scores: { fullstack: 0, python: 2, ml: 1, analytics: 3 } }
    ]
  },
  {
    id: 4,
    question: 'What type of projects excite you?',
    options: [
      { text: 'E-commerce websites, social media apps', scores: { fullstack: 3, python: 1, ml: 0, analytics: 0 } },
      { text: 'Data analysis dashboards, reports', scores: { fullstack: 1, python: 2, ml: 1, analytics: 3 } },
      { text: 'Predictive models, recommendation systems', scores: { fullstack: 0, python: 2, ml: 3, analytics: 1 } },
      { text: 'All of the above!', scores: { fullstack: 2, python: 2, ml: 2, analytics: 2 } }
    ]
  }
];

const courseResults = {
  fullstack: {
    name: 'Full Stack Development',
    icon: <Code className="h-8 w-8" />,
    description: 'Perfect for building modern web applications!',
    link: '/course/fullstack'
  },
  python: {
    name: 'Python Data Science',
    icon: <Database className="h-8 w-8" />,
    description: 'Ideal for diving into data science!',
    link: '/course/python-ds'
  },
  ml: {
    name: 'Machine Learning',
    icon: <Brain className="h-8 w-8" />,
    description: 'Great for AI and machine learning enthusiasts!',
    link: '/course/machine-learning'
  },
  analytics: {
    name: 'Data Analytics',
    icon: <BarChart3 className="h-8 w-8" />,
    description: 'Perfect for business intelligence and analytics!',
    link: '/course/data-analytics'
  }
};

const CourseQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({ fullstack: 0, python: 0, ml: 0, analytics: 0 });
  const [result, setResult] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const quizRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, []);

  const handleAnswer = (option: { scores: { fullstack: number; python: number; ml: number; analytics: number } }) => {
    setScores({
      fullstack: scores.fullstack + option.scores.fullstack,
      python: scores.python + option.scores.python,
      ml: scores.ml + option.scores.ml,
      analytics: scores.analytics + option.scores.analytics
    });

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult();
    }
  };

  const calculateResult = () => {
    const maxScore = Math.max(scores.fullstack, scores.python, scores.ml, scores.analytics);
    let recommendedCourse = 'fullstack';

    if (scores.python >= maxScore) recommendedCourse = 'python';
    if (scores.ml >= maxScore) recommendedCourse = 'ml';
    if (scores.analytics >= maxScore) recommendedCourse = 'analytics';

    setResult(recommendedCourse);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScores({ fullstack: 0, python: 0, ml: 0, analytics: 0 });
    setResult(null);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 bg-slate-50 overflow-hidden">
      {/* 3D Code Cube Elements */}
      <div className="absolute top-10 right-10 opacity-10 hidden lg:block">
        <CodeCube3D className="scale-75" />
      </div>
      <div className="absolute bottom-10 left-10 opacity-10 hidden lg:block">
        <CodeCube3D className="scale-75" />
      </div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <CodeCube3D className="scale-75" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-slate-900">
            Find Your Perfect Course
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Take our quick quiz to discover which course matches your interests and goals.
          </p>
        </div>

        <Card ref={quizRef} className="border border-slate-200 shadow-sm bg-white">
          <CardHeader>
            <div className="mb-4">
              <Progress value={progress} className="h-2" />
              <p className="text-sm text-slate-600 mt-2">
                Question {currentQuestion + 1} of {questions.length}
              </p>
            </div>
          </CardHeader>

          <CardContent>
            {!result ? (
              <div>
                <CardTitle className="text-2xl mb-6 text-slate-900">
                  {questions[currentQuestion].question}
                </CardTitle>

                <div className="space-y-3">
                  {questions[currentQuestion].options.map((option, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="w-full justify-start text-left h-auto py-4 px-6 border-slate-200 hover:border-slate-900 hover:bg-slate-50"
                      onClick={() => handleAnswer(option)}
                    >
                      {option.text}
                    </Button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center">
                <div className="mb-6">
                  <div className="inline-flex p-4 rounded-lg bg-slate-100 mb-4">
                    <div className="text-slate-900">{courseResults[result as keyof typeof courseResults].icon}</div>
                  </div>
                  <CardTitle className="text-2xl mb-2 text-slate-900">
                    {courseResults[result as keyof typeof courseResults].name}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {courseResults[result as keyof typeof courseResults].description}
                  </CardDescription>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to={courseResults[result as keyof typeof courseResults].link}>
                    <Button className="bg-slate-900 hover:bg-slate-800 text-white">
                      Explore Course
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Button variant="outline" onClick={resetQuiz} className="border-slate-200">
                    Retake Quiz
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CourseQuiz;
