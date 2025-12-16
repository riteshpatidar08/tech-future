import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Youtube, ExternalLink } from 'lucide-react';
import Tablet3D from './Tablet3D';
import BackgroundPattern from './BackgroundPattern';

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
      { y: 50, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );

    // Hover animations for cards
    const cards = document.querySelectorAll('.channel-card');
    cards.forEach((card) => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          y: -4,
          duration: 0.3,
          ease: 'power2.out',
        });
      });
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          duration: 0.3,
          ease: 'power2.out',
        });
      });
    });
  }, []);

  // Sample channels - user will replace with actual data
  const channels: Channel[] = [
    {
      name: "Syntaxim Tech",
      subscribers: "50K",
      description: "Main channel for tech tutorials and course content",
      gradient: "from-blue-600 to-cyan-600",
      iconColor: "#3776AB"
    },
    {
      name: "Syntaxim Web Dev",
      subscribers: "25K",
      description: "Web development tutorials and projects",
      gradient: "from-purple-600 to-pink-600",
      iconColor: "#00D4AA"
    },
    {
      name: "Syntaxim Data Science",
      subscribers: "20K",
      description: "Data science and Python tutorials",
      gradient: "from-cyan-600 to-blue-600",
      iconColor: "#7F6DFF"
    },
    {
      name: "Syntaxim ML",
      subscribers: "15K",
      description: "Machine Learning and AI content",
      gradient: "from-orange-600 to-yellow-600",
      iconColor: "#F89820"
    },
    {
      name: "Syntaxim Foundation",
      subscribers: "30K",
      description: "Beginner-friendly programming tutorials",
      gradient: "from-green-600 to-teal-600",
      iconColor: "#FF6F61"
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-16 md:py-24 bg-white overflow-hidden">
      {/* Background Pattern */}
      <BackgroundPattern variant="grid-dots" opacity={0.025} />
      
      {/* 3D Tablet Elements */}
      <div className="absolute top-10 right-10 opacity-10 hidden lg:block">
        <Tablet3D className="scale-75" />
      </div>
      <div className="absolute bottom-10 left-10 opacity-10 hidden lg:block">
        <Tablet3D className="scale-75" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-8 md:mb-10">
          <div className="flex justify-center mb-4">
            <Tablet3D className="scale-75" />
          </div>
          <div className="inline-flex items-center gap-2 mb-3">
            <Youtube className="h-6 w-6 text-slate-900" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
              Join The Syntaxim Family
            </h2>
          </div>
          <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
            Explore our YouTube Channels and subscribe to get access to quality education for free.
          </p>
        </div>

        <div ref={channelsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {channels.map((channel, index) => (
            <a
              key={index}
              href={channel.url || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="channel-card group"
            >
              <div className="relative h-full p-6 rounded-xl border-2 border-slate-200 hover:border-slate-900 bg-white shadow-md hover:shadow-lg transition-all duration-300">
                {/* YouTube icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-slate-50 group-hover:bg-slate-900 transition-all duration-300 inline-block group-hover:scale-110`}>
                    <Youtube className="h-6 w-6 text-slate-700 group-hover:text-white transition-colors" />
                  </div>
                  <ExternalLink className="h-5 w-5 text-slate-400 group-hover:text-slate-900 transition-colors" />
                </div>

                {/* Channel name */}
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors">
                  {channel.name}
                </h3>

                {/* Subscribers */}
                <div className="mb-4">
                  <div className="text-2xl md:text-3xl font-bold mb-1 text-slate-900">
                    {channel.subscribers}
                  </div>
                  <div className="text-sm text-slate-600 font-medium">Subscribers</div>
                </div>

                {/* Description */}
                {channel.description && (
                  <p className="text-sm md:text-base text-slate-600 mb-4 leading-relaxed">
                    {channel.description}
                  </p>
                )}

                {/* Subscribe button */}
                <button
                  className="w-full py-3 rounded-lg text-white font-semibold bg-slate-900 hover:bg-slate-800 shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                  onClick={(e) => {
                    e.preventDefault();
                    if (channel.url) {
                      window.open(channel.url, '_blank');
                    }
                  }}
                >
                  <Youtube className="h-5 w-5" />
                  Subscribe
                </button>

              </div>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button
            className="bg-slate-900 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-800 transition-all duration-300"
          >
            View All Channels
          </button>
        </div>
      </div>
    </section>
  );
};

export default YouTubeChannels;

