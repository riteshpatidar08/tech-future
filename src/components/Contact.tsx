
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import HandDrawnArrow from "./HandDrawnArrow";
import EducationIllustration from "./EducationIllustration";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo('.contact-header',
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: contactRef.current,
          start: 'top 80%',
        }
      }
    );

    gsap.fromTo('.contact-form',
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.contact-content',
          start: 'top 80%',
        }
      }
    );

    gsap.fromTo('.contact-info',
      { x: 50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.contact-content',
          start: 'top 80%',
        }
      }
    );
  }, []);

  return (
    <section ref={contactRef} className="py-20 bg-white relative overflow-hidden">
      {/* Decorative tech icons */}
      <div className="absolute top-20 left-5 opacity-10 hidden lg:block transform rotate-12">
        <EducationIllustration type="student" size={120} />
      </div>
      <div className="absolute top-40 right-10 opacity-10 hidden xl:block transform -rotate-6">
        <EducationIllustration type="laptop" size={100} />
      </div>
      <div className="absolute bottom-20 left-10 opacity-10 hidden lg:block transform rotate-6">
        <EducationIllustration type="lightbulb" size={110} />
      </div>
      <div className="absolute top-1/2 left-5 opacity-10 hidden xl:block transform rotate-45">
        <EducationIllustration type="teamwork" size={100} />
      </div>
      <div className="absolute bottom-1/3 right-5 opacity-10 hidden xl:block transform -rotate-12">
        <EducationIllustration type="certificate" size={90} />
      </div>
      
      {/* Hand-drawn arrows */}
      <div className="absolute top-1/3 right-5 hidden xl:block animate-float transform rotate-12">
        <HandDrawnArrow direction="left" color="#3776AB" className="w-20 h-20" />
      </div>
      <div className="absolute bottom-1/4 left-5 hidden xl:block animate-float transform -rotate-12" style={{ animationDelay: '1s' }}>
        <HandDrawnArrow direction="right" color="#00D4AA" className="w-16 h-16" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 relative">
          {/* Tech icons behind header */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="absolute -left-20 top-0 opacity-15">
              <svg width="100" height="100" viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="70" fill="#3776AB"/>
                <circle cx="150" cy="100" r="70" fill="#FFDE57"/>
              </svg>
            </div>
            <div className="absolute -right-20 top-0 opacity-15">
              <svg width="100" height="100" viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="75" fill="#00D4AA"/>
                <circle cx="100" cy="100" r="20" fill="#61DAFB"/>
              </svg>
            </div>
          </div>
          
          <h2 className="contact-header text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-4 leading-tight tracking-tight relative z-10"
              style={{ 
                fontFamily: "'Dancing Script', 'Pacifico', 'Brush Script MT', cursive",
                letterSpacing: '0.02em'
              }}>
            Ready to Start Your Journey?
          </h2>
          <p className="contact-header text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed px-4 relative z-10">
            Get in touch with us today for a free consultation and take the first step toward your tech career
          </p>
        </div>
        
        <div className="contact-content grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="contact-form bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-200 shadow-md hover:shadow-lg transition-all duration-300 relative"
               style={{ transform: 'rotate(-1deg)' }}>
            {/* Arrow pointing to form */}
            <div className="absolute -left-12 top-1/2 hidden xl:block animate-float">
              <HandDrawnArrow direction="right" color="#F89820" className="w-14 h-14" />
            </div>
            
            <h3 className="text-xl sm:text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent leading-tight tracking-tight"
                style={{ fontFamily: "'Dancing Script', 'Pacifico', cursive" }}>
              Send us a Message
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input 
                  placeholder="First Name" 
                  className="bg-white border-gray-300 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 transition-colors rounded-xl"
                />
                <Input 
                  placeholder="Last Name" 
                  className="bg-white border-gray-300 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 transition-colors rounded-xl"
                />
              </div>
              <Input 
                type="email" 
                placeholder="Email Address" 
                className="bg-white border-gray-300 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 transition-colors rounded-xl"
              />
              <Input 
                placeholder="Phone Number" 
                className="bg-white border-gray-300 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 transition-colors rounded-xl"
              />
              <Textarea 
                placeholder="Which course are you interested in? Any questions?" 
                rows={4}
                className="bg-white border-gray-300 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 transition-colors resize-none rounded-xl"
              />
              <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 rounded-3xl transition-all duration-300 transform hover:scale-105 hover:rotate-1"
                      style={{ fontFamily: "'Dancing Script', 'Pacifico', cursive", fontSize: '1.1em' }}>
                Send Message
              </Button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="relative">
            {/* Arrow pointing to contact info */}
            <div className="absolute -right-12 top-1/2 hidden xl:block animate-float" style={{ animationDelay: '0.8s' }}>
              <HandDrawnArrow direction="left" color="#7F6DFF" className="w-14 h-14" />
            </div>
            
            <h3 className="text-xl sm:text-2xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent leading-tight tracking-tight"
                style={{ fontFamily: "'Dancing Script', 'Pacifico', cursive" }}>
              Get in Touch
            </h3>
            <div className="space-y-6">
              {/* Card 1 - Location Bangalore */}
              <div className="contact-info flex items-start space-x-4 p-6 rounded-xl border shadow-md hover:shadow-lg transition-all duration-300 group"
                   style={{ 
                     background: 'linear-gradient(135deg, rgba(127,109,255,0.08) 0%, rgba(255,111,97,0.05) 100%)',
                     borderColor: 'rgba(127,109,255,0.2)',
                     transform: 'rotate(1deg)'
                   }}>
                <div className="p-3 rounded-lg group-hover:scale-110 transition-transform"
                     style={{ background: 'linear-gradient(135deg, #7F6DFF, #FF6F61)' }}>
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-base sm:text-lg text-slate-900 mb-1 tracking-tight">Visit Our Campus - Bangalore</h4>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    123 Tech Street, Innovation District<br />
                    Bangalore, Karnataka 560001
                  </p>
                </div>
              </div>
              
              {/* Card 1b - Location Bhopal */}
              <div className="contact-info flex items-start space-x-4 p-6 rounded-xl border shadow-md hover:shadow-lg transition-all duration-300 group"
                   style={{ 
                     background: 'linear-gradient(135deg, rgba(0,212,170,0.08) 0%, rgba(97,218,251,0.05) 100%)',
                     borderColor: 'rgba(0,212,170,0.2)',
                     transform: 'rotate(-0.5deg)'
                   }}>
                <div className="p-3 rounded-lg group-hover:scale-110 transition-transform"
                     style={{ background: 'linear-gradient(135deg, #00D4AA, #61DAFB)' }}>
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-base sm:text-lg text-slate-900 mb-1 tracking-tight">Visit Our Campus - Bhopal</h4>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    456 Education Hub, Tech Park<br />
                    Bhopal, Madhya Pradesh 462001
                  </p>
                </div>
              </div>
              
              {/* Card 2 - Phone */}
              <div className="contact-info flex items-start space-x-4 p-6 rounded-xl border shadow-md hover:shadow-lg transition-all duration-300 group"
                   style={{ 
                     background: 'linear-gradient(135deg, rgba(0,212,170,0.08) 0%, rgba(97,218,251,0.05) 100%)',
                     borderColor: 'rgba(0,212,170,0.2)',
                     transform: 'rotate(-1deg)'
                   }}>
                <div className="p-3 rounded-lg group-hover:scale-110 transition-transform"
                     style={{ background: 'linear-gradient(135deg, #00D4AA, #61DAFB)' }}>
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-base sm:text-lg text-slate-900 mb-1 tracking-tight">Call Us</h4>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    +91 98765 43210<br />
                    +91 87654 32109
                  </p>
                </div>
              </div>
              
              {/* Card 3 - Email */}
              <div className="contact-info flex items-start space-x-4 p-6 rounded-xl border shadow-md hover:shadow-lg transition-all duration-300 group"
                   style={{ 
                     background: 'linear-gradient(135deg, rgba(55,118,171,0.08) 0%, rgba(255,222,87,0.05) 100%)',
                     borderColor: 'rgba(55,118,171,0.2)',
                     transform: 'rotate(0.5deg)'
                   }}>
                <div className="p-3 rounded-lg group-hover:scale-110 transition-transform"
                     style={{ background: 'linear-gradient(135deg, #3776AB, #0DB7ED)' }}>
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-base sm:text-lg text-slate-900 mb-1 tracking-tight">Email Us</h4>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    info@codex.com<br />
                    admissions@codex.com
                  </p>
                </div>
              </div>
              
              {/* Card 4 - Office Hours */}
              <div className="contact-info flex items-start space-x-4 p-6 rounded-xl border shadow-md hover:shadow-lg transition-all duration-300 group"
                   style={{ 
                     background: 'linear-gradient(135deg, rgba(248,152,32,0.08) 0%, rgba(237,139,0,0.05) 100%)',
                     borderColor: 'rgba(248,152,32,0.2)',
                     transform: 'rotate(-0.5deg)'
                   }}>
                <div className="p-3 rounded-lg group-hover:scale-110 transition-transform"
                     style={{ background: 'linear-gradient(135deg, #F89820, #FFB300)' }}>
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-base sm:text-lg text-slate-900 mb-1 tracking-tight">Office Hours</h4>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Monday - Friday: 9:00 AM - 7:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
