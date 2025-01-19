import { Flex } from "../../components/flex/flex";
import { Project } from "./projectHelper";
import "./project.scss";

type ProjecProps = {
  project: Project;
};

export const ProjectComp = ({ project }: ProjecProps) => {
  return (
    <Flex className="projectContainer" direction="column">
      <Flex gap="10px" align="center" width="100%" justify="space-between">
        <p>{project.description}</p>
        <h3>{project.name}</h3>
      </Flex>
      <Flex align="flex-end" justify="flex-end" width="100%">
        <a href={project.url} target="_blank">
          Visit
        </a>
      </Flex>
    </Flex>
  );
};
