import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaPython,
  FaGithub,
  FaCss3Alt,
  FaHtml5,
  FaJs,
} from "react-icons/fa";
import { SiFlask, SiMysql, SiTailwindcss, SiElectron } from "react-icons/si";

// Projects Data
const projects = [
  {
    title: "Pharmacy Management System",
    description:
      "A desktop app to manage products, suppliers, and sales with a modern UI.",
    image: "/projects/pos.png",
    tech: [
      <SiElectron className="text-purple-500" />,
      <FaReact className="text-gray-700 dark:text-white" />,
      <SiMysql className="text-blue-600" />,
      <SiTailwindcss className="text-blue-500" />,
    ],
    repo:"/projects/pharmacy-management",
    demo: null,
  },
  {
    title: "Weather App",
    description: "Weather App with React, Flask and Vanilla CSS.",
    image: "/projects/weatherApp.png",
    tech: [
      <FaReact className="text-blue-500" />,
      <SiFlask className="text-gray-500" />,
      <FaCss3Alt className="text-blue-500" />,
    ],
    repo: "https://github.com/SomanAbbasi/React-Weather-App",
    demo: "https://react-weather-app-demo.vercel.app",
  },
  {
    title: "Movie Search",
    description:
      "A responsive movie search app integrating with OMDb API to fetch and display real-time movie details, ratings, and posters.",
    image: "/projects/movieSearch.png",
    tech: [<FaJs className="text-yellow-500" />, <FaCss3Alt className="text-blue-500" />],
    repo: "https://github.com/SomanAbbasi/Movie-Search-App-JS",
    demo: "https://movie-search-app-js.vercel.app/"
  },
  {
    title: "Facebook Clone",
    description:
      "Facebook clone featuring messaging, groups, news feed, and modular components.",
    image: "/projects/fbClone.png",
    tech: [
      <FaHtml5 className="text-orange-500" />,
      <FaCss3Alt className="text-blue-500" />,
    ],
    repo: "https://github.com/SomanAbbasi/Facebook-Clone",
    demo: null,
  },
  {
    title: "Notes Pro",
    description:
      "A lightweight, Flask-based note-taking web application with a RESTful API and SQLite database.",
    image: "/projects/notesPro.png",
    tech: [
      <SiFlask className="text-gray-500" />,
      <SiMysql className="text-blue-600" />,
      <SiTailwindcss className="text-blue-500" />,
    ],
    repo: "https://github.com/SomanAbbasi/NotesPro",
    demo: null,
  },
  {
    title: "Bank Management System",
    description:
      "A Python-based desktop system to manage client accounts, deposits, withdrawals, and transactions.",
    image: "/projects/bankSystem.png",
    tech: [
      <FaPython className="text-blue-500" />,
      <FaCss3Alt className="text-purple-500" />,
    ],
    repo: "https://github.com/SomanAbbasi/Bank-System",
    demo: null,
  },
  {
    title: "Inventory Management System",
    description:
      "Inventory system built with Python & Tkinter (Bootstrap-style UI), featuring product management, supplier tracking, and stock monitoring.",
    image: "/projects/inventory.png",
    tech: [
      <FaPython className="text-blue-500" />,
      <FaCss3Alt className="text-purple-500" />,
    ],
    repo: "https://github.com/SomanAbbasi/Inventory-Management-System",
    demo: null,
  },
];

const Projects = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleCard = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-12"
      >
        My Projects
      </motion.h2>

      {/* Cards Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="h-48 w-full object-cover"
            />

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm flex-1">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex space-x-3 mt-4 text-2xl">
                {project.tech.map((icon, i) => (
                  <span key={i}>{icon}</span>
                ))}
              </div>

              {/* Toggle Button */}
              {(project.repo || project.demo) && (
                <button
                  onClick={() => toggleCard(index)}
                  className="mt-6 flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow transition"
                >
                  {openIndex === index ? "Hide Links" : "Check Out"}
                </button>
              )}

              {/* Repo & Demo Links */}
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 flex flex-col space-y-2"
                >
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 font-medium hover:underline"
                    >
                      <FaGithub className="text-2xl" />
                      <span>View on GitHub</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-green-600 dark:text-green-400 font-medium hover:underline"
                    >
                      🌐 <span>Live Preview</span>
                    </a>
                  )}
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
