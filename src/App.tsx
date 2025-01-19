import { useState } from "react";
import { AboutMe } from "./sections/aboutMe/aboutMe";
import "./App.scss";
import { Nav } from "./components/nav/nav";
import { Projects } from "./sections/projects/projects";
import { Skills } from "./sections/skills/skills";

function App() {
  return (
    <>
      <Nav />
      <section>
        <AboutMe />
      </section>
      <section>
        <Projects />
      </section>
      <section>
        <Skills />
      </section>
    </>
  );
}

export default App;
