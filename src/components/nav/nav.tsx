import "./nav.scss";

type NavProps = {
  onChangeSection: (newSection: "aboutMe" | "projects" | "skills") => void;
  selectedSection: "aboutMe" | "projects" | "skills";
};

export const Nav = ({ onChangeSection, selectedSection }: NavProps) => {
  return (
    <div className="navContainer">
      {/* <Flex direction="column" align="flex-start" padding="16px" gap="12px"> */}
      <button
        id={selectedSection === "aboutMe" ? "selected" : ""}
        onClick={() => onChangeSection("aboutMe")}
      >
        About
      </button>
      <button
        id={selectedSection === "projects" ? "selected" : ""}
        onClick={() => onChangeSection("projects")}
      >
        Projects
      </button>
      <button
        id={selectedSection === "skills" ? "selected" : ""}
        onClick={() => onChangeSection("skills")}
      >
        Skills
      </button>
      {/* </Flex> */}
    </div>
  );
};
