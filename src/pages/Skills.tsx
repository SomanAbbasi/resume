import Navbar from "@/components/portfolio/Navbar";
import Skills from "@/components/portfolio/Skills";

const SkillsPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24">
        <Skills />
      </main>
    </div>
  );
};

export default SkillsPage;
