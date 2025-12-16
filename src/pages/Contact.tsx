import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '@/components/Navigation';
import AnimatedBackground from '@/components/AnimatedBackground';
import BackgroundPattern from '@/components/BackgroundPattern';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Building2,
  Globe,
} from 'lucide-react';
import Mail3D from '@/components/Mail3D';
import Phone3D from '@/components/Phone3D';
import Laptop3D from '@/components/Laptop3D';
import CodeCube3D from '@/components/CodeCube3D';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Header animation
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current.children,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          delay: 0.3,
        }
      );
    }

    // Form animation
    if (formRef.current) {
      gsap.fromTo(
        formRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          delay: 0.6,
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Info cards animation
    if (cardsRef.current) {
      gsap.fromTo(
        cardsRef.current.children,
        { y: 50, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Section animation
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <AnimatedBackground />
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-20 pb-12 md:pb-16 overflow-hidden">
        <BackgroundPattern variant="dots" opacity={0.03} />

        {/* 3D Shapes - Decorative */}
        <div className="absolute top-20 right-10 opacity-10 hidden xl:block">
          <Mail3D className="scale-75" />
        </div>
        <div className="absolute bottom-20 left-10 opacity-10 hidden xl:block">
          <Phone3D className="scale-75" />
        </div>
        <div className="absolute top-1/2 right-20 opacity-10 hidden lg:block">
          <CodeCube3D className="scale-50" />
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div ref={headerRef} className="text-center mt-8 mb-6 md:mb-8">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-slate-900 text-white">
                <Mail className="h-5 w-5" />
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
                Get In Touch
              </h1>
            </div>
            <p className="text-xs md:text-sm text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Ready to start your journey? Contact us today for a free
              consultation and take the first step toward your tech career
              transformation.
            </p>
          </div>

          {/* Quick Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-5xl mx-auto mb-10">
            <div className="bg-white rounded-xl p-4 border-2 border-slate-200 hover:border-slate-900 transition-all duration-300 shadow-sm hover:shadow-lg group">
              <div className="p-2 bg-slate-900 rounded-lg w-fit mb-3 group-hover:scale-110 transition-transform">
                <Phone className="h-5 w-5 text-white" />
              </div>
              <h3 className="font-bold text-sm text-slate-900 mb-1">Call Us</h3>
              <p className="text-xs text-slate-600">+91 87090 61231</p>
            </div>
            <div className="bg-white rounded-xl p-4 border-2 border-slate-200 hover:border-slate-900 transition-all duration-300 shadow-sm hover:shadow-lg group">
              <div className="p-2 bg-slate-900 rounded-lg w-fit mb-3 group-hover:scale-110 transition-transform">
                <Mail className="h-5 w-5 text-white" />
              </div>
              <h3 className="font-bold text-sm text-slate-900 mb-1">
                Email Us
              </h3>
              <p className="text-xs text-slate-600">info@syntaxim.com</p>
            </div>
            <div className="bg-white rounded-xl p-4 border-2 border-slate-200 hover:border-slate-900 transition-all duration-300 shadow-sm hover:shadow-lg group">
              <div className="p-2 bg-slate-900 rounded-lg w-fit mb-3 group-hover:scale-110 transition-transform">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <h3 className="font-bold text-sm text-slate-900 mb-1">
                Office Hours
              </h3>
              <p className="text-xs text-slate-600">Mon-Fri: 9AM - 7PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section
        ref={sectionRef}
        className="relative py-16 md:py-20 bg-white overflow-hidden"
      >
        <BackgroundPattern variant="grid-dots" opacity={0.025} />

        {/* 3D Laptop - Background Element */}
        <div className="absolute top-10 right-20 opacity-5 hidden xl:block">
          <Laptop3D className="scale-75" />
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Contact Form */}
            <div ref={formRef} className="relative lg:sticky lg:top-24">
              <div className="bg-white rounded-xl p-6 md:p-8 border-2 border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                {/* Decorative gradient */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-slate-100 rounded-full opacity-50 blur-3xl -z-10"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-slate-900 rounded-lg">
                      <Send className="h-5 w-5 text-white" />
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">
                      Send us a Message
                    </h2>
                  </div>

                  <form className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Input
                          placeholder="First Name"
                          className="bg-white border-2 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-slate-900 transition-colors h-11 text-sm"
                        />
                      </div>
                      <div>
                        <Input
                          placeholder="Last Name"
                          className="bg-white border-2 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-slate-900 transition-colors h-11 text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Email Address"
                        className="bg-white border-2 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-slate-900 transition-colors h-11 text-sm"
                      />
                    </div>
                    <div>
                      <Input
                        placeholder="Phone Number"
                        className="bg-white border-2 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-slate-900 transition-colors h-11 text-sm"
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Which course are you interested in? Any questions?"
                        rows={4}
                        className="bg-white border-2 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-slate-900 transition-colors resize-none text-sm min-h-[100px]"
                      />
                    </div>
                    <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-lg transition-all duration-300 text-sm">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div ref={infoRef} className="space-y-4">
              <div className="mb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-slate-900 rounded-lg">
                    <Building2 className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">
                    Contact Information
                  </h2>
                </div>
                <p className="text-xs md:text-sm text-slate-600">
                  Reach out to us through any of these channels. We're here to
                  help you succeed.
                </p>
              </div>

              <div ref={cardsRef} className="space-y-4">
                {/* Google Map - Moved to top */}
                <div className="rounded-lg overflow-hidden border-2 border-slate-200 shadow-md">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.5!2d77.4126!3d23.2599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDE1JzM1LjYiTiA3N8KwMjQnNDUuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin&q=Opposite+Manpreet+Hotel+80+Feet+Road+Ashoka+Garden+Bhopal+Madhya+Pradesh+462023"
                    width="100%"
                    height="280"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Syntaxim Bhopal Office Location - Opposite Manpreet Hotel, 80 Feet Road, Ashoka Garden"
                    className="w-full"
                  ></iframe>
                  <div className="bg-slate-50 p-3 text-center border-t border-slate-200">
                    <a
                      href="https://maps.app.goo.gl/NBR9XNjcGZtQFwwh6?g_st=aw"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-slate-600 hover:text-slate-900 underline inline-flex items-center gap-1.5 font-medium"
                    >
                      <MapPin className="h-3.5 w-3.5" />
                      View on Google Maps
                    </a>
                  </div>
                </div>

                {/* Bhopal Office */}
                <div className="bg-white rounded-xl p-4 border-2 border-slate-200 hover:border-slate-900 shadow-md hover:shadow-lg transition-all duration-300 group">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-slate-900 rounded-lg group-hover:scale-110 transition-transform flex-shrink-0">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-sm text-slate-900 mb-1.5">
                        Bhopal Office
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Opposite Manpreet Hotel
                        <br />
                        80 Feet Road, Ashoka Garden
                        <br />
                        Bhopal, Madhya Pradesh
                        <br />
                        <span className="text-slate-500 text-xs mt-1 block">
                          India
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="bg-white rounded-xl p-4 border-2 border-slate-200 hover:border-slate-900 shadow-md hover:shadow-lg transition-all duration-300 group">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-slate-900 rounded-lg group-hover:scale-110 transition-transform flex-shrink-0">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-sm text-slate-900 mb-1">
                        Phone
                      </h3>
                      <p className="text-xs text-slate-600">
                        <a
                          href="tel:+918709061231"
                          className="hover:text-slate-900 transition-colors"
                        >
                          +91 87090 61231
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-white rounded-xl p-4 border-2 border-slate-200 hover:border-slate-900 shadow-md hover:shadow-lg transition-all duration-300 group">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-slate-900 rounded-lg group-hover:scale-110 transition-transform flex-shrink-0">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-sm text-slate-900 mb-1">
                        Email
                      </h3>
                      <p className="text-xs text-slate-600">
                        <a
                          href="mailto:info@syntaxim.com"
                          className="hover:text-slate-900 transition-colors"
                        >
                          info@syntaxim.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="bg-white rounded-xl p-4 border-2 border-slate-200 hover:border-slate-900 shadow-md hover:shadow-lg transition-all duration-300 group">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-slate-900 rounded-lg group-hover:scale-110 transition-transform flex-shrink-0">
                      <Clock className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-sm text-slate-900 mb-1.5">
                        Office Hours
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        <span className="font-semibold">Monday - Friday:</span>{' '}
                        9:00 AM - 7:00 PM
                        <br />
                        <span className="font-semibold">Saturday:</span> 10:00
                        AM - 4:00 PM
                        <br />
                        <span className="text-slate-500 text-xs mt-1 block">
                          Sunday: Closed
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Website */}
                <div className="bg-white rounded-xl p-4 border-2 border-slate-200 hover:border-slate-900 shadow-md hover:shadow-lg transition-all duration-300 group">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-slate-900 rounded-lg group-hover:scale-110 transition-transform flex-shrink-0">
                      <Globe className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-sm text-slate-900 mb-1">
                        Website
                      </h3>
                      <p className="text-xs text-slate-600">
                        <a
                          href="https://syntaxim.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-slate-900 transition-colors"
                        >
                          www.syntaxim.com
                        </a>
                      </p>
                    </div>
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
