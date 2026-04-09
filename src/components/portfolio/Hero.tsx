import { motion } from "framer-motion";
import { ArrowDown, FileText, Github, Linkedin } from "lucide-react";
import { useTheme } from "next-themes";
import { SiFiverr, SiUpwork } from "react-icons/si";
import { Link } from "react-router-dom";
import { personalInfo } from "@/lib/data";

const Hero = () => {
  const { resolvedTheme } = useTheme();
  const profileSrc = resolvedTheme === "light" ? "/profile-light.jpeg" : "/profile-dark.jpeg";

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 animate-gradient opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, hsl(250 80% 30% / 0.4), transparent), radial-gradient(ellipse 60% 50% at 80% 60%, hsl(190 80% 30% / 0.3), transparent)",
        }}
      />
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="section-container relative z-10 w-full">
        <div className="grid gap-12 items-center lg:grid-cols-2">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-primary font-mono text-sm mb-4 tracking-wider">
                Hello, I'm
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
            >
              {personalInfo.name}
              <span className="gradient-text">.</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl sm:text-3xl font-semibold text-muted-foreground mb-6"
            >
              {personalInfo.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed"
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-primary-foreground transition-all duration-300 glow-hover"
                style={{ background: "var(--gradient-primary)" }}
              >
                View Projects
                <ArrowDown size={16} />
              </Link>
              <a
                href={personalInfo.resumeUrl}
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium border border-border text-foreground hover:bg-secondary transition-all duration-300"
              >
                <FileText size={16} />
                Download Resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-6 flex items-center gap-3"
            >
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card w-11 h-11 flex items-center justify-center glow-hover text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card w-11 h-11 flex items-center justify-center glow-hover text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              {personalInfo.fiverr ? (
                <a
                  href={personalInfo.fiverr}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card h-11 px-4 inline-flex items-center gap-2 glow-hover text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Hire me on Fiverr"
                  title="Fiverr"
                >
                  <SiFiverr size={18} />
                  <span className="text-sm font-medium">Fiverr</span>
                </a>
              ) : null}
              {personalInfo.upwork ? (
                <a
                  href={personalInfo.upwork}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card h-11 px-4 inline-flex items-center gap-2 glow-hover text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Hire me on Upwork"
                  title="Upwork"
                >
                  <SiUpwork size={18} />
                  <span className="text-sm font-medium">Upwork</span>
                </a>
              ) : null}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex justify-center lg:justify-end mt-12 lg:mt-0"
          >
            <motion.div
              className="relative"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.02 }}
            >
              <div
                aria-hidden
                className="absolute -inset-6 rounded-full blur-2xl opacity-40"
                style={{ background: "var(--gradient-glow)" }}
              />
              <div
                className="p-1 rounded-full"
                style={{ background: "var(--gradient-primary)" }}
              >
                <div className="p-1 rounded-full bg-background">
                  <div className="relative h-56 w-56 sm:h-64 sm:w-64 lg:h-72 lg:w-72 xl:h-80 xl:w-80 overflow-hidden rounded-full border border-border">
                    <img
                      src={profileSrc}
                      alt={`${personalInfo.name} profile photo`}
                      className="h-full w-full object-cover"
                      loading="eager"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown size={20} className="text-muted-foreground" />
      </motion.div>
    </section>
  );
};

export default Hero;
