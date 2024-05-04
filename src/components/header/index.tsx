import { headerList } from "../../constant/data";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0 },
};

const Header = () => {
  return (
    <motion.header
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ ease: "anticipate", duration: 0.7 }}
      className="sticky top-2 z-50 mx-auto mt-3 flex w-[95%] max-w-4xl flex-col items-center justify-between gap-y-3 rounded bg-black/95 px-6 py-2 text-gray-50 backdrop-blur-sm sm:flex-row md:top-7 md:mx-auto md:mt-6 md:w-[initial] md:justify-between md:gap-y-0"
    >
      {/* LOGO */}
      <div className="flex select-none gap-1 text-xl font-bold">
        FM <span className="rotate-6 text-blue-200">17</span>
      </div>

      <nav>
        <ul className="flex flex-wrap items-center justify-start gap-x-4 gap-y-2 md:flex-nowrap  md:justify-center md:gap-6 md:gap-y-0 ">
          {headerList.map((link) => (
            <li
              key={link.id}
              className="xs:text-sm text-[0.75rem] sm:text-base"
            >
              <a
                href={link.slug}
                className="transition-colors hover:text-blue-200"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
