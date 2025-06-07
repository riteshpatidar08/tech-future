
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Get in touch with us today for a free consultation and take the first step toward your tech career
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input 
                  placeholder="First Name" 
                  className="bg-white/10 border-white/30 text-white placeholder:text-gray-300"
                />
                <Input 
                  placeholder="Last Name" 
                  className="bg-white/10 border-white/30 text-white placeholder:text-gray-300"
                />
              </div>
              <Input 
                type="email" 
                placeholder="Email Address" 
                className="bg-white/10 border-white/30 text-white placeholder:text-gray-300"
              />
              <Input 
                placeholder="Phone Number" 
                className="bg-white/10 border-white/30 text-white placeholder:text-gray-300"
              />
              <Textarea 
                placeholder="Which course are you interested in? Any questions?" 
                rows={4}
                className="bg-white/10 border-white/30 text-white placeholder:text-gray-300"
              />
              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-xl">
                Send Message
              </Button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Visit Our Campus</h4>
                  <p className="text-blue-100">
                    123 Tech Street, Innovation District<br />
                    Bangalore, Karnataka 560001
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-purple-600 rounded-lg">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Call Us</h4>
                  <p className="text-blue-100">
                    +91 98765 43210<br />
                    +91 87654 32109
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-indigo-600 rounded-lg">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Email Us</h4>
                  <p className="text-blue-100">
                    info@techinstitute.com<br />
                    admissions@techinstitute.com
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-green-600 rounded-lg">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Office Hours</h4>
                  <p className="text-blue-100">
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
