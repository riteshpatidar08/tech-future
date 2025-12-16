
import Navigation from "@/components/Navigation";
import AnimatedBackground from "@/components/AnimatedBackground";
import Hero from "@/components/Hero";
import StudyResources from "@/components/StudyResources";
import ExamCategories from "@/components/ExamCategories";
import PlatformStats from "@/components/PlatformStats";
import Testimonials from "@/components/Testimonials";
import YouTubeChannels from "@/components/YouTubeChannels";
// import AppDownload from "@/components/AppDownload";
import Courses from "@/components/Courses";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CourseQuiz from "@/components/CourseQuiz";
import InteractiveFAQ from "@/components/InteractiveFAQ";
import LiveActivityFeed from "@/components/LiveActivityFeed";
import VideoPreview from "@/components/VideoPreview";
import LearningPath from "@/components/LearningPath";
import InstructorProfiles from "@/components/InstructorProfiles";
import SuccessStories from "@/components/SuccessStories";
// import PricingPlans from "@/components/PricingPlans";
import CareerOutcomes from "@/components/CareerOutcomes";
import TechnologyStack from "@/components/TechnologyStack";
import CertificationDetails from "@/components/CertificationDetails";

const Index = () => {
  return (
    <div className="min-h-screen">
      <AnimatedBackground />
      <Navigation />
      <Hero />
      <ExamCategories />
      <PlatformStats />
      <LearningPath />
      <CourseQuiz />
      <VideoPreview />
      <TechnologyStack />
      {/* <InstructorProfiles /> */}
      {/* <SuccessStories /> */}
      <CareerOutcomes />
      <LiveActivityFeed />
      <StudyResources />
      <Testimonials />
      {/* <PricingPlans /> */}
      <CertificationDetails />
      {/* <YouTubeChannels /> */}
      {/* <AppDownload /> */}
      <Courses />
      <InteractiveFAQ />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
