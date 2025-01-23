import { Flex } from "../../components/flex/flex";
import "./skills.scss";

export const Skills = () => {
  const skillsList = [
    "React",
    "JavaScript",
    "TypeScript",
    "Sql",
    "C#",
    "Figma and UI/UX",
    "SvelteKit",
    "Working in a team",
  ];
  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      height="100%"
      gap="30px"
      width="100%"
    >
      {skillsList.map((skill) => {
        return <div className="skillContainer">{skill}</div>;
      })}
    </Flex>
  );
};
