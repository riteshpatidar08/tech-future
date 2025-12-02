
import Navigation from "@/components/Navigation";
import AnimatedBackground from "@/components/AnimatedBackground";
import Hero from "@/components/Hero";
import StudyResources from "@/components/StudyResources";
import ExamCategories from "@/components/ExamCategories";
import PlatformStats from "@/components/PlatformStats";
import Testimonials from "@/components/Testimonials";
import YouTubeChannels from "@/components/YouTubeChannels";
import AppDownload from "@/components/AppDownload";
import Courses from "@/components/Courses";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <AnimatedBackground />
      <Navigation />
      <Hero />
      <ExamCategories />
      <PlatformStats />
      <StudyResources />
      <Testimonials />
      <YouTubeChannels />
      <AppDownload />
      <Courses />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
