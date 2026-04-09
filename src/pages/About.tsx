import Navbar from "@/components/portfolio/Navbar";
import PortfolioAbout from "@/components/portfolio/About";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24">
        <PortfolioAbout />
      </main>
    </div>
  );
};
export default AboutPage;
