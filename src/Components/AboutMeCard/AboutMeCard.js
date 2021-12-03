import React from "react";
import AboutMeCardItem from "../AboutMeCardItem/AboutMeCardItem";
import { AboutCardContainer, AboutCardBoarder } from "./AboutMeCardElements";
import DesignIcon from "../../Assets/Images/DesignIcon.png";
import FullstackIcon from "../../Assets/Images/FullstackIcon.png";
import FreelanceIcon from "../../Assets/Images/freelancer.png";

const AboutMeCard = () => {
  return (
    <AboutCardContainer>
      <AboutCardBoarder>
        <AboutMeCardItem
          icon={DesignIcon}
          Header="Designer"
          HeaderInfoText="I value simple content structure, clean design patterns, and thoughtful interactions."
          Subjects="Things I enjoy designing:"
          SubjectText="UX, UI, Web, Apps, Logos"
          Tools="Design Tools"
          ToolsText="Figma, Sketch, Abobe XD, Pen & paper"
        />
        <AboutMeCardItem
          icon={FullstackIcon}
          Header="Full-Stack Developer"
          HeaderInfoText="I like to code ideas from scratch, and enjoy bringing proof of concepts to life."
          Subjects="Languages I speak:"
          SubjectText="React.JS, HTML, CSS, Redux, Node.JS, Express"
          Tools="Dev Tools"
          ToolsText="VS Code, VS Studio, Bootstrap, Github"
        />
        <AboutMeCardItem
          icon={FreelanceIcon}
          Header="Freelance Developer"
          HeaderInfoText="I value simple content structure, clean design patterns, and thoughtful interactions"
          Subjects="Experiences I draw from:"
          SubjectText="UX/UI, Website design, Logo design"
          Tools="Use Cases:"
          ToolsText="Figma, Sketch, Abobe XD, Pen & paper"
        />
      </AboutCardBoarder>
    </AboutCardContainer>
  );
};

export default AboutMeCard;
