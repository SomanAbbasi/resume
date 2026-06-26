import { Link } from "react-router-dom";
import { personalInfo } from "@/lib/data";

const SiteFooter = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 text-sm text-muted-foreground">
          <div>
            <p className="font-medium text-foreground">{personalInfo.fullName}</p>
            <p>{personalInfo.title}</p>
          </div>
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-2">
            <Link to="/about" className="hover:text-foreground transition-colors">
              About
            </Link>
            <Link to="/projects" className="hover:text-foreground transition-colors">
              Projects
            </Link>
            <Link to="/contact" className="hover:text-foreground transition-colors">
              Contact
            </Link>
            <Link
              to="/soman-abbasi"
              className="hover:text-foreground transition-colors"
            >
              Authority Page
            </Link>
            <a
              href="/llms.txt"
              className="hover:text-foreground transition-colors"
            >
              AI Profile (llms.txt)
            </a>
          </nav>
        </div>
        <p className="mt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} {personalInfo.name}. Official site: somanabbasi.tech
        </p>
      </div>
    </footer>
  );
};

export default SiteFooter;
