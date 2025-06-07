
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code } from 'lucide-react';
import { gsap } from 'gsap';

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
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-lg border-b border-purple-500/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="nav-item flex items-center space-x-2 text-white hover:text-purple-400 transition-colors duration-300">
            <Code className="h-8 w-8" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              TechInstitute
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`nav-item relative px-3 py-2 text-sm font-medium transition-all duration-300 ${
                  location.pathname === link.path
                    ? 'text-purple-400'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400"></div>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-purple-400 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 bg-gray-900/95 backdrop-blur-lg">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-purple-400'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
