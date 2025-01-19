import { Flex } from "../flex/flex";
import "./nav.scss";

export const Nav = () => {
  return (
    <div className="navContainer">
      <Flex direction="column" align="flex-start" padding="16px" gap="12px">
        <a href="#aboutMe">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
      </Flex>
    </div>
  );
};
