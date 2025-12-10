import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, Smartphone, Download } from 'lucide-react';
import Phone3D from './Phone3D';

gsap.registerPlugin(ScrollTrigger);

const AppDownload = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      contentRef.current?.children,
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

  const features = [
    'Live & recorded classes available at ease',
    'Dashboard for progress tracking',
    'Lakhs of practice questions',
    '24/7 doubt solving support',
    'Offline video downloads',
  ];

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              Join 10K+ students on the app today!
            </h2>

            <div className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-slate-900 mt-0.5 flex-shrink-0">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-base text-slate-700">{feature}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center gap-3 bg-slate-900 text-white px-6 py-4 rounded-lg font-medium hover:bg-slate-800 transition-colors">
                <Smartphone className="h-6 w-6" />
                <div className="text-left">
                  <div className="text-xs">Download on</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </button>
              <button className="flex items-center gap-3 bg-slate-900 text-white px-6 py-4 rounded-lg font-medium hover:bg-slate-800 transition-colors">
                <Download className="h-6 w-6" />
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative h-96 flex items-center justify-center">
              <Phone3D className="scale-150" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
