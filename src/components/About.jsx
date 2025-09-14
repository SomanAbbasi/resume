import React from "react";
import { motion } from "framer-motion";
import profileLight from "../assets/profile-light.jpeg";
import profileDark from "../assets/profile-dark.jpeg";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row justify-center items-center gap-12 px-6 lg:px-20 py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false,amount:0.3 }}
        className="flex-shrink-0"
      >
        {/* Light Mode Image */}
        <img
          src={profileLight}
          alt="Profile Light"
          className="block dark:hidden w-60 h-60 rounded-full object-cover shadow-lg border-4 border-gray-200"
        />

        {/* Dark Mode Image */}
        <img
          src={profileDark}
          alt="Profile Dark"
          className="hidden dark:block w-60 h-60 rounded-full object-cover shadow-lg border-4 border-gray-700"
        />
      </motion.div>

      {/* About Text */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: false,amount:0.3 }}
        className="text-center md:text-left max-w-2xl"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          About Me
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          I’m <span className="font-semibold">Soman Abbasi</span>, a passionate{" "}
          <span className="text-blue-600 dark:text-blue-400">
            Frontend & Full-Stack Engineer
          </span>{" "}
          with a focus on building performant, accessible, and modern web and desktop
          applications. I work with tools like{" "}
          <span className="font-medium">React, and Python </span>{" "}
          to create smooth experiences, and I’m always exploring new areas
           like AI to push my skills further.
        </p>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#projects"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
        >
          View My Projects
        </motion.a>
      </motion.div>
    </section>
  );
};

export default About;
