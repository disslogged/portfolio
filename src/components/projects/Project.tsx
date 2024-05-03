import { projectsData } from "../../constant/data";

import { motion } from "framer-motion";

type ProjectProps = (typeof projectsData)[number] & {
  index: number;
};

const Project = ({
  description,
  imageUrl,
  keyFeatures,
  technologies,
  title,
  index,
}: ProjectProps) => {
  return (
    <motion.div
      className="group border border-black rounded grid items-start grid-cols-7 gap-7 even:pl-4 shadow"
      initial={{ x: index % 2 === 0 ? 100 : -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.4 }}
      viewport={{ once: true }}
    >
      {/* Project Info */}
      <div className="col-start-1 col-end-5 pt-3 text-lightGray group-odd:col-start-4 group-odd:col-end-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">{title}</h2>
        <p className="text-gray-600 text-[0.875rem] leading-normal mb-2">
          {description}
        </p>
        <strong className="text-lg font-semibold text-gray-700">
          Key Features:
        </strong>
        <ul className="list-disc list-inside text-gray-600 text-[1rem] leading-normal mb-5">
          {keyFeatures.map(keyF => (
            <li key={keyF}>{keyF}</li>
          ))}
        </ul>
        <ul className="text-gray-600 flex items-center flex-wrap gap-3 ">
          {technologies.map(tech => (
            <li
              key={tech}
              className="border border-black text-sm px-3 rounded-full group-hover:bg-black group-hover:text-white transition"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

      {/* Project Image */}
      <div className="col-start-5 col-end-8 group-odd:col-start-1 group-odd:col-end-4 group-odd:row-start-1 blur-[1px] group-hover:blur-0 transition duration-200 ease-in-out">
        <img
          src={imageUrl}
          alt="project image"
          className="w-full object-cover h-full"
        />
      </div>
    </motion.div>
  );
};

export default Project;
