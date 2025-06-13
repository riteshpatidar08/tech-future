
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from "@/components/Navigation";
import AnimatedBackground from "@/components/AnimatedBackground";
import Footer from "@/components/Footer";
import { Calendar, User, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

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
    <div className="min-h-screen text-white">
      <AnimatedBackground />
      <Navigation />
      
      <section className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div ref={headerRef} className="text-center mb-16">
            <div className="bg-black/60 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent mb-6 drop-shadow-lg">
                Tech Insights & Articles
              </h1>
              <p className="text-xl text-gray-100 max-w-3xl mx-auto drop-shadow-md">
                Stay updated with the latest trends, tutorials, and insights from the world of technology
              </p>
            </div>
          </div>

          <div ref={postsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogPosts.map((post, index) => (
              <article key={post.id} className="blog-post bg-black/60 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 group">
                <div className="relative h-48 bg-gradient-to-br from-purple-600/20 to-cyan-600/20">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-purple-600/80 text-white text-sm rounded-full backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
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
                    <div className="flex items-center text-sm text-gray-400">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    
                    <Link 
                      to={`/blog/${post.id}`}
                      className="flex items-center text-purple-400 hover:text-purple-300 transition-colors font-medium"
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
