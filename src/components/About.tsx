
import { Target, Lightbulb, Trophy, Rocket } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Practical Learning",
      description: "Hands-on projects and real-world applications to ensure job-ready skills"
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Expert Instructors",
      description: "Learn from industry professionals with years of experience"
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Proven Results",
      description: "95% job placement rate with top tech companies"
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Career Support",
      description: "Resume building, interview prep, and job placement assistance"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Training Institute?</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We're committed to transforming careers through comprehensive, practical training programs. 
              Our institute combines cutting-edge curriculum with personalized mentorship to ensure your success 
              in the rapidly evolving tech industry.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              With state-of-the-art facilities, industry partnerships, and a track record of successful graduates, 
              we provide the perfect environment for your professional growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div key={index} className="p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
