import { Flex } from "../../components/flex/flex";
import { ProjectComp } from "./project";
import { projectsList } from "./projectHelper";

export const Projects = () => {
  const getProjects = () => {
    return projectsList.map((project, i) => {
      return <ProjectComp project={project} key={i} />;
    });
  };
  return (
    <Flex id="projects" direction="column" height="100%">
      <h1>Projects</h1>
      <Flex direction="column" gap="5px">
        {getProjects()}
      </Flex>
    </Flex>
  );
};
