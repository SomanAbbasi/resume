import Navbar from "@/components/portfolio/Navbar";
import Contact from "@/components/portfolio/Contact";
import SEO from "@/components/SEO";
import { personalInfo } from "@/lib/data";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Contact Soman Abbasi | Muhammad Soman Shabbir Abbasi"
        description={`Contact Muhammad Soman Shabbir Abbasi (Soman Abbasi) — ${personalInfo.title}. Email, LinkedIn, GitHub, Fiverr, and Upwork.`}
        path="/contact"
      />
      <Navbar />
      <main className="pt-24">
        <Contact />
      </main>
    </div>
  );
};

export default ContactPage;
