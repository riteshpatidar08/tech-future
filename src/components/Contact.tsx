
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Mail3D from './Mail3D';
import Phone3D from './Phone3D';

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
    <section ref={contactRef} className="py-20 bg-slate-50 relative overflow-hidden">
      {/* 3D Mail and Phone Elements */}
      <div className="absolute top-20 left-10 opacity-10 hidden lg:block">
        <Mail3D className="scale-75" />
      </div>
      <div className="absolute top-40 right-10 opacity-10 hidden xl:block">
        <Phone3D className="scale-75" />
      </div>
      <div className="absolute bottom-20 left-10 opacity-10 hidden lg:block">
        <Mail3D className="scale-75" />
      </div>
      <div className="absolute bottom-1/3 right-10 opacity-10 hidden xl:block">
        <Phone3D className="scale-75" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 relative">
          <div className="flex justify-center mb-6">
            <Mail3D className="scale-75" />
          </div>
          
          <h2 className="contact-header text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight tracking-tight relative z-10">
            Ready to Start Your Journey?
          </h2>
          <p className="contact-header text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed px-4 relative z-10">
            Get in touch with us today for a free consultation and take the first step toward your tech career
          </p>
        </div>
        
        <div className="contact-content grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="contact-form bg-white rounded-lg p-8 border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md transition-all duration-300 relative">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-slate-900 leading-tight tracking-tight">
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
              <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-lg py-3 rounded-lg transition-all duration-300">
                Send Message
              </Button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="relative">
            <h3 className="text-xl sm:text-2xl font-bold mb-8 text-slate-900 leading-tight tracking-tight">
              Get in Touch
            </h3>
            <div className="space-y-6">
              {/* Card 1 - Location Bangalore */}
              <div className="contact-info flex items-start space-x-4 p-6 rounded-lg border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="p-3 rounded-lg bg-slate-100 group-hover:bg-slate-900 transition-colors">
                  <MapPin className="h-6 w-6 text-slate-900 group-hover:text-white transition-colors" />
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
              <div className="contact-info flex items-start space-x-4 p-6 rounded-lg border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="p-3 rounded-lg bg-slate-100 group-hover:bg-slate-900 transition-colors">
                  <MapPin className="h-6 w-6 text-slate-900 group-hover:text-white transition-colors" />
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
              <div className="contact-info flex items-start space-x-4 p-6 rounded-lg border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="p-3 rounded-lg bg-slate-100 group-hover:bg-slate-900 transition-colors">
                  <Phone className="h-6 w-6 text-slate-900 group-hover:text-white transition-colors" />
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
              <div className="contact-info flex items-start space-x-4 p-6 rounded-lg border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="p-3 rounded-lg bg-slate-100 group-hover:bg-slate-900 transition-colors">
                  <Mail className="h-6 w-6 text-slate-900 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-semibold text-base sm:text-lg text-slate-900 mb-1 tracking-tight">Email Us</h4>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    info@syntaxim.com<br />
                    admissions@syntaxim.com
                  </p>
                </div>
              </div>
              
              {/* Card 4 - Office Hours */}
              <div className="contact-info flex items-start space-x-4 p-6 rounded-lg border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="p-3 rounded-lg bg-slate-100 group-hover:bg-slate-900 transition-colors">
                  <Clock className="h-6 w-6 text-slate-900 group-hover:text-white transition-colors" />
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
