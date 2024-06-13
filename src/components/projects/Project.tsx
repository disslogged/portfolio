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
  link,
}: ProjectProps) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      className="group grid cursor-pointer grid-cols-7 items-start gap-7 rounded border border-black shadow md:even:pl-4"
      initial={{ x: index % 2 === 0 ? 100 : -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.4 }}
      viewport={{ once: true }}
    >
      {/* Project Info */}
      <div className="col-start-1 col-end-8 p-4 text-lightGray md:col-start-1 md:col-end-5 md:pt-3 md:group-odd:col-start-4 md:group-odd:col-end-8">
        <h2 className="mb-3 text-2xl font-bold text-gray-800">{title}</h2>
        <p className="mb-2 text-[0.875rem] leading-normal text-gray-600">
          {description}
        </p>
        <strong className="text-lg font-semibold text-gray-700">
          Key Features:
        </strong>
        <ul className="mb-5 list-inside list-disc text-[1rem] leading-normal text-gray-600">
          {keyFeatures.map((keyF) => (
            <li key={keyF}>{keyF}</li>
          ))}
        </ul>
        <ul className="flex flex-wrap items-center gap-3 text-gray-600 ">
          {technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-black px-3 text-sm transition group-hover:bg-black group-hover:text-white"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

      {/* Project Image */}
      <div className="col-start-1 col-end-8 h-full transition duration-200 ease-in-out group-hover:blur-0 md:col-start-5 md:col-end-8 md:blur-[1px] md:group-odd:col-start-1 md:group-odd:col-end-4 md:group-odd:row-start-1">
        <img
          src={imageUrl}
          alt="project image"
          className="h-full w-full object-cover"
        />
      </div>
    </motion.a>
  );
};

export default Project;
