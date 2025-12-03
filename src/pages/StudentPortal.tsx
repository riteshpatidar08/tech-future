
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from "@/components/Navigation";
import AnimatedBackground from "@/components/AnimatedBackground";
import Footer from "@/components/Footer";
import { User, BookOpen, Clock, Trophy, Calendar, FileText, Video, Users } from "lucide-react";
import HandDrawnArrow from "@/components/HandDrawnArrow";
import EducationIllustration from "@/components/EducationIllustration";

gsap.registerPlugin(ScrollTrigger);

const StudentPortal = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const dashboardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(headerRef.current?.children,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out', delay: 0.3 }
    );

    gsap.fromTo('.dashboard-card',
      { y: 80, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: dashboardRef.current,
          start: 'top 80%',
        }
      }
    );
  }, []);

  const studentData = {
    name: "Alex Johnson",
    course: "Full Stack Development",
    progress: 75,
    completedModules: 15,
    totalModules: 20,
    nextClass: "React Advanced Patterns",
    nextClassTime: "Tomorrow 2:00 PM"
  };

  const upcomingClasses = [
    { title: "React Advanced Patterns", time: "Dec 14, 2:00 PM", instructor: "Sarah Wilson" },
    { title: "Node.js Authentication", time: "Dec 16, 10:00 AM", instructor: "Mike Chen" },
    { title: "Database Design", time: "Dec 18, 3:00 PM", instructor: "Emily Rodriguez" },
    { title: "API Development", time: "Dec 20, 1:00 PM", instructor: "James Wilson" }
  ];

  const assignments = [
    { title: "E-commerce Website", dueDate: "Dec 20", status: "In Progress", grade: null },
    { title: "REST API Project", dueDate: "Dec 15", status: "Submitted", grade: "A" },
    { title: "Database Schema Design", dueDate: "Dec 10", status: "Graded", grade: "B+" },
    { title: "React Component Library", dueDate: "Dec 25", status: "Not Started", grade: null }
  ];

  const achievements = [
    { title: "First Project Completed", icon: <Trophy className="h-6 w-6" />, earned: true },
    { title: "Perfect Attendance", icon: <Calendar className="h-6 w-6" />, earned: true },
    { title: "Code Review Master", icon: <FileText className="h-6 w-6" />, earned: false },
    { title: "Team Collaboration", icon: <Users className="h-6 w-6" />, earned: true }
  ];

  return (
    <div className="min-h-screen bg-white">
      <AnimatedBackground />
      <Navigation />
      
      <section className="pt-24 pb-20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-5 opacity-10 hidden lg:block transform rotate-12">
          <EducationIllustration type="student" size={120} />
        </div>
        <div className="absolute bottom-20 right-10 opacity-10 hidden lg:block transform -rotate-6">
          <EducationIllustration type="graduation" size={100} />
        </div>
        <div className="absolute top-1/2 right-5 opacity-10 hidden xl:block transform rotate-45">
          <EducationIllustration type="trophy" size={110} />
        </div>
        <div className="absolute bottom-1/3 left-10 opacity-10 hidden xl:block transform -rotate-12">
          <EducationIllustration type="certificate" size={100} />
        </div>
        
        {/* Hand-drawn arrows */}
        <div className="absolute top-1/3 right-5 hidden xl:block animate-float transform rotate-12">
          <HandDrawnArrow direction="left" color="#3776AB" className="w-20 h-20" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div ref={headerRef} className="text-center mb-16 relative">
            {/* Tech icons behind header */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="absolute -left-20 top-0 opacity-15">
                <svg width="100" height="100" viewBox="0 0 200 200">
                  <circle cx="100" cy="100" r="70" fill="#3776AB"/>
                  <circle cx="150" cy="100" r="70" fill="#FFDE57"/>
                </svg>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm max-w-4xl mx-auto relative z-10">
              <h1 className="text-5xl md:text-6xl font-bold text-[#0F172A] mb-6"
                  style={{ 
                    fontFamily: "'Dancing Script', 'Pacifico', 'Brush Script MT', cursive",
                    fontWeight: 700,
                    letterSpacing: '0.02em'
                  }}>
                Student Portal
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Track your progress, access course materials, and stay connected with your learning journey
              </p>
            </div>
          </div>

          <div ref={dashboardRef} className="max-w-7xl mx-auto">
            {/* Student Overview */}
            <div className="dashboard-card grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              {/* Profile Card */}
              <div className="lg:col-span-1 bg-white rounded-2xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300"
                   style={{ transform: 'rotate(-1deg)' }}>
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="h-10 w-10 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">{studentData.name}</h2>
                  <p className="text-slate-600 mb-4">{studentData.course}</p>
                  
                  <div className="bg-slate-50 rounded-lg p-4 mb-4 border border-gray-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-600">Course Progress</span>
                      <span className="text-blue-600 font-semibold">{studentData.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-600 to-cyan-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${studentData.progress}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-slate-500 mt-2">
                      {studentData.completedModules} of {studentData.totalModules} modules completed
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-4 border border-blue-200">
                    <h3 className="font-semibold text-slate-900 mb-2">Next Class</h3>
                    <p className="text-blue-600">{studentData.nextClass}</p>
                    <p className="text-sm text-slate-500">{studentData.nextClassTime}</p>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="lg:col-span-2 grid grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 text-center"
                     style={{ background: 'linear-gradient(135deg, rgba(127,109,255,0.08) 0%, rgba(255,111,97,0.05) 100%)', borderColor: 'rgba(127,109,255,0.2)' }}>
                  <BookOpen className="h-8 w-8 mx-auto mb-3" style={{ color: '#7F6DFF' }} />
                  <h3 className="text-2xl font-bold text-slate-900">15</h3>
                  <p className="text-slate-600">Modules Completed</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 text-center"
                     style={{ background: 'linear-gradient(135deg, rgba(0,212,170,0.08) 0%, rgba(97,218,251,0.05) 100%)', borderColor: 'rgba(0,212,170,0.2)' }}>
                  <Clock className="h-8 w-8 mx-auto mb-3" style={{ color: '#00D4AA' }} />
                  <h3 className="text-2xl font-bold text-slate-900">120hrs</h3>
                  <p className="text-slate-600">Learning Time</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 text-center"
                     style={{ background: 'linear-gradient(135deg, rgba(248,152,32,0.08) 0%, rgba(237,139,0,0.05) 100%)', borderColor: 'rgba(248,152,32,0.2)' }}>
                  <Trophy className="h-8 w-8 mx-auto mb-3" style={{ color: '#F89820' }} />
                  <h3 className="text-2xl font-bold text-slate-900">3</h3>
                  <p className="text-slate-600">Achievements</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 text-center"
                     style={{ background: 'linear-gradient(135deg, rgba(55,118,171,0.08) 0%, rgba(255,222,87,0.05) 100%)', borderColor: 'rgba(55,118,171,0.2)' }}>
                  <Video className="h-8 w-8 mx-auto mb-3" style={{ color: '#3776AB' }} />
                  <h3 className="text-2xl font-bold text-slate-900">45</h3>
                  <p className="text-slate-600">Videos Watched</p>
                </div>
              </div>
            </div>

            {/* Upcoming Classes & Assignments */}
            <div className="dashboard-card grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Upcoming Classes */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300"
                   style={{ transform: 'rotate(0.5deg)' }}>
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                  <Calendar className="h-5 w-5 mr-2" style={{ color: '#7F6DFF' }} />
                  Upcoming Classes
                </h3>
                <div className="space-y-3">
                  {upcomingClasses.map((class_, index) => (
                    <div key={index} className="bg-slate-50 rounded-lg p-4 border border-gray-200 hover:border-blue-200 transition-all duration-300">
                      <h4 className="font-semibold text-slate-900">{class_.title}</h4>
                      <p className="text-sm text-blue-600">{class_.time}</p>
                      <p className="text-sm text-slate-500">Instructor: {class_.instructor}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Assignments */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300"
                   style={{ transform: 'rotate(-0.5deg)' }}>
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                  <FileText className="h-5 w-5 mr-2" style={{ color: '#00D4AA' }} />
                  Assignments
                </h3>
                <div className="space-y-3">
                  {assignments.map((assignment, index) => (
                    <div key={index} className="bg-slate-50 rounded-lg p-4 border border-gray-200">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold text-slate-900">{assignment.title}</h4>
                          <p className="text-sm text-slate-500">Due: {assignment.dueDate}</p>
                        </div>
                        <div className="text-right">
                          <span className={`px-2 py-1 rounded text-xs ${
                            assignment.status === 'Graded' ? 'bg-green-100 text-green-700' :
                            assignment.status === 'Submitted' ? 'bg-blue-100 text-blue-700' :
                            assignment.status === 'In Progress' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-gray-100 text-gray-700'
                          }`}>
                            {assignment.status}
                          </span>
                          {assignment.grade && (
                            <p className="text-sm font-semibold text-blue-600 mt-1">{assignment.grade}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="dashboard-card bg-white rounded-2xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                <Trophy className="h-5 w-5 mr-2" style={{ color: '#F89820' }} />
                Achievements
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className={`p-4 rounded-lg border text-center transition-all duration-300 ${
                    achievement.earned 
                      ? 'bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200 hover:border-yellow-300 shadow-sm' 
                      : 'bg-slate-50 border-gray-200 opacity-50'
                  }`}>
                    <div className={`mx-auto mb-2 ${achievement.earned ? 'text-yellow-500' : 'text-gray-400'}`}>
                      {achievement.icon}
                    </div>
                    <h4 className={`text-sm font-semibold ${achievement.earned ? 'text-slate-900' : 'text-gray-500'}`}>
                      {achievement.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default StudentPortal;
