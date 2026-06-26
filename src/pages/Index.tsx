import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import Timeline from "@/components/portfolio/Timeline";
import Achievements from "@/components/portfolio/Achievements";
import Contact from "@/components/portfolio/Contact";
import SiteFooter from "@/components/portfolio/SiteFooter";
import SEO from "@/components/SEO";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { buildPersonJsonLd, buildWebSiteJsonLd } from "@/lib/seo";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const id = location.hash.replace("#", "");
    const section = document.getElementById(id);

    if (!section) {
      return;
    }

    requestAnimationFrame(() => {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO jsonLd={[buildPersonJsonLd(), buildWebSiteJsonLd()]} />
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
      <SiteFooter />
    </div>
  );
};

export default Index;
