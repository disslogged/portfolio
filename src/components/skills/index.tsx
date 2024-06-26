import { skillsData } from "../../constant/data";
import Section from "../../ui/Section";
import { motion } from "framer-motion";

const skillVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.07 * index,
    },
  }),
};

const Skills = () => {
  return (
    <Section id="skills">
      <h2 className="sectionTitle">Skills</h2>
      <ul className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
        {skillsData.map((skill, index: number) => (
          <motion.li
            variants={skillVariants}
            initial="initial"
            whileInView="animate"
            custom={index}
            key={skill.id}
            className="border border-dashed border-lightGray px-4 py-1 text-lg text-lightGray"
          >
            {skill.name}
          </motion.li>
        ))}
      </ul>
    </Section>
  );
};

export default Skills;
