import Navbar from "@/components/portfolio/Navbar";
import Timeline from "@/components/portfolio/Timeline";

const ExperiencePage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24">
        <Timeline />
      </main>
    </div>
  );
};

export default ExperiencePage;
