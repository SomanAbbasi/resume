import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false ,amount:0.3}}
        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4"
      >
        Senior Frontend & Full-Stack Engineer
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false ,amount:0.3}}
        className="text-lg sm:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mb-8"
      >
        Building performant, accessible, and beautiful web applications with modern technologies.
      </motion.p>

      {/* Animated Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false ,amount:0.3}}
        className="flex flex-wrap justify-center gap-4"
      >
        {/* Fiverr Button */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
      
          href="https://www.fiverr.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition-colors duration-300"
        >
          Hire Me on Fiverr
        </motion.a>

        {/* Upwork Button */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
      
          href="https://www.upwork.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
        >
          Hire Me on Upwork
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
