
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CourseCard from "./CourseCard";
import { Code, Database, Brain, BarChart3 } from "lucide-react";
import CodeCube3D from './CodeCube3D';

gsap.registerPlugin(ScrollTrigger);

const Courses = () => {
  const coursesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo('.courses-header',
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
        }
      }
    );

    gsap.fromTo('.course-card',
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
      gradient: "from-blue-600 to-cyan-600",
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
      gradient: "from-indigo-600 to-blue-600",
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
    <section ref={coursesRef} className="py-20 bg-white relative overflow-hidden">
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
          
          <h2 className="courses-header text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight tracking-tight">
            Our Training Programs
          </h2>
          <p className="courses-header text-sm sm:text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Syntaxim is preparing students for tech careers. Choose from our comprehensive courses designed to take you from beginner to industry-ready professional
          </p>
        </div>
        
        <div className="courses-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto relative">
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
