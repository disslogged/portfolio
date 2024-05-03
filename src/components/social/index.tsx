import { socialLinks } from "../../constant/data";
import { motion } from "framer-motion";

const variants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.5 * index },
  }),
};

const Social = () => {
  return (
    <section className="max-w-4xl mx-auto mt-20 text-4xl text-lightGray flex items-center justify-around pb-20 overflow-hidden">
      {socialLinks.map((socialLink, index) => (
        <motion.a
          variants={variants}
          initial="initial"
          whileInView="animate"
          custom={index}
          key={index}
          href={socialLink.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={socialLink.label}
          className="transition duration-200 ease-in-out transform hover:scale-110 hover:text-black"
        >
          {socialLink.icon}
        </motion.a>
      ))}
    </section>
  );
};

export default Social;
