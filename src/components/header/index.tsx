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
      className="bg-black/95 text-gray-50 max-w-4xl mx-auto flex items-center justify-between py-2 px-6 mt-6 rounded sticky top-7 backdrop-blur-sm z-50"
    >
      {/* LOGO */}
      <div className="text-xl font-bold flex gap-1 select-none">
        FM <span className="text-blue-200 rotate-6">17</span>
      </div>

      <nav>
        <ul className="flex items-center gap-6">
          {headerList.map(link => (
            <li key={link.id} className="text-base">
              <a
                href={link.slug}
                className="hover:text-blue-200 transition-colors"
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
