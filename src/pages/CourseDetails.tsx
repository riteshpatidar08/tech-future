import { useParams, Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '@/components/Navigation';
import AnimatedBackground from '@/components/AnimatedBackground';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import CourseCard from '@/components/CourseCard';
import {
  Code,
  Database,
  Brain,
  BarChart3,
  Clock,
  Users,
  Star,
  CheckCircle,
  ArrowLeft,
  BookOpen,
  Trophy,
  Download,
  Award,
  Video,
  FileText,
  Calendar,
  MapPin,
  ChevronDown,
  ChevronUp,
  PlayCircle,
  User,
  Mail,
  Phone,
  HelpCircle,
  Sparkles,
} from 'lucide-react';
import HandDrawnArrow from '@/components/HandDrawnArrow';
import EducationIllustration from '@/components/EducationIllustration';
import CertificateIllustration from '@/components/CertificateIllustration';

gsap.registerPlugin(ScrollTrigger);

const CourseDetails = () => {
  const { courseId } = useParams();
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [expandedModules, setExpandedModules] = useState<{
    [key: number]: boolean;
  }>({});
  const [expandedFaq, setExpandedFaq] = useState<{ [key: number]: boolean }>(
    {}
  );

  useEffect(() => {
    gsap.fromTo(
      headerRef.current?.children,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 0.3,
      }
    );

    gsap.fromTo(
      '.detail-section',
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 0.5,
      }
    );
  }, []);

  const toggleModule = (index: number) => {
    setExpandedModules((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const courseData = {
    fullstack: {
      title: 'Full Stack Development',
      subtitle: 'With AI Integration',
      description:
        'Master modern web development with React, Node.js, and databases. Build complete web applications from frontend to backend with industry-standard tools and practices. Learn to integrate AI capabilities into your applications.',
      duration: '6 months',
      students: '200+ students',
      rating: '4.9',
      price: '₹49,999',
      originalPrice: '₹99,999',
      discount: '50% OFF',
      icon: () => <Code className="h-8 w-8" />,
      gradient: 'from-purple-600 to-cyan-600',
      overview:
        "This comprehensive Full Stack Development course will transform you into a professional web developer. You'll learn to build modern, scalable web applications using cutting-edge technologies like React, Node.js, and cloud platforms. The course includes hands-on projects and AI integration techniques.",
      highlights: [
        'Live & Recorded Classes',
        'Industry Expert Mentors',
        '100+ Hours of Content',
        'Real-world Projects',
        'AI Integration Training',
        'Placement Assistance',
        'Lifetime Access',
        'Certificate of Completion',
      ],
      features: [
        'React.js & Next.js Development',
        'Node.js & Express Backend',
        'MongoDB & PostgreSQL Databases',
        'RESTful APIs & GraphQL',
        'Deployment & DevOps Practices',
        'Authentication & Security',
        'Testing & Quality Assurance',
        'Version Control with Git',
        'AI/ML Integration in Web Apps',
        'Cloud Deployment (AWS, Vercel)',
      ],
      modules: [
        {
          title: 'HTML, CSS & JavaScript Fundamentals',
          duration: '3 weeks',
          topics: [
            'HTML5 & Semantic HTML',
            'CSS3 & Flexbox/Grid',
            'JavaScript ES6+',
            'DOM Manipulation',
            'Async Programming',
            'Modern JavaScript Patterns',
          ],
        },
        {
          title: 'React.js & Component Architecture',
          duration: '4 weeks',
          topics: [
            'React Fundamentals',
            'Hooks & Context API',
            'State Management',
            'Component Design Patterns',
            'React Router',
            'Performance Optimization',
          ],
        },
        {
          title: 'Node.js & Server-side Development',
          duration: '4 weeks',
          topics: [
            'Node.js Basics',
            'Express.js Framework',
            'RESTful API Design',
            'Middleware & Authentication',
            'File Upload & Processing',
            'Error Handling',
          ],
        },
        {
          title: 'Database Design & Integration',
          duration: '3 weeks',
          topics: [
            'MongoDB & Mongoose',
            'PostgreSQL & Prisma',
            'Database Design',
            'Query Optimization',
            'Relationships & Joins',
            'Migrations',
          ],
        },
        {
          title: 'API Development & Integration',
          duration: '3 weeks',
          topics: [
            'RESTful APIs',
            'GraphQL',
            'API Documentation',
            'Third-party APIs',
            'WebSockets',
            'Real-time Communication',
          ],
        },
        {
          title: 'Authentication & Security',
          duration: '2 weeks',
          topics: [
            'JWT Authentication',
            'OAuth Integration',
            'Password Security',
            'API Security',
            'CORS & CSRF',
            'Security Best Practices',
          ],
        },
        {
          title: 'Testing & Deployment',
          duration: '3 weeks',
          topics: [
            'Unit Testing',
            'Integration Testing',
            'CI/CD Pipelines',
            'Docker & Containers',
            'Cloud Deployment',
            'Monitoring & Logging',
          ],
        },
        {
          title: 'Capstone Project',
          duration: '4 weeks',
          topics: [
            'Project Planning',
            'Full Stack Application',
            'AI Features Integration',
            'Deployment',
            'Code Review',
            'Portfolio Presentation',
          ],
        },
      ],
      requirements: [
        'Basic computer skills',
        'High school education or equivalent',
        'Willingness to learn and practice',
        'Access to a computer with internet',
      ],
      instructors: [
        {
          name: 'Sarah Johnson',
          role: 'Senior Full Stack Developer',
          experience: '10+ years',
          company: 'Ex-Google, Microsoft',
          image: '/api/placeholder/100/100',
        },
        {
          name: 'Mike Chen',
          role: 'AI Integration Specialist',
          experience: '8+ years',
          company: 'Ex-OpenAI, Meta',
          image: '/api/placeholder/100/100',
        },
      ],
      batches: [
        {
          type: 'Offline',
          location: 'Bangalore',
          startDate: 'Jan 15, 2025',
          schedule: 'Mon-Fri, 10 AM - 1 PM',
          seats: '30 seats available',
        },
        {
          type: 'Online',
          location: 'Live Classes',
          startDate: 'Jan 20, 2025',
          schedule: 'Mon-Fri, 7 PM - 9 PM',
          seats: 'Unlimited seats',
        },
      ],
      faqs: [
        {
          question: 'What is the course duration?',
          answer:
            'The course duration is 6 months with 3-4 hours of classes per day, 5 days a week. This includes live classes, assignments, and project work.',
        },
        {
          question: 'Do I need prior programming experience?',
          answer:
            'No prior programming experience is required. The course starts from the basics and gradually builds up to advanced concepts. However, basic computer skills and logical thinking are helpful.',
        },
        {
          question: 'Will I get a certificate?',
          answer:
            'Yes, upon successful completion of the course and all assignments, you will receive a certificate of completion that is recognized by industry partners.',
        },
        {
          question: 'What if I miss a class?',
          answer:
            'All classes are recorded and available for lifetime access. You can watch the recordings at your convenience and catch up on any missed sessions.',
        },
        {
          question: 'Is placement assistance provided?',
          answer:
            'Yes, we provide comprehensive placement assistance including resume building, interview preparation, mock interviews, and connections with our hiring partners.',
        },
        {
          question: 'What tools and software do I need?',
          answer:
            "You'll need a computer with internet connection. All required software and tools will be provided during the course, and we'll guide you through the installation process.",
        },
      ],
    },
    'python-ds': {
      title: 'Python Data Science',
      subtitle: 'Complete Data Analysis',
      description:
        'Dive deep into data science with Python. Learn pandas, NumPy, and advanced statistical analysis techniques to extract insights from complex datasets.',
      duration: '4 months',
      students: '150+ students',
      rating: '4.8',
      price: '₹39,999',
      originalPrice: '₹79,999',
      discount: '50% OFF',
      icon: () => <Database className="h-8 w-8" />,
      gradient: 'from-cyan-600 to-blue-600',
      overview:
        'Master the art of data science with Python. This course covers everything from data manipulation and visualization to advanced statistical analysis and machine learning fundamentals.',
      highlights: [
        'Live & Recorded Classes',
        'Industry Expert Mentors',
        '80+ Hours of Content',
        'Real-world Projects',
        'Jupyter Notebooks',
        'Placement Assistance',
        'Lifetime Access',
        'Certificate of Completion',
      ],
      features: [
        'Python Programming Fundamentals',
        'Pandas & NumPy for Data Manipulation',
        'Data Visualization with Matplotlib & Seaborn',
        'Statistical Analysis & Hypothesis Testing',
        'Jupyter Notebooks & Data Storytelling',
        'Web Scraping & Data Collection',
        'SQL for Data Analysis',
        'Introduction to Machine Learning',
      ],
      modules: [
        {
          title: 'Python Programming Basics',
          duration: '2 weeks',
          topics: [
            'Python Syntax',
            'Data Types & Structures',
            'Functions & Modules',
            'Object-Oriented Programming',
            'Error Handling',
            'File Operations',
          ],
        },
        {
          title: 'Data Manipulation with Pandas',
          duration: '3 weeks',
          topics: [
            'DataFrames & Series',
            'Data Cleaning',
            'Data Transformation',
            'Grouping & Aggregation',
            'Merging & Joining',
            'Time Series Data',
          ],
        },
        {
          title: 'Data Visualization',
          duration: '3 weeks',
          topics: [
            'Matplotlib Basics',
            'Seaborn Advanced',
            'Plotly Interactive Charts',
            'Dashboard Creation',
            'Data Storytelling',
            'Best Practices',
          ],
        },
        {
          title: 'Statistical Analysis',
          duration: '3 weeks',
          topics: [
            'Descriptive Statistics',
            'Inferential Statistics',
            'Hypothesis Testing',
            'A/B Testing',
            'Correlation & Regression',
            'Statistical Modeling',
          ],
        },
        {
          title: 'Data Collection & Web Scraping',
          duration: '2 weeks',
          topics: [
            'Web Scraping with BeautifulSoup',
            'API Integration',
            'Data Collection Strategies',
            'Data Storage',
            'ETL Pipelines',
            'Data Quality',
          ],
        },
        {
          title: 'SQL & Databases',
          duration: '2 weeks',
          topics: [
            'SQL Fundamentals',
            'Advanced Queries',
            'Database Design',
            'Data Warehousing',
            'SQL with Python',
            'Performance Optimization',
          ],
        },
        {
          title: 'ML Fundamentals',
          duration: '3 weeks',
          topics: [
            'Supervised Learning',
            'Unsupervised Learning',
            'Model Evaluation',
            'Feature Engineering',
            'Model Selection',
            'Introduction to Scikit-learn',
          ],
        },
        {
          title: 'Capstone Project',
          duration: '2 weeks',
          topics: [
            'Project Planning',
            'End-to-End Analysis',
            'Report Writing',
            'Presentation',
            'Code Review',
            'Portfolio Building',
          ],
        },
      ],
      requirements: [
        'Basic math knowledge',
        'High school education or equivalent',
        'Interest in data and analytics',
        'Access to a computer with internet',
      ],
      instructors: [
        {
          name: 'Dr. Emily Rodriguez',
          role: 'Senior Data Scientist',
          experience: '12+ years',
          company: 'Ex-Amazon, Netflix',
          image: '/api/placeholder/100/100',
        },
      ],
      batches: [
        {
          type: 'Offline',
          location: 'Bhopal',
          startDate: 'Feb 1, 2025',
          schedule: 'Mon-Fri, 2 PM - 5 PM',
          seats: '25 seats available',
        },
        {
          type: 'Online',
          location: 'Live Classes',
          startDate: 'Feb 5, 2025',
          schedule: 'Mon-Fri, 8 PM - 10 PM',
          seats: 'Unlimited seats',
        },
      ],
      faqs: [
        {
          question: 'What is the course duration?',
          answer:
            'The course duration is 4 months with 3 hours of classes per day, 5 days a week.',
        },
        {
          question: 'Do I need prior programming experience?',
          answer:
            'No prior programming experience is required. We start from Python basics.',
        },
        {
          question: 'Will I get a certificate?',
          answer:
            'Yes, upon successful completion, you will receive a certificate of completion.',
        },
        {
          question: 'What if I miss a class?',
          answer: 'All classes are recorded and available for lifetime access.',
        },
        {
          question: 'Is placement assistance provided?',
          answer: 'Yes, we provide comprehensive placement assistance.',
        },
        {
          question: 'What tools and software do I need?',
          answer:
            "You'll need a computer with internet. All software will be provided during the course.",
        },
      ],
    },
    'machine-learning': {
      title: 'Machine Learning',
      subtitle: 'AI & Deep Learning',
      description:
        'Build intelligent systems with ML algorithms. From supervised learning to deep neural networks, master the technologies powering AI revolution.',
      duration: '5 months',
      students: '100+ students',
      rating: '4.9',
      price: '₹59,999',
      originalPrice: '₹1,19,999',
      discount: '50% OFF',
      icon: () => <Brain className="h-8 w-8" />,
      gradient: 'from-blue-600 to-purple-600',
      overview:
        'Dive into the world of artificial intelligence and machine learning. Learn to build intelligent systems that can learn from data and make predictions.',
      highlights: [
        'Live & Recorded Classes',
        'Industry Expert Mentors',
        '120+ Hours of Content',
        'Real-world Projects',
        'TensorFlow & PyTorch',
        'Placement Assistance',
        'Lifetime Access',
        'Certificate of Completion',
      ],
      features: [
        'Supervised & Unsupervised Learning',
        'Deep Learning & Neural Networks',
        'TensorFlow & PyTorch Frameworks',
        'Computer Vision Applications',
        'Natural Language Processing',
        'Model Deployment & MLOps',
        'Feature Engineering & Selection',
        'Model Evaluation & Optimization',
      ],
      modules: [
        {
          title: 'ML Fundamentals & Math',
          duration: '3 weeks',
          topics: [
            'Linear Algebra',
            'Calculus',
            'Probability',
            'Statistics',
            'ML Concepts',
            'Mathematical Foundations',
          ],
        },
        {
          title: 'Supervised Learning Algorithms',
          duration: '4 weeks',
          topics: [
            'Linear Regression',
            'Logistic Regression',
            'Decision Trees',
            'Random Forests',
            'SVM',
            'Ensemble Methods',
          ],
        },
        {
          title: 'Unsupervised Learning',
          duration: '3 weeks',
          topics: [
            'Clustering',
            'Dimensionality Reduction',
            'PCA',
            'K-means',
            'Hierarchical Clustering',
            'Anomaly Detection',
          ],
        },
        {
          title: 'Deep Learning & Neural Networks',
          duration: '4 weeks',
          topics: [
            'Neural Networks',
            'Backpropagation',
            'CNNs',
            'RNNs',
            'LSTMs',
            'Advanced Architectures',
          ],
        },
        {
          title: 'Computer Vision',
          duration: '3 weeks',
          topics: [
            'Image Processing',
            'Object Detection',
            'Image Classification',
            'Transfer Learning',
            'YOLO',
            'Advanced CV',
          ],
        },
        {
          title: 'Natural Language Processing',
          duration: '3 weeks',
          topics: [
            'Text Processing',
            'NLP Basics',
            'Transformers',
            'BERT',
            'GPT Models',
            'Sentiment Analysis',
          ],
        },
        {
          title: 'Model Deployment',
          duration: '2 weeks',
          topics: [
            'MLOps',
            'Model Serving',
            'Cloud Deployment',
            'API Creation',
            'Monitoring',
            'Production Best Practices',
          ],
        },
        {
          title: 'Advanced Projects',
          duration: '3 weeks',
          topics: [
            'End-to-End Projects',
            'Model Optimization',
            'Production Deployment',
            'Portfolio Building',
            'Code Review',
            'Presentation',
          ],
        },
      ],
      requirements: [
        'Python programming knowledge',
        'Basic statistics and linear algebra',
        'Completed Data Science course or equivalent',
        'Strong analytical thinking',
      ],
      instructors: [
        {
          name: 'Dr. Michael Chen',
          role: 'ML Research Scientist',
          experience: '15+ years',
          company: 'Ex-Google AI, DeepMind',
          image: '/api/placeholder/100/100',
        },
      ],
      batches: [
        {
          type: 'Offline',
          location: 'Bangalore',
          startDate: 'Mar 1, 2025',
          schedule: 'Mon-Fri, 10 AM - 1 PM',
          seats: '20 seats available',
        },
        {
          type: 'Online',
          location: 'Live Classes',
          startDate: 'Mar 5, 2025',
          schedule: 'Mon-Fri, 7 PM - 9 PM',
          seats: 'Unlimited seats',
        },
      ],
      faqs: [
        {
          question: 'What is the course duration?',
          answer:
            'The course duration is 5 months with 3-4 hours of classes per day.',
        },
        {
          question: 'Do I need prior programming experience?',
          answer:
            'Yes, Python programming knowledge is required. We recommend completing our Data Science course first.',
        },
        {
          question: 'Will I get a certificate?',
          answer:
            'Yes, upon successful completion, you will receive a certificate of completion.',
        },
        {
          question: 'What if I miss a class?',
          answer: 'All classes are recorded and available for lifetime access.',
        },
        {
          question: 'Is placement assistance provided?',
          answer: 'Yes, we provide comprehensive placement assistance.',
        },
        {
          question: 'What tools and software do I need?',
          answer:
            "You'll need a computer with internet. All software will be provided during the course.",
        },
      ],
    },
    'data-analytics': {
      title: 'Data Analytics',
      subtitle: 'Business Intelligence',
      description:
        'Transform raw data into actionable insights. Master visualization tools and business intelligence to drive data-driven decisions.',
      duration: '3 months',
      students: '120+ students',
      rating: '4.7',
      price: '₹29,999',
      originalPrice: '₹59,999',
      discount: '50% OFF',
      icon: () => <BarChart3 className="h-8 w-8" />,
      gradient: 'from-orange-600 to-red-600',
      overview:
        'Learn to analyze and visualize data to drive business decisions. Master industry-standard tools and techniques for data analysis and reporting.',
      highlights: [
        'Live & Recorded Classes',
        'Industry Expert Mentors',
        '60+ Hours of Content',
        'Real-world Projects',
        'Power BI & Tableau',
        'Placement Assistance',
        'Lifetime Access',
        'Certificate of Completion',
      ],
      features: [
        'Excel Advanced Techniques',
        'Power BI & Tableau Mastery',
        'SQL for Data Analysis',
        'Statistical Analysis Methods',
        'Dashboard Creation & Design',
        'Business Intelligence Concepts',
        'Data Storytelling & Presentation',
        'KPI Development & Tracking',
      ],
      modules: [
        {
          title: 'Excel for Data Analysis',
          duration: '2 weeks',
          topics: [
            'Advanced Formulas',
            'Pivot Tables',
            'Data Analysis Tools',
            'Charts & Graphs',
            'Macros & VBA',
            'Excel Best Practices',
          ],
        },
        {
          title: 'SQL Fundamentals',
          duration: '3 weeks',
          topics: [
            'SQL Basics',
            'Joins & Subqueries',
            'Aggregations',
            'Window Functions',
            'CTEs',
            'Performance Tuning',
          ],
        },
        {
          title: 'Power BI Mastery',
          duration: '3 weeks',
          topics: [
            'Power BI Basics',
            'Data Modeling',
            'DAX Formulas',
            'Visualizations',
            'Dashboards',
            'Power BI Service',
          ],
        },
        {
          title: 'Tableau Visualization',
          duration: '2 weeks',
          topics: [
            'Tableau Basics',
            'Data Connections',
            'Calculations',
            'Advanced Charts',
            'Dashboards',
            'Tableau Server',
          ],
        },
        {
          title: 'Statistical Analysis',
          duration: '2 weeks',
          topics: [
            'Descriptive Statistics',
            'Inferential Statistics',
            'Hypothesis Testing',
            'Regression Analysis',
            'Time Series',
            'Forecasting',
          ],
        },
        {
          title: 'Dashboard Design',
          duration: '2 weeks',
          topics: [
            'Design Principles',
            'User Experience',
            'Interactive Dashboards',
            'Storytelling',
            'Best Practices',
            'Portfolio Projects',
          ],
        },
        {
          title: 'Business Intelligence',
          duration: '1 week',
          topics: [
            'BI Concepts',
            'Data Warehousing',
            'ETL Processes',
            'Reporting',
            'Analytics Strategy',
            'Case Studies',
          ],
        },
        {
          title: 'Final Project',
          duration: '1 week',
          topics: [
            'End-to-End Project',
            'Dashboard Creation',
            'Presentation',
            'Portfolio Building',
            'Code Review',
            'Certification',
          ],
        },
      ],
      requirements: [
        'Basic computer skills',
        'High school math',
        'Interest in business and data',
        'Microsoft Office familiarity preferred',
      ],
      instructors: [
        {
          name: 'James Wilson',
          role: 'Business Intelligence Analyst',
          experience: '10+ years',
          company: 'Ex-McKinsey, Deloitte',
          image: '/api/placeholder/100/100',
        },
      ],
      batches: [
        {
          type: 'Offline',
          location: 'Bhopal',
          startDate: 'Apr 1, 2025',
          schedule: 'Mon-Fri, 2 PM - 5 PM',
          seats: '30 seats available',
        },
        {
          type: 'Online',
          location: 'Live Classes',
          startDate: 'Apr 5, 2025',
          schedule: 'Mon-Fri, 8 PM - 10 PM',
          seats: 'Unlimited seats',
        },
      ],
      faqs: [
        {
          question: 'What is the course duration?',
          answer:
            'The course duration is 3 months with 3 hours of classes per day.',
        },
        {
          question: 'Do I need prior programming experience?',
          answer:
            'No prior programming experience is required. Basic Excel knowledge is helpful but not mandatory.',
        },
        {
          question: 'Will I get a certificate?',
          answer:
            'Yes, upon successful completion, you will receive a certificate of completion.',
        },
        {
          question: 'What if I miss a class?',
          answer: 'All classes are recorded and available for lifetime access.',
        },
        {
          question: 'Is placement assistance provided?',
          answer: 'Yes, we provide comprehensive placement assistance.',
        },
        {
          question: 'What tools and software do I need?',
          answer:
            "You'll need a computer with internet. All software licenses will be provided during the course.",
        },
      ],
    },
  };

  const course = courseData[courseId as keyof typeof courseData];

  // Related courses (exclude current course)
  const relatedCourses = Object.entries(courseData)
    .filter(([id]) => id !== courseId)
    .slice(0, 3)
    .map(([id, data]) => ({
      id,
      ...data,
      courseId: id,
    }));

  if (!course) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <AnimatedBackground />
        <Navigation />
        <div className="text-center bg-white rounded-2xl p-8 border border-gray-200 shadow-md">
          <h1 className="text-4xl font-extrabold mb-4 text-[#0F172A]">
            Course Not Found
          </h1>
          <Link to="/courses">
            <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white">
              Back to Courses
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <AnimatedBackground />
      <Navigation />

      {/* Hero Banner Section */}
      <section className="pt-24 pb-12 relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        {/* Decorative elements */}
        <div className="absolute top-20 left-5 opacity-10 hidden lg:block transform rotate-12">
          <EducationIllustration type="book" size={120} />
        </div>
        <div className="absolute bottom-20 right-10 opacity-10 hidden lg:block transform -rotate-6">
          <EducationIllustration type="laptop" size={100} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div ref={headerRef} className="max-w-7xl mx-auto">
            <Link
              to="/courses"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6 transition-colors bg-white px-4 py-2 rounded-xl border border-gray-200 shadow-sm hover:shadow-md"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Courses
            </Link>

            {/* Main Hero Card */}
            <div
              className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-xl mb-8"
              style={{ transform: 'rotate(-0.5deg)' }}
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6">
                <div
                  className={`p-6 rounded-3xl bg-gradient-to-br ${course.gradient} text-white shadow-2xl`}
                  style={{ transform: 'rotate(2deg)' }}
                >
                  {course.icon()}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-4 py-1 rounded-full text-sm font-semibold bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                      {course.discount}
                    </span>
                    <span className="px-4 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-700">
                      {course.subtitle}
                    </span>
                  </div>
                  <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#0F172A] mb-2">
                    {course.title}
                  </h1>
                  <p className="text-xl text-slate-600 mb-4">
                    {course.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-slate-600">
                    <div className="flex items-center bg-slate-50 px-4 py-2 rounded-lg">
                      <Star className="h-5 w-5 text-yellow-500 fill-yellow-500 mr-2" />
                      <span className="text-slate-700 font-semibold">
                        {course.rating}
                      </span>
                      <span className="text-slate-500 ml-1">/5.0</span>
                    </div>
                    <div className="flex items-center bg-slate-50 px-4 py-2 rounded-lg">
                      <Users className="h-5 w-5 text-blue-600 mr-2" />
                      <span className="text-slate-700 font-semibold">
                        {course.students}
                      </span>
                    </div>
                    <div className="flex items-center bg-slate-50 px-4 py-2 rounded-lg">
                      <Clock className="h-5 w-5 text-cyan-600 mr-2" />
                      <span className="text-slate-700 font-semibold">
                        {course.duration}
                      </span>
                    </div>
                    <div className="flex items-center bg-slate-50 px-4 py-2 rounded-lg">
                      <Award className="h-5 w-5 text-purple-600 mr-2" />
                      <span className="text-slate-700 font-semibold">
                        Certificate
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {course.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-4 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 text-center"
                  style={{
                    transform: `rotate(${index % 2 === 0 ? '1deg' : '-1deg'})`,
                  }}
                >
                  <Sparkles className="h-6 w-6 mx-auto mb-2 text-blue-600" />
                  <p className="text-sm font-semibold text-slate-900">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section ref={contentRef} className="py-12 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Course Overview */}
              <div
                className="detail-section bg-white rounded-2xl p-8 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300"
                style={{ transform: 'rotate(0.5deg)' }}
              >
                <h2 className="text-3xl font-extrabold text-[#0F172A] mb-4 flex items-center">
                  <BookOpen
                    className="h-7 w-7 mr-3"
                    style={{ color: '#7F6DFF' }}
                  />
                  Course Overview
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {course.overview}
                </p>
              </div>

              {/* What You'll Learn */}
              <div
                className="detail-section bg-white rounded-2xl p-8 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300"
                style={{ transform: 'rotate(-0.5deg)' }}
              >
                <h2 className="text-3xl font-extrabold text-[#0F172A] mb-6 flex items-center">
                  <CheckCircle
                    className="h-7 w-7 mr-3"
                    style={{ color: '#00D4AA' }}
                  />
                  What You'll Learn
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start text-slate-700 bg-gradient-to-r from-slate-50 to-blue-50 p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-all"
                    >
                      <CheckCircle
                        className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0"
                        style={{ color: '#00D4AA' }}
                      />
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Curriculum/Syllabus */}
              <div
                className="detail-section bg-white rounded-2xl p-8 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300"
                style={{ transform: 'rotate(0.3deg)' }}
              >
                <h2 className="text-3xl font-extrabold text-[#0F172A] mb-6 flex items-center">
                  <Trophy
                    className="h-7 w-7 mr-3"
                    style={{ color: '#F89820' }}
                  />
                  Course Curriculum
                </h2>
                <div className="space-y-4">
                  {course.modules.map((module, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-xl overflow-hidden hover:border-blue-300 transition-all"
                    >
                      <button
                        onClick={() => toggleModule(index)}
                        className="w-full flex items-center justify-between p-5 bg-gradient-to-r from-slate-50 to-blue-50 hover:from-blue-50 hover:to-cyan-50 transition-all"
                      >
                        <div className="flex items-center flex-1">
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                            {index + 1}
                          </div>
                          <div className="text-left">
                            <h3 className="font-bold text-slate-900 text-lg">
                              {module.title}
                            </h3>
                            <p className="text-sm text-slate-600">
                              {module.duration}
                            </p>
                          </div>
                        </div>
                        {expandedModules[index] ? (
                          <ChevronUp className="h-5 w-5 text-slate-600" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-slate-600" />
                        )}
                      </button>
                      {expandedModules[index] && (
                        <div className="p-5 bg-white border-t border-gray-200">
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {module.topics.map((topic, topicIndex) => (
                              <li
                                key={topicIndex}
                                className="flex items-center text-slate-700"
                              >
                                <div className="w-2 h-2 rounded-full mr-3 bg-blue-600"></div>
                                <span>{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Instructors */}
              <div
                className="detail-section bg-white rounded-2xl p-8 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300"
                style={{ transform: 'rotate(-0.3deg)' }}
              >
                <h2 className="text-3xl font-extrabold text-[#0F172A] mb-6 flex items-center">
                  <User className="h-7 w-7 mr-3" style={{ color: '#7F6DFF' }} />
                  Meet Your Instructors
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {course.instructors.map((instructor, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all"
                      style={{
                        transform: `rotate(${
                          index % 2 === 0 ? '1deg' : '-1deg'
                        })`,
                      }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                          {instructor.name.charAt(0)}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg text-slate-900 mb-1">
                            {instructor.name}
                          </h3>
                          <p className="text-blue-600 font-semibold mb-1">
                            {instructor.role}
                          </p>
                          <p className="text-sm text-slate-600 mb-2">
                            {instructor.experience} • {instructor.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements */}
              <div
                className="detail-section bg-white rounded-2xl p-8 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300"
                style={{ transform: 'rotate(0.2deg)' }}
              >
                <h2 className="text-3xl font-extrabold text-[#0F172A] mb-6">
                  Prerequisites
                </h2>
                <ul className="space-y-3">
                  {course.requirements.map((req, index) => (
                    <li
                      key={index}
                      className="flex items-center text-slate-700 bg-gradient-to-r from-slate-50 to-blue-50 p-4 rounded-lg border border-gray-200"
                    >
                      <CheckCircle
                        className="h-5 w-5 mr-3 flex-shrink-0"
                        style={{ color: '#00D4AA' }}
                      />
                      <span className="font-medium">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* FAQ Section */}
              <div
                className="detail-section bg-white rounded-2xl p-8 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300"
                style={{ transform: 'rotate(-0.2deg)' }}
              >
                <h2 className="text-3xl font-extrabold text-[#0F172A] mb-6 flex items-center">
                  <HelpCircle
                    className="h-7 w-7 mr-3"
                    style={{ color: '#7F6DFF' }}
                  />
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {course.faqs.map((faq, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-xl overflow-hidden hover:border-blue-300 transition-all"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full flex items-center justify-between p-5 bg-gradient-to-r from-slate-50 to-blue-50 hover:from-blue-50 hover:to-cyan-50 transition-all text-left"
                      >
                        <h3 className="font-bold text-slate-900 pr-4">
                          {faq.question}
                        </h3>
                        {expandedFaq[index] ? (
                          <ChevronUp className="h-5 w-5 text-slate-600 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-slate-600 flex-shrink-0" />
                        )}
                      </button>
                      {expandedFaq[index] && (
                        <div className="p-5 bg-white border-t border-gray-200">
                          <p className="text-slate-700 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Pricing Card */}
                <div
                  className="detail-section bg-white rounded-2xl p-8 border-2 border-blue-200 shadow-xl"
                  style={{
                    transform: 'rotate(1deg)',
                    background:
                      'linear-gradient(135deg, rgba(59,130,246,0.05), rgba(6,182,212,0.05))',
                  }}
                >
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <span className="text-4xl font-bold text-slate-900">
                        {course.price}
                      </span>
                      <span className="text-xl text-slate-400 line-through">
                        {course.originalPrice}
                      </span>
                    </div>
                    <div className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-white font-bold text-sm inline-block mb-2">
                      {course.discount} Limited Time Offer
                    </div>
                    <div className="text-slate-600 text-sm">
                      One-time payment • Lifetime access
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <Button
                      className={`w-full bg-gradient-to-r ${course.gradient} hover:shadow-lg transition-all duration-300 text-white font-extrabold py-4 rounded-3xl transform hover:scale-105 text-lg`}
                    >
                      Enroll Now
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-2 border-gray-300 text-slate-700 hover:bg-slate-50 hover:border-blue-600 transition-all duration-300 py-3 rounded-3xl"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download Syllabus
                    </Button>
                  </div>

                  <div className="space-y-3 text-sm border-t border-gray-200 pt-6">
                    <div className="flex justify-between items-center bg-slate-50 p-3 rounded-lg">
                      <span className="text-slate-600">Duration:</span>
                      <span className="text-slate-900 font-semibold">
                        {course.duration}
                      </span>
                    </div>
                    <div className="flex justify-between items-center bg-slate-50 p-3 rounded-lg">
                      <span className="text-slate-600">Students:</span>
                      <span className="text-slate-900 font-semibold">
                        {course.students}
                      </span>
                    </div>
                    <div className="flex justify-between items-center bg-slate-50 p-3 rounded-lg">
                      <span className="text-slate-600">Rating:</span>
                      <span className="text-slate-900 font-semibold">
                        {course.rating}/5
                      </span>
                    </div>
                    <div className="flex justify-between items-center bg-slate-50 p-3 rounded-lg">
                      <span className="text-slate-600">Certificate:</span>
                      <span className="text-slate-900 font-semibold">Yes</span>
                    </div>
                  </div>
                </div>

                {/* Batch Options */}
                <div
                  className="detail-section bg-white rounded-2xl p-6 border border-gray-200 shadow-md"
                  style={{ transform: 'rotate(-0.5deg)' }}
                >
                  <h3 className="text-xl font-extrabold text-[#0F172A] mb-4">
                    Available Batches
                  </h3>
                  <div className="space-y-4">
                    {course.batches.map((batch, index) => (
                      <div
                        key={index}
                        className="border border-gray-200 rounded-xl p-4 hover:border-blue-300 transition-all"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700">
                            {batch.type}
                          </span>
                          <span className="text-xs text-slate-600">
                            {batch.seats}
                          </span>
                        </div>
                        <div className="flex items-center text-sm text-slate-600 mb-1">
                          <MapPin className="h-4 w-4 mr-1" />
                          {batch.location}
                        </div>
                        <div className="flex items-center text-sm text-slate-600 mb-1">
                          <Calendar className="h-4 w-4 mr-1" />
                          Starts: {batch.startDate}
                        </div>
                        <div className="flex items-center text-sm text-slate-600">
                          <Clock className="h-4 w-4 mr-1" />
                          {batch.schedule}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Section */}
      <section className="py-12 bg-gradient-to-br from-white via-blue-50 to-cyan-50 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-extrabold text-[#0F172A] mb-4">
                Your Certificate of Completion
              </h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                Upon successful completion of this course, you'll receive a
                verified certificate that you can share on LinkedIn, add to your
                resume, or display in your portfolio.
              </p>
            </div>

            <div
              className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200"
              style={{ transform: 'rotate(0.5deg)' }}
            >
              <div className="flex flex-col lg:flex-row items-center gap-12">
                {/* Certificate Preview */}
                <div className="flex-1">
                  <CertificateIllustration
                    courseName={`${course.title} ${
                      course.subtitle ? `With ${course.subtitle}` : ''
                    }`}
                    className="max-w-full"
                  />
                </div>

                {/* Certificate Benefits */}
                <div className="flex-1 space-y-6">
                  <div>
                    <h3 className="text-2xl font-extrabold text-[#0F172A] mb-4">
                      Certificate Benefits
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-slate-900">
                            Verified & Shareable
                          </p>
                          <p className="text-sm text-slate-600">
                            Share on LinkedIn, add to your resume, or display in
                            your portfolio
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-slate-900">
                            Industry Recognized
                          </p>
                          <p className="text-sm text-slate-600">
                            Recognized by top tech companies and hiring managers
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-slate-900">
                            Lifetime Access
                          </p>
                          <p className="text-sm text-slate-600">
                            Download and verify your certificate anytime,
                            anywhere
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-slate-900">
                            Unique Certificate Number
                          </p>
                          <p className="text-sm text-slate-600">
                            Each certificate has a unique verification code for
                            authenticity
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
                    <p className="text-sm text-slate-700 mb-2">
                      <strong>Note:</strong> Certificate will be issued upon
                      completion of all course modules, assignments, and the
                      final project.
                    </p>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 rounded-xl">
                      View Sample Certificate
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Courses */}
      {relatedCourses.length > 0 && (
        <section className="py-12 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-extrabold text-[#0F172A] mb-4">
                Related Courses
              </h2>
              <p className="text-slate-600 text-lg">
                Explore more courses to enhance your skills
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {relatedCourses.map((relatedCourse) => (
                <CourseCard
                  key={relatedCourse.id}
                  title={relatedCourse.title}
                  description={relatedCourse.description}
                  duration={relatedCourse.duration}
                  students={relatedCourse.students}
                  rating={relatedCourse.rating}
                  icon={relatedCourse.icon()}
                  features={relatedCourse.features.slice(0, 4)}
                  gradient={relatedCourse.gradient}
                  courseId={relatedCourse.courseId}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default CourseDetails;
