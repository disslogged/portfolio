import Header from "./components/header";
import Experiences from "./components/experiences";
import Contact from "./components/contact";
import Social from "./components/social";
import Intro from "./components/intro";
import Divider from "./components/divider";
import About from "./components/about";
import Projects from "./components/projects";
import Skills from "./components/skills";

function App() {
  return (
    <>
      <Header />
      <Intro />
      <Divider />
      <About />
      <Divider />
      <Projects />
      <Divider />
      <Skills />
      <Divider />
      <Experiences />
      <Divider />
      <Contact />
      <Divider />
      <Social />
    </>
  );
}

export default App;
