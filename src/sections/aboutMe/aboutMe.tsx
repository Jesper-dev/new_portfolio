import { Flex } from "../../components/flex/flex";
import "./aboutMe.scss";

import { useIsMobile } from "../../hooks/useIsMobile";

export const AboutMe = () => {
  const device = useIsMobile();
  return (
    <Flex direction="column" height="100%">
      <Flex
        className="aboutMeTextContainer"
        direction="column"
        padding={device === "Desktop" ? undefined : "8px"}
        align="flex-start"
        justify="center"
        height="100%"
        gap="20px"
      >
        <Flex
          backgroundColor="#095906"
          padding="8px"
          width="100%"
          justify="flex-start"
        >
          <h2 className="headline">Born 2000 in Uppsala, Sweden.</h2>
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
