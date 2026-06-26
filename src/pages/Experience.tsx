import Navbar from "@/components/portfolio/Navbar";
import Timeline from "@/components/portfolio/Timeline";
import SEO from "@/components/SEO";

const ExperiencePage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Soman Abbasi Experience | Full-Stack Developer & AI Integrator"
        description="Work experience of Muhammad Soman Shabbir Abbasi (Soman Abbasi): AI integrations at SKAFS International, freelance full-stack development, and PUCIT education."
        path="/experience"
      />
      <Navbar />
      <main className="pt-24">
        <Timeline />
      </main>
    </div>
  );
};

export default ExperiencePage;
