import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code, Database, Brain, BarChart3, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import HandDrawnArrow from './HandDrawnArrow';
import EducationIllustration from './EducationIllustration';

gsap.registerPlugin(ScrollTrigger);

interface Question {
  id: number;
  question: string;
  options: { text: string; scores: { fullstack: number; python: number; ml: number; analytics: number } }[];
}

const questions: Question[] = [
  {
    id: 1,
    question: "What interests you most?",
    options: [
      { text: "Building websites and web applications", scores: { fullstack: 3, python: 1, ml: 0, analytics: 1 } },
      { text: "Analyzing data and finding patterns", scores: { fullstack: 1, python: 3, ml: 2, analytics: 3 } },
      { text: "Creating intelligent systems and AI", scores: { fullstack: 1, python: 2, ml: 3, analytics: 1 } },
      { text: "Visualizing data and creating reports", scores: { fullstack: 0, python: 1, ml: 1, analytics: 3 } }
    ]
  },
  {
    id: 2,
    question: "What's your programming experience?",
    options: [
      { text: "Complete beginner", scores: { fullstack: 2, python: 3, ml: 1, analytics: 3 } },
      { text: "Some basics (HTML/CSS)", scores: { fullstack: 3, python: 1, ml: 0, analytics: 1 } },
      { text: "Know a programming language", scores: { fullstack: 2, python: 2, ml: 2, analytics: 2 } },
      { text: "Experienced programmer", scores: { fullstack: 3, python: 2, ml: 3, analytics: 2 } }
    ]
  },
  {
    id: 3,
    question: "What's your career goal?",
    options: [
      { text: "Web Developer / Full Stack Developer", scores: { fullstack: 3, python: 0, ml: 0, analytics: 0 } },
      { text: "Data Scientist", scores: { fullstack: 0, python: 3, ml: 3, analytics: 2 } },
      { text: "ML Engineer / AI Specialist", scores: { fullstack: 1, python: 2, ml: 3, analytics: 1 } },
      { text: "Business Analyst / Data Analyst", scores: { fullstack: 0, python: 2, ml: 1, analytics: 3 } }
    ]
  },
  {
    id: 4,
    question: "What type of projects excite you?",
    options: [
      { text: "E-commerce websites, social media apps", scores: { fullstack: 3, python: 1, ml: 0, analytics: 0 } },
      { text: "Data analysis dashboards, reports", scores: { fullstack: 1, python: 2, ml: 1, analytics: 3 } },
      { text: "Predictive models, recommendation systems", scores: { fullstack: 0, python: 2, ml: 3, analytics: 1 } },
      { text: "All of the above!", scores: { fullstack: 2, python: 2, ml: 2, analytics: 2 } }
    ]
  }
];

const courseResults = {
  fullstack: {
    name: "Full Stack Development",
    icon: <Code className="h-8 w-8" />,
    gradient: "from-blue-600 to-cyan-600",
    description: "Perfect for building modern web applications!",
    link: "/course/fullstack"
  },
  python: {
    name: "Python Data Science",
    icon: <Database className="h-8 w-8" />,
    gradient: "from-cyan-600 to-blue-600",
    description: "Ideal for diving into data science!",
    link: "/course/python-ds"
  },
  ml: {
    name: "Machine Learning",
    icon: <Brain className="h-8 w-8" />,
    gradient: "from-indigo-600 to-blue-600",
    description: "Great choice for AI enthusiasts!",
    link: "/course/machine-learning"
  },
  analytics: {
    name: "Data Analytics",
    icon: <BarChart3 className="h-8 w-8" />,
    gradient: "from-orange-600 to-red-600",
    description: "Perfect for business intelligence!",
    link: "/course/data-analytics"
  }
};

const CourseQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({ fullstack: 0, python: 0, ml: 0, analytics: 0 });
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const quizRef = useRef<HTMLDivElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);

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
  }, []);

  useEffect(() => {
    if (quizRef.current && !showResult) {
      gsap.fromTo(quizRef.current,
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.7)' }
      );
    }
  }, [currentQuestion, showResult]);

  useEffect(() => {
    if (resultRef.current && showResult) {
      gsap.fromTo(resultRef.current,
        { scale: 0.8, opacity: 0, rotation: -5 },
        { scale: 1, opacity: 1, rotation: 0, duration: 0.8, ease: 'elastic.out(1, 0.5)' }
      );
    }
  }, [showResult]);

  const handleAnswer = (optionIndex: number) => {
    setSelectedOption(optionIndex);
    const option = questions[currentQuestion].options[optionIndex];
    
    setScores(prev => ({
      fullstack: prev.fullstack + option.scores.fullstack,
      python: prev.python + option.scores.python,
      ml: prev.ml + option.scores.ml,
      analytics: prev.analytics + option.scores.analytics
    }));

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      } else {
        setShowResult(true);
      }
    }, 500);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScores({ fullstack: 0, python: 0, ml: 0, analytics: 0 });
    setShowResult(false);
    setSelectedOption(null);
  };

  const getResult = () => {
    const maxScore = Math.max(scores.fullstack, scores.python, scores.ml, scores.analytics);
    if (maxScore === scores.fullstack) return 'fullstack';
    if (maxScore === scores.python) return 'python';
    if (maxScore === scores.ml) return 'ml';
    return 'analytics';
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const result = showResult ? getResult() : null;
  const resultData = result ? courseResults[result as keyof typeof courseResults] : null;

  return (
    <section ref={sectionRef} className="relative py-20 md:py-28 bg-gradient-to-br from-blue-50 via-white to-cyan-50 overflow-hidden">
      {/* Decorative illustrations */}
      <div className="absolute top-10 right-10 opacity-10 hidden lg:block transform rotate-12">
        <EducationIllustration type="lightbulb" size={120} />
      </div>
      <div className="absolute bottom-10 left-10 opacity-10 hidden lg:block transform -rotate-12">
        <EducationIllustration type="rocket" size={100} />
      </div>

      {/* Hand-drawn arrows */}
      <div className="absolute top-1/4 left-10 hidden xl:block animate-float transform rotate-12">
        <HandDrawnArrow direction="right" color="#3776AB" className="w-20 h-20" />
      </div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="h-6 w-6 text-blue-600" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0F172A]"
                style={{ 
                  fontFamily: "'Dancing Script', 'Pacifico', 'Brush Script MT', cursive",
                  fontWeight: 700
                }}>
              Find Your Perfect Course
            </h2>
            <Sparkles className="h-6 w-6 text-cyan-600" />
          </div>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
            Take our quick quiz to discover which course matches your interests and goals!
          </p>
        </div>

        {!showResult ? (
          <Card ref={quizRef} className="border-2 shadow-2xl bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <CardTitle className="text-lg font-semibold text-slate-700">
                  Question {currentQuestion + 1} of {questions.length}
                </CardTitle>
                <span className="text-sm font-medium text-blue-600">
                  {Math.round(progress)}%
                </span>
              </div>
              <Progress value={progress} className="h-2" />
            </CardHeader>
            <CardContent className="space-y-6">
              <CardDescription className="text-xl font-semibold text-[#0F172A] mb-6 text-center">
                {questions[currentQuestion].question}
              </CardDescription>
              
              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <Button
                    key={index}
                    variant={selectedOption === index ? "default" : "outline"}
                    className={`w-full justify-start h-auto py-4 px-6 text-left transition-all duration-300 ${
                      selectedOption === index 
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white scale-105 shadow-lg' 
                        : 'hover:scale-[1.02] hover:shadow-md'
                    }`}
                    onClick={() => handleAnswer(index)}
                    disabled={selectedOption !== null}
                  >
                    <span className="text-base">{option.text}</span>
                    {selectedOption === index && (
                      <CheckCircle2 className="ml-auto h-5 w-5" />
                    )}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card ref={resultRef} className="border-2 shadow-2xl bg-white/90 backdrop-blur-sm overflow-hidden">
            <CardHeader className="text-center pb-4">
              <div className="mb-4">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${resultData?.gradient} shadow-lg mb-4`}>
                  <div className="text-white">
                    {resultData?.icon}
                  </div>
                </div>
              </div>
              <CardTitle className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-2"
                         style={{ 
                           fontFamily: "'Dancing Script', 'Pacifico', 'Brush Script MT', cursive",
                           fontWeight: 700
                         }}>
                {resultData?.name}
              </CardTitle>
              <CardDescription className="text-lg text-slate-600">
                {resultData?.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to={resultData?.link || "/courses"} className="flex-1">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white">
                    Explore Course
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button variant="outline" onClick={resetQuiz} className="flex-1">
                  Retake Quiz
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
};

export default CourseQuiz;

