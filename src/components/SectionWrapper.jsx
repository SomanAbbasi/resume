import { motion } from "framer-motion";

const SectionWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }} // triggers when 20% is visible
      className="min-h-screen flex items-center justify-center px-6"
    >
      {children}
    </motion.div>
  );
};

export default SectionWrapper;
