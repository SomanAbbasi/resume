import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin, Trophy, Code } from "lucide-react";
import { SiFiverr, SiUpwork } from "react-icons/si";
import { personalInfo } from "@/lib/data";

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const socials = [
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
    { icon: Github, href: personalInfo.github, label: "GitHub" },
    { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
    { icon: Trophy, href: personalInfo.codeforces, label: "Codeforces" },
    { icon: Code, href: personalInfo.leetcode, label: "LeetCode" },
  ];

  return (
    <section id="contact" className="section-container text-center" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title mx-auto">
          Let's <span className="gradient-text">Connect</span>
        </h2>
        <p className="section-subtitle mx-auto mb-10">
          I'm always open to interesting conversations and opportunities.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mb-10 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-2">
            <Mail size={16} className="text-primary" />
            {personalInfo.email}
          </span>
        </div>

        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card w-14 h-14 flex items-center justify-center glow-hover text-muted-foreground hover:text-foreground transition-colors"
              aria-label={s.label}
            >
              <s.icon size={22} />
            </a>
          ))}
        </div>

        <a
          href={`mailto:${personalInfo.email}`}
          className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-medium text-primary-foreground transition-all duration-300 glow-hover"
          style={{ background: "var(--gradient-primary)" }}
        >
          <Mail size={18} />
          Let's Work Together
        </a>

        <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={personalInfo.fiverr}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-foreground hover:bg-secondary transition-all duration-300 w-full sm:w-auto"
            aria-label="Hire me on Fiverr"
          >
            <SiFiverr size={18} />
            Hire me on Fiverr
          </a>
          <a
            href={personalInfo.upwork}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-foreground hover:bg-secondary transition-all duration-300 w-full sm:w-auto"
            aria-label="Hire me on Upwork"
          >
            <SiUpwork size={18} />
            Hire me on Upwork
          </a>
        </div>
      </motion.div>

      <div className="mt-20 pt-8 border-t border-border text-sm text-muted-foreground">
        © {new Date().getFullYear()} {personalInfo.name}. All right reserved.
      </div>
    </section>
  );
};

export default Contact;
