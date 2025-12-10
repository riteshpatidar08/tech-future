import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
  Quote,
  TrendingUp,
  DollarSign,
  Briefcase,
  Award,
  Star,
} from 'lucide-react';
import Certificate3D from './Certificate3D';

gsap.registerPlugin(ScrollTrigger);

interface SuccessStory {
  id: number;
  name: string;
  course: string;
  before: string;
  after: string;
  salary: string;
  company: string;
  role: string;
  quote: string;
  achievements: string[];
  avatar: string;
  rating: number;
}

const successStories: SuccessStory[] = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    course: 'Full Stack Development',
    before: 'Fresher',
    after: 'Senior Developer',
    salary: '₹18 LPA',
    company: 'Microsoft',
    role: 'Full Stack Developer',
    quote:
      'Syntaxim transformed my career completely. From a fresher to landing a job at Microsoft in just 6 months. The hands-on projects and mentorship were game-changers.',
    achievements: [
      'Placed at Microsoft',
      '₹18 LPA Package',
      '6 Months Journey',
    ],
    avatar: 'RK',
    rating: 5,
  },
  {
    id: 2,
    name: 'Priya Sharma',
    course: 'Data Science',
    before: 'Business Analyst',
    after: 'Data Scientist',
    salary: '₹22 LPA',
    company: 'Amazon',
    role: 'Senior Data Scientist',
    quote:
      'The Python Data Science course helped me transition from business analysis to data science. The real-world projects and industry insights were invaluable.',
    achievements: [
      'Career Transition',
      '₹22 LPA Package',
      'Promoted to Senior',
    ],
    avatar: 'PS',
    rating: 5,
  },
  {
    id: 3,
    name: 'Amit Patel',
    course: 'Machine Learning',
    before: 'Software Engineer',
    after: 'ML Engineer',
    salary: '₹25 LPA',
    company: 'Google',
    role: 'Machine Learning Engineer',
    quote:
      'Syntaxim ML course gave me the confidence to apply for ML roles. The deep learning projects and TensorFlow expertise helped me crack Google interviews.',
    achievements: ['Placed at Google', '₹25 LPA Package', 'ML Engineer Role'],
    avatar: 'AP',
    rating: 5,
  },
  {
    id: 4,
    name: 'Sneha Reddy',
    course: 'Data Analytics',
    before: 'Marketing Executive',
    after: 'Data Analyst',
    salary: '₹12 LPA',
    company: 'Deloitte',
    role: 'Senior Data Analyst',
    quote:
      'Coming from a non-tech background, I was skeptical. But Syntaxim made data analytics so accessible. Now I work with Fortune 500 companies analyzing business data.',
    achievements: ['Career Switch', '₹12 LPA Package', 'Fortune 500 Clients'],
    avatar: 'SR',
    rating: 5,
  },
  {
    id: 5,
    name: 'Karan Mehta',
    course: 'Full Stack Development',
    before: 'Freelancer',
    after: 'Tech Lead',
    salary: '₹20 LPA',
    company: 'Uber',
    role: 'Tech Lead - Full Stack',
    quote:
      'The MERN stack course and system design sessions helped me build scalable applications. Now I lead a team of 5 developers at Uber.',
    achievements: ['Tech Lead Role', '₹20 LPA Package', 'Team Leadership'],
    avatar: 'KM',
    rating: 5,
  },
  {
    id: 6,
    name: 'Anjali Tiwari',
    course: 'Python Data Science',
    before: 'Data Entry Operator',
    after: 'Data Scientist',
    salary: '₹15 LPA',
    company: 'IBM',
    role: 'Data Scientist',
    quote:
      'From data entry to data scientist - Syntaxim made this impossible journey possible. The Python course and mentorship changed my life completely.',
    achievements: ['Career Transformation', '₹15 LPA Package', 'IBM Placement'],
    avatar: 'AT',
    rating: 5,
  },
];

const SuccessStories = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const storiesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    if (storiesRef.current) {
      gsap.fromTo(
        storiesRef.current.children,
        { y: 80, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: storiesRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, []);

  const getInitials = (name: string): string => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 bg-white overflow-hidden"
    >
      {/* 3D Certificate Elements */}
      <div className="absolute top-10 left-10 opacity-10 hidden lg:block">
        <Certificate3D className="scale-75" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-10 hidden lg:block">
        <Certificate3D className="scale-75" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Certificate3D className="scale-75" />
          </div>
          <div className="inline-flex items-center gap-2 mb-4">
            <TrendingUp className="h-6 w-6 text-slate-900" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
              Success Stories
            </h2>
          </div>
          <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Real stories from students who transformed their careers. From
            freshers to tech leads, see how Syntaxim helped them achieve their
            dreams.
          </p>
        </div>

        <div
          ref={storiesRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {successStories.map((story) => (
            <Card
              key={story.id}
              className="border-2 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden group"
            >
              <div className="bg-slate-50 p-6">
                <div className="flex items-start gap-4 mb-4">
                  <Avatar className="h-16 w-16 border-4 border-white shadow-lg">
                    <AvatarFallback className="bg-slate-900 text-white text-xl font-bold">
                      {getInitials(story.name)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[#0F172A] mb-1">
                      {story.name}
                    </h3>
                    <p className="text-sm text-blue-600 font-semibold mb-1">
                      {story.role}
                    </p>
                    <div className="flex items-center gap-1">
                      {[...Array(story.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-3 w-3 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1 text-slate-600">
                    <Briefcase className="h-4 w-4" />
                    <span className="font-semibold">{story.company}</span>
                  </div>
                  <div className="flex items-center gap-1 text-green-600">
                    <DollarSign className="h-4 w-4" />
                    <span className="font-bold">{story.salary}</span>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="mb-4">
                  <Quote className="h-6 w-6 text-blue-300 mb-2" />
                  <p className="text-sm text-slate-700 leading-relaxed italic">
                    "{story.quote}"
                  </p>
                </div>

                <div className="mb-4 p-3 bg-slate-50 rounded-lg">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="text-slate-500">Before:</span>
                    <span className="text-slate-500">After:</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="border-slate-300">
                      {story.before}
                    </Badge>
                    <TrendingUp className="h-4 w-4 text-blue-600" />
                    <Badge className="bg-green-100 text-green-700 border-0">
                      {story.after}
                    </Badge>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-semibold text-slate-700 mb-2">
                    Key Achievements
                  </h4>
                  <div className="space-y-1">
                    {story.achievements.map((achievement, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs text-slate-600"
                      >
                        <Award className="h-3 w-3 text-yellow-500" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t">
                  <Badge
                    variant="outline"
                    className="border-blue-300 text-blue-700 text-xs"
                  >
                    {story.course}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-slate-900 rounded-lg p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-extrabold mb-4">
            Join 10,000+ Successful Students
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Be the next success story. Start your journey today and transform
            your career with industry-relevant skills.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-3xl font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Start Your Success Story
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
