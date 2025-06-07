
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Lightbulb, Trophy, Rocket } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo('.about-content',
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top 80%',
        }
      }
    );

    gsap.fromTo('.value-card',
      { y: 40, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.values-grid',
          start: 'top 80%',
        }
      }
    );
  }, []);

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Practical Learning",
      description: "Hands-on projects and real-world applications to ensure job-ready skills"
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Expert Instructors",
      description: "Learn from industry professionals with years of experience"
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Proven Results",
      description: "95% job placement rate with top tech companies"
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Career Support",
      description: "Resume building, interview prep, and job placement assistance"
    }
  ];

  return (
    <section ref={aboutRef} className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="about-content">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"> Training Institute?</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              We're committed to transforming careers through comprehensive, practical training programs. 
              Our institute combines cutting-edge curriculum with personalized mentorship to ensure your success 
              in the rapidly evolving tech industry.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              With state-of-the-art facilities, industry partnerships, and a track record of successful graduates, 
              we provide the perfect environment for your professional growth.
            </p>
          </div>
          
          <div className="values-grid grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div key={index} className="value-card p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-purple-500/20 hover:border-purple-500/40 hover:shadow-lg transition-all duration-300 group">
                <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
