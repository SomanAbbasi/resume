import React from "react";
import { motion } from "framer-motion";
import { FaPython, FaReact, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiFlask, SiMysql, SiElectron, SiFastapi } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";


const skills = [
  { name: "Python", icon: <FaPython className="text-yellow-400" /> },
  { name: "Flask", icon: <SiFlask className="text-gray-700 dark:text-gray-200" /> },
  { name: "FastAPI", icon: <SiFastapi className="text-green-500" /> },
  { name: "Tkinter", icon: <FaPython className="text-blue-500" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "Bootstrap", icon: <FaCss3Alt className="text-purple-600" /> },
  { name: "Tailwind", icon: <RiTailwindCssFill className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Electron.js", icon: <SiElectron className="text-purple-500" /> },



];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center items-center bg-gray-50 dark:bg-gray-900 px-6 py-16 transition-colors duration-300"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12"
      >
        My tech stack
      </motion.h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 max-w-5xl">
        {skills.map((skill, index) => (
          <motion.div
           key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition"
          >
            <div className="text-5xl mb-3">{skill.icon}</div>
            <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
