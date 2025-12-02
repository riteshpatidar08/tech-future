import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import AnimatedBackground from '@/components/AnimatedBackground';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import HandDrawnArrow from '@/components/HandDrawnArrow';
import EducationIllustration from '@/components/EducationIllustration';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      '404 Error: User attempted to access non-existent route:',
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white">
      <AnimatedBackground />
      <Navigation />

      <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 opacity-10 hidden lg:block transform rotate-12">
          <EducationIllustration type="student" size={150} />
        </div>
        <div className="absolute bottom-20 right-10 opacity-10 hidden lg:block transform -rotate-6">
          <EducationIllustration type="laptop" size={120} />
        </div>

        {/* Hand-drawn arrows */}
        <div className="absolute top-1/3 right-10 hidden xl:block animate-float transform rotate-12">
          <HandDrawnArrow
            direction="left"
            color="#3776AB"
            className="w-24 h-24"
          />
        </div>
        <div
          className="absolute bottom-1/4 left-10 hidden xl:block animate-float transform -rotate-12"
          style={{ animationDelay: '1s' }}
        >
          <HandDrawnArrow
            direction="right"
            color="#00D4AA"
            className="w-20 h-20"
          />
        </div>

        <div className="text-center relative z-10">
          {/* Tech icons behind */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="absolute -left-20 top-0 opacity-15">
              <svg width="100" height="100" viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="70" fill="#3776AB" />
                <circle cx="150" cy="100" r="70" fill="#FFDE57" />
              </svg>
            </div>
            <div className="absolute -right-20 top-0 opacity-15">
              <svg width="100" height="100" viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="75" fill="#00D4AA" />
                <circle cx="100" cy="100" r="20" fill="#61DAFB" />
              </svg>
            </div>
          </div>

          <div
            className="bg-white rounded-2xl p-12 border border-gray-200 shadow-lg max-w-2xl mx-auto relative z-10"
            style={{ transform: 'rotate(-1deg)' }}
          >
            <h1
              className="text-8xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent"
              style={{
                fontFamily:
                  "'Dancing Script', 'Pacifico', 'Brush Script MT', cursive",
                letterSpacing: '0.02em',
              }}
            >
              404
            </h1>
            <p
              className="text-2xl text-slate-600 mb-8"
              style={{ fontFamily: "'Dancing Script', 'Pacifico', cursive" }}
            >
              Oops! Page not found
            </p>
            <Link to="/">
              <Button
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 rounded-3xl font-semibold transition-all duration-300 transform hover:scale-105"
                style={{
                  fontFamily: "'Dancing Script', 'Pacifico', cursive",
                  fontSize: '1.1em',
                }}
              >
                Return to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
