import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from "@/components/Navigation";
import AnimatedBackground from "@/components/AnimatedBackground";
import Footer from "@/components/Footer";
import { Target, Lightbulb, Trophy, Rocket, Users, Award, Globe, Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Header animation
    gsap.fromTo(headerRef.current?.children,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out', delay: 0.3 }
    );

    // Values cards animation
    gsap.fromTo('.value-card',
      { y: 80, opacity: 0, rotationY: -15 },
      {
        y: 0,
        opacity: 1,
        rotationY: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: valuesRef.current,
          start: 'top 80%',
        }
      }
    );

    // Stats animation
    gsap.fromTo('.stat-item',
      { scale: 0.5, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: statsRef.current,
          start: 'top 80%',
        }
      }
    );
  }, []);

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Practical Learning",
      description: "Hands-on projects and real-world applications to ensure job-ready skills",
      color: "from-purple-500 to-cyan-500"
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Expert Instructors",
      description: "Learn from industry professionals with years of experience",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Proven Results",
      description: "95% job placement rate with top tech companies",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Career Support",
      description: "Resume building, interview prep, and job placement assistance",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const stats = [
    { icon: <Users className="h-8 w-8" />, number: "500+", label: "Students Trained" },
    { icon: <Award className="h-8 w-8" />, number: "95%", label: "Job Placement" },
    { icon: <Globe className="h-8 w-8" />, number: "50+", label: "Partner Companies" },
    { icon: <Star className="h-8 w-8" />, number: "4.9", label: "Average Rating" },
  ];

  return (
    <div className="min-h-screen text-white">
      <AnimatedBackground />
      <Navigation />
      
      <section className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div ref={headerRef} className="text-center mb-20">
            <div className="bg-black/60 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-5xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent mb-6 drop-shadow-lg">
                About TechInstitute
              </h1>
              <p className="text-xl text-gray-100 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
                We're committed to transforming careers through comprehensive, practical training programs. 
                Our institute combines cutting-edge curriculum with personalized mentorship to ensure your success 
                in the rapidly evolving tech industry.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div ref={valuesRef} className="mb-20">
            <div className="bg-black/60 backdrop-blur-md rounded-2xl p-8 border border-white/20 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-white drop-shadow-lg">
                Why Choose Us?
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {values.map((value, index) => (
                <div key={index} className="value-card p-8 bg-black/60 rounded-2xl backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-300 group">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${value.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors drop-shadow-md">
                    {value.title}
                  </h3>
                  <p className="text-gray-100 leading-relaxed drop-shadow-md">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div ref={statsRef} className="text-center">
            <div className="bg-black/60 backdrop-blur-md rounded-2xl p-8 border border-white/20 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
                Our Impact
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item p-6 bg-black/60 rounded-xl backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-300 group">
                  <div className="text-purple-300 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors drop-shadow-lg">
                    {stat.number}
                  </div>
                  <div className="text-gray-100 text-sm drop-shadow-md">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
