import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Youtube, ExternalLink } from 'lucide-react';
import HandDrawnArrow from './HandDrawnArrow';
import EducationIllustration from './EducationIllustration';

gsap.registerPlugin(ScrollTrigger);

interface Channel {
  name: string;
  subscribers: string;
  description?: string;
  url?: string;
  gradient: string;
  iconColor: string;
}

const YouTubeChannels = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const channelsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const channels = channelsRef.current?.children;
    if (!channels) return;

    gsap.fromTo(channels,
      { y: 80, opacity: 0, scale: 0.8, rotation: (i) => (i % 2 === 0 ? -5 : 5) },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        rotation: (i) => (i % 2 === 0 ? -2 : 2),
        duration: 1,
        stagger: 0.15,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );

    // Floating animation
    gsap.to('.channel-card', {
      y: (i) => -8 + (i * 1.5),
      rotation: (i) => (i % 2 === 0 ? -1 : 1),
      duration: 3 + Math.random() * 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: 0.2
    });
  }, []);

  // Sample channels - user will replace with actual data
  const channels: Channel[] = [
    {
      name: "Codex Tech",
      subscribers: "50K",
      description: "Main channel for tech tutorials and course content",
      gradient: "from-blue-600 to-cyan-600",
      iconColor: "#3776AB"
    },
    {
      name: "Codex Web Dev",
      subscribers: "25K",
      description: "Web development tutorials and projects",
      gradient: "from-purple-600 to-pink-600",
      iconColor: "#00D4AA"
    },
    {
      name: "Codex Data Science",
      subscribers: "20K",
      description: "Data science and Python tutorials",
      gradient: "from-cyan-600 to-blue-600",
      iconColor: "#7F6DFF"
    },
    {
      name: "Codex ML",
      subscribers: "15K",
      description: "Machine Learning and AI content",
      gradient: "from-orange-600 to-yellow-600",
      iconColor: "#F89820"
    },
    {
      name: "Codex Foundation",
      subscribers: "30K",
      description: "Beginner-friendly programming tutorials",
      gradient: "from-green-600 to-teal-600",
      iconColor: "#FF6F61"
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-20 md:py-28 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      {/* Decorative illustrations */}
      <div className="absolute top-10 right-10 opacity-10 hidden lg:block transform rotate-12">
        <EducationIllustration type="online-learning" size={120} />
      </div>
      <div className="absolute bottom-10 left-10 opacity-10 hidden lg:block transform -rotate-12">
        <EducationIllustration type="laptop" size={100} />
      </div>

      {/* Hand-drawn arrows */}
      <div className="absolute top-1/4 left-10 hidden xl:block animate-float transform rotate-12">
        <HandDrawnArrow direction="right" color="#3776AB" className="w-16 h-16" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6"
              style={{ 
                fontFamily: "'Dancing Script', 'Pacifico', cursive",
                background: 'linear-gradient(to right, #1e40af, #06b6d4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
            Join The Codex Family, Today!
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto">
            Explore our YouTube Channels and subscribe to get access to quality education for free.
          </p>
        </div>

        <div ref={channelsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {channels.map((channel, index) => (
            <a
              key={index}
              href={channel.url || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="channel-card group"
            >
              <div
                className={`relative h-full p-6 rounded-3xl border-2 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105`}
                style={{ 
                  transform: `rotate(${index % 3 === 0 ? '-1.5deg' : index % 3 === 1 ? '1.5deg' : '-0.5deg'})`,
                  borderColor: 'rgba(59, 130, 246, 0.2)'
                }}
              >
                {/* YouTube icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${channel.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Youtube className="h-8 w-8 text-white fill-white" />
                  </div>
                  <ExternalLink className="h-5 w-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                </div>

                {/* Channel name */}
                <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors"
                    style={{ fontFamily: "'Dancing Script', 'Pacifico', cursive" }}>
                  {channel.name}
                </h3>

                {/* Subscribers */}
                <div className="mb-3">
                  <div className="text-3xl font-bold mb-1" style={{ color: channel.iconColor }}>
                    {channel.subscribers}
                  </div>
                  <div className="text-sm text-slate-600">Subscribers</div>
                </div>

                {/* Description */}
                {channel.description && (
                  <p className="text-slate-600 text-sm mb-4">
                    {channel.description}
                  </p>
                )}

                {/* Subscribe button */}
                <button
                  className={`w-full py-3 rounded-xl text-white font-semibold bg-gradient-to-r ${channel.gradient} hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2`}
                  style={{ fontFamily: "'Dancing Script', 'Pacifico', cursive", fontSize: '1em' }}
                  onClick={(e) => {
                    e.preventDefault();
                    // Handle subscribe action
                  }}
                >
                  <Youtube className="h-5 w-5" />
                  Subscribe
                </button>

                {/* Decorative illustration */}
                <div className="absolute bottom-2 right-2 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                  <EducationIllustration type="online-learning" size={50} />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button
            className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-3xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            style={{ fontFamily: "'Dancing Script', 'Pacifico', cursive", fontSize: '1.1em' }}
          >
            View All Channels
          </button>
        </div>
      </div>
    </section>
  );
};

export default YouTubeChannels;

