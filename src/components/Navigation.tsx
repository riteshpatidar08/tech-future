
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, BookOpen, Info, FileText, FolderOpen, GraduationCap, Mail } from 'lucide-react';
import { gsap } from 'gsap';
import Logo from './Logo';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Animate navigation on mount
    gsap.fromTo('.nav-item', 
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, delay: 0.2 }
    );
  }, []);

  const navLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Courses', path: '/courses', icon: BookOpen },
    { name: 'About', path: '/about', icon: Info },
    { name: 'Blog', path: '/blog', icon: FileText },
    { name: 'Resources', path: '/resources', icon: FolderOpen },
    { name: 'Student Portal', path: '/student-portal', icon: GraduationCap },
    { name: 'Contact', path: '/contact', icon: Mail },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="nav-item flex items-center transition-opacity duration-300 hover:opacity-80">
            <Logo className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`nav-item relative px-4 py-2 text-base font-bold transition-all duration-300 tracking-tight flex items-center gap-2 group ${
                    isActive
                      ? 'text-blue-600'
                      : 'text-slate-700 hover:text-blue-600'
                  }`}
                >
                  <Icon 
                    size={20} 
                    className={`transition-all duration-300 ${
                      isActive 
                        ? 'text-blue-600 scale-110' 
                        : 'text-slate-600 group-hover:text-blue-600 group-hover:scale-110'
                    }`}
                  />
                  <span>{link.name}</span>
                  {isActive && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full"></div>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-slate-700 hover:text-blue-600 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 bg-white border-t border-gray-200">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 text-base font-bold transition-all duration-300 tracking-tight rounded-lg mx-2 ${
                    isActive
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                  }`}
                >
                  <Icon 
                    size={22} 
                    className={isActive ? 'text-blue-600' : 'text-slate-600'}
                  />
                  <span>{link.name}</span>
                  {isActive && (
                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                  )}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
