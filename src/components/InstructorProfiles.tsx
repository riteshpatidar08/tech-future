import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Linkedin, Github, Award, Users, BookOpen, Star } from 'lucide-react';
import HandDrawnArrow from './HandDrawnArrow';
import EducationIllustration from './EducationIllustration';

gsap.registerPlugin(ScrollTrigger);

interface Instructor {
  id: number;
  name: string;
  role: string;
  experience: string;
  students: string;
  rating: number;
  courses: string[];
  expertise: string[];
  company: string;
  achievements: string[];
  avatar: string;
}

const instructors: Instructor[] = [
  {
    id: 1,
    name: 'Dr. Rajesh Kumar',
    role: 'Senior Full Stack Architect',
    experience: '12+ Years',
    students: '15K+',
    rating: 4.9,
    courses: ['Full Stack Development', 'React Mastery', 'Node.js Advanced'],
    expertise: ['React', 'Node.js', 'AWS', 'Microservices'],
    company: 'Ex-Google, Microsoft',
    achievements: ['Built 50+ Production Apps', 'Mentored 1000+ Developers', 'Open Source Contributor'],
    avatar: 'RK'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Lead Data Scientist',
    experience: '10+ Years',
    students: '12K+',
    rating: 4.8,
    courses: ['Python Data Science', 'Machine Learning', 'Deep Learning'],
    expertise: ['Python', 'TensorFlow', 'PyTorch', 'MLOps'],
    company: 'Ex-Amazon, Netflix',
    achievements: ['Published 20+ Research Papers', 'ML Model Deployed at Scale', 'Kaggle Grandmaster'],
    avatar: 'PS'
  },
  {
    id: 3,
    name: 'Amit Patel',
    role: 'ML Engineer & AI Researcher',
    experience: '8+ Years',
    students: '10K+',
    rating: 4.9,
    courses: ['Machine Learning', 'Deep Learning', 'NLP'],
    expertise: ['Deep Learning', 'NLP', 'Computer Vision', 'AI Research'],
    company: 'Ex-OpenAI, Meta',
    achievements: ['AI Models in Production', 'Research Publications', 'Tech Conference Speaker'],
    avatar: 'AP'
  },
  {
    id: 4,
    name: 'Sneha Reddy',
    role: 'Senior Data Analyst',
    experience: '9+ Years',
    students: '8K+',
    rating: 4.7,
    courses: ['Data Analytics', 'Business Intelligence', 'SQL Mastery'],
    expertise: ['Power BI', 'Tableau', 'SQL', 'Excel Advanced'],
    company: 'Ex-Deloitte, Accenture',
    achievements: ['Analyzed $100M+ Business Data', 'BI Dashboards for Fortune 500', 'Data Strategy Consultant'],
    avatar: 'SR'
  },
  {
    id: 5,
    name: 'Karan Mehta',
    role: 'Full Stack Developer',
    experience: '7+ Years',
    students: '9K+',
    rating: 4.8,
    courses: ['Full Stack Development', 'MERN Stack', 'DevOps'],
    expertise: ['MERN Stack', 'Docker', 'Kubernetes', 'CI/CD'],
    company: 'Ex-Uber, Airbnb',
    achievements: ['Scalable Web Applications', 'DevOps Best Practices', 'System Design Expert'],
    avatar: 'KM'
  },
  {
    id: 6,
    name: 'Anjali Tiwari',
    role: 'Python & Data Science Expert',
    experience: '6+ Years',
    students: '7K+',
    rating: 4.9,
    courses: ['Python Programming', 'Data Science', 'Pandas & NumPy'],
    expertise: ['Python', 'Pandas', 'NumPy', 'Data Visualization'],
    company: 'Ex-IBM, Oracle',
    achievements: ['Data Science Projects', 'Python Library Contributor', 'Tech Blogger'],
    avatar: 'AT'
  }
];

const InstructorProfiles = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const instructorsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(sectionRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
    }

    if (instructorsRef.current) {
      gsap.fromTo(instructorsRef.current.children,
        { y: 80, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: instructorsRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none'
          }
        }
      );
    }
  }, []);

  const getInitials = (name: string): string => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <section ref={sectionRef} className="relative py-20 md:py-28 bg-white overflow-hidden">
      <div className="absolute top-10 right-10 opacity-10 hidden lg:block transform rotate-12">
        <EducationIllustration type="student" size={120} />
      </div>
      <div className="absolute bottom-10 left-10 opacity-10 hidden lg:block transform -rotate-12">
        <EducationIllustration type="certificate" size={100} />
      </div>

      <div className="absolute top-1/4 left-10 hidden xl:block animate-float transform rotate-12">
        <HandDrawnArrow direction="right" color="#3776AB" className="w-20 h-20" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Users className="h-6 w-6 text-blue-600" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A]"
                style={{ 
                  fontFamily: "'Dancing Script', 'Pacifico', 'Brush Script MT', cursive",
                  fontWeight: 700
                }}>
              Learn from Industry Experts
            </h2>
          </div>
          <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our instructors are seasoned professionals from top tech companies. Learn from those who've built real-world applications at scale.
          </p>
        </div>

        <div ref={instructorsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructors.map((instructor) => (
            <Card key={instructor.id} className="border-2 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden group">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6">
                <div className="flex items-start gap-4 mb-4">
                  <Avatar className="h-20 w-20 border-4 border-white shadow-lg">
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white text-2xl font-bold">
                      {getInitials(instructor.name)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#0F172A] mb-1">{instructor.name}</h3>
                    <p className="text-sm text-blue-600 font-semibold mb-1">{instructor.role}</p>
                    <p className="text-xs text-slate-600">{instructor.company}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold">{instructor.rating}</span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-600">
                    <Users className="h-4 w-4" />
                    <span className="text-sm">{instructor.students} students</span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-600">
                    <Award className="h-4 w-4" />
                    <span className="text-sm">{instructor.experience}</span>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    Courses Taught
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {instructor.courses.slice(0, 2).map((course, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs border-blue-300 text-blue-700">
                        {course}
                      </Badge>
                    ))}
                    {instructor.courses.length > 2 && (
                      <Badge variant="outline" className="text-xs border-slate-300 text-slate-600">
                        +{instructor.courses.length - 2} more
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-slate-700 mb-2">Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {instructor.expertise.map((skill, idx) => (
                      <Badge key={idx} className="text-xs bg-blue-100 text-blue-700 border-0">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-slate-700 mb-2">Key Achievements</h4>
                  <ul className="space-y-1">
                    {instructor.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-xs text-slate-600 flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t">
                  <button className="p-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-600 transition-colors">
                    <Linkedin className="h-4 w-4" />
                  </button>
                  <button className="p-2 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-600 transition-colors">
                    <Github className="h-4 w-4" />
                  </button>
                  <button className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-md transition-all">
                    View Profile
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-600 mb-4">Want to learn from the best?</p>
          <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-3xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  style={{ fontFamily: "'Dancing Script', 'Pacifico', 'Brush Script MT', cursive", fontWeight: 700, fontSize: '1.1em' }}>
            Meet All Instructors
          </button>
        </div>
      </div>
    </section>
  );
};

export default InstructorProfiles;

