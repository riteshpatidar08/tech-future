
import { Button } from "@/components/ui/button";
import { Clock, Users, Star } from "lucide-react";

interface CourseCardProps {
  title: string;
  description: string;
  duration: string;
  students: string;
  rating: string;
  icon: React.ReactNode;
  features: string[];
  gradient: string;
}

const CourseCard = ({ title, description, duration, students, rating, icon, features, gradient }: CourseCardProps) => {
  return (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
      {/* Gradient Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
      
      {/* Content */}
      <div className="relative p-6">
        <div className="flex items-center mb-4">
          <div className={`p-3 rounded-xl bg-gradient-to-br ${gradient} text-white shadow-lg`}>
            {icon}
          </div>
          <div className="ml-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Star className="h-4 w-4 text-yellow-500" />
              <span>{rating}</span>
              <Users className="h-4 w-4 ml-2" />
              <span>{students}</span>
            </div>
          </div>
        </div>
        
        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-4 leading-relaxed">
          {description}
        </p>
        
        <div className="flex items-center mb-4 text-sm text-gray-500">
          <Clock className="h-4 w-4 mr-2" />
          <span>{duration}</span>
        </div>
        
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-2">What you'll learn:</h4>
          <ul className="space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-center">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <Button className={`w-full bg-gradient-to-r ${gradient} hover:shadow-lg transition-all duration-300 text-white font-semibold py-3 rounded-xl`}>
          Enroll Now
        </Button>
      </div>
    </div>
  );
};

export default CourseCard;
