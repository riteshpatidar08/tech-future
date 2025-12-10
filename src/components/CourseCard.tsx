
import { Button } from "@/components/ui/button";
import { Clock, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";
import CodeCube3D from "./CodeCube3D";

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
    <div className="group relative bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
      {/* 3D Code Cube Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none z-0">
        <CodeCube3D className="scale-50" />
      </div>
      
      {/* Content */}
      <div className="relative p-6 z-10">
        <div className="flex items-center mb-4">
          <div className="p-3 rounded-lg bg-slate-100 group-hover:bg-slate-900 transition-colors">
            <div className="text-slate-900 group-hover:text-white transition-colors">
              {icon}
            </div>
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
        
        <div className="flex items-center mb-4 text-sm text-slate-600 p-3 rounded-lg bg-slate-50">
          <Clock className="h-4 w-4 mr-2 text-slate-700" />
          <span className="text-slate-700 font-medium">{duration}</span>
        </div>
        
        <div className="mb-4">
          <h4 className="font-semibold text-slate-900 mb-2 text-sm">What you'll learn:</h4>
          <ul className="space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="text-xs text-slate-600 flex items-center bg-slate-50 p-1.5 rounded-md">
                <div className="w-1.5 h-1.5 rounded-full mr-2 bg-slate-900"></div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="space-y-3">
          <Link to={`/course/${courseId}`}>
            <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 rounded-lg transition-all duration-300">
              View Details
            </Button>
          </Link>
          <Button variant="outline" className="w-full border-2 border-slate-200 text-slate-700 hover:bg-slate-50 transition-all duration-300 font-semibold py-3 rounded-lg">
            Enroll Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
