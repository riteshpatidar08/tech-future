import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, CheckCircle2, Shield, Globe, FileCheck, Star } from 'lucide-react';
import HandDrawnArrow from './HandDrawnArrow';
import EducationIllustration from './EducationIllustration';

gsap.registerPlugin(ScrollTrigger);

interface CertificationFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: CertificationFeature[] = [
  {
    icon: <Award className="h-6 w-6" />,
    title: 'Industry Recognized',
    description: 'Certificates recognized by top tech companies and hiring managers worldwide'
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Verification System',
    description: 'Unique certificate ID for employers to verify authenticity online'
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: 'Global Validity',
    description: 'Accepted and recognized internationally by employers and institutions'
  },
  {
    icon: <FileCheck className="h-6 w-6" />,
    title: 'LinkedIn Integration',
    description: 'Easy to add to LinkedIn profile and share with your professional network'
  }
];

const benefits = [
  'Enhance your resume and LinkedIn profile',
  'Stand out in job applications',
  'Demonstrate your commitment to learning',
  'Showcase your skills to employers',
  'Access to exclusive job opportunities',
  'Join our certified professionals network'
];

const CertificationDetails = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

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

    if (featuresRef.current) {
      gsap.fromTo(featuresRef.current.children,
        { y: 80, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: featuresRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none'
          }
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 md:py-28 bg-gradient-to-br from-blue-50 via-white to-cyan-50 overflow-hidden">
      <div className="absolute top-10 right-10 opacity-10 hidden lg:block transform rotate-12">
        <EducationIllustration type="certificate" size={120} />
      </div>
      <div className="absolute bottom-10 left-10 opacity-10 hidden lg:block transform -rotate-12">
        <EducationIllustration type="trophy" size={100} />
      </div>

      <div className="absolute top-1/4 right-10 hidden xl:block animate-float transform rotate-12">
        <HandDrawnArrow direction="left" color="#3776AB" className="w-20 h-20" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Award className="h-6 w-6 text-blue-600" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A]"
                style={{ 
                  fontFamily: "'Dancing Script', 'Pacifico', 'Brush Script MT', cursive",
                  fontWeight: 700
                }}>
              Industry-Recognized Certification
            </h2>
          </div>
          <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Earn a professional certificate upon course completion. Validate your skills and boost your career prospects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <Card className="border-2 shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-8 text-white text-center">
                <Award className="h-16 w-16 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2"
                    style={{ 
                      fontFamily: "'Dancing Script', 'Pacifico', 'Brush Script MT', cursive",
                      fontWeight: 700
                    }}>
                  Codex Professional Certificate
                </h3>
                <p className="text-blue-100">Verified by Industry Experts</p>
              </div>
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <span className="text-sm font-semibold text-slate-700">Certificate ID</span>
                    <Badge className="bg-blue-100 text-blue-700">CX-2024-XXXXX</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <span className="text-sm font-semibold text-slate-700">Verification</span>
                    <Badge className="bg-green-100 text-green-700">Verified</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <span className="text-sm font-semibold text-slate-700">Validity</span>
                    <Badge className="bg-purple-100 text-purple-700">Lifetime</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#0F172A] mb-6">Certificate Benefits</h3>
            <ul className="space-y-4">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <Card key={idx} className="border-2 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 text-center">
              <CardContent className="p-6">
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg mb-4">
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h4 className="text-lg font-bold text-[#0F172A] mb-2">{feature.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-4">Complete any course to earn your certificate</p>
          <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-3xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  style={{ fontFamily: "'Dancing Script', 'Pacifico', 'Brush Script MT', cursive", fontWeight: 700, fontSize: '1.1em' }}>
            View Sample Certificate
          </button>
        </div>
      </div>
    </section>
  );
};

export default CertificationDetails;

