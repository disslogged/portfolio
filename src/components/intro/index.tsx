import { FaGithub, FaLinkedin, FaLongArrowAltRight } from "react-icons/fa";
import Section from "../../ui/Section";

const Intro = () => {
  return (
    <Section id="home">
      <div className="max-w-[40ch] mx-auto text-lightGray">
        Hello, I'm <span className="text-gray-900 font-bold">Fardin</span>. I'm
        a <span className="font-bold text-black">Frontend</span> developer with
        over 2 years of experience.
        <br />I enjoy
        <span className="font-bold italic text-black"> building</span>,
        <span className="font-bold italic text-black"> exploring</span>,
        <span className="font-bold italic text-black"> experimenting</span>,
        <span className="font-bold italic text-black"> learning</span>,
        <span className="font-bold italic text-black"> challenging</span> and
        <span className="font-bold italic text-black"> problem-solving</span>.
      </div>
      <div className="flex items-center justify-center gap-4 mt-10 ">
        <a
          className="bg-black cursor-pointer hover:bg-transparent hover:border-gray-900 border hover:text-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-lg transition flex items-center gap-2 shadow-xl"
          href="#contact"
        >
          Contact me here <FaLongArrowAltRight />
        </a>
        <a
          className="border border-lightGray text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition text-lg shadow-xl cursor-pointer"
          download="Fardin-Madani.pdf"
          href="../../assets/Fardin-Madani.pdf"
        >
          Download CV
        </a>
        <a
          target="_blank"
          href="https://github.com/disslogged"
          className="text-4xl hover:scale-90 transition"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/fardin-madani"
          className="text-4xl hover:scale-90 transition"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
    </Section>
  );
};

export default Intro;
