import { ReactNode } from "react";
import { motion } from "framer-motion";

type SectionProps = {
  children: ReactNode;
  id: string;
  className?: string;
};

const Section = ({ children, id, className }: SectionProps) => {
  return (
    <motion.section
      className={`section ${className ? className : " "}`}
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "anticipate" }}
      viewport={{ once: true }}
      id={id}
    >
      {children}
    </motion.section>
  );
};

export default Section;
