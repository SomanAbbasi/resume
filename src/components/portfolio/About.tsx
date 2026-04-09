import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { personalInfo } from "@/lib/data";

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="section-subtitle leading-relaxed">
          {personalInfo.summary}
        </p>
      </motion.div>
    </section>
  );
};

export default About;
