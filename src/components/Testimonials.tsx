import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote, Star } from 'lucide-react';
import Certificate3D from './Certificate3D';
import BackgroundPattern from './BackgroundPattern';

gsap.registerPlugin(ScrollTrigger);

interface Testimonial {
  name: string;
  rank?: string;
  exam?: string;
  quote: string;
}

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = cardsRef.current?.children;
    if (!cards) return;

    gsap.fromTo(
      cards,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  const testimonials: Testimonial[] = [
    {
      name: 'Rajesh Kumar',
      rank: 'AIR 1',
      exam: 'Full Stack Development',
      quote:
        'Syntaxim helped me master React and Node.js from scratch. The hands-on projects and expert guidance made all the difference. I landed my dream job!',
    },
    {
      name: 'Priya Sharma',
      rank: 'Top Performer',
      exam: 'Data Science',
      quote:
        'The Python Data Science course at Syntaxim is exceptional. The instructors break down complex concepts into simple, understandable lessons. Highly recommended!',
    },
    {
      name: 'Amit Patel',
      rank: '95% Score',
      exam: 'Machine Learning',
      quote:
        'Thanks to Syntaxim! The faculty teaches from basics and they are very supportive. I was able to build real ML projects and secure a position as a Data Scientist.',
    },
    {
      name: 'Sneha Reddy',
      rank: 'First Class',
      exam: 'Data Analytics',
      quote:
        'Syntaxim helped me in establishing the basics of every subject. I was able to progress quickly and increase my speed while maintaining accuracy in my work.',
    },
    {
      name: 'Karan Mehta',
      rank: 'Successfully Placed',
      exam: 'Full Stack Development',
      quote:
        'The comprehensive curriculum and real-world projects prepared me perfectly for interviews. Syntaxim gave me the confidence and skills to crack top tech companies.',
    },
    {
      name: 'Anjali Desai',
      rank: 'Data Scientist',
      exam: 'Machine Learning',
      quote:
        'Best investment in my career! The ML course covers everything from fundamentals to advanced topics. The mentorship program is outstanding.',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-20 bg-slate-50 overflow-hidden"
    >
      {/* Background Pattern */}
      <BackgroundPattern variant="dots" opacity={0.03} />

      {/* 3D Certificate Elements */}
      <div className="absolute top-20 right-10 opacity-10 hidden lg:block">
        <Certificate3D className="scale-75" />
      </div>
      <div className="absolute bottom-20 left-10 opacity-10 hidden lg:block">
        <Certificate3D className="scale-75" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="flex justify-center mb-6">
            <Certificate3D className="scale-75" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            What Our Students Say
          </h2>
          <p className="text-xs md:text-sm text-slate-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our students have to
            say about their experience with Syntaxim.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 border border-slate-200 rounded-lg bg-white hover:shadow-md transition-shadow"
            >
              <div className="mb-4">
                <Quote className="h-8 w-8 text-slate-400" />
              </div>
              <p className="text-sm text-slate-700 mb-4 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-slate-200 pt-3">
                <div className="font-semibold text-sm text-slate-900 mb-1">
                  {testimonial.name}
                </div>
                {testimonial.rank && (
                  <div className="text-xs text-slate-600 mb-1">
                    {testimonial.rank}
                  </div>
                )}
                {testimonial.exam && (
                  <div className="text-xs text-slate-500">
                    {testimonial.exam}
                  </div>
                )}
                <div className="flex items-center gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
