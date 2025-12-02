
import { Code, Mail, Phone, MapPin, Facebook, Twitter, Youtube, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900/80 backdrop-blur-sm border-t border-purple-500/20 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Code className="h-8 w-8 text-purple-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Codex</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md text-sm sm:text-base leading-relaxed">
              We understand that every student has unique needs and abilities, that's why our curriculum is designed to adapt to your needs and help you grow!
            </p>
            <div className="mb-4">
              <p className="text-gray-200 text-sm font-semibold mb-3 tracking-tight">Let's get social:</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors" aria-label="YouTube">
                  <Youtube className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 text-white tracking-tight">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors text-sm leading-relaxed">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-sm leading-relaxed">Contact Us</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm leading-relaxed">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm leading-relaxed">Updates</a></li>
            </ul>
          </div>

          {/* Popular Courses */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 text-white tracking-tight">Popular Courses</h4>
            <ul className="space-y-2">
              <li><Link to="/courses" className="text-gray-300 hover:text-white transition-colors text-sm leading-relaxed">Full Stack Development</Link></li>
              <li><Link to="/courses" className="text-gray-300 hover:text-white transition-colors text-sm leading-relaxed">Data Science</Link></li>
              <li><Link to="/courses" className="text-gray-300 hover:text-white transition-colors text-sm leading-relaxed">Machine Learning</Link></li>
              <li><Link to="/courses" className="text-gray-300 hover:text-white transition-colors text-sm leading-relaxed">Data Analytics</Link></li>
            </ul>
          </div>
          
          {/* Connect With Us */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 text-white tracking-tight">Connect With Us</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:info@codex.com" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>Email Us</span>
                </a>
              </li>
              <li>
                <a href="tel:+919876543210" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>Talk to Counselor</span>
                </a>
              </li>
              <li>
                <div className="text-gray-400 text-sm flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Bangalore, Karnataka</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-purple-500/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">
              <a href="#" className="hover:text-white transition-colors mr-4 leading-relaxed">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors leading-relaxed">Terms of Use</a>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">&copy; 2024 Codex. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
