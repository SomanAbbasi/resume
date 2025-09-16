import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8 mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-6"
      >
        {/* Social Icons */}
        <div className="flex space-x-6">
          <motion.a
            href="https://www.linkedin.com/in/soman-abbasi-a1820b344/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition"
          >
            <FaLinkedin size={28} />
          </motion.a>
          <motion.a
            href="https://github.com/SomanAbbasi"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition"
          >
            <FaGithub size={28} />
          </motion.a>
          <motion.a
            href="mailto:mssabbasi306@gmail.com"
            whileHover={{ scale: 1.2 }}
            className="text-gray-600 dark:text-gray-300 hover:text-red-500 transition"
          >
            <FaEnvelope size={28} />
          </motion.a>
        </div>

        {/* Copyright */}
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          © {new Date().getFullYear()} <span className="font-semibold">Soman Abbasi</span>. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}
