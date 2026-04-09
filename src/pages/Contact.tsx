import Navbar from "@/components/portfolio/Navbar";
import Contact from "@/components/portfolio/Contact";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24">
        <Contact />
      </main>
    </div>
  );
};

export default ContactPage;
