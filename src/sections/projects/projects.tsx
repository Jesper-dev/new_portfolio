import { Flex } from "../../components/flex/flex";
import { ProjectComp } from "./project";
import { oldProjectsList, newProjectsList } from "./projectHelper";

export const Projects = () => {
  const getNewProjects = () => {
    return newProjectsList.map((project, i) => {
      return <ProjectComp project={project} key={i} />;
    });
  };

  const getOldProjects = () => {
    return oldProjectsList.map((project, i) => {
      return <ProjectComp project={project} key={i} />;
    });
  };
  return (
    <Flex direction="column" height="100%" gap="16px">
      <Flex direction="column" width="100%">
        <p className="header">New Projects</p>
        {getNewProjects()}
      </Flex>
      <Flex direction="column" width="100%">
        <p className="header">Old Projects</p>
        {getOldProjects()}
      </Flex>
    </Flex>
  );
};
