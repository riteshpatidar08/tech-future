import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Users, BookOpen, Award, Video, Clock } from 'lucide-react';
import HandDrawnArrow from './HandDrawnArrow';
import EducationIllustration from './EducationIllustration';

gsap.registerPlugin(ScrollTrigger);

interface Activity {
  id: number;
  name: string;
  action: string;
  course: string;
  time: string;
  iconType: 'award' | 'book' | 'video';
  color: string;
}

const activities: Activity[] = [
  {
    id: 1,
    name: 'Rajesh K.',
    action: 'completed',
    course: 'Full Stack Development',
    time: '2 minutes ago',
    iconType: 'award',
    color: 'bg-blue-500',
  },
  {
    id: 2,
    name: 'Priya S.',
    action: 'enrolled in',
    course: 'Python Data Science',
    time: '5 minutes ago',
    iconType: 'book',
    color: 'bg-cyan-500',
  },
  {
    id: 3,
    name: 'Amit P.',
    action: 'started watching',
    course: 'Machine Learning Basics',
    time: '8 minutes ago',
    iconType: 'video',
    color: 'bg-purple-500',
  },
  {
    id: 4,
    name: 'Sneha R.',
    action: 'submitted project',
    course: 'Data Analytics',
    time: '12 minutes ago',
    iconType: 'award',
    color: 'bg-orange-500',
  },
  {
    id: 5,
    name: 'Karan M.',
    action: 'completed quiz',
    course: 'Full Stack Development',
    time: '15 minutes ago',
    iconType: 'award',
    color: 'bg-blue-500',
  },
  {
    id: 6,
    name: 'Anjali T.',
    action: 'enrolled in',
    course: 'Machine Learning',
    time: '18 minutes ago',
    iconType: 'book',
    color: 'bg-purple-500',
  },
];

const LiveActivityFeed = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const feedRef = useRef<HTMLDivElement>(null);
  const [displayedActivities, setDisplayedActivities] = useState<Activity[]>(
    []
  );

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
  }, []);

  useEffect(() => {
    // Animate activities appearing one by one
    let currentIndex = 0;
    const interval = setInterval(() => {
      const currentActivity = activities[currentIndex];
      if (
        currentIndex < activities.length &&
        currentActivity &&
        currentActivity.id
      ) {
        setDisplayedActivities((prev) => {
          // Ensure we don't add duplicates
          if (prev.some((a) => a && a.id && a.id === currentActivity.id)) {
            return prev;
          }
          return [...prev, currentActivity];
        });
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (feedRef.current && displayedActivities.length > 0) {
      const lastIndex = displayedActivities.length - 1;
      const lastActivityElement = feedRef.current.querySelector(
        `[data-activity-index="${lastIndex}"]`
      );
      if (lastActivityElement) {
        gsap.fromTo(
          lastActivityElement,
          { x: -50, opacity: 0, scale: 0.9 },
          { x: 0, opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.7)' }
        );
      }
    }
  }, [displayedActivities]);

  const getInitials = (name: string): string => {
    if (!name) return '';
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  const getIcon = (iconType: Activity['iconType']) => {
    switch (iconType) {
      case 'award':
        return <Award className="h-4 w-4" />;
      case 'book':
        return <BookOpen className="h-4 w-4" />;
      case 'video':
        return <Video className="h-4 w-4" />;
      default:
        return <Award className="h-4 w-4" />;
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden"
    >
      {/* Decorative illustrations */}
      <div className="absolute top-10 right-10 opacity-10 hidden lg:block transform rotate-12">
        <EducationIllustration type="student" size={120} />
      </div>
      <div className="absolute bottom-10 left-10 opacity-10 hidden lg:block transform -rotate-12">
        <EducationIllustration type="rocket" size={100} />
      </div>

      {/* Hand-drawn arrows */}
      <div className="absolute top-1/4 left-10 hidden xl:block animate-float transform rotate-12">
        <HandDrawnArrow
          direction="right"
          color="#3776AB"
          className="w-20 h-20"
        />
      </div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="relative">
              <Users className="h-6 w-6 text-blue-600" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-green-500 rounded-full border-2 border-white animate-pulse"></span>
            </div>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0F172A]"
              style={{
                fontFamily:
                  "'Dancing Script', 'Pacifico', 'Brush Script MT', cursive",
                fontWeight: 700,
              }}
            >
              Live Activity Feed
            </h2>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
            See what our students are achieving right now! Join thousands of
            learners on their journey.
          </p>
        </div>

        <Card
          ref={feedRef}
          className="border-2 shadow-xl bg-white/90 backdrop-blur-sm"
        >
          <CardContent className="p-6 space-y-4">
            {displayedActivities
              .filter((activity) => activity && activity.id && activity.name)
              .map((activity, index) => (
                <div
                  key={activity.id}
                  data-activity-index={index}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-blue-50/50 transition-all duration-300 border border-transparent hover:border-blue-200 hover:shadow-md"
                >
                  <Avatar className="h-12 w-12 border-2 border-blue-200">
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white font-semibold">
                      {getInitials(activity.name || '')}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-semibold text-slate-800">
                        {activity.name || 'Student'}
                      </span>
                      <span className="text-slate-600">
                        {activity.action || 'completed'}
                      </span>
                      <Badge
                        variant="outline"
                        className="border-blue-300 text-blue-700"
                      >
                        {activity.course || 'Course'}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock className="h-3 w-3 text-slate-400" />
                      <span className="text-xs text-slate-500">
                        {activity.time || 'Recently'}
                      </span>
                    </div>
                  </div>

                  <div
                    className={`p-2 rounded-lg ${
                      activity.color || 'bg-blue-500'
                    } text-white`}
                  >
                    {getIcon(activity.iconType || 'award')}
                  </div>
                </div>
              ))}

            {displayedActivities.length === 0 && (
              <div className="text-center py-12 text-slate-500">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mb-4"></div>
                <p>Loading activities...</p>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="text-center mt-8">
          <p className="text-sm text-slate-600">
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></span>
              Live updates every few seconds
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LiveActivityFeed;
