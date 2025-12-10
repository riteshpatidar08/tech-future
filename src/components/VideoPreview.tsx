import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Play, Clock, Users, Star } from 'lucide-react';
import Tablet3D from './Tablet3D';

gsap.registerPlugin(ScrollTrigger);

interface Video {
  id: number;
  title: string;
  description: string;
  duration: string;
  views: string;
  rating: number;
  course: string;
}

const videos: Video[] = [
  {
    id: 1,
    title: 'React Fundamentals - Getting Started',
    description:
      'Learn the core concepts of React including components, props, and state management.',
    duration: '45 min',
    views: '12.5K',
    rating: 4.9,
    course: 'Full Stack Development',
  },
  {
    id: 2,
    title: 'Python Data Analysis with Pandas',
    description:
      "Master data manipulation and analysis using Python's powerful Pandas library.",
    duration: '52 min',
    views: '8.3K',
    rating: 4.8,
    course: 'Python Data Science',
  },
  {
    id: 3,
    title: 'Introduction to Machine Learning',
    description:
      'Understand the basics of ML algorithms and how to implement them from scratch.',
    duration: '38 min',
    views: '15.2K',
    rating: 4.9,
    course: 'Machine Learning',
  },
  {
    id: 4,
    title: 'Data Visualization with Power BI',
    description:
      'Create stunning dashboards and visualizations to present your data insights.',
    duration: '41 min',
    views: '6.7K',
    rating: 4.7,
    course: 'Data Analytics',
  },
  {
    id: 5,
    title: 'Node.js Backend Development',
    description:
      'Build robust server-side applications using Node.js and Express framework.',
    duration: '48 min',
    views: '10.1K',
    rating: 4.8,
    course: 'Full Stack Development',
  },
  {
    id: 6,
    title: 'Deep Learning with TensorFlow',
    description:
      'Dive into neural networks and deep learning models using TensorFlow.',
    duration: '55 min',
    views: '9.4K',
    rating: 4.9,
    course: 'Machine Learning',
  },
];

const VideoPreview = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* 3D Tablet Elements */}
      <div className="absolute top-20 right-20 opacity-10 hidden lg:block">
        <Tablet3D className="scale-75" />
      </div>
      <div className="absolute bottom-20 left-20 opacity-10 hidden lg:block">
        <Tablet3D className="scale-75" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Tablet3D className="scale-75" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-slate-900">
            Featured Video Lectures
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Preview our high-quality video content and see what you'll learn in
            our courses.
          </p>
        </div>

        <Carousel className="w-full">
          <CarouselContent className="-ml-2 md:-ml-4">
            {videos.map((video) => (
              <CarouselItem
                key={video.id}
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <Card className="border border-slate-200 shadow-sm bg-white hover:shadow-md transition-shadow">
                  <CardContent className="p-0">
                    <div className="relative aspect-video bg-slate-100 rounded-t-lg overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="p-4 rounded-full bg-white/90 backdrop-blur-sm">
                          <Play className="h-12 w-12 text-slate-900" />
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="mb-2">
                        <span className="text-xs font-medium text-slate-600 bg-slate-100 px-2 py-1 rounded">
                          {video.course}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2 line-clamp-2">
                        {video.title}
                      </h3>
                      <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                        {video.description}
                      </p>
                      <div className="flex items-center justify-between text-sm text-slate-600">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{video.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            <span>{video.views}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{video.rating}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="border-slate-200 text-slate-900 hover:bg-slate-50" />
          <CarouselNext className="border-slate-200 text-slate-900 hover:bg-slate-50" />
        </Carousel>
      </div>
    </section>
  );
};

export default VideoPreview;
