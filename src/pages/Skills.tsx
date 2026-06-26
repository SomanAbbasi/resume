import Navbar from "@/components/portfolio/Navbar";
import Skills from "@/components/portfolio/Skills";
import SEO from "@/components/SEO";

const SkillsPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Soman Abbasi Skills | Full-Stack, AI Integration, React, TypeScript"
        description="Technical skills of Muhammad Soman Shabbir Abbasi (Soman Abbasi): React, Next.js, TypeScript, Node.js, LangChain, AI agents, PostgreSQL, and full-stack development."
        path="/skills"
      />
      <Navbar />
      <main className="pt-24">
        <Skills />
      </main>
    </div>
  );
};

export default SkillsPage;
