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
    <Flex direction="column" height="100%" gap="5px">
      {getProjects()}
    </Flex>
  );
};
