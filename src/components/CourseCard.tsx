
import { Button } from "@/components/ui/button";
import { Clock, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";

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
  return (
    <div className="group relative bg-black/60 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-white/20 hover:border-white/40">
      {/* Gradient Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
      
      {/* Content */}
      <div className="relative p-6">
        <div className="flex items-center mb-4">
          <div className={`p-3 rounded-xl bg-gradient-to-br ${gradient} text-white shadow-lg group-hover:scale-110 transition-transform`}>
            {icon}
          </div>
          <div className="ml-4">
            <div className="flex items-center space-x-2 text-sm text-gray-100">
              <Star className="h-4 w-4 text-yellow-400" />
              <span className="text-white font-medium drop-shadow-md">{rating}</span>
              <Users className="h-4 w-4 ml-2" />
              <span className="text-white font-medium drop-shadow-md">{students}</span>
            </div>
          </div>
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300 drop-shadow-lg">
          {title}
        </h3>
        
        <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 mb-4 border border-white/10">
          <p className="text-gray-100 leading-relaxed drop-shadow-md">
            {description}
          </p>
        </div>
        
        <div className="flex items-center mb-4 text-sm text-gray-100 bg-white/5 p-3 rounded-lg">
          <Clock className="h-4 w-4 mr-2 text-purple-300" />
          <span className="text-white font-medium drop-shadow-md">{duration}</span>
        </div>
        
        <div className="mb-6">
          <h4 className="font-semibold text-white mb-2 drop-shadow-md">What you'll learn:</h4>
          <ul className="space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="text-sm text-gray-100 flex items-center bg-white/5 p-2 rounded-md">
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></div>
                <span className="drop-shadow-md">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="space-y-3">
          <Link to={`/course/${courseId}`}>
            <Button className={`w-full bg-gradient-to-r ${gradient} hover:shadow-lg transition-all duration-300 text-white font-semibold py-3 rounded-xl transform hover:scale-105`}>
              View Details
            </Button>
          </Link>
          <Button className="w-full bg-black/50 border border-white/30 text-white hover:bg-black/70 transition-all duration-300 font-semibold py-3 rounded-xl backdrop-blur-sm">
            Enroll Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
