import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, Smartphone, Download } from 'lucide-react';
import HandDrawnArrow from './HandDrawnArrow';
import EducationIllustration from './EducationIllustration';

gsap.registerPlugin(ScrollTrigger);

const AppDownload = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(contentRef.current?.children,
      { y: 80, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
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
  }, []);

  const features = [
    "Live & recorded classes available at ease",
    "Dashboard for progress tracking",
    "Lakhs of practice questions",
    "24/7 doubt solving support",
    "Offline video downloads"
  ];

  return (
    <section ref={sectionRef} className="relative py-20 md:py-28 bg-gradient-to-br from-blue-50 via-white to-cyan-50 overflow-hidden">
      {/* Decorative illustrations */}
      <div className="absolute top-10 left-10 opacity-10 hidden lg:block transform rotate-12">
        <EducationIllustration type="laptop" size={150} />
      </div>
      <div className="absolute bottom-10 right-10 opacity-10 hidden lg:block transform -rotate-12">
        <EducationIllustration type="online-learning" size={120} />
      </div>
      <div className="absolute top-1/2 right-5 opacity-8 hidden xl:block transform rotate-45">
        <EducationIllustration type="rocket" size={100} />
      </div>

      {/* Hand-drawn arrows */}
      <div className="absolute top-1/3 left-10 hidden xl:block animate-float transform rotate-12">
        <HandDrawnArrow direction="right" color="#3776AB" className="w-20 h-20" />
      </div>
      <div className="absolute bottom-1/4 right-10 hidden xl:block animate-float transform -rotate-12" style={{ animationDelay: '1s' }}>
        <HandDrawnArrow direction="left" color="#00D4AA" className="w-16 h-16" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
                style={{ 
                  fontFamily: "'Dancing Script', 'Pacifico', cursive",
                  background: 'linear-gradient(to right, #1e40af, #06b6d4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
              Join 10K+ students on the app today!
            </h2>

            {/* Features list */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 mt-1">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-lg text-slate-700">{feature}</p>
                </div>
              ))}
            </div>

            {/* Download buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="flex items-center justify-center gap-3 bg-black text-white px-6 py-4 rounded-2xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.11L13.69,12L3.84,21.89C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.19,15.47L14.96,13.23L18.74,11.03L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">Download on</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center justify-center gap-3 bg-black text-white px-6 py-4 rounded-2xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">Download on</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right side - Phone mockup */}
          <div className="relative flex justify-center items-center">
            <div className="relative transform hover:scale-105 transition-transform duration-500"
                 style={{ transform: 'rotate(-5deg)' }}>
              {/* Phone frame */}
              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-4 rounded-3xl shadow-2xl">
                <div className="bg-white rounded-2xl p-2">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl h-96 flex items-center justify-center">
                    <div className="text-center">
                      <Smartphone className="h-24 w-24 mx-auto mb-4 text-blue-600" />
                      <div className="text-2xl font-bold text-slate-900 mb-2"
                           style={{ fontFamily: "'Dancing Script', 'Pacifico', cursive" }}>
                        Codex App
                      </div>
                      <div className="text-slate-600">Learn on the go!</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 opacity-20 animate-float">
                <EducationIllustration type="certificate" size={60} />
              </div>
              <div className="absolute -bottom-4 -left-4 opacity-20 animate-float" style={{ animationDelay: '0.5s' }}>
                <EducationIllustration type="trophy" size={50} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;

