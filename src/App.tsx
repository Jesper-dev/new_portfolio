import { AboutMe } from "./sections/aboutMe/aboutMe";
import "./App.scss";
import { Nav } from "./components/nav/nav";
import { Projects } from "./sections/projects/projects";
import { Skills } from "./sections/skills/skills";

function App() {
  return (
    <>
      <Nav />
      <section id="aboutMe">
        <AboutMe />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
    </>
  );
}

export default App;
