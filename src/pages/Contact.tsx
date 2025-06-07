
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Navigation from "@/components/Navigation";
import AnimatedBackground from "@/components/AnimatedBackground";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Header animation
    gsap.fromTo(headerRef.current?.children,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out', delay: 0.3 }
    );

    // Form animation
    gsap.fromTo(formRef.current,
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.6 }
    );

    // Info animation
    gsap.fromTo(infoRef.current?.children,
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out', delay: 0.8 }
    );
  }, []);

  return (
    <div className="min-h-screen text-white">
      <AnimatedBackground />
      <Navigation />
      
      <section className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div ref={headerRef} className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to start your journey? Contact us today for a free consultation and take the first step toward your tech career
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div ref={formRef} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input 
                    placeholder="First Name" 
                    className="bg-white/5 border-purple-500/30 text-white placeholder:text-gray-400 focus:border-purple-500 transition-colors"
                  />
                  <Input 
                    placeholder="Last Name" 
                    className="bg-white/5 border-purple-500/30 text-white placeholder:text-gray-400 focus:border-purple-500 transition-colors"
                  />
                </div>
                <Input 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-white/5 border-purple-500/30 text-white placeholder:text-gray-400 focus:border-purple-500 transition-colors"
                />
                <Input 
                  placeholder="Phone Number" 
                  className="bg-white/5 border-purple-500/30 text-white placeholder:text-gray-400 focus:border-purple-500 transition-colors"
                />
                <Textarea 
                  placeholder="Which course are you interested in? Any questions?" 
                  rows={4}
                  className="bg-white/5 border-purple-500/30 text-white placeholder:text-gray-400 focus:border-purple-500 transition-colors resize-none"
                />
                <Button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105">
                  Send Message
                </Button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div ref={infoRef}>
              <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group">
                  <div className="p-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg group-hover:scale-110 transition-transform">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-white mb-2">Visit Our Campus</h4>
                    <p className="text-gray-400">
                      123 Tech Street, Innovation District<br />
                      Bangalore, Karnataka 560001
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group">
                  <div className="p-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg group-hover:scale-110 transition-transform">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-white mb-2">Call Us</h4>
                    <p className="text-gray-400">
                      +91 98765 43210<br />
                      +91 87654 32109
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group">
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg group-hover:scale-110 transition-transform">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-white mb-2">Email Us</h4>
                    <p className="text-gray-400">
                      info@techinstitute.com<br />
                      admissions@techinstitute.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group">
                  <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg group-hover:scale-110 transition-transform">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-white mb-2">Office Hours</h4>
                    <p className="text-gray-400">
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
      
      <Footer />
    </div>
  );
};

export default Contact;
