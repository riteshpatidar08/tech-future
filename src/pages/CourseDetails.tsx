import { useParams, Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '@/components/Navigation';
import AnimatedBackground from '@/components/AnimatedBackground';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import CourseCard from '@/components/CourseCard';
import LeadCaptureForm from '@/components/LeadCaptureForm';
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
  Smartphone,
} from 'lucide-react';
import CertificateIllustration from '@/components/CertificateIllustration';
import Chart3DShape from '@/components/Chart3DShape';
import Database3DShape from '@/components/Database3DShape';
import Chart3D from '@/components/Chart3D';
import BackgroundPattern from '@/components/BackgroundPattern';

// Import course data from JSON files
import fullstackData from '@/data/courses/fullstack.json';
import frontendData from '@/data/courses/frontend.json';
import backendData from '@/data/courses/backend.json';
import pythonCoreData from '@/data/courses/python-core.json';
import pythonDjangoData from '@/data/courses/python-django.json';
import genaiLLMOpsData from '@/data/courses/genai-llmops.json';
import aiPythonData from '@/data/courses/ai-python.json';
import reactNativeData from '@/data/courses/react-native.json';
import pythonDSData from '@/data/courses/python-ds.json';
import machineLearningData from '@/data/courses/machine-learning.json';
import bigDataData from '@/data/courses/big-data.json';
import biData from '@/data/courses/bi.json';
import flutterData from '@/data/courses/flutter.json';
import iosData from '@/data/courses/ios.json';
// Import data-analytics from existing CourseDetails data (it has bonuses, sectors, etc.)
// For now, we'll keep it in the component or create a separate JSON

gsap.registerPlugin(ScrollTrigger);

