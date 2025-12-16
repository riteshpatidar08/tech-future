import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Users, BookOpen, Award, Video, Clock } from 'lucide-react';
import Chart3D from './Chart3D';
import BackgroundPattern from './BackgroundPattern';

gsap.registerPlugin(ScrollTrigger);

interface Activity {
  id: number;
  name: string;
  action: string;
  course: string;
  time: string;
  iconType: 'award' | 'book' | 'video';
}

const activities: Activity[] = [
  {
    id: 1,
    name: 'Rajesh K.',
    action: 'completed',
    course: 'Full Stack Development',
    time: '2 minutes ago',
    iconType: 'award',
  },
  {
    id: 2,
    name: 'Priya S.',
    action: 'enrolled in',
    course: 'Python Data Science',
    time: '5 minutes ago',
    iconType: 'book',
  },
  {
    id: 3,
    name: 'Amit P.',
    action: 'started watching',
    course: 'Machine Learning Basics',
    time: '8 minutes ago',
    iconType: 'video',
  },
  {
    id: 4,
    name: 'Sneha R.',
    action: 'submitted project',
    course: 'Data Analytics',
    time: '12 minutes ago',
    iconType: 'award',
  },
  {
    id: 5,
    name: 'Karan M.',
    action: 'completed quiz',
    course: 'Full Stack Development',
    time: '15 minutes ago',
    iconType: 'award',
  },
  {
    id: 6,
    name: 'Anjali T.',
    action: 'enrolled in',
    course: 'Machine Learning',
    time: '18 minutes ago',
    iconType: 'book',
  },
];

const LiveActivityFeed = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const feedRef = useRef<HTMLDivElement>(null);
  const [displayedActivities, setDisplayedActivities] = useState<Activity[]>([]);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
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
    let currentIndex = 0;
    const interval = setInterval(() => {
      const currentActivity = activities[currentIndex];
      if (currentIndex < activities.length && currentActivity && currentActivity.id) {
        setDisplayedActivities((prev) => {
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
          { x: -20, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.4, ease: 'power2.out' }
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
    <section ref={sectionRef} className="relative py-24 md:py-32 bg-slate-50 overflow-hidden">
      {/* Background Pattern */}
      <BackgroundPattern variant="dots" opacity={0.025} />
      
      {/* 3D Chart Elements */}
      <div className="absolute top-10 right-10 opacity-10 hidden lg:block">
        <Chart3D className="scale-75" />
      </div>
      <div className="absolute bottom-10 left-10 opacity-10 hidden lg:block">
        <Chart3D className="scale-75" />
      </div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Chart3D className="scale-75" />
          </div>
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="relative">
              <Users className="h-6 w-6 text-slate-900" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-green-500 rounded-full border-2 border-white"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
              Live Activity Feed
            </h2>
          </div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            See what our students are achieving right now! Join thousands of
            learners on their journey.
          </p>
        </div>

        <Card ref={feedRef} className="border border-slate-200 shadow-sm bg-white">
          <CardContent className="p-6 space-y-4">
            {displayedActivities
              .filter((activity) => activity && activity.id && activity.name)
              .map((activity, index) => (
                <div
                  key={activity.id}
                  data-activity-index={index}
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-slate-50 transition-colors border-b border-slate-100 last:border-0"
                >
                  <Avatar className="h-10 w-10 border border-slate-200">
                    <AvatarFallback className="bg-slate-100 text-slate-700 font-medium">
                      {getInitials(activity.name || '')}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-medium text-slate-900">
                        {activity.name || 'Student'}
                      </span>
                      <span className="text-slate-600">
                        {activity.action || 'completed'}
                      </span>
                      <Badge
                        variant="outline"
                        className="border-slate-300 text-slate-700"
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

                  <div className="p-2 rounded-lg bg-slate-100 text-slate-700">
                    {getIcon(activity.iconType || 'award')}
                  </div>
                </div>
              ))}

            {displayedActivities.length === 0 && (
              <div className="text-center py-12 text-slate-500">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-slate-900 mb-4"></div>
                <p>Loading activities...</p>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="text-center mt-8">
          <p className="text-sm text-slate-600">
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 bg-green-500 rounded-full"></span>
              Live updates every few seconds
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LiveActivityFeed;
