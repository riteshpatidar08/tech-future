
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from "@/components/Navigation";
import AnimatedBackground from "@/components/AnimatedBackground";
import Footer from "@/components/Footer";
import { User, BookOpen, Clock, Trophy, Calendar, FileText, Video, Users } from "lucide-react";

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
    <div className="min-h-screen text-white">
      <AnimatedBackground />
      <Navigation />
      
      <section className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div ref={headerRef} className="text-center mb-16">
            <div className="bg-black/60 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent mb-6 drop-shadow-lg">
                Student Portal
              </h1>
              <p className="text-xl text-gray-100 max-w-3xl mx-auto drop-shadow-md">
                Track your progress, access course materials, and stay connected with your learning journey
              </p>
            </div>
          </div>

          <div ref={dashboardRef} className="max-w-7xl mx-auto">
            {/* Student Overview */}
            <div className="dashboard-card grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              {/* Profile Card */}
              <div className="lg:col-span-1 bg-black/60 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="h-10 w-10 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-2">{studentData.name}</h2>
                  <p className="text-gray-300 mb-4">{studentData.course}</p>
                  
                  <div className="bg-white/5 rounded-lg p-4 mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">Course Progress</span>
                      <span className="text-purple-400 font-semibold">{studentData.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-purple-600 to-cyan-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${studentData.progress}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-400 mt-2">
                      {studentData.completedModules} of {studentData.totalModules} modules completed
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-lg p-4 border border-purple-500/30">
                    <h3 className="font-semibold text-white mb-2">Next Class</h3>
                    <p className="text-purple-300">{studentData.nextClass}</p>
                    <p className="text-sm text-gray-400">{studentData.nextClassTime}</p>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="lg:col-span-2 grid grid-cols-2 gap-4">
                <div className="bg-black/60 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center">
                  <BookOpen className="h-8 w-8 text-purple-400 mx-auto mb-3" />
                  <h3 className="text-2xl font-bold text-white">15</h3>
                  <p className="text-gray-300">Modules Completed</p>
                </div>
                
                <div className="bg-black/60 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center">
                  <Clock className="h-8 w-8 text-cyan-400 mx-auto mb-3" />
                  <h3 className="text-2xl font-bold text-white">120hrs</h3>
                  <p className="text-gray-300">Learning Time</p>
                </div>
                
                <div className="bg-black/60 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center">
                  <Trophy className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
                  <h3 className="text-2xl font-bold text-white">3</h3>
                  <p className="text-gray-300">Achievements</p>
                </div>
                
                <div className="bg-black/60 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center">
                  <Video className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                  <h3 className="text-2xl font-bold text-white">45</h3>
                  <p className="text-gray-300">Videos Watched</p>
                </div>
              </div>
            </div>

            {/* Upcoming Classes & Assignments */}
            <div className="dashboard-card grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Upcoming Classes */}
              <div className="bg-black/60 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-purple-400" />
                  Upcoming Classes
                </h3>
                <div className="space-y-3">
                  {upcomingClasses.map((class_, index) => (
                    <div key={index} className="bg-white/5 rounded-lg p-4 border border-white/10 hover:border-white/30 transition-all duration-300">
                      <h4 className="font-semibold text-white">{class_.title}</h4>
                      <p className="text-sm text-purple-300">{class_.time}</p>
                      <p className="text-sm text-gray-400">Instructor: {class_.instructor}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Assignments */}
              <div className="bg-black/60 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <FileText className="h-5 w-5 mr-2 text-cyan-400" />
                  Assignments
                </h3>
                <div className="space-y-3">
                  {assignments.map((assignment, index) => (
                    <div key={index} className="bg-white/5 rounded-lg p-4 border border-white/10">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold text-white">{assignment.title}</h4>
                          <p className="text-sm text-gray-400">Due: {assignment.dueDate}</p>
                        </div>
                        <div className="text-right">
                          <span className={`px-2 py-1 rounded text-xs ${
                            assignment.status === 'Graded' ? 'bg-green-600/20 text-green-300' :
                            assignment.status === 'Submitted' ? 'bg-blue-600/20 text-blue-300' :
                            assignment.status === 'In Progress' ? 'bg-yellow-600/20 text-yellow-300' :
                            'bg-gray-600/20 text-gray-300'
                          }`}>
                            {assignment.status}
                          </span>
                          {assignment.grade && (
                            <p className="text-sm font-semibold text-purple-300 mt-1">{assignment.grade}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="dashboard-card bg-black/60 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Trophy className="h-5 w-5 mr-2 text-yellow-400" />
                Achievements
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className={`p-4 rounded-lg border text-center transition-all duration-300 ${
                    achievement.earned 
                      ? 'bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border-yellow-500/30 hover:border-yellow-500/50' 
                      : 'bg-white/5 border-white/10 opacity-50'
                  }`}>
                    <div className={`mx-auto mb-2 ${achievement.earned ? 'text-yellow-400' : 'text-gray-500'}`}>
                      {achievement.icon}
                    </div>
                    <h4 className={`text-sm font-semibold ${achievement.earned ? 'text-white' : 'text-gray-500'}`}>
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
