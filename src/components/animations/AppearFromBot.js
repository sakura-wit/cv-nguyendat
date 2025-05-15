import { motion } from "framer-motion";

const AppearFromBot = ({ children, className, delay = 0.2 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: false }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AppearFromBot;
