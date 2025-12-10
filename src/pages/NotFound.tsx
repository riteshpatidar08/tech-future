import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import AnimatedBackground from '@/components/AnimatedBackground';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

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

      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="bg-white rounded-lg p-12 border border-slate-200 shadow-sm max-w-2xl mx-auto">
            <h1 className="text-8xl font-bold mb-4 text-slate-900">404</h1>
            <p className="text-2xl font-semibold text-slate-900 mb-8">
              Oops! Page not found
            </p>
            <p className="text-slate-600 mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Link to="/">
              <Button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-lg font-medium">
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
