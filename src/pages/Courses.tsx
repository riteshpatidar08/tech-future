import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CourseCard from "@/components/CourseCard";
import Navigation from "@/components/Navigation";
import AnimatedBackground from "@/components/AnimatedBackground";
import Footer from "@/components/Footer";
import StudyResources from "@/components/StudyResources";
import Testimonials from "@/components/Testimonials";
import { Code, Database, Brain, BarChart3 } from "lucide-react";
import HandDrawnArrow from "@/components/HandDrawnArrow";
import EducationIllustration from "@/components/EducationIllustration";

gsap.registerPlugin(ScrollTrigger);

const Courses = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const coursesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Header animation
    gsap.fromTo(headerRef.current?.children,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out', delay: 0.3 }
    );

    // Course cards animation on scroll
    gsap.fromTo('.course-card',
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
        }
      }
    );
  }, []);

  const courses = [
    {
      id: "fullstack",
      title: "Full Stack Development",
      description: "Master modern web development with React, Node.js, and databases. Build complete web applications from frontend to backend.",
      duration: "6 months",
      students: "200+ students",
      rating: "4.9",
      icon: <Code className="h-6 w-6" />,
      gradient: "from-purple-600 to-cyan-600",
      features: [
        "React.js & Next.js",
        "Node.js & Express",
        "MongoDB & PostgreSQL",
        "RESTful APIs & GraphQL",
        "Deployment & DevOps"
      ]
    },
    {
      id: "python-ds",
      title: "Python Data Science",
      description: "Dive deep into data science with Python. Learn pandas, NumPy, and advanced statistical analysis techniques.",
      duration: "4 months",
      students: "150+ students",
      rating: "4.8",
      icon: <Database className="h-6 w-6" />,
      gradient: "from-cyan-600 to-blue-600",
      features: [
        "Python Programming",
        "Pandas & NumPy",
        "Data Visualization",
        "Statistical Analysis",
        "Jupyter Notebooks"
      ]
    },
    {
      id: "machine-learning",
      title: "Machine Learning",
      description: "Build intelligent systems with ML algorithms. From supervised learning to deep neural networks.",
      duration: "5 months",
      students: "100+ students",
      rating: "4.9",
      icon: <Brain className="h-6 w-6" />,
      gradient: "from-blue-600 to-purple-600",
      features: [
        "Supervised Learning",
        "Deep Learning",
        "TensorFlow & PyTorch",
        "Model Deployment",
        "Computer Vision & NLP"
      ]
    },
    {
      id: "data-analytics",
      title: "Data Analytics",
      description: "Transform raw data into actionable insights. Master visualization tools and business intelligence.",
      duration: "3 months",
      students: "120+ students",
      rating: "4.7",
      icon: <BarChart3 className="h-6 w-6" />,
      gradient: "from-orange-600 to-red-600",
      features: [
        "Excel & Power BI",
        "SQL & Databases",
        "Tableau Visualization",
        "Business Intelligence",
        "Reporting & Dashboards"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <AnimatedBackground />
      <Navigation />
      
      <section className="pt-24 pb-20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 left-5 opacity-10 hidden lg:block">
          <EducationIllustration type="book" size={100} />
        </div>
        <div className="absolute bottom-10 right-5 opacity-10 hidden lg:block">
          <EducationIllustration type="lightbulb" size={120} />
        </div>
        <div className="absolute top-1/3 right-10 opacity-10 hidden xl:block transform rotate-12">
          <EducationIllustration type="coding" size={110} />
        </div>
        <div className="absolute bottom-1/4 left-10 opacity-10 hidden xl:block transform -rotate-6">
          <EducationIllustration type="certificate" size={100} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div ref={headerRef} className="text-center mb-16 relative">
            {/* Tech icons behind header */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="absolute -left-20 top-0 opacity-15">
                <svg width="100" height="100" viewBox="0 0 200 200">
                  <circle cx="100" cy="100" r="70" fill="#3776AB"/>
                  <circle cx="150" cy="100" r="70" fill="#FFDE57"/>
                </svg>
              </div>
              <div className="absolute -right-20 top-0 opacity-15">
                <svg width="100" height="100" viewBox="0 0 200 200">
                  <circle cx="100" cy="100" r="75" fill="#00D4AA"/>
                  <circle cx="100" cy="100" r="20" fill="#61DAFB"/>
                </svg>
              </div>
            </div>
            
            {/* Arrow pointing to heading */}
            <div className="absolute -left-16 top-1/2 hidden xl:block animate-float">
              <HandDrawnArrow direction="right" color="#0DB7ED" className="w-20 h-20" />
            </div>
            
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm max-w-4xl mx-auto relative z-10">
              <h1 className="text-5xl md:text-6xl font-bold text-[#0F172A] mb-6"
                  style={{ 
                    fontWeight: 700,
                    letterSpacing: '0.02em'
                  }}>
                Our Training Programs
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Choose from our comprehensive courses designed to take you from beginner to industry-ready professional
              </p>
            </div>
          </div>
          
          <div ref={coursesRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto relative">
            {/* Arrow pointing to courses */}
            <div className="absolute -right-16 top-1/2 hidden xl:block animate-float" style={{ animationDelay: '0.8s' }}>
              <HandDrawnArrow direction="left" color="#FF6F61" className="w-16 h-16" />
            </div>
            
            {courses.map((course, index) => (
              <div key={index} className="course-card relative">
                {/* Small arrow on hover */}
                <div className="absolute -top-4 -right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden lg:block">
                  <HandDrawnArrow direction="diagonal" color="#FFB300" className="w-12 h-12" />
                </div>
                <CourseCard {...course} courseId={course.id} />
              </div>
            ))}
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
