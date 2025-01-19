import { useState } from "react";
import { AboutMe } from "./sections/aboutMe/aboutMe";
import "./App.scss";
import { Nav } from "./components/nav/nav";

function App() {
  return (
    <>
      <Nav />
      <section>
        <AboutMe />
      </section>
    </>
  );
}

export default App;
