import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Mail3D from './Mail3D';
import Phone3D from './Phone3D';
import BackgroundPattern from './BackgroundPattern';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      '.contact-header',
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
        },
      }
    );

    gsap.fromTo(
      '.contact-form',
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.contact-content',
          start: 'top 80%',
        },
      }
    );

    gsap.fromTo(
      '.contact-info',
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
        },
      }
    );
  }, []);

  return (
    <section
      ref={contactRef}
      className="py-16 md:py-20 bg-slate-50 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <BackgroundPattern variant="grid-dots" opacity={0.03} />

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
        <div className="text-center mb-10 md:mb-12 relative">
          <div className="flex justify-center mb-6">
            <Mail3D className="scale-75" />
          </div>

          <h2 className="contact-header text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4 leading-tight tracking-tight relative z-10">
            Ready to Start Your Journey?
          </h2>
          <p className="contact-header text-xs sm:text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed px-4 relative z-10">
            Get in touch with us today for a free consultation and take the
            first step toward your tech career
          </p>
        </div>

        <div className="contact-content grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="contact-form bg-white rounded-lg p-6 border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md transition-all duration-300 relative">
            <h3 className="text-base sm:text-lg font-bold mb-5 text-slate-900 leading-tight tracking-tight">
              Send us a Message
            </h3>
            <form className="space-y-4">
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
              <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm py-2.5 rounded-lg transition-all duration-300">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="relative">
            <h3 className="text-base sm:text-lg font-bold mb-6 text-slate-900 leading-tight tracking-tight">
              Get in Touch
            </h3>
            <div className="space-y-4 mb-6">
              {/* Card 1 - Location Bhopal */}
              <div className="contact-info flex items-start space-x-3 p-4 rounded-lg border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="p-2 rounded-lg bg-slate-100 group-hover:bg-slate-900 transition-colors">
                  <MapPin className="h-5 w-5 text-slate-900 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-semibold text-xs sm:text-sm text-slate-900 mb-1 tracking-tight">
                    Bhopal Office
                  </h4>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Opposite Manpreet Hotel
                    <br />
                    80 Feet Road, Ashoka Garden
                    <br />
                    Bhopal, Madhya Pradesh
                    <br />
                    India
                  </p>
                </div>
              </div>

              {/* Card 2 - Phone */}
              <div className="contact-info flex items-start space-x-3 p-4 rounded-lg border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="p-2 rounded-lg bg-slate-100 group-hover:bg-slate-900 transition-colors">
                  <Phone className="h-5 w-5 text-slate-900 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-semibold text-xs sm:text-sm text-slate-900 mb-1 tracking-tight">
                    Call Us
                  </h4>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    +91 87090 61231
                  </p>
                </div>
              </div>

              {/* Card 3 - Email */}
              <div className="contact-info flex items-start space-x-3 p-4 rounded-lg border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="p-2 rounded-lg bg-slate-100 group-hover:bg-slate-900 transition-colors">
                  <Mail className="h-5 w-5 text-slate-900 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-semibold text-xs sm:text-sm text-slate-900 mb-1 tracking-tight">
                    Email Us
                  </h4>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    info@syntaxim.com
                    <br />
                    admissions@syntaxim.com
                  </p>
                </div>
              </div>

              {/* Card 4 - Office Hours */}
              <div className="contact-info flex items-start space-x-4 p-4 rounded-lg border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="p-2 rounded-lg bg-slate-100 group-hover:bg-slate-900 transition-colors">
                  <Clock className="h-5 w-5 text-slate-900 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-semibold text-xs sm:text-sm text-slate-900 mb-1 tracking-tight">
                    Office Hours
                  </h4>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Monday - Friday: 9:00 AM - 7:00 PM
                    <br />
                    Saturday: 10:00 AM - 4:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="mt-6 rounded-lg overflow-hidden border-2 border-slate-200 shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.5!2d77.4126!3d23.2599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDE1JzM1LjYiTiA3N8KwMjQnNDUuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin&q=Opposite+Manpreet+Hotel+80+Feet+Road+Ashoka+Garden+Bhopal+Madhya+Pradesh+462023"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Syntaxim Bhopal Office Location - Opposite Manpreet Hotel, 80 Feet Road, Ashoka Garden"
                className="w-full"
              ></iframe>
              <div className="mt-2 text-center p-2 bg-slate-50">
                <a
                  href="https://maps.app.goo.gl/NBR9XNjcGZtQFwwh6?g_st=aw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-600 hover:text-slate-900 underline inline-flex items-center gap-1"
                >
                  <MapPin className="h-3 w-3" />
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
