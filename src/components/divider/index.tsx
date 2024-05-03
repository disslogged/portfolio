import { motion } from "framer-motion";

const Divider = () => {
  return (
    <motion.div
      initial={{
        width: 0,
      }}
      whileInView={{ width: "100%" }}
      viewport={{ once: true }}
      transition={{ delay: 0.5 }}
      className="max-w-4xl mx-auto border border-black/80 my-20"
    />
  );
};

export default Divider;
