import Navbar from "@/components/portfolio/Navbar";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import SEO from "@/components/SEO";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Soman Abbasi Projects | Full-Stack & AI Applications"
        description="Projects by Muhammad Soman Shabbir Abbasi (Soman Abbasi): full-stack web apps, AI agent systems, RAG pipelines, and production software."
        path="/projects"
      />
      <Navbar />
      <main className="pt-24">
        <ProjectsSection />
      </main>
    </div>
  );
};

export default ProjectsPage;
