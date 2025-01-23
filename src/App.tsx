import { AboutMe } from "./sections/aboutMe/aboutMe";
import { Nav } from "./components/nav/nav";
import { Projects } from "./sections/projects/projects";
import { Skills } from "./sections/skills/skills";
import { useState } from "react";
import { Flex } from "./components/flex/flex";
import { PageHeader } from "./components/pageHeader/pageHeader";
import "./App.scss";

function App() {
  const [section, setSection] = useState<"aboutMe" | "projects" | "skills">(
    "aboutMe"
  );

  const renderContent = () => {
    switch (section) {
      case "aboutMe":
        return <AboutMe />;
      case "projects":
        return <Projects />;
      case "skills":
        return <Skills />;
    }
  };

  return (
    <Flex direction="column" height="100%">
      <PageHeader />
      <Nav
        onChangeSection={(newSection) => setSection(newSection)}
        selectedSection={section}
      />
      <section>
        <Flex height="100%" justify="center" align="center">
          {renderContent()}
        </Flex>
      </section>
    </Flex>
  );
}

export default App;
