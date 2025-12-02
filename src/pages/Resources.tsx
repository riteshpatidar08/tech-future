
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from "@/components/Navigation";
import AnimatedBackground from "@/components/AnimatedBackground";
import Footer from "@/components/Footer";
import { BookOpen, Video, Download, ExternalLink, Code, Database, Brain, BarChart3 } from "lucide-react";
import HandDrawnArrow from "@/components/HandDrawnArrow";
import EducationIllustration from "@/components/EducationIllustration";

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
      icon: () => <Code className="h-8 w-8" />,
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
      icon: () => <Database className="h-8 w-8" />,
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
      icon: () => <Brain className="h-8 w-8" />,
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
      icon: () => <BarChart3 className="h-8 w-8" />,
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
    <div className="min-h-screen bg-white">
      <AnimatedBackground />
      <Navigation />
      
      <section className="pt-24 pb-20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-5 opacity-10 hidden lg:block transform rotate-12">
          <EducationIllustration type="book" size={120} />
        </div>
        <div className="absolute bottom-20 right-10 opacity-10 hidden lg:block transform -rotate-6">
          <EducationIllustration type="laptop" size={100} />
        </div>
        <div className="absolute top-1/2 right-5 opacity-10 hidden xl:block transform rotate-12">
          <EducationIllustration type="online-learning" size={110} />
        </div>
        <div className="absolute bottom-1/4 left-10 opacity-10 hidden xl:block transform -rotate-6">
          <EducationIllustration type="coding" size={100} />
        </div>
        
        {/* Hand-drawn arrows */}
        <div className="absolute top-1/3 right-5 hidden xl:block animate-float transform rotate-12">
          <HandDrawnArrow direction="left" color="#3776AB" className="w-20 h-20" />
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
            </div>
            
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm max-w-4xl mx-auto relative z-10">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-6"
                  style={{ 
                    fontFamily: "'Dancing Script', 'Pacifico', 'Brush Script MT', cursive",
                    letterSpacing: '0.02em'
                  }}>
                Learning Resources
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Access our comprehensive library of books, videos, code samples, and project templates
              </p>
            </div>
          </div>

          <div ref={resourcesRef} className="space-y-12 max-w-7xl mx-auto">
            {resourceCategories.map((category, categoryIndex) => {
              // Map categories to logo colors
              const getCategoryColors = (title: string) => {
                switch(title) {
                  case 'Full Stack Development':
                    return { bg: 'rgba(0,212,170,0.08)', border: 'rgba(0,212,170,0.2)', icon: '#00D4AA' };
                  case 'Data Science':
                    return { bg: 'rgba(55,118,171,0.08)', border: 'rgba(55,118,171,0.2)', icon: '#3776AB' };
                  case 'Machine Learning':
                    return { bg: 'rgba(127,109,255,0.08)', border: 'rgba(127,109,255,0.2)', icon: '#7F6DFF' };
                  case 'Data Analytics':
                    return { bg: 'rgba(255,111,97,0.08)', border: 'rgba(255,111,97,0.2)', icon: '#FF6F61' };
                  default:
                    return { bg: 'rgba(59,130,246,0.08)', border: 'rgba(59,130,246,0.2)', icon: '#3B82F6' };
                }
              };
              
              const colors = getCategoryColors(category.title);
              
              return (
                <div key={categoryIndex} className="resource-card relative">
                  {/* Arrow pointing to category */}
                  <div className="absolute -left-12 top-1/2 hidden xl:block animate-float" style={{ animationDelay: `${categoryIndex * 0.3}s` }}>
                    <HandDrawnArrow direction="right" color={colors.icon} className="w-14 h-14" />
                  </div>
                  
                  <div className="bg-white rounded-2xl p-8 border shadow-md hover:shadow-lg transition-all duration-300"
                       style={{ 
                         transform: `rotate(${categoryIndex % 2 === 0 ? -0.5 : 0.5}deg)`,
                         borderColor: colors.border,
                         background: `linear-gradient(135deg, ${colors.bg}, rgba(255,255,255,0.5))`
                       }}>
                    <div className="flex items-center mb-6">
                      <div className="p-3 rounded-xl mr-4 text-white shadow-lg"
                           style={{ background: `linear-gradient(135deg, ${colors.icon}, ${colors.icon}dd)` }}>
                        {category.icon()}
                      </div>
                      <h2 className="text-3xl font-bold text-slate-900"
                          style={{ fontFamily: "'Dancing Script', 'Pacifico', cursive" }}>
                        {category.title}
                      </h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {category.resources.map((resource, resourceIndex) => (
                        <div key={resourceIndex} className="bg-white rounded-xl p-6 border hover:border-blue-200 transition-all duration-300 group shadow-sm hover:shadow-md relative"
                             style={{ 
                               transform: `rotate(${(resourceIndex % 4) * 0.3 - 0.45}deg)`,
                               borderColor: colors.border
                             }}>
                          {/* Small arrow on hover */}
                          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <HandDrawnArrow direction="diagonal" color={colors.icon} className="w-8 h-8" />
                          </div>
                          
                          <div className="flex items-start justify-between mb-4">
                            <div className="group-hover:scale-110 transition-transform"
                                 style={{ color: colors.icon }}>
                              {getResourceIcon(resource.type)}
                            </div>
                            <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                          </div>
                          
                          <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                            {resource.title}
                          </h3>
                          
                          <div className="space-y-1 text-sm text-slate-600 mb-4">
                            <p>Format: {resource.format}</p>
                            {resource.size && <p>Size: {resource.size}</p>}
                            {resource.duration && <p>Duration: {resource.duration}</p>}
                            {resource.items && <p>Items: {resource.items}</p>}
                          </div>
                          
                          <button className="w-full text-white py-2 rounded-xl transition-all duration-300 flex items-center justify-center font-semibold transform hover:scale-105"
                                  style={{ 
                                    background: `linear-gradient(135deg, ${colors.icon}, ${colors.icon}dd)`
                                  }}>
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional Resources Section */}
          <div className="mt-16 bg-white rounded-2xl p-8 border border-gray-200 shadow-md max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4"
                style={{ fontFamily: "'Dancing Script', 'Pacifico', cursive" }}>
              Need More Resources?
            </h2>
            <p className="text-slate-600 mb-6">
              Our resource library is constantly growing. Subscribe to get notified when new materials are added.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-3xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                      style={{ fontFamily: "'Dancing Script', 'Pacifico', cursive", fontSize: '1.1em' }}>
                Subscribe for Updates
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-3xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
                      style={{ fontFamily: "'Dancing Script', 'Pacifico', cursive", fontSize: '1.1em' }}>
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
