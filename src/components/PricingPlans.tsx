import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Star, Zap, Crown } from 'lucide-react';
import Certificate3D from './Certificate3D';

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
      'Certificate of completion',
    ],
    icon: <Zap className="h-6 w-6" />,
    buttonText: 'Start Learning',
  },
  {
    id: 'professional',
    name: 'Professional Plan',
    price: '₹9,999',
    originalPrice: '₹19,999',
    period: 'per month',
    description: 'Best for serious learners and career changers',
    features: [
      'Everything in Basic',
      'Live interactive classes',
      '1-on-1 mentorship sessions',
      'Priority support',
      'Advanced projects',
      'Job placement assistance',
      'Industry-recognized certificate',
      'Lifetime course access',
    ],
    popular: true,
    icon: <Star className="h-6 w-6" />,
    buttonText: 'Get Started',
  },
  {
    id: 'enterprise',
    name: 'Enterprise Plan',
    price: '₹19,999',
    originalPrice: '₹39,999',
    period: 'per month',
    description: 'Complete career transformation package',
    features: [
      'Everything in Professional',
      'Dedicated career coach',
      'Guaranteed job placement',
      'Exclusive job opportunities',
      'Alumni network access',
      'Premium certificate with verification',
    ],
    icon: <Crown className="h-6 w-6" />,
    buttonText: 'Transform Career',
  },
];

const PricingPlans = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const plansRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    if (plansRef.current) {
      gsap.fromTo(
        plansRef.current.children,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: plansRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-white overflow-hidden"
    >
      {/* 3D Certificate Elements */}
      <div className="absolute top-10 right-10 opacity-10 hidden lg:block">
        <Certificate3D className="scale-75" />
      </div>
      <div className="absolute bottom-10 left-10 opacity-10 hidden lg:block">
        <Certificate3D className="scale-75" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Certificate3D className="scale-75" />
          </div>
          <div className="inline-flex items-center gap-2 mb-4">
            <Star className="h-6 w-6 text-slate-900" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
              Choose Your Plan
            </h2>
          </div>
          <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Flexible pricing plans designed for every learner. Start with Basic
            or go all-in with Enterprise for complete career transformation.
          </p>
        </div>

        <div
          ref={plansRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {plans.map((plan) => (
            <Card
              key={plan.id}
              className={`relative border-2 rounded-lg overflow-hidden ${
                plan.popular ? 'border-slate-900 shadow-lg' : 'border-slate-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-slate-900 text-white text-center py-2 text-sm font-medium">
                  Most Popular
                </div>
              )}

              <CardHeader className="text-center pb-4 pt-8">
                <div className="inline-flex p-4 rounded-lg bg-slate-100 mb-4">
                  <div className="text-slate-900">{plan.icon}</div>
                </div>
                <CardTitle className="text-2xl font-bold text-slate-900 mb-2">
                  {plan.name}
                </CardTitle>
                <p className="text-sm text-slate-600 mb-4">
                  {plan.description}
                </p>
                <div className="mb-4">
                  <div className="flex items-baseline justify-center gap-2">
                    {plan.originalPrice && (
                      <span className="text-lg text-slate-400 line-through">
                        {plan.originalPrice}
                      </span>
                    )}
                    <span className="text-4xl font-bold text-slate-900">
                      {plan.price}
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 mt-1">{plan.period}</p>
                </div>
              </CardHeader>

              <CardContent className="px-6 pb-6">
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-slate-900 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.popular
                      ? 'bg-slate-900 hover:bg-slate-800 text-white'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-4">
            All plans include 7-day money-back guarantee
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-slate-900" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-slate-900" />
              <span>No hidden fees</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-slate-900" />
              <span>Secure payment</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
