import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const imageFit = project.imageFit ?? "cover";

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group h-full rounded-[var(--radius)] transition-transform duration-300 hover:-translate-y-1 gradient-border"
    >
      <div className="glass-card overflow-hidden h-full flex flex-col">
        {/* Image */}
        <div className="relative aspect-video overflow-hidden bg-secondary">
          <img
            src={project.image}
            alt={project.title}
            className={`w-full h-full transition-transform duration-500 group-hover:scale-[1.03] ${
              imageFit === "contain" ? "object-contain p-4" : "object-cover"
            }`}
            loading="lazy"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          {/* Overlay gradient */}
          <div
            className="absolute inset-0 opacity-60 group-hover:opacity-40 transition-opacity duration-300"
            style={{
              background:
                "linear-gradient(to top, hsl(var(--background)), transparent 60%)",
            }}
          />

        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          {(project.githubUrl || project.liveUrl) && (
            <div className="flex gap-2 mb-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={`${project.title} source code`}
                >
                  <Github size={18} />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={`${project.title} live demo`}
                >
                  <ExternalLink size={18} />
                </a>
              )}
            </div>
          )}

          <h3 className="text-lg sm:text-xl font-bold text-foreground">
            {project.title}
          </h3>

          <p
            className="text-sm text-muted-foreground mt-2 mb-4 leading-relaxed"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-1 rounded-md bg-secondary text-muted-foreground font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
