import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";

const experiences = [
  {
    role: "Full-Stack Developer",
    company: "Tswangi",
    period: "2025 – Present",
    description:
      "Building scalable music streaming features, authentication systems, and album/song management for artists.",
  },
  {
    role: "Frontend Developer",
    company: "Freelance",
    period: "2025 – Present",
    description:
      "Designed and developed responsive websites and web apps using React, TailwindCSS, and TypeScript.",
  },
  {
    role: "Competitive Programmer",
    company: "PUCIT",
    period: "2025 – Present",
    description:
      "Solved 800+ problems on Codeforces, LeetCode & ICPC practice, specializing in algorithms and optimization.",
  },
];

export default function Experience() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
      >
        Experience
      </motion.h2>

      {/* Timeline */}
      <div className="relative border-l border-gray-300 dark:border-gray-600 pl-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="mb-12 relative"
          >
            {/* Dot */}
            <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-blue-600 border-2 border-white dark:border-gray-900"></span>

            {/* Card */}
            <div className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-6 hover:shadow-lg transition">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <FaBriefcase className="w-5 h-5 text-blue-600" />
                  {exp.role}
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                  <FaCalendarAlt className="w-4 h-4" />
                  {exp.period}
                </span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 font-medium">
                {exp.company}
              </p>
              <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm leading-relaxed">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
