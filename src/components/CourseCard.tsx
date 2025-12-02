
import { Button } from "@/components/ui/button";
import { Clock, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";
import HandDrawnArrow from "./HandDrawnArrow";
import CourseTechIllustration from "./CourseTechIllustration";

interface CourseCardProps {
  title: string;
  description: string;
  duration: string;
  students: string;
  rating: string;
  icon: React.ReactNode;
  features: string[];
  gradient: string;
  courseId: string;
}

const CourseCard = ({ title, description, duration, students, rating, icon, features, gradient, courseId }: CourseCardProps) => {
  // Map course IDs to logo colors
  const getLogoColors = (id: string) => {
    switch(id) {
      case 'fullstack':
        return { bg: 'rgba(0,212,170,0.08)', border: 'rgba(0,212,170,0.2)', icon: '#00D4AA' };
      case 'python-ds':
        return { bg: 'rgba(55,118,171,0.08)', border: 'rgba(55,118,171,0.2)', icon: '#3776AB' };
      case 'machine-learning':
        return { bg: 'rgba(127,109,255,0.08)', border: 'rgba(127,109,255,0.2)', icon: '#7F6DFF' };
      case 'data-analytics':
        return { bg: 'rgba(255,111,97,0.08)', border: 'rgba(255,111,97,0.2)', icon: '#FF6F61' };
      default:
        return { bg: 'rgba(59,130,246,0.08)', border: 'rgba(59,130,246,0.2)', icon: '#3B82F6' };
    }
  };

  const colors = getLogoColors(courseId);
  
  return (
    <div className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border" 
         style={{ borderColor: colors.border }}>
      {/* Gradient Background with logo colors */}
      <div className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-20 opacity-10" 
           style={{ background: `linear-gradient(135deg, ${colors.bg}, transparent)` }}></div>
      
      {/* Course-specific tech illustration - positioned in the middle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none z-0">
        <CourseTechIllustration courseId={courseId} size={240} />
      </div>
      
      {/* Hand-drawn arrow on hover */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
        <HandDrawnArrow direction="diagonal" color={colors.icon} className="w-10 h-10" />
      </div>
      
      {/* Content */}
      <div className="relative p-6 z-10">
        <div className="flex items-center mb-4">
          <div className="p-3 rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform"
               style={{ background: `linear-gradient(135deg, ${colors.icon}, ${colors.icon}dd)` }}>
            {icon}
          </div>
          <div className="ml-4">
            <div className="flex items-center space-x-2 text-sm text-slate-600">
              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
              <span className="text-slate-700 font-medium">{rating}</span>
              <Users className="h-4 w-4 ml-2 text-slate-500" />
              <span className="text-slate-700 font-medium">{students}</span>
            </div>
          </div>
        </div>
        
        <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>
        
        <div className="bg-slate-50 rounded-lg p-3 mb-3 border border-gray-100">
          <p className="text-slate-600 text-sm leading-relaxed">
            {description}
          </p>
        </div>
        
        <div className="flex items-center mb-4 text-sm text-slate-600 p-3 rounded-lg"
             style={{ background: `${colors.bg}` }}>
          <Clock className="h-4 w-4 mr-2" style={{ color: colors.icon }} />
          <span className="text-slate-700 font-medium">{duration}</span>
        </div>
        
        <div className="mb-4">
          <h4 className="font-semibold text-slate-900 mb-2 text-sm">What you'll learn:</h4>
          <ul className="space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="text-xs text-slate-600 flex items-center bg-slate-50 p-1.5 rounded-md">
                <div className="w-1.5 h-1.5 rounded-full mr-2" style={{ backgroundColor: colors.icon }}></div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="space-y-3">
          <Link to={`/course/${courseId}`}>
            <Button className="w-full hover:shadow-lg transition-all duration-300 text-white font-semibold py-3 rounded-xl transform hover:scale-105"
                    style={{ background: `linear-gradient(135deg, ${colors.icon}, ${colors.icon}dd)` }}>
              View Details
            </Button>
          </Link>
          <Button variant="outline" className="w-full border-2 text-slate-700 hover:bg-slate-50 transition-all duration-300 font-semibold py-3 rounded-xl"
                  style={{ borderColor: colors.border }}>
            Enroll Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
