import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Database, Brain, BarChart3, Cloud, Shield } from 'lucide-react';
import CodeCube3D from './CodeCube3D';

gsap.registerPlugin(ScrollTrigger);

interface TechCategory {
  category: string;
  icon: React.ReactNode;
  technologies: string[];
  gradient: string;
}

const techStack: TechCategory[] = [
  {
    category: 'Frontend Technologies',
    icon: <Code className="h-6 w-6" />,
    technologies: ['React.js', 'Next.js', 'Vue.js', 'Angular', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript ES6+', 'Redux', 'GraphQL'],
    gradient: 'from-blue-600 to-cyan-600'
  },
  {
    category: 'Backend Technologies',
    icon: <Database className="h-6 w-6" />,
    technologies: ['Node.js', 'Express.js', 'Python', 'Django', 'Flask', 'RESTful APIs', 'GraphQL', 'Microservices', 'Serverless', 'WebSockets'],
    gradient: 'from-cyan-600 to-blue-600'
  },
  {
    category: 'Databases',
    icon: <Database className="h-6 w-6" />,
    technologies: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Elasticsearch', 'Firebase', 'DynamoDB', 'Cassandra'],
    gradient: 'from-purple-600 to-pink-600'
  },
  {
    category: 'Data Science & ML',
    icon: <Brain className="h-6 w-6" />,
    technologies: ['Python', 'Pandas', 'NumPy', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Jupyter', 'Matplotlib', 'Seaborn', 'Keras'],
    gradient: 'from-indigo-600 to-blue-600'
  },
  {
    category: 'Analytics & BI',
    icon: <BarChart3 className="h-6 w-6" />,
    technologies: ['Power BI', 'Tableau', 'Excel Advanced', 'SQL', 'Apache Spark', 'Hadoop', 'Data Visualization', 'Business Intelligence'],
    gradient: 'from-orange-600 to-red-600'
  },
  {
    category: 'Cloud & DevOps',
    icon: <Cloud className="h-6 w-6" />,
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'CI/CD', 'Jenkins', 'Git', 'Terraform', 'Ansible'],
    gradient: 'from-green-600 to-emerald-600'
  }
];

const TechnologyStack = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);

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

    if (stackRef.current) {
      gsap.fromTo(stackRef.current.children,
        { y: 80, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: stackRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none'
          }
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 md:py-28 bg-slate-50 overflow-hidden">
      {/* 3D Code Cube Elements */}
      <div className="absolute top-10 left-10 opacity-10 hidden lg:block">
        <CodeCube3D className="scale-75" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-10 hidden lg:block">
        <CodeCube3D className="scale-75" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <CodeCube3D className="scale-75" />
          </div>
          <div className="inline-flex items-center gap-2 mb-4">
            <Code className="h-6 w-6 text-blue-600" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A]"
                style={{ 
                  fontWeight: 700
                }}>
              Technologies You'll Master
            </h2>
          </div>
          <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Learn industry-standard technologies used by top tech companies. Our curriculum is constantly updated to match industry demands.
          </p>
        </div>

        <div ref={stackRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((category, idx) => (
            <Card key={idx} className="border-2 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <CardContent className="p-6">
                <div className="inline-flex p-3 rounded-lg bg-slate-100 mb-4">
                  <div className="text-slate-900">{category.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-4">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-3 py-1.5 bg-slate-100 hover:bg-blue-100 text-slate-700 hover:text-blue-700 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-4">All technologies are taught with hands-on projects and real-world applications</p>
          <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300">
            Explore Full Curriculum
          </button>
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;

