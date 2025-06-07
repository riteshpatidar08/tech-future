
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CourseCard from "@/components/CourseCard";
import Navigation from "@/components/Navigation";
import AnimatedBackground from "@/components/AnimatedBackground";
import Footer from "@/components/Footer";
import { Code, Database, Brain, BarChart3 } from "lucide-react";

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
    <div className="min-h-screen text-white">
      <AnimatedBackground />
      <Navigation />
      
      <section className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div ref={headerRef} className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
              Our Training Programs
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive courses designed to take you from beginner to industry-ready professional
            </p>
          </div>
          
          <div ref={coursesRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {courses.map((course, index) => (
              <div key={index} className="course-card">
                <CourseCard {...course} />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Courses;
