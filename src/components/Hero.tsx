
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Award, BookOpen } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 text-center max-w-6xl">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6 leading-tight">
            Master Tech Skills
            <br />
            <span className="text-4xl md:text-6xl">Shape Your Future</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your career with our comprehensive training programs in Full Stack Development, 
            Python Data Science, Machine Learning, and Data Analytics
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Explore Courses
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300">
              Free Consultation
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 p-4 bg-white/50 rounded-xl backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
              <Users className="h-8 w-8 text-blue-600" />
              <div className="text-left">
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-gray-600">Students Trained</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3 p-4 bg-white/50 rounded-xl backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
              <Award className="h-8 w-8 text-purple-600" />
              <div className="text-left">
                <div className="text-2xl font-bold text-gray-900">95%</div>
                <div className="text-gray-600">Job Placement</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3 p-4 bg-white/50 rounded-xl backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
              <BookOpen className="h-8 w-8 text-indigo-600" />
              <div className="text-left">
                <div className="text-2xl font-bold text-gray-900">4</div>
                <div className="text-gray-600">Specialized Tracks</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
