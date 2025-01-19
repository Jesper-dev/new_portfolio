import { Flex } from "../../components/flex/flex";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./aboutMe.scss";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useIsMobile } from "../../hooks/useIsMobile";

export const AboutMe = () => {
  const device = useIsMobile();
  return (
    <Flex direction="column" height="100%">
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
      <Flex
        className="aboutMeTextContainer"
        direction="column"
        // width={device === "Desktop" ? "30%" : "100%"}
        padding={device === "Desktop" ? undefined : "8px"}
        align="flex-start"
        justify="center"
        height="100%"
      >
        <Flex
          backgroundColor="#095906"
          padding="8px"
          width="100%"
          justify="flex-start"
        >
          <h2 className="headline">Born in 2000 in Uppsala, Sweden.</h2>
        </Flex>
        <p className="aboutMeText">
          I’m passionate about crafting visually appealing and innovative
          products for the web. Driven by a love for creative problem-solving, I
          constantly challenge myself to grow as a developer and deliver
          exceptional user experiences. My goal is to combine aesthetics and
          functionality to create impactful digital solutions.
        </p>
      </Flex>
    </Flex>
  );
};
