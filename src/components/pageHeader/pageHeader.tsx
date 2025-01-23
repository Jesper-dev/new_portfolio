import { Flex } from "../flex/flex";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";

export const PageHeader = () => {
  return (
    <Flex
      direction="column"
      align="flex-start"
      justify="flex-start"
      width="100%"
      padding="8px"
    >
      <h1>Jesper Pettersson</h1>
      <Flex gap="10px">
        <a href="https://github.com/Jesper-dev" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="mailto:jesper.pettersson00@hotmail.com">
          <FontAwesomeIcon icon={faSquareEnvelope} />
        </a>
        <a
          href="https://www.linkedin.com/in/jesper-pettersson-218245179/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </Flex>
    </Flex>
  );
};
