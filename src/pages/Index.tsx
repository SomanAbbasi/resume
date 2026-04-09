import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import Timeline from "@/components/portfolio/Timeline";
import Achievements from "@/components/portfolio/Achievements";
import Contact from "@/components/portfolio/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <ProjectsSection />
        <Timeline />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
