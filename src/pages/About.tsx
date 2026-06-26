import Navbar from "@/components/portfolio/Navbar";
import PortfolioAbout from "@/components/portfolio/About";
import SEO from "@/components/SEO";
import { personalInfo } from "@/lib/data";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title={`About Soman Abbasi | ${personalInfo.fullName}`}
        description={personalInfo.summary}
        path="/about"
      />
      <Navbar />
      <main className="pt-24">
        <PortfolioAbout />
      </main>
    </div>
  );
};
export default AboutPage;
