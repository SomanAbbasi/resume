import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Medal, Award } from "lucide-react";
import { achievements } from "@/lib/data";

const iconMap = {
  trophy: Trophy,
  medal: Medal,
  award: Award,
};

const Achievements = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="section-title">
          Competitive Programming <span className="gradient-text">&</span> Achievements
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {achievements.map((a, i) => {
          const Icon = iconMap[a.icon];
          return (
            <motion.div
              key={a.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card p-5 glow-hover text-center"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
                style={{ background: "var(--gradient-primary)" }}
              >
                <Icon size={18} className="text-primary-foreground" />
              </div>
              {a.url ? (
                <a
                  href={a.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-sm text-foreground mb-1 inline-block hover:underline"
                >
                  {a.title}
                </a>
              ) : (
                <h3 className="font-semibold text-sm text-foreground mb-1">
                  {a.title}
                </h3>
              )}
              <p className="text-xs text-muted-foreground">{a.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Achievements;
