import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, TrendingUp, DollarSign, Users, Award, Target } from 'lucide-react';
import HandDrawnArrow from './HandDrawnArrow';
import EducationIllustration from './EducationIllustration';

gsap.registerPlugin(ScrollTrigger);

interface Outcome {
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
  gradient: string;
}

const outcomes: Outcome[] = [
  {
    icon: <Briefcase className="h-8 w-8" />,
    title: 'Placement Rate',
    value: '95%',
    description: 'Students placed within 6 months of course completion',
    gradient: 'from-blue-600 to-cyan-600'
  },
  {
    icon: <DollarSign className="h-8 w-8" />,
    title: 'Average Salary',
    value: '₹18 LPA',
    description: 'Average package offered to our graduates',
    gradient: 'from-green-600 to-emerald-600'
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: 'Salary Growth',
    value: '300%',
    description: 'Average salary increase after course completion',
    gradient: 'from-purple-600 to-pink-600'
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: 'Top Companies',
    value: '500+',
    description: 'Students placed in Fortune 500 and top tech companies',
    gradient: 'from-orange-600 to-red-600'
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: 'Career Switchers',
    value: '70%',
    description: 'Students successfully switched from non-tech backgrounds',
    gradient: 'from-indigo-600 to-blue-600'
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: 'Job Satisfaction',
    value: '92%',
    description: 'Students report high satisfaction with their new roles',
    gradient: 'from-cyan-600 to-blue-600'
  }
];

const companies = [
  'Microsoft', 'Google', 'Amazon', 'Meta', 'Netflix', 'Uber', 'Airbnb',
  'IBM', 'Oracle', 'Accenture', 'Deloitte', 'TCS', 'Infosys', 'Wipro'
];

const CareerOutcomes = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const outcomesRef = useRef<HTMLDivElement>(null);
  const companiesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(sectionRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
    }

    if (outcomesRef.current) {
      gsap.fromTo(outcomesRef.current.children,
        { y: 80, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: outcomesRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none'
          }
        }
      );
    }

    if (companiesRef.current) {
      gsap.fromTo(companiesRef.current.children,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.05,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: companiesRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 md:py-28 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      <div className="absolute top-10 left-10 opacity-10 hidden lg:block transform rotate-12">
        <EducationIllustration type="trophy" size={120} />
      </div>
      <div className="absolute bottom-10 right-10 opacity-10 hidden lg:block transform -rotate-12">
        <EducationIllustration type="certificate" size={100} />
      </div>

      <div className="absolute top-1/4 right-10 hidden xl:block animate-float transform rotate-12">
        <HandDrawnArrow direction="left" color="#3776AB" className="w-20 h-20" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Target className="h-6 w-6 text-blue-600" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A]"
                style={{ 
                  fontFamily: "'Dancing Script', 'Pacifico', 'Brush Script MT', cursive",
                  fontWeight: 700
                }}>
              Proven Career Outcomes
            </h2>
          </div>
          <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our students achieve remarkable career transformations. See the numbers that speak for themselves.
          </p>
        </div>

        <div ref={outcomesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {outcomes.map((outcome, idx) => (
            <Card key={idx} className="border-2 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 text-center">
              <CardContent className="p-8">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${outcome.gradient} shadow-lg mb-4`}>
                  <div className="text-white">{outcome.icon}</div>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-2"
                     style={{ 
                       fontFamily: "'Dancing Script', 'Pacifico', 'Brush Script MT', cursive",
                       fontWeight: 700
                     }}>
                  {outcome.value}
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-2">{outcome.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{outcome.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-[#0F172A] mb-8"
              style={{ 
                fontFamily: "'Dancing Script', 'Pacifico', 'Brush Script MT', cursive",
                fontWeight: 700
              }}>
            Our Students Work At
          </h3>
          <div ref={companiesRef} className="flex flex-wrap items-center justify-center gap-6">
            {companies.map((company, idx) => (
              <div
                key={idx}
                className="px-6 py-3 bg-white border-2 border-slate-200 rounded-xl shadow-md hover:shadow-lg hover:border-blue-300 transition-all duration-300 hover:scale-105"
              >
                <span className="text-lg font-semibold text-slate-700">{company}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4"
              style={{ 
                fontFamily: "'Dancing Script', 'Pacifico', 'Brush Script MT', cursive",
                fontWeight: 700
              }}>
            Ready to Transform Your Career?
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Join thousands of students who have successfully transitioned into tech careers. Start your journey today!
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-3xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  style={{ fontFamily: "'Dancing Script', 'Pacifico', 'Brush Script MT', cursive", fontWeight: 700, fontSize: '1.1em' }}>
            Start Your Career Transformation
          </button>
        </div>
      </div>
    </section>
  );
};

export default CareerOutcomes;

