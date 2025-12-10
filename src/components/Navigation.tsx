import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, BookOpen, Info, FileText, FolderOpen, GraduationCap, Mail, Code, Database, Brain, BarChart3, Shield, Smartphone, Cloud, ChevronDown } from 'lucide-react';
import { gsap } from 'gsap';
import Logo from './Logo';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      '.nav-item',
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, delay: 0.2 }
    );
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setCoursesOpen(false);
      }
    };

    if (coursesOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [coursesOpen]);

  const courseCategories = [
    {
      name: 'Web Development',
      icon: Code,
      courses: [
        { name: 'Full Stack Development', path: '/course/fullstack' },
        { name: 'Frontend Development', path: '/course/frontend' },
        { name: 'Backend Development', path: '/course/backend' },
        { name: 'MERN Stack', path: '/course/mern' },
      ],
    },
    {
      name: 'Data Science & Analytics',
      icon: Database,
      courses: [
        { name: 'Python Data Science', path: '/course/python-ds' },
        { name: 'Data Analytics', path: '/course/data-analytics' },
        { name: 'Big Data Analytics', path: '/course/big-data' },
        { name: 'Business Intelligence', path: '/course/bi' },
      ],
    },
    {
      name: 'AI & Machine Learning',
      icon: Brain,
      courses: [
        { name: 'Machine Learning', path: '/course/machine-learning' },
        { name: 'Deep Learning', path: '/course/deep-learning' },
        { name: 'AI with Python', path: '/course/ai-python' },
        { name: 'Computer Vision', path: '/course/computer-vision' },
      ],
    },
    {
      name: 'Cloud & DevOps',
      icon: Cloud,
      courses: [
        { name: 'AWS Cloud Computing', path: '/course/aws' },
        { name: 'DevOps Engineering', path: '/course/devops' },
        { name: 'Docker & Kubernetes', path: '/course/docker' },
        { name: 'CI/CD Pipelines', path: '/course/cicd' },
      ],
    },
    {
      name: 'Mobile Development',
      icon: Smartphone,
      courses: [
        { name: 'React Native', path: '/course/react-native' },
        { name: 'Flutter Development', path: '/course/flutter' },
        { name: 'iOS Development', path: '/course/ios' },
        { name: 'Android Development', path: '/course/android' },
      ],
    },
    {
      name: 'Cybersecurity',
      icon: Shield,
      courses: [
        { name: 'Ethical Hacking', path: '/course/ethical-hacking' },
        { name: 'Cybersecurity Fundamentals', path: '/course/cybersecurity' },
        { name: 'Network Security', path: '/course/network-security' },
        { name: 'Penetration Testing', path: '/course/penetration-testing' },
      ],
    },
  ];

  const navLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: Info },
    { name: 'Blog', path: '/blog', icon: FileText },
    { name: 'Resources', path: '/resources', icon: FolderOpen },
    { name: 'Student Portal', path: '/student-portal', icon: GraduationCap },
    { name: 'Contact', path: '/contact', icon: Mail },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-lg border-b border-slate-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="nav-item flex items-center transition-opacity duration-300 hover:opacity-80"
          >
            <Logo className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Courses Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onMouseEnter={() => setCoursesOpen(true)}
                onMouseLeave={() => setCoursesOpen(false)}
                className={`nav-item relative px-4 py-2 text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
                  location.pathname.startsWith('/course') || location.pathname === '/courses'
                    ? 'text-slate-900'
                    : 'text-slate-700 hover:text-slate-900'
                }`}
                style={{ fontFamily: 'Geist, sans-serif' }}
              >
                <BookOpen
                  size={18}
                  className={`transition-all duration-300 ${
                    location.pathname.startsWith('/course') || location.pathname === '/courses' || coursesOpen
                      ? 'text-slate-900'
                      : 'text-slate-600 group-hover:text-slate-900'
                  }`}
                />
                <span>Courses</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    coursesOpen ? 'rotate-180' : ''
                  }`}
                />
                {(location.pathname.startsWith('/course') || location.pathname === '/courses') && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-slate-900 rounded-full"></div>
                )}
              </button>

              {/* Dropdown Menu */}
              {coursesOpen && (
                <div
                  onMouseEnter={() => setCoursesOpen(true)}
                  onMouseLeave={() => setCoursesOpen(false)}
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[900px] bg-white rounded-lg shadow-xl border border-slate-200 overflow-hidden z-50"
                >
                  <div className="flex">
                    {/* Left Sidebar - Categories */}
                    <div className="w-64 bg-slate-50 border-r border-slate-200">
                      <div className="p-5 border-b border-slate-200 bg-white">
                        <h3
                          className="text-sm font-bold text-slate-900 uppercase tracking-wider"
                          style={{ fontFamily: 'Geist, sans-serif' }}
                        >
                          Browse Courses
                        </h3>
                      </div>
                      <div className="py-1">
                        {courseCategories.map((category, index) => {
                          const Icon = category.icon;
                          const isSelected = selectedCategory === index;
                          return (
                            <div
                              key={index}
                              onClick={() => setSelectedCategory(index)}
                              className={`px-4 py-3 cursor-pointer transition-colors border-l-2 ${
                                isSelected
                                  ? 'bg-white border-slate-900'
                                  : 'border-transparent hover:bg-white hover:border-slate-900'
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <Icon
                                  size={18}
                                  className={isSelected ? 'text-slate-900' : 'text-slate-600'}
                                />
                                <span
                                  className={`text-sm ${
                                    isSelected
                                      ? 'text-slate-900 font-bold'
                                      : 'text-slate-700 font-semibold'
                                  }`}
                                  style={{ fontFamily: 'Geist, sans-serif' }}
                                >
                                  {category.name}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Right Content Area */}
                    <div className="flex-1 p-6">
                      {courseCategories[selectedCategory] && (() => {
                        const category = courseCategories[selectedCategory];
                        const Icon = category.icon;
                        return (
                          <div>
                            <div className="flex items-center gap-3 mb-6">
                              <div className="p-2 rounded-lg bg-slate-900 text-white">
                                <Icon size={20} />
                              </div>
                              <h3
                                className="font-bold text-slate-900 text-base"
                                style={{ fontFamily: 'Geist, sans-serif' }}
                              >
                                {category.name}
                              </h3>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              {category.courses.map((course, courseIndex) => (
                                <Link
                                  key={courseIndex}
                                  to={course.path}
                                  onClick={() => setCoursesOpen(false)}
                                  className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 rounded-md transition-all duration-200 font-medium"
                                  style={{ fontFamily: 'Geist, sans-serif' }}
                                >
                                  {course.name}
                                </Link>
                              ))}
                            </div>
                            <div className="mt-6 pt-6 border-t border-slate-200">
                              <Link
                                to="/courses"
                                onClick={() => setCoursesOpen(false)}
                                className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-slate-700 transition-colors"
                                style={{ fontFamily: 'Geist, sans-serif' }}
                              >
                                View All Courses
                                <ChevronDown size={14} className="rotate-[-90deg]" />
                              </Link>
                            </div>
                          </div>
                        );
                      })()}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`nav-item relative px-4 py-2 text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
                    isActive
                      ? 'text-slate-900'
                      : 'text-slate-700 hover:text-slate-900'
                  }`}
                  style={{ fontFamily: 'Geist, sans-serif' }}
                >
                  <Icon
                    size={18}
                    className={`transition-all duration-300 ${
                      isActive
                        ? 'text-slate-900'
                        : 'text-slate-600 group-hover:text-slate-900'
                    }`}
                  />
                  <span>{link.name}</span>
                  {isActive && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-slate-900 rounded-full"></div>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-slate-700 hover:text-slate-900 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 bg-white border-t border-slate-200 max-h-[80vh] overflow-y-auto">
            {/* Courses Section */}
            <div className="px-4 mb-2">
              <div
                className="flex items-center gap-2.5 px-4 py-2.5 text-sm font-bold text-slate-700"
                style={{ fontFamily: 'Geist, sans-serif' }}
              >
                <BookOpen size={18} className="text-slate-600" />
                <span>Courses</span>
              </div>
              <div className="ml-8 mt-2 space-y-1">
                {courseCategories.map((category, index) => {
                  const Icon = category.icon;
                  return (
                    <div key={index} className="mb-3">
                      <div
                        className="flex items-center gap-2 px-3 py-2 text-xs font-bold text-slate-600"
                        style={{ fontFamily: 'Geist, sans-serif' }}
                      >
                        <Icon size={16} />
                        <span>{category.name}</span>
                      </div>
                      <div className="ml-6 space-y-1">
                        {category.courses.map((course, courseIndex) => (
                          <Link
                            key={courseIndex}
                            to={course.path}
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-1.5 text-xs text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded transition-all font-semibold"
                            style={{ fontFamily: 'Geist, sans-serif' }}
                          >
                            {course.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                })}
                <Link
                  to="/courses"
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-xs font-bold text-slate-900 hover:bg-slate-50 rounded mt-2"
                  style={{ fontFamily: 'Geist, sans-serif' }}
                >
                  View All Courses →
                </Link>
              </div>
            </div>

            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-2.5 px-4 py-2.5 text-sm font-bold transition-all duration-300 rounded-lg mx-2 ${
                    isActive
                      ? 'text-slate-900 bg-slate-50'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                  style={{ fontFamily: 'Geist, sans-serif' }}
                >
                  <Icon
                    size={18}
                    className={isActive ? 'text-slate-900' : 'text-slate-600'}
                  />
                  <span>{link.name}</span>
                  {isActive && (
                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-slate-900"></div>
                  )}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
