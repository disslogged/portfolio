import { FaGithub, FaLinkedin, FaLongArrowAltRight } from "react-icons/fa";
import Section from "../../ui/Section";

const Intro = () => {
  return (
    <Section id="home">
      <div className="mx-auto max-w-[40ch] text-lightGray">
        Hello, I'm <span className="font-bold text-gray-900">Fardin</span>. I'm
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
      <div className="mx-auto mt-10 flex w-[90%] max-w-[40ch] items-center justify-start gap-x-4 gap-y-2 md:mx-[initial] md:w-[initial] md:max-w-[initial] md:justify-center ">
        <div className="flex items-center gap-2">
          <a
            className="focus:shadow-outline flex cursor-pointer items-center gap-2 rounded border bg-black px-3 py-1 text-sm font-bold text-white shadow-xl transition hover:border-gray-900 hover:bg-transparent hover:text-black focus:outline-none md:px-4 md:py-2 md:text-lg"
            href="#contact"
          >
            Contact me here <FaLongArrowAltRight />
          </a>
          <a
            className="focus:shadow-outline cursor-pointer rounded border border-lightGray px-3 py-1 text-sm font-bold text-black shadow-xl transition hover:bg-black hover:text-white focus:outline-none md:px-4 md:py-2 md:text-lg"
            download="Fardin-Madani.pdf"
            href="../../assets/Fardin-Madani.pdf"
          >
            Download CV
          </a>
        </div>
        <div className="flex flex-col gap-2 md:flex-row">
          <a
            target="_blank"
            href="https://github.com/disslogged"
            className="text-4xl transition hover:scale-90"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/fardin-madani"
            className="text-4xl transition hover:scale-90"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl" />
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Intro;
