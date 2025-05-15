import { motion } from "framer-motion";

const AppearFromLeft = ({ children, className, delay = 0.2 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: false }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AppearFromLeft;
