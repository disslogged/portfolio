import { projectsData } from "../../constant/data";
import Section from "../../ui/Section";
import Project from "./Project";

const Projects = () => {
  return (
    <Section className="space-y-10" id="projects">
      <h2 className="sectionTitle">Projects</h2>
      {projectsData.map((project, index) => (
        <Project {...project} key={project.id} index={index} />
      ))}
    </Section>
  );
};

export default Projects;
