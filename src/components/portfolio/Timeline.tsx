import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experiences } from "@/lib/data";

const Timeline = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const work = experiences.filter((e) => e.type === "work");
  const education = experiences.find((e) => e.type === "education");

  return (
    <section id="experience" className="section-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="section-title">
          Experience & <span className="gradient-text">Education</span>
        </h2>
      </motion.div>

      <div className="max-w-4xl">
        <div className="flex flex-col gap-5">
          {work.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="rounded-[var(--radius)] border border-border bg-card/60 shadow-sm transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-primary font-medium mt-1">
                      {exp.organization}
                      {exp.location ? (
                        <span className="text-muted-foreground"> · {exp.location}</span>
                      ) : null}
                    </p>
                  </div>

                  <div className="text-right">
                    <span className="text-xs sm:text-sm font-mono text-muted-foreground whitespace-nowrap">
                      {exp.duration}
                    </span>
                  </div>
                </div>

                <ul className="mt-5 space-y-2">
                  {exp.points.slice(0, 3).map((point, j) => (
                    <li
                      key={j}
                      className="text-sm text-muted-foreground leading-relaxed flex gap-2"
                    >
                      <span className="text-primary mt-1.5 shrink-0">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {education ? (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: work.length * 0.08 + 0.1 }}
            className="mt-10 rounded-[var(--radius)] border border-border bg-card/40 shadow-sm"
          >
            <div className="p-5 sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-foreground">
                    {education.organization}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {education.title}
                    {education.location ? (
                      <span className="text-muted-foreground"> · {education.location}</span>
                    ) : null}
                  </p>
                </div>

                <div className="text-right">
                  <span className="text-xs sm:text-sm font-mono text-muted-foreground whitespace-nowrap">
                    {education.duration}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </div>
    </section>
  );
};

export default Timeline;
