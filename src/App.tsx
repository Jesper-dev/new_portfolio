import { useState } from "react";
import { AboutMe } from "./sections/aboutMe/aboutMe";
import "./App.scss";
import { Nav } from "./components/nav/nav";
import { Projects } from "./sections/projects/projects";

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
    </>
  );
}

export default App;
