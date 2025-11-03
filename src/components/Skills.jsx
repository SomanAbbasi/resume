import React from "react";
import { motion } from "framer-motion";
import { IoLogoElectron } from "react-icons/io5";
import { GrMysql, GrOracle } from "react-icons/gr";

import {
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaAws
} from "react-icons/fa";
import {
  SiFlask,
  SiPostman,
  SiVite,

  SiFastapi,

  SiTypescript,
  SiSass,
  SiTailwindcss,
  SiCplusplus
} from "react-icons/si";

const skills = [
  // Frontend
  { name: "Electron", icon: <IoLogoElectron className="text-cyan-500" />, category: "Frontend" },

  { name: "React", icon: <FaReact className="text-cyan-500" />, category: "Frontend" },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" />, category: "Frontend" },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" />, category: "Frontend" },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" />, category: "Frontend" },
  { name: "SASS", icon: <SiSass className="text-pink-600" />, category: "Frontend" },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" />, category: "Frontend" },

  // Backend
  { name: "Python", icon: <FaPython className="text-yellow-500" />, category: "Backend" },
  { name: "C/C++", icon: <SiCplusplus className="text-blue-500" />, category: "Backend" },

  { name: "Flask", icon: <SiFlask className="text-gray-700 dark:text-gray-200" />, category: "Backend" },
  { name: "FastAPI", icon: <SiFastapi className="text-green-500" />, category: "Backend" },
  { name: "MySQL", icon: <GrMysql className="text-blue-600" />, category: "Backend" },

  { name: "Oracle", icon: < GrOracle className="text-red-600" />, category: "Backend" },

  // DevOps & Tools
  { name: "Postman", icon: <SiPostman className="text-orange-500" />, category: "DevOps & Tools" },
  { name: "Git", icon: <FaGitAlt className="text-orange-600" />, category: "DevOps & Tools" },
  { name: "Vite", icon: < SiVite className="text-purple-600" />, category: "DevOps & Tools" },
];

const Skills = () => {
  const categories = ["Frontend", "Backend", "DevOps & Tools"];

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center items-center bg-gray-50 dark:bg-gray-900 px-6 py-16 transition-colors duration-300"
    >
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          My Tech Stack
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
          Technologies I use to create amazing digital experiences
        </p>
      </motion.div>

      {/* Skills by Category */}
      <div className="w-full max-w-6xl">
        {categories.map((category, categoryIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">
              {category}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {skills
                .filter(skill => skill.category === category)
                .map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{
                      scale: 1.05,
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                    className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    <div className="text-4xl mb-2">{skill.icon}</div>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;