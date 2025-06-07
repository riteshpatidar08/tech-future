import { useParams, Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Navigation from "@/components/Navigation";
import AnimatedBackground from "@/components/AnimatedBackground";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Code, 
  Database, 
  Brain, 
  BarChart3, 
  Clock, 
  Users, 
  Star, 
  CheckCircle, 
  ArrowLeft,
  BookOpen,
  Trophy,
  Download
} from "lucide-react";

const CourseDetails = () => {
  const { courseId } = useParams();
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(headerRef.current?.children,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out', delay: 0.3 }
    );

    gsap.fromTo('.detail-section',
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out', delay: 0.5 }
    );
  }, []);

  const courseData = {
    "fullstack": {
      title: "Full Stack Development",
      description: "Master modern web development with React, Node.js, and databases. Build complete web applications from frontend to backend with industry-standard tools and practices.",
      duration: "6 months",
      students: "200+ students",
      rating: "4.9",
      price: "$2,999",
      icon: <Code className="h-8 w-8" />,
      gradient: "from-purple-600 to-cyan-600",
      overview: "This comprehensive Full Stack Development course will transform you into a professional web developer. You'll learn to build modern, scalable web applications using cutting-edge technologies like React, Node.js, and cloud platforms.",
      features: [
        "React.js & Next.js Development",
        "Node.js & Express Backend",
        "MongoDB & PostgreSQL Databases",
        "RESTful APIs & GraphQL",
        "Deployment & DevOps Practices",
        "Authentication & Security",
        "Testing & Quality Assurance",
        "Version Control with Git"
      ],
      modules: [
        { title: "HTML, CSS & JavaScript Fundamentals", duration: "3 weeks" },
        { title: "React.js & Component Architecture", duration: "4 weeks" },
        { title: "Node.js & Server-side Development", duration: "4 weeks" },
        { title: "Database Design & Integration", duration: "3 weeks" },
        { title: "API Development & Integration", duration: "3 weeks" },
        { title: "Authentication & Security", duration: "2 weeks" },
        { title: "Testing & Deployment", duration: "3 weeks" },
        { title: "Capstone Project", duration: "4 weeks" }
      ],
      requirements: [
        "Basic computer skills",
        "High school education or equivalent",
        "Willingness to learn and practice",
        "Access to a computer with internet"
      ]
    },
    "python-ds": {
      title: "Python Data Science",
      description: "Dive deep into data science with Python. Learn pandas, NumPy, and advanced statistical analysis techniques to extract insights from complex datasets.",
      duration: "4 months",
      students: "150+ students",
      rating: "4.8",
      price: "$2,499",
      icon: <Database className="h-8 w-8" />,
      gradient: "from-cyan-600 to-blue-600",
      overview: "Master the art of data science with Python. This course covers everything from data manipulation and visualization to advanced statistical analysis and machine learning fundamentals.",
      features: [
        "Python Programming Fundamentals",
        "Pandas & NumPy for Data Manipulation",
        "Data Visualization with Matplotlib & Seaborn",
        "Statistical Analysis & Hypothesis Testing",
        "Jupyter Notebooks & Data Storytelling",
        "Web Scraping & Data Collection",
        "SQL for Data Analysis",
        "Introduction to Machine Learning"
      ],
      modules: [
        { title: "Python Programming Basics", duration: "2 weeks" },
        { title: "Data Manipulation with Pandas", duration: "3 weeks" },
        { title: "Data Visualization", duration: "3 weeks" },
        { title: "Statistical Analysis", duration: "3 weeks" },
        { title: "Data Collection & Web Scraping", duration: "2 weeks" },
        { title: "SQL & Databases", duration: "2 weeks" },
        { title: "ML Fundamentals", duration: "3 weeks" },
        { title: "Capstone Project", duration: "2 weeks" }
      ],
      requirements: [
        "Basic math knowledge",
        "High school education or equivalent",
        "Interest in data and analytics",
        "Access to a computer with internet"
      ]
    },
    "machine-learning": {
      title: "Machine Learning",
      description: "Build intelligent systems with ML algorithms. From supervised learning to deep neural networks, master the technologies powering AI revolution.",
      duration: "5 months",
      students: "100+ students",
      rating: "4.9",
      price: "$3,499",
      icon: <Brain className="h-8 w-8" />,
      gradient: "from-blue-600 to-purple-600",
      overview: "Dive into the world of artificial intelligence and machine learning. Learn to build intelligent systems that can learn from data and make predictions.",
      features: [
        "Supervised & Unsupervised Learning",
        "Deep Learning & Neural Networks",
        "TensorFlow & PyTorch Frameworks",
        "Computer Vision Applications",
        "Natural Language Processing",
        "Model Deployment & MLOps",
        "Feature Engineering & Selection",
        "Model Evaluation & Optimization"
      ],
      modules: [
        { title: "ML Fundamentals & Math", duration: "3 weeks" },
        { title: "Supervised Learning Algorithms", duration: "4 weeks" },
        { title: "Unsupervised Learning", duration: "3 weeks" },
        { title: "Deep Learning & Neural Networks", duration: "4 weeks" },
        { title: "Computer Vision", duration: "3 weeks" },
        { title: "Natural Language Processing", duration: "3 weeks" },
        { title: "Model Deployment", duration: "2 weeks" },
        { title: "Advanced Projects", duration: "3 weeks" }
      ],
      requirements: [
        "Python programming knowledge",
        "Basic statistics and linear algebra",
        "Completed Data Science course or equivalent",
        "Strong analytical thinking"
      ]
    },
    "data-analytics": {
      title: "Data Analytics",
      description: "Transform raw data into actionable insights. Master visualization tools and business intelligence to drive data-driven decisions.",
      duration: "3 months",
      students: "120+ students",
      rating: "4.7",
      price: "$1,999",
      icon: <BarChart3 className="h-8 w-8" />,
      gradient: "from-orange-600 to-red-600",
      overview: "Learn to analyze and visualize data to drive business decisions. Master industry-standard tools and techniques for data analysis and reporting.",
      features: [
        "Excel Advanced Techniques",
        "Power BI & Tableau Mastery",
        "SQL for Data Analysis",
        "Statistical Analysis Methods",
        "Dashboard Creation & Design",
        "Business Intelligence Concepts",
        "Data Storytelling & Presentation",
        "KPI Development & Tracking"
      ],
      modules: [
        { title: "Excel for Data Analysis", duration: "2 weeks" },
        { title: "SQL Fundamentals", duration: "3 weeks" },
        { title: "Power BI Mastery", duration: "3 weeks" },
        { title: "Tableau Visualization", duration: "2 weeks" },
        { title: "Statistical Analysis", duration: "2 weeks" },
        { title: "Dashboard Design", duration: "2 weeks" },
        { title: "Business Intelligence", duration: "1 week" },
        { title: "Final Project", duration: "1 week" }
      ],
      requirements: [
        "Basic computer skills",
        "High school math",
        "Interest in business and data",
        "Microsoft Office familiarity preferred"
      ]
    }
  };

  const course = courseData[courseId as keyof typeof courseData];

  if (!course) {
    return (
      <div className="min-h-screen text-white flex items-center justify-center">
        <AnimatedBackground />
        <Navigation />
        <div className="text-center bg-black/70 backdrop-blur-md rounded-2xl p-8 border border-white/20">
          <h1 className="text-4xl font-bold mb-4 text-white drop-shadow-lg">Course Not Found</h1>
          <Link to="/courses">
            <Button className="bg-purple-600 hover:bg-purple-700">
              Back to Courses
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white">
      <AnimatedBackground />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div ref={headerRef} className="max-w-4xl mx-auto">
            <Link to="/courses" className="inline-flex items-center text-purple-300 hover:text-purple-200 mb-6 transition-colors bg-black/50 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/20">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Courses
            </Link>
            
            <div className="flex items-center mb-6 bg-black/60 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className={`p-4 rounded-2xl bg-gradient-to-br ${course.gradient} text-white shadow-lg mr-6`}>
                {course.icon}
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent mb-2 drop-shadow-lg">
                  {course.title}
                </h1>
                <div className="flex items-center space-x-4 text-gray-100">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span className="text-white font-medium drop-shadow-md">{course.rating}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 text-purple-300 mr-1" />
                    <span className="text-white font-medium drop-shadow-md">{course.students}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-cyan-300 mr-1" />
                    <span className="text-white font-medium drop-shadow-md">{course.duration}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-black/60 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <p className="text-xl text-gray-100 leading-relaxed drop-shadow-md">
                {course.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section ref={contentRef} className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Overview */}
              <div className="detail-section bg-black/70 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center drop-shadow-lg">
                  <BookOpen className="h-6 w-6 mr-3 text-purple-300" />
                  Course Overview
                </h2>
                <p className="text-gray-100 leading-relaxed drop-shadow-md">
                  {course.overview}
                </p>
              </div>

              {/* What You'll Learn */}
              <div className="detail-section bg-black/70 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center drop-shadow-lg">
                  <CheckCircle className="h-6 w-6 mr-3 text-green-300" />
                  What You'll Learn
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-gray-100 bg-white/5 p-3 rounded-lg">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                      <span className="drop-shadow-md">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Course Modules */}
              <div className="detail-section bg-black/70 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center drop-shadow-lg">
                  <Trophy className="h-6 w-6 mr-3 text-yellow-400" />
                  Course Modules
                </h2>
                <div className="space-y-4">
                  {course.modules.map((module, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-black/50 rounded-xl border border-white/10 backdrop-blur-sm">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                          {index + 1}
                        </div>
                        <span className="text-white font-medium drop-shadow-md">{module.title}</span>
                      </div>
                      <span className="text-gray-200 text-sm drop-shadow-md">{module.duration}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements */}
              <div className="detail-section bg-black/70 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h2 className="text-2xl font-bold text-white mb-6 drop-shadow-lg">Requirements</h2>
                <ul className="space-y-3">
                  {course.requirements.map((req, index) => (
                    <li key={index} className="flex items-center text-gray-100 bg-white/5 p-3 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      <span className="drop-shadow-md">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="detail-section bg-black/70 backdrop-blur-md rounded-2xl p-8 border border-white/20 sticky top-24">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">{course.price}</div>
                  <div className="text-gray-200 drop-shadow-md">One-time payment</div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <Button className={`w-full bg-gradient-to-r ${course.gradient} hover:shadow-lg transition-all duration-300 text-white font-semibold py-3 rounded-xl`}>
                    Enroll Now
                  </Button>
                  <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download Syllabus
                  </Button>
                </div>

                <div className="space-y-4 text-sm">
                  <div className="flex justify-between bg-white/5 p-3 rounded-lg">
                    <span className="text-gray-200 drop-shadow-md">Duration:</span>
                    <span className="text-white font-medium drop-shadow-md">{course.duration}</span>
                  </div>
                  <div className="flex justify-between bg-white/5 p-3 rounded-lg">
                    <span className="text-gray-200 drop-shadow-md">Students:</span>
                    <span className="text-white font-medium drop-shadow-md">{course.students}</span>
                  </div>
                  <div className="flex justify-between bg-white/5 p-3 rounded-lg">
                    <span className="text-gray-200 drop-shadow-md">Rating:</span>
                    <span className="text-white font-medium drop-shadow-md">{course.rating}/5</span>
                  </div>
                  <div className="flex justify-between bg-white/5 p-3 rounded-lg">
                    <span className="text-gray-200 drop-shadow-md">Certificate:</span>
                    <span className="text-white font-medium drop-shadow-md">Yes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CourseDetails;
