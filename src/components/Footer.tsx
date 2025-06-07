
import { Code, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900/50 backdrop-blur-sm border-t border-purple-500/20 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Code className="h-8 w-8 text-purple-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">TechInstitute</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Empowering the next generation of tech professionals through comprehensive training 
              in Full Stack Development, Data Science, Machine Learning, and Analytics.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                YouTube
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/courses" className="text-gray-400 hover:text-white transition-colors">Courses</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Faculty</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Success Stories</a></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Bangalore, Karnataka</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="h-4 w-4" />
                <span className="text-sm">info@techinstitute.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-purple-500/20 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 TechInstitute. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
