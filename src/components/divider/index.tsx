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
      className="mx-auto my-16 max-w-[20rem] border border-black/80 md:my-20 md:max-w-4xl"
    />
  );
};

export default Divider;
