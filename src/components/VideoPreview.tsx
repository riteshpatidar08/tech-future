import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Clock, Users, Star } from 'lucide-react';
import HandDrawnArrow from './HandDrawnArrow';
import EducationIllustration from './EducationIllustration';

gsap.registerPlugin(ScrollTrigger);

interface Video {
  id: number;
  title: string;
  description: string;
  duration: string;
  views: string;
  rating: number;
  thumbnail: string;
  course: string;
  gradient: string;
}

const videos: Video[] = [
  {
    id: 1,
    title: "React Fundamentals - Getting Started",
    description: "Learn the core concepts of React including components, props, and state management.",
    duration: "45 min",
    views: "12.5K",
    rating: 4.9,
    course: "Full Stack Development",
    gradient: "from-blue-600 to-cyan-600",
    thumbnail: "react"
  },
  {
    id: 2,
    title: "Python Data Analysis with Pandas",
    description: "Master data manipulation and analysis using Python's powerful Pandas library.",
    duration: "52 min",
    views: "8.3K",
    rating: 4.8,
    course: "Python Data Science",
    gradient: "from-cyan-600 to-blue-600",
    thumbnail: "python"
  },
  {
    id: 3,
    title: "Introduction to Machine Learning",
    description: "Understand the basics of ML algorithms and how to implement them from scratch.",
    duration: "38 min",
    views: "15.2K",
    rating: 4.9,
    course: "Machine Learning",
    gradient: "from-indigo-600 to-blue-600",
    thumbnail: "ml"
  },
  {
    id: 4,
    title: "Data Visualization with Power BI",
    description: "Create stunning dashboards and visualizations to present your data insights.",
    duration: "41 min",
    views: "6.7K",
    rating: 4.7,
    course: "Data Analytics",
    gradient: "from-orange-600 to-red-600",
    thumbnail: "analytics"
  },
  {
    id: 5,
    title: "Node.js Backend Development",
    description: "Build robust server-side applications using Node.js and Express framework.",
    duration: "48 min",
    views: "10.1K",
    rating: 4.8,
    course: "Full Stack Development",
    gradient: "from-blue-600 to-cyan-600",
    thumbnail: "nodejs"
  },
  {
    id: 6,
    title: "Deep Learning with TensorFlow",
    description: "Dive into neural networks and deep learning models using TensorFlow.",
    duration: "55 min",
    views: "9.4K",
    rating: 4.9,
    course: "Machine Learning",
    gradient: "from-indigo-600 to-blue-600",
    thumbnail: "tensorflow"
  }
];

const VideoPreview = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null);

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
  }, []);

  const getThumbnailIcon = (thumbnail: string) => {
    switch(thumbnail) {
      case 'react':
        return <div className="w-full h-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-4xl font-bold">⚛️</div>;
      case 'python':
        return <div className="w-full h-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white text-4xl font-bold">🐍</div>;
      case 'ml':
        return <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white text-4xl font-bold">🤖</div>;
      case 'analytics':
        return <div className="w-full h-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white text-4xl font-bold">📊</div>;
      case 'nodejs':
        return <div className="w-full h-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white text-4xl font-bold">🟢</div>;
      case 'tensorflow':
        return <div className="w-full h-full bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center text-white text-4xl font-bold">🧠</div>;
      default:
        return <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center text-white text-4xl font-bold">📹</div>;
    }
  };

  return (
    <section ref={sectionRef} className="relative py-20 md:py-28 bg-white overflow-hidden">
      {/* Decorative illustrations */}
      <div className="absolute top-10 left-10 opacity-10 hidden lg:block transform rotate-12">
        <EducationIllustration type="online-learning" size={120} />
      </div>
      <div className="absolute bottom-10 right-10 opacity-10 hidden lg:block transform -rotate-12">
        <EducationIllustration type="laptop" size={100} />
      </div>

      {/* Hand-drawn arrows */}
      <div className="absolute top-1/3 right-10 hidden xl:block animate-float transform rotate-12">
        <HandDrawnArrow direction="left" color="#3776AB" className="w-20 h-20" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Play className="h-6 w-6 text-blue-600" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0F172A]"
                style={{ 
                  fontFamily: "'Dancing Script', 'Pacifico', 'Brush Script MT', cursive",
                  fontWeight: 700
                }}>
              Featured Video Lectures
            </h2>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
            Get a taste of our teaching style! Watch previews from our most popular courses.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {videos.map((video, index) => (
              <CarouselItem key={video.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card
                  className="border-2 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group cursor-pointer"
                  onMouseEnter={() => setHoveredVideo(video.id)}
                  onMouseLeave={() => setHoveredVideo(null)}
                >
                  <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300">
                    {getThumbnailIcon(video.thumbnail)}
                    <div className={`absolute inset-0 bg-gradient-to-br ${video.gradient} opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center`}>
                      <div className="transform scale-0 group-hover:scale-100 transition-transform duration-300">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 border-4 border-white">
                          <Play className="h-12 w-12 text-white fill-white" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-black/70 text-white px-2 py-1 rounded text-xs font-semibold flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {video.duration}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-black/70 text-white px-2 py-1 rounded text-xs font-semibold flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {video.views}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bold text-lg text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {video.title}
                      </h3>
                      <div className="flex items-center gap-1 ml-2">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-semibold text-slate-700">{video.rating}</span>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 mb-3 line-clamp-2">
                      {video.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium px-3 py-1 rounded-full bg-blue-100 text-blue-700">
                        {video.course}
                      </span>
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
                      >
                        Watch Now
                        <Play className="ml-2 h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-3xl font-semibold transition-all duration-300"
            style={{ fontFamily: "'Dancing Script', 'Pacifico', 'Brush Script MT', cursive", fontWeight: 700, fontSize: '1.1em' }}
          >
            View All Videos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VideoPreview;


