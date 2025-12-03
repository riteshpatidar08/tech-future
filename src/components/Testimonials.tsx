import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote, Star } from 'lucide-react';
import HandDrawnArrow from './HandDrawnArrow';
import EducationIllustration from './EducationIllustration';

gsap.registerPlugin(ScrollTrigger);

interface Testimonial {
  name: string;
  rank?: string;
  exam?: string;
  quote: string;
  image?: string;
}

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = cardsRef.current?.children;
    if (!cards) return;

    gsap.fromTo(cards,
      { y: 100, opacity: 0, scale: 0.8, rotation: (i) => (i % 2 === 0 ? -5 : 5) },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        rotation: (i) => (i % 2 === 0 ? -2 : 2),
        duration: 1,
        stagger: 0.2,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );

    // Floating animation for cards
    gsap.to('.testimonial-card', {
      y: (i) => -10 + (i * 2),
      rotation: (i) => (i % 2 === 0 ? -1 : 1),
      duration: 3 + Math.random() * 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: 0.3
    });
  }, []);

  // Sample testimonials - user will replace with actual data
  const testimonials: Testimonial[] = [
    {
      name: "Rajesh Kumar",
      rank: "AIR 1",
      exam: "Full Stack Development",
      quote: "Codex helped me master React and Node.js from scratch. The hands-on projects and expert guidance made all the difference. I landed my dream job at a top tech company!"
    },
    {
      name: "Priya Sharma",
      rank: "Top Performer",
      exam: "Data Science",
      quote: "The Python Data Science course at Codex is exceptional. The instructors break down complex concepts into simple, understandable lessons. Highly recommended!"
    },
    {
      name: "Amit Patel",
      rank: "95% Score",
      exam: "Machine Learning",
      quote: "Thanks to Codex! The faculty teaches from basics and they are very supportive. I was able to build real ML projects and secure a position as a Data Scientist."
    },
    {
      name: "Sneha Reddy",
      rank: "First Class",
      exam: "Data Analytics",
      quote: "Codex helped me in establishing the basics of every subject. I was able to progress quickly and increase my speed while maintaining accuracy in my work."
    }
  ];

  const getExamColors = (exam?: string) => {
    switch(exam) {
      case 'Full Stack Development':
        return { bg: 'rgba(0,212,170,0.08)', border: 'rgba(0,212,170,0.2)', text: '#00D4AA' };
      case 'Data Science':
        return { bg: 'rgba(55,118,171,0.08)', border: 'rgba(55,118,171,0.2)', text: '#3776AB' };
      case 'Machine Learning':
        return { bg: 'rgba(127,109,255,0.08)', border: 'rgba(127,109,255,0.2)', text: '#7F6DFF' };
      case 'Data Analytics':
        return { bg: 'rgba(255,111,97,0.08)', border: 'rgba(255,111,97,0.2)', text: '#FF6F61' };
      default:
        return { bg: 'rgba(59,130,246,0.08)', border: 'rgba(59,130,246,0.2)', text: '#3B82F6' };
    }
  };

  return (
    <section ref={sectionRef} className="relative py-20 md:py-28 bg-white overflow-hidden">
      {/* Decorative illustrations */}
      <div className="absolute top-10 left-10 opacity-10 hidden lg:block transform rotate-12">
        <EducationIllustration type="trophy" size={120} />
      </div>
      <div className="absolute bottom-10 right-10 opacity-10 hidden lg:block transform -rotate-12">
        <EducationIllustration type="certificate" size={100} />
      </div>
      <div className="absolute top-1/2 left-5 opacity-8 hidden xl:block transform rotate-45">
        <EducationIllustration type="rocket" size={90} />
      </div>

      {/* Hand-drawn arrows */}
      <div className="absolute top-20 right-20 hidden xl:block animate-float transform rotate-12">
        <HandDrawnArrow direction="left" color="#3776AB" className="w-20 h-20" />
      </div>
      <div className="absolute bottom-20 left-20 hidden xl:block animate-float transform -rotate-12" style={{ animationDelay: '1s' }}>
        <HandDrawnArrow direction="right" color="#00D4AA" className="w-16 h-16" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-[#0F172A]"
              style={{ 
                fontFamily: "'Dancing Script', 'Pacifico', 'Brush Script MT', cursive",
                fontWeight: 700
              }}>
            Students ❤️ Codex
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
            Hear from our students
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => {
            const colors = getExamColors(testimonial.exam);
            return (
              <div
                key={index}
                className="testimonial-card relative"
              >
                <div
                  className={`relative h-full p-8 rounded-3xl border-2 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105`}
                  style={{ 
                    transform: `rotate(${index % 2 === 0 ? '-2deg' : '2deg'})`,
                    background: `linear-gradient(135deg, ${colors.bg}, rgba(255,255,255,0.9))`,
                    borderColor: colors.border
                  }}
                >
                  {/* Quote icon */}
                  <div className="absolute top-4 left-4 opacity-20">
                    <Quote className="h-12 w-12" style={{ color: colors.text }} />
                  </div>

                  {/* Quote text */}
                  <div className="relative z-10 mb-6">
                    <p className="text-slate-700 text-sm md:text-base leading-relaxed italic">
                      "{testimonial.quote}"
                    </p>
                  </div>

                  {/* Student info */}
                  <div className="flex items-center justify-between border-t pt-4" style={{ borderColor: colors.border }}>
                    <div>
                      <h3 className="text-base font-bold text-[#0F172A] mb-1"
                          style={{ fontFamily: "'Dancing Script', 'Pacifico', 'Brush Script MT', cursive", fontWeight: 700 }}>
                        {testimonial.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        {testimonial.rank && (
                          <span className="text-sm font-semibold" style={{ color: colors.text }}>
                            {testimonial.rank}
                          </span>
                        )}
                        {testimonial.exam && (
                          <>
                            <span className="text-slate-400">•</span>
                            <span className="text-sm text-slate-600">{testimonial.exam}</span>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>

                  {/* Decorative illustration */}
                  <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                    <EducationIllustration 
                      type={index === 0 ? 'trophy' : index === 1 ? 'certificate' : 'rocket'} 
                      size={60} 
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

