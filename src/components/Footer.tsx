
import { Mail, Phone, MapPin, Facebook, Twitter, Youtube, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-gray-200 text-slate-900 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <Logo className="h-10 w-auto" />
            </div>
            <p className="text-slate-600 mb-6 max-w-md text-sm sm:text-base leading-relaxed">
              We understand that every student has unique needs and abilities, that's why our curriculum is designed to adapt to your needs and help you grow!
            </p>
            <div className="mb-4">
              <p className="text-slate-700 text-sm font-semibold mb-3 tracking-tight">Let's get social:</p>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-500 hover:text-blue-600 transition-colors" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-slate-500 hover:text-blue-600 transition-colors" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-slate-500 hover:text-blue-600 transition-colors" aria-label="YouTube">
                  <Youtube className="h-5 w-5" />
                </a>
                <a href="#" className="text-slate-500 hover:text-blue-600 transition-colors" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-slate-500 hover:text-blue-600 transition-colors" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 text-slate-900 tracking-tight">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-slate-600 hover:text-blue-600 transition-colors text-sm leading-relaxed">About Us</Link></li>
              <li><Link to="/contact" className="text-slate-600 hover:text-blue-600 transition-colors text-sm leading-relaxed">Contact Us</Link></li>
              <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors text-sm leading-relaxed">Careers</a></li>
              <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors text-sm leading-relaxed">Updates</a></li>
            </ul>
          </div>

          {/* Popular Courses */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 text-slate-900 tracking-tight">Popular Courses</h4>
            <ul className="space-y-2">
              <li><Link to="/courses" className="text-slate-600 hover:text-blue-600 transition-colors text-sm leading-relaxed">Full Stack Development</Link></li>
              <li><Link to="/courses" className="text-slate-600 hover:text-blue-600 transition-colors text-sm leading-relaxed">Data Science</Link></li>
              <li><Link to="/courses" className="text-slate-600 hover:text-blue-600 transition-colors text-sm leading-relaxed">Machine Learning</Link></li>
              <li><Link to="/courses" className="text-slate-600 hover:text-blue-600 transition-colors text-sm leading-relaxed">Data Analytics</Link></li>
            </ul>
          </div>
          
          {/* Connect With Us */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 text-slate-900 tracking-tight">Connect With Us</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:info@codex.com" className="text-slate-600 hover:text-blue-600 transition-colors text-sm flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>Email Us</span>
                </a>
              </li>
              <li>
                <a href="tel:+919876543210" className="text-slate-600 hover:text-blue-600 transition-colors text-sm flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>Talk to Counselor</span>
                </a>
              </li>
              <li>
                <div className="text-slate-600 text-sm flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Bangalore, Karnataka</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-600 text-sm">
              <a href="#" className="hover:text-blue-600 transition-colors mr-4 leading-relaxed">Privacy Policy</a>
              <a href="#" className="hover:text-blue-600 transition-colors leading-relaxed">Terms of Use</a>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">&copy; 2024 Codex. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
