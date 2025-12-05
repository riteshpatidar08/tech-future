import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Star, Zap, Crown } from 'lucide-react';
import HandDrawnArrow from './HandDrawnArrow';
import EducationIllustration from './EducationIllustration';

gsap.registerPlugin(ScrollTrigger);

interface Plan {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  icon: React.ReactNode;
  gradient: string;
  buttonText: string;
}

const plans: Plan[] = [
  {
    id: 'basic',
    name: 'Basic Plan',
    price: '₹4,999',
    originalPrice: '₹9,999',
    period: 'per month',
    description: 'Perfect for beginners starting their tech journey',
    features: [
      'Access to all course videos',
      'Downloadable study materials',
      'Community forum access',
      'Email support',
      'Basic projects',
      'Certificate of completion'
    ],
    icon: <Zap className="h-6 w-6" />,
    gradient: 'from-blue-500 to-cyan-500',
    buttonText: 'Start Learning'
  },
  {
    id: 'professional',
    name: 'Professional Plan',
    price: '₹9,999',
    originalPrice: '₹19,999',
    period: 'per month',
    description: 'Most popular choice for serious learners',
    features: [
      'Everything in Basic Plan',
      'Live interactive classes',
      '1-on-1 mentorship sessions',
      '24/7 doubt solving',
      'Advanced projects & assignments',
      'Resume building & interview prep',
      'Job placement assistance',
      'Industry-recognized certificate',
      'Lifetime course access'
    ],
    popular: true,
    icon: <Star className="h-6 w-6" />,
    gradient: 'from-purple-500 to-pink-500',
    buttonText: 'Get Started'
  },
  {
    id: 'enterprise',
    name: 'Enterprise Plan',
    price: '₹14,999',
    originalPrice: '₹29,999',
    period: 'per month',
    description: 'Complete career transformation package',
    features: [
      'Everything in Professional Plan',
      'Dedicated career counselor',
      'Guaranteed job placement',
      'Salary negotiation support',
      'LinkedIn profile optimization',
      'Mock interviews with industry experts',
      'Portfolio review & feedback',
      'Exclusive job opportunities',
      'Alumni network access',
      'Premium certificate with verification'
    ],
    icon: <Crown className="h-6 w-6" />,
    gradient: 'from-orange-500 to-yellow-500',
    buttonText: 'Transform Career'
  }
];

const PricingPlans = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const plansRef = useRef<HTMLDivElement>(null);

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

    if (plansRef.current) {
      gsap.fromTo(plansRef.current.children,
        { y: 80, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: plansRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none'
          }
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 md:py-28 bg-white overflow-hidden">
      <div className="absolute top-10 right-10 opacity-10 hidden lg:block transform rotate-12">
        <EducationIllustration type="certificate" size={120} />
      </div>
      <div className="absolute bottom-10 left-10 opacity-10 hidden lg:block transform -rotate-12">
        <EducationIllustration type="rocket" size={100} />
      </div>

      <div className="absolute top-1/4 left-10 hidden xl:block animate-float transform rotate-12">
        <HandDrawnArrow direction="right" color="#3776AB" className="w-20 h-20" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Star className="h-6 w-6 text-blue-600" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A]"
                style={{ 
                  fontFamily: "'Dancing Script', 'Pacifico', 'Brush Script MT', cursive",
                  fontWeight: 700
                }}>
              Choose Your Plan
            </h2>
          </div>
          <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Flexible pricing plans designed for every learner. Start with Basic or go all-in with Enterprise for complete career transformation.
          </p>
        </div>

        <div ref={plansRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.id}
              className={`border-2 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 relative overflow-hidden ${
                plan.popular ? 'border-blue-500 ring-4 ring-blue-200' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-1 text-xs font-bold rounded-bl-lg">
                  MOST POPULAR
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${plan.gradient} shadow-lg mb-4`}>
                  <div className="text-white">{plan.icon}</div>
                </div>
                <CardTitle className="text-2xl font-bold text-[#0F172A] mb-2"
                           style={{ 
                             fontFamily: "'Dancing Script', 'Pacifico', 'Brush Script MT', cursive",
                             fontWeight: 700
                           }}>
                  {plan.name}
                </CardTitle>
                <p className="text-sm text-slate-600 mb-4">{plan.description}</p>
                <div className="mb-4">
                  <div className="flex items-baseline justify-center gap-2">
                    {plan.originalPrice && (
                      <span className="text-lg text-slate-400 line-through">{plan.originalPrice}</span>
                    )}
                    <span className="text-4xl font-bold text-[#0F172A]">{plan.price}</span>
                  </div>
                  <p className="text-sm text-slate-500 mt-1">{plan.period}</p>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full mt-6 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                  }`}
                  style={plan.popular ? { fontFamily: "'Dancing Script', 'Pacifico', 'Brush Script MT', cursive", fontWeight: 700 } : {}}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-4">All plans include 7-day money-back guarantee</p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" />
              <span>No hidden charges</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" />
              <span>Lifetime updates</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;

