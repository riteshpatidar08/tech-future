
import CourseCard from "./CourseCard";
import { Code, Database, Brain, BarChart3 } from "lucide-react";

const Courses = () => {
  const courses = [
    {
      title: "Full Stack Development",
      description: "Master modern web development with React, Node.js, and databases. Build complete web applications from frontend to backend.",
      duration: "6 months",
      students: "200+ students",
      rating: "4.9",
      icon: <Code className="h-6 w-6" />,
      gradient: "from-blue-600 to-purple-600",
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
      gradient: "from-green-600 to-blue-600",
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
      gradient: "from-purple-600 to-pink-600",
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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-4">
            Our Training Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive courses designed to take you from beginner to industry-ready professional
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
