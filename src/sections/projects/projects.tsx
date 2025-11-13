import { Flex } from "../../components/flex/flex";
import { useGetDevice } from "../../hooks/useGetDevice";
import { ProjectComp } from "./project";
import {
  oldProjectsList,
  newProjectsList,
  notFinishedProjectsList,
} from "./projectHelper";

export const Projects = () => {
  const device = useGetDevice();

  const notFinishedProjects = () => {
    return notFinishedProjectsList.map((project, i) => {
      return <ProjectComp project={project} key={i} />;
    });
  };

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
    <Flex
      direction="column"
      height={device === "Mobile" ? "700px" : "500px"}
      gap="16px"
      overflow
    >
      <Flex direction="column" width="100%">
        <p className="header">Not Finished Projects</p>
        {notFinishedProjects()}
      </Flex>
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