// Icon mapping
const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } =
  {
    Code,
    Database,
    Brain,
    BarChart3,
    Smartphone,
  };

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
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  useEffect(() => {
    // Check if lead form has been submitted (stored in localStorage)
    const hasSubmittedLead = localStorage.getItem(
      `syntaxim_lead_submitted_${courseId}`
    );
    if (hasSubmittedLead) {
      setLeadSubmitted(true);
    }

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
  }, [courseId]);

  const toggleModule = (index: number) => {
    setExpandedModules((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const handleLeadFormSubmit = () => {
    setLeadSubmitted(true);
    setShowLeadForm(false);
    localStorage.setItem(`syntaxim_lead_submitted_${courseId}`, 'true');
  };

  // Helper function to transform JSON data to component format
  const transformCourseData = (data: any) => {
    const IconComponent = iconMap[data.icon] || Code;
    return {
      ...data,
      icon: () => <IconComponent className="h-8 w-8" />,
      // Ensure instructors have image property
      instructors:
        data.instructors?.map((instructor: any) => ({
          ...instructor,
          image: instructor.image || '/api/placeholder/100/100',
        })) || [],
    };
  };

  // Load course data from JSON files
  const courseData: any = {
    fullstack: transformCourseData(fullstackData),
    frontend: transformCourseData(frontendData),
    backend: transformCourseData(backendData),
    'python-core': transformCourseData(pythonCoreData),
    'python-django': transformCourseData(pythonDjangoData),
    'genai-llmops': transformCourseData(genaiLLMOpsData),
    'ai-python': transformCourseData(aiPythonData),
    'react-native': transformCourseData(reactNativeData),
    'python-ds': transformCourseData(pythonDSData),
    'machine-learning': transformCourseData(machineLearningData),
    'big-data': transformCourseData(bigDataData),
    bi: transformCourseData(biData),
    flutter: transformCourseData(flutterData),
    ios: transformCourseData(iosData),
    // Keep data-analytics with special fields (bonuses, sectors, etc.)
    'data-analytics': {
      title: 'DataVerse AI: The Complete Data Analytics & Automation Program',
      subtitle: 'Transform Data Into Decisions With AI-Powered Analytics',
      description:
        'Transform Data Into Decisions With AI-Powered Analytics. Master Excel, SQL, Power BI, Tableau, Python, R, and AI tools to become a complete data analytics professional.',
      duration: '6 months',
      students: '60+ students',
      rating: '4.9',
      price: '₹39,999',
      originalPrice: '₹79,999',
      discount: '50% OFF',
      icon: () => <BarChart3 className="h-8 w-8" />,
      gradient: 'from-orange-600 to-red-600',
      overview:
        'A comprehensive program covering everything from Excel basics to AI-powered analytics. Learn industry-standard tools, work on real-world projects, and master data-driven decision making with hands-on experience across multiple sectors.',
      highlights: [
        '9 Core Modules + 5 Bonus Modules',
        'Live & Recorded Classes',
        'Industry Expert Mentors',
        '200+ Hours of Content',
        'Real-world Sector Projects',
        'AI-Powered Analytics',
        'Placement Assistance',
        'Lifetime Learning Access',
        'Certificate of Completion',
      ],
      features: [
        'Excel & Google Sheets Intelligence',
        'SQL & Database Management',
        'Power BI & Tableau Mastery',
        'Looker & Google Visualization',
        'Power Automate & AI Workflows',
        'Business Statistics & Insights',
        'Python for Data Analytics',
        'AI Vision & Predictive Analytics',
        'Prompt Engineering & Generative AI',
        'R Language & R Studio',
      ],
      modules: [
        {
          title:
            'Module 1: Excel & Google Sheets Intelligence — Foundations of Data Handling',
          duration: '3 weeks',
          topics: [
            'Data cleaning, formatting & transformation',
            'Formulas, functions & logic building',
            'Pivot Tables, Charts & Dashboard Design',
            'Power Query, Power Pivot & Automation',
            'Google Sheets Functions & formulas',
            'Data cleaning & transformation in Sheets',
            'AppScript basics for automation',
            'Connected Sheets for BigQuery',
            'Case Study: Retail Store Sales Reporting',
          ],
        },
        {
          title: 'Module 2: DataSpeak — SQL & Database Management',
          duration: '4 weeks',
          topics: [
            'DBMS & RDBMS concepts',
            'SQL joins, subqueries, views & constraints',
            'Schema design & relationships',
            'Connecting SQL to BI tools',
            'Case Study: E-commerce Customer Segmentation',
          ],
        },
        {
          title: 'Module 3: Visual Minds — Power BI & Tableau Mastery',
          duration: '4 weeks',
          topics: [
            'Data modeling & DAX',
            'KPIs, filters, slicers & interactive storytelling',
            'Data blending & visual insights',
            'Case Studies: Finance Revenue Dashboard, Retail Analytics',
          ],
        },
        {
          title:
            'Module 4: Insight Studio — Looker & Google Visualization Tools',
          duration: '3 weeks',
          topics: [
            'Connecting Sheets, MySQL & BigQuery',
            'Dynamic dashboards & filters',
            'Google Cloud visualization',
            'Case Study: Digital Marketing Campaign Report',
          ],
        },
        {
          title: 'Module 5: FlowLogic — Power Automate & AI Workflow Design',
          duration: '3 weeks',
          topics: [
            'Automated report pipelines',
            'Trigger-based alerts & email systems',
            'AI connectors for insights generation',
            'Case Study: Automated HR Reporting System',
          ],
        },
        {
          title: 'Module 6: StatSense — Business Statistics & Insights',
          duration: '3 weeks',
          topics: [
            'Descriptive & inferential statistics',
            'Hypothesis testing, correlation & regression',
            'KPI-driven decision making',
            'Case Study: Telecom Customer Retention Analysis',
          ],
        },
        {
          title: 'Module 7: PyAnalytics — Python for Data Analytics',
          duration: '4 weeks',
          topics: [
            'Python basics, functions & loops',
            'Pandas & NumPy for data analysis',
            'Matplotlib & Seaborn visualizations',
            'Python automation scripts',
            'Case Study: Product Demand Prediction',
          ],
        },
        {
          title: 'Module 8: AI Vision — Smart Insights & Predictive Analytics',
          duration: '3 weeks',
          topics: [
            'AI tools for data interpretation',
            'Regression & classification analytics',
            'AI-powered dashboards',
            'Case Study: AI-Driven Sales Forecasting',
          ],
        },
        {
          title: 'Module 9: PromptVerse — Prompt Engineering & Generative AI',
          duration: '2 weeks',
          topics: [
            'Generative AI fundamentals',
            'Effective prompt design',
            'Automating insights with AI',
            'Case Study: AI-Generated Marketing Campaign Report',
          ],
        },
      ],
      bonuses: [
        {
          title: 'Bonus 1: Prompt Engineering Masterclass',
          topics: ['Advanced prompt design', 'AI-powered workflow creation'],
        },
        {
          title: 'Bonus 2: Generative AI Tools Training',
          topics: [
            'ChatGPT, Gemini, Claude hands-on practice',
            'AI-assisted report & dashboard automation',
          ],
        },
        {
          title: 'Bonus 3: Tableau Full Training',
          topics: ['Dashboarding, analytics & storytelling'],
        },
        {
          title: 'Bonus 4: R Language & R Studio',
          topics: ['Statistical analysis & visualization'],
        },
        {
          title: 'Bonus 5: Sector-Wise Full Case Studies',
          topics: ['Retail, Finance, HR, Healthcare, Marketing & more'],
        },
      ],
      sectors: [
        'Retail & E-commerce',
        'Banking & Finance',
        'Healthcare & Pharma',
        'HR & Recruitment',
        'Marketing & Digital Media',
        'Manufacturing & Supply Chain',
        'Education & EdTech',
      ],
      careerOutcomes: [
        'Data Analyst',
        'BI Specialist',
        'AI Automation Analyst',
        'Data Visualization Engineer',
        'Reporting Engineer',
        'Prompt Engineer',
      ],
      tools: [
        'Microsoft Excel',
        'Google Sheets',
        'MySQL',
        'Power BI',
        'Tableau',
        'Looker Studio',
        'Power Automate',
        'Python',
        'R',
        'AI Tools (ChatGPT, Gemini, Claude)',
        'BigQuery',
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

      {/* Hero Banner Section - Compact Design */}
      <section className="pt-20 pb-8 relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50/30">
        <BackgroundPattern variant="dots" opacity={0.03} />
        <div className="container mx-auto px-4 relative z-10">
          <div ref={headerRef} className="max-w-6xl mx-auto">
            <Link
              to="/courses"
              className="inline-flex items-center text-slate-700 hover:text-slate-900 mb-4 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Back to Courses</span>
            </Link>

            {/* Compact Hero */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-md mb-6">
              <div className="flex flex-col md:flex-row items-start gap-4">
                <div className={`p-4 rounded-lg bg-slate-900 flex-shrink-0`}>
                  <div className="text-white">{course.icon()}</div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 rounded text-xs font-semibold bg-orange-100 text-orange-700">
                      {course.discount}
                    </span>
                    <span className="px-2 py-1 rounded text-xs font-semibold bg-blue-100 text-blue-700">
                      {course.subtitle}
                    </span>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                    {course.title}
                  </h1>
                  <p className="text-base text-slate-600 mb-4 leading-relaxed">
                    {course.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-2">
                    <div className="flex items-center bg-slate-100 px-3 py-1.5 rounded text-xs">
                      <Star className="h-3.5 w-3.5 text-yellow-500 fill-yellow-500 mr-1.5" />
                      <span className="font-semibold text-slate-900">
                        {course.rating}
                      </span>
                    </div>
                    <div className="flex items-center bg-slate-100 px-3 py-1.5 rounded text-xs">
                      <Users className="h-3.5 w-3.5 text-slate-600 mr-1.5" />
                      <span className="font-semibold text-slate-900">
                        {course.students}
                      </span>
                    </div>
                    <div className="flex items-center bg-slate-100 px-3 py-1.5 rounded text-xs">
                      <Clock className="h-3.5 w-3.5 text-slate-600 mr-1.5" />
                      <span className="font-semibold text-slate-900">
                        {course.duration}
                      </span>
                    </div>
                    <div className="flex items-center bg-slate-100 px-3 py-1.5 rounded text-xs">
                      <Award className="h-3.5 w-3.5 text-slate-600 mr-1.5" />
                      <span className="font-semibold text-slate-900">
                        Certificate
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Compact Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {course.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-3 border border-slate-200 shadow-sm text-center"
                >
                  <Sparkles className="h-4 w-4 mx-auto mb-1.5 text-blue-600" />
                  <p className="text-xs font-semibold text-slate-900 leading-tight">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section - Compact & Dense */}
      <section
        ref={contentRef}
        className="py-8 relative overflow-hidden bg-white"
      >
        <BackgroundPattern variant="dots" opacity={0.02} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto space-y-6">
            {/* Course Overview - Compact */}
            <div className="bg-gradient-to-br from-slate-50 to-blue-50/50 rounded-xl p-6 border border-slate-200 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-blue-600" />
                About This Course
              </h2>
              <div className="space-y-3">
                <p className="text-base text-slate-700 leading-relaxed">
                  {course.overview}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {course.description}
                </p>
              </div>
            </div>

            {/* What You'll Learn - Compact Grid */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-emerald-600" />
                What You'll Learn
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {course.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-200 hover:bg-slate-100 transition-colors"
                  >
                    <CheckCircle className="h-4 w-4 text-emerald-600 mr-2.5 mt-0.5 flex-shrink-0" />
                    <span className="font-medium text-sm leading-snug">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Curriculum/Syllabus - Compact */}
            <div
              id="curriculum-section"
              className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Trophy className="h-5 w-5 text-amber-600" />
                Course Curriculum
              </h2>

              {!leadSubmitted ? (
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg p-6 border-2 border-slate-200 shadow-md text-center">
                  <div className="max-w-md mx-auto">
                    <div className="p-3 bg-slate-900 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-sm">
                      <BookOpen className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      Unlock Full Course Curriculum
                    </h3>
                    <p className="text-slate-600 mb-5 text-sm leading-relaxed">
                      Fill out the form below to access the complete course
                      curriculum, detailed modules, and all course information.
                    </p>
                    <Button
                      onClick={() => setShowLeadForm(true)}
                      className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-6 py-2.5 rounded-lg"
                    >
                      View Course Curriculum
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-2">
                  {course.modules.map((module, index) => (
                    <div
                      key={index}
                      className="border border-slate-200 rounded-lg overflow-hidden hover:border-blue-300 transition-all"
                    >
                      <button
                        onClick={() => toggleModule(index)}
                        className="w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-blue-50 transition-all"
                      >
                        <div className="flex items-center flex-1">
                          <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center text-white font-bold text-sm mr-4">
                            {index + 1}
                          </div>
                          <div className="text-left">
                            <h3 className="font-bold text-slate-900 text-base">
                              {module.title}
                            </h3>
                            <p className="text-xs text-slate-600 mt-0.5">
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
                        <div className="p-4 bg-white border-t border-slate-200">
                          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5">
                            {module.topics.map((topic, topicIndex) => (
                              <li
                                key={topicIndex}
                                className="flex items-center text-slate-700 text-sm"
                              >
                                <div className="w-1.5 h-1.5 rounded-full mr-2.5 bg-blue-600 flex-shrink-0"></div>
                                <span>{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Bonus Modules - Compact */}
            {course.bonuses && course.bonuses.length > 0 && (
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50/50 rounded-xl p-6 border border-yellow-200 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-yellow-600" />
                  Bonus Modules Included
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {course.bonuses.map((bonus: any, index: number) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg p-4 border border-yellow-200"
                    >
                      <h3 className="font-bold text-base text-slate-900 mb-2">
                        {bonus.title}
                      </h3>
                      <ul className="space-y-1.5">
                        {bonus.topics.map(
                          (topic: string, topicIndex: number) => (
                            <li
                              key={topicIndex}
                              className="flex items-start text-slate-700 text-sm"
                            >
                              <div className="w-1.5 h-1.5 rounded-full mr-2 mt-1.5 bg-yellow-500 flex-shrink-0"></div>
                              <span>{topic}</span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Sectors Covered - Compact */}
            {course.sectors && course.sectors.length > 0 && (
              <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-blue-600" />
                  Sectors Covered
                </h2>
                <div className="flex flex-wrap gap-2">
                  {course.sectors.map((sector: string, index: number) => (
                    <div
                      key={index}
                      className="px-3 py-1.5 bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-200 hover:border-blue-300 transition-all text-sm font-semibold text-slate-900"
                    >
                      {sector}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Career Outcomes - Compact */}
            {course.careerOutcomes && course.careerOutcomes.length > 0 && (
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50/50 rounded-xl p-6 border border-purple-200 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-purple-600" />
                  Career Outcomes
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {course.careerOutcomes.map(
                    (outcome: string, index: number) => (
                      <div
                        key={index}
                        className="bg-white rounded-lg p-3 border border-purple-200 text-center"
                      >
                        <Award className="h-4 w-4 mx-auto mb-1.5 text-purple-600" />
                        <span className="font-semibold text-xs text-slate-900 leading-tight">
                          {outcome}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}

            {/* Tools Covered - Compact */}
            {course.tools && course.tools.length > 0 && (
              <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Code className="h-5 w-5 text-emerald-600" />
                  Tools Covered
                </h2>
                <div className="flex flex-wrap gap-2">
                  {course.tools.map((tool: string, index: number) => (
                    <div
                      key={index}
                      className="px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 rounded-lg border border-emerald-200 hover:border-emerald-300 transition-all text-sm font-semibold text-slate-900"
                    >
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Requirements - Compact */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 border-2 border-slate-200 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-slate-900" />
                Prerequisites
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {course.requirements.map((req, index) => (
                  <div
                    key={index}
                    className="flex items-center text-slate-700 bg-white p-3 rounded-lg border-2 border-slate-200 hover:border-slate-900 transition-colors shadow-sm"
                  >
                    <CheckCircle className="h-4 w-4 mr-2.5 flex-shrink-0 text-slate-900" />
                    <span className="font-medium text-sm">{req}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Section - Compact */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-purple-600" />
                Frequently Asked Questions
              </h2>
              <div className="space-y-2">
                {course.faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border border-slate-200 rounded-lg overflow-hidden hover:border-purple-300 transition-all"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-purple-50 transition-all text-left"
                    >
                      <h3 className="font-bold text-base text-slate-900 pr-4">
                        {faq.question}
                      </h3>
                      {expandedFaq[index] ? (
                        <ChevronUp className="h-5 w-5 text-slate-600 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-slate-600 flex-shrink-0" />
                      )}
                    </button>
                    {expandedFaq[index] && (
                      <div className="p-4 bg-white border-t border-slate-200">
                        <p className="text-sm text-slate-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Certificate Section - Compact */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50/50 rounded-xl p-6 border border-blue-200 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Award className="h-5 w-5 text-blue-600" />
                Certificate of Completion
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <CertificateIllustration
                    courseName={`${course.title} ${
                      course.subtitle ? `With ${course.subtitle}` : ''
                    }`}
                    className="max-w-full"
                  />
                </div>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-4 border border-blue-200">
                    <h3 className="font-bold text-base text-slate-900 mb-3">
                      Benefits
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">
                          Verified & Shareable
                        </span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">
                          Industry Recognized
                        </span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">Lifetime Access</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">
                          Unique Verification Code
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-blue-200">
                    <p className="text-xs text-slate-600 mb-3">
                      <strong>Note:</strong> Certificate issued upon completion
                      of all modules and final project.
                    </p>
                    <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-2 rounded-lg text-sm">
                      View Sample Certificate
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Courses - Compact */}
            {relatedCourses.length > 0 && (
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Related Courses
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
            )}
          </div>
        </div>
      </section>

      <LeadCaptureForm
        open={showLeadForm}
        onOpenChange={setShowLeadForm}
        onSuccess={handleLeadFormSubmit}
        courseName={course?.title}
      />
      <Footer />
    </div>
  );
};

export default CourseDetails;
