
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from "@/components/Navigation";
import AnimatedBackground from "@/components/AnimatedBackground";
import Footer from "@/components/Footer";
import { Calendar, User, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import HandDrawnArrow from "@/components/HandDrawnArrow";
import EducationIllustration from "@/components/EducationIllustration";

gsap.registerPlugin(ScrollTrigger);

const Blog = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const postsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(headerRef.current?.children,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out', delay: 0.3 }
    );

    gsap.fromTo('.blog-post',
      { y: 80, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.15,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: postsRef.current,
          start: 'top 80%',
        }
      }
    );
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development: React 18 and Beyond",
      excerpt: "Explore the latest features in React 18 including concurrent rendering, automatic batching, and the new Suspense improvements.",
      author: "Sarah Johnson",
      date: "Dec 10, 2024",
      readTime: "5 min read",
      category: "Web Development",
      image: "/api/placeholder/400/250"
    },
    {
      id: 2,
      title: "Machine Learning Career Path: From Beginner to Expert",
      excerpt: "A comprehensive guide to building a successful career in machine learning, including essential skills and project ideas.",
      author: "Dr. Michael Chen",
      date: "Dec 8, 2024",
      readTime: "8 min read",
      category: "Machine Learning",
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "Data Science Tools You Need to Know in 2024",
      excerpt: "Discover the essential tools and libraries that every data scientist should master for modern data analysis and visualization.",
      author: "Emily Rodriguez",
      date: "Dec 5, 2024",
      readTime: "6 min read",
      category: "Data Science",
      image: "/api/placeholder/400/250"
    },
    {
      id: 4,
      title: "Building Scalable Applications with Node.js and Express",
      excerpt: "Learn best practices for creating robust backend applications that can handle high traffic and complex business logic.",
      author: "James Wilson",
      date: "Dec 3, 2024",
      readTime: "7 min read",
      category: "Backend Development",
      image: "/api/placeholder/400/250"
    },
    {
      id: 5,
      title: "The Rise of AI in Software Development",
      excerpt: "How artificial intelligence is transforming the way we write code, debug applications, and approach software architecture.",
      author: "Dr. Lisa Kumar",
      date: "Nov 30, 2024",
      readTime: "4 min read",
      category: "Artificial Intelligence",
      image: "/api/placeholder/400/250"
    },
    {
      id: 6,
      title: "Cybersecurity Fundamentals for Developers",
      excerpt: "Essential security practices every developer should implement to protect applications and user data from modern threats.",
      author: "Alex Thompson",
      date: "Nov 28, 2024",
      readTime: "9 min read",
      category: "Security",
      image: "/api/placeholder/400/250"
    }
  ];

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
          <EducationIllustration type="brain" size={110} />
        </div>
        <div className="absolute bottom-1/4 left-10 opacity-10 hidden xl:block transform -rotate-6">
          <EducationIllustration type="lightbulb" size={100} />
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
                Tech Insights & Articles
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Stay updated with the latest trends, tutorials, and insights from the world of technology
              </p>
            </div>
          </div>

          <div ref={postsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogPosts.map((post, index) => (
              <article key={post.id} className="blog-post bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-200 shadow-md hover:shadow-lg transition-all duration-300 group"
                       style={{ transform: `rotate(${(index % 3) * 0.5 - 0.5}deg)` }}>
                <div className="relative h-48 bg-gradient-to-br from-blue-50 to-cyan-50">
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-sm font-medium"
                          style={{ 
                            background: 'linear-gradient(135deg, rgba(127,109,255,0.2), rgba(255,111,97,0.2))',
                            color: '#7F6DFF'
                          }}>
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-slate-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    
                    <Link 
                      to={`/blog/${post.id}`}
                      className="flex items-center text-blue-600 hover:text-blue-700 transition-colors font-medium"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Blog;
