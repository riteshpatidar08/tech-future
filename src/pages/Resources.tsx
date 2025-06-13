
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from "@/components/Navigation";
import AnimatedBackground from "@/components/AnimatedBackground";
import Footer from "@/components/Footer";
import { BookOpen, Video, Download, ExternalLink, Code, Database, Brain, BarChart3 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Resources = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(headerRef.current?.children,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out', delay: 0.3 }
    );

    gsap.fromTo('.resource-card',
      { y: 80, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: resourcesRef.current,
          start: 'top 80%',
        }
      }
    );
  }, []);

  const resourceCategories = [
    {
      title: "Full Stack Development",
      icon: <Code className="h-8 w-8" />,
      gradient: "from-purple-600 to-cyan-600",
      resources: [
        { type: "book", title: "React: The Complete Guide", format: "PDF", size: "15 MB" },
        { type: "video", title: "Node.js Masterclass", format: "Video Series", duration: "12 hours" },
        { type: "code", title: "Full Stack Project Templates", format: "GitHub Repo", items: "25 projects" },
        { type: "book", title: "Modern JavaScript Handbook", format: "PDF", size: "8 MB" }
      ]
    },
    {
      title: "Data Science",
      icon: <Database className="h-8 w-8" />,
      gradient: "from-cyan-600 to-blue-600",
      resources: [
        { type: "book", title: "Python for Data Analysis", format: "PDF", size: "22 MB" },
        { type: "video", title: "Pandas & NumPy Tutorial", format: "Video", duration: "8 hours" },
        { type: "code", title: "Data Science Notebooks", format: "Jupyter", items: "50 notebooks" },
        { type: "book", title: "Statistics for Data Science", format: "PDF", size: "18 MB" }
      ]
    },
    {
      title: "Machine Learning",
      icon: <Brain className="h-8 w-8" />,
      gradient: "from-blue-600 to-purple-600",
      resources: [
        { type: "book", title: "Hands-On Machine Learning", format: "PDF", size: "35 MB" },
        { type: "video", title: "Deep Learning Fundamentals", format: "Video", duration: "15 hours" },
        { type: "code", title: "ML Algorithm Implementations", format: "Python", items: "100+ algorithms" },
        { type: "book", title: "Neural Networks & Deep Learning", format: "PDF", size: "28 MB" }
      ]
    },
    {
      title: "Data Analytics",
      icon: <BarChart3 className="h-8 w-8" />,
      gradient: "from-orange-600 to-red-600",
      resources: [
        { type: "book", title: "Data Visualization Best Practices", format: "PDF", size: "12 MB" },
        { type: "video", title: "Power BI Complete Course", format: "Video", duration: "10 hours" },
        { type: "code", title: "Dashboard Templates", format: "Various", items: "30 templates" },
        { type: "book", title: "SQL Query Optimization", format: "PDF", size: "9 MB" }
      ]
    }
  ];

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'book': return <BookOpen className="h-5 w-5" />;
      case 'video': return <Video className="h-5 w-5" />;
      case 'code': return <Code className="h-5 w-5" />;
      default: return <Download className="h-5 w-5" />;
    }
  };

  return (
    <div className="min-h-screen text-white">
      <AnimatedBackground />
      <Navigation />
      
      <section className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div ref={headerRef} className="text-center mb-16">
            <div className="bg-black/60 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent mb-6 drop-shadow-lg">
                Learning Resources
              </h1>
              <p className="text-xl text-gray-100 max-w-3xl mx-auto drop-shadow-md">
                Access our comprehensive library of books, videos, code samples, and project templates
              </p>
            </div>
          </div>

          <div ref={resourcesRef} className="space-y-12 max-w-7xl mx-auto">
            {resourceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="resource-card">
                <div className="bg-black/60 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${category.gradient} mr-4`}>
                      {category.icon}
                    </div>
                    <h2 className="text-3xl font-bold text-white">{category.title}</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {category.resources.map((resource, resourceIndex) => (
                      <div key={resourceIndex} className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 group">
                        <div className="flex items-start justify-between mb-4">
                          <div className="text-purple-400 group-hover:scale-110 transition-transform">
                            {getResourceIcon(resource.type)}
                          </div>
                          <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-white transition-colors" />
                        </div>
                        
                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                          {resource.title}
                        </h3>
                        
                        <div className="space-y-1 text-sm text-gray-400">
                          <p>Format: {resource.format}</p>
                          {resource.size && <p>Size: {resource.size}</p>}
                          {resource.duration && <p>Duration: {resource.duration}</p>}
                          {resource.items && <p>Items: {resource.items}</p>}
                        </div>
                        
                        <button className="mt-4 w-full bg-gradient-to-r from-purple-600/20 to-cyan-600/20 hover:from-purple-600/40 hover:to-cyan-600/40 border border-purple-500/30 text-white py-2 rounded-lg transition-all duration-300 flex items-center justify-center">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Resources Section */}
          <div className="mt-16 bg-black/60 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Need More Resources?</h2>
            <p className="text-gray-300 mb-6">
              Our resource library is constantly growing. Subscribe to get notified when new materials are added.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                Subscribe for Updates
              </button>
              <button className="border border-white/30 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                Request Resources
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Resources;
