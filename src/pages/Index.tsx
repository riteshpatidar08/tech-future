
import Navigation from "@/components/Navigation";
import AnimatedBackground from "@/components/AnimatedBackground";
import Hero from "@/components/Hero";
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
      <Courses />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
