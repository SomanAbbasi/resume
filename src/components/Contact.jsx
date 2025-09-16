import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const [showEmail, setShowEmail] = useState(false);

  const handleToggle = () => {
    setShowEmail(!showEmail);
    // Open email app if clicked
    if (!showEmail) {
      window.location.href = "mailto:mssabbasi306@gmail.com";
    }
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-20 text-center">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold mb-4 text-gray-900 dark:text-white"
      >
        Let’s Get in Touch
      </motion.h2>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
      >
        💡 Want my help in bringing your idea to reality?{" "}
        <span className="font-semibold text-blue-600 dark:text-blue-400">
          Contact me today
        </span>{" "}
        and let’s build something amazing together.
      </motion.p>

      {/* Toggle Button */}
      <motion.button
        onClick={handleToggle}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-6 py-3 bg-blue-600 text-white rounded-2xl shadow-lg 
                   flex items-center justify-center gap-2 mx-auto 
                   hover:bg-blue-700 transition"
      >
        <FaPaperPlane className="w-5 h-5" />
        {showEmail ? "Hide Email" : "Contact Me"}
      </motion.button>

      {/* Email Reveal */}
      {showEmail && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-6 p-5 bg-white dark:bg-gray-800 shadow-xl 
                     rounded-2xl inline-flex items-center gap-3 border border-gray-200 dark:border-gray-700"
        >
          <FaEnvelope className="w-6 h-6 text-blue-600" />
          <a
            href="mailto:mssabbasi306@gmail.com"
            className="text-lg font-medium text-gray-900 dark:text-gray-100 hover:underline"
          >
            mssabbasi306@gmail.com
          </a>
        </motion.div>
      )}
    </section>
  );
}
