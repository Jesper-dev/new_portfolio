import { Flex } from "../flex/flex";
import "./nav.scss";

export const Nav = () => {
  return (
    <div className="navContainer">
      <Flex direction="column" align="flex-start" padding="16px">
        <a>About</a>

        <a>Projects</a>
      </Flex>
    </div>
  );
};
