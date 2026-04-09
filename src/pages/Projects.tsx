import Navbar from "@/components/portfolio/Navbar";
import ProjectsSection from "@/components/portfolio/ProjectsSection";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24">
        <ProjectsSection />
      </main>
    </div>
  );
};

export default ProjectsPage;
