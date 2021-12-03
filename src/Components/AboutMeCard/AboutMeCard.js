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
          HeaderInfoText="I value simple content structure, clean design patterns, and thoughtful interactions"
          Subjects="Things I enjoy designing:"
          SubjectText="UX, UI, Web, Apps, Logos"
          Tools="Design Tools"
          ToolsText="Figma, Sketch, Abobe XD, Pen & paper"
        />
        <AboutMeCardItem
          icon={FullstackIcon}
          Header="Full-Stack Developer"
          HeaderInfoText="I value simple content structure, clean design patterns, and thoughtful interactions"
          Subjects="Things I enjoy designing:"
          SubjectText="UX, UI, Web, Apps, Logos"
          Tools="Design Tools"
          ToolsText="Figma, Sketch, Abobe XD, Pen & paper"
        />
        <AboutMeCardItem
          icon={FreelanceIcon}
          Header="Freelance Developer"
          HeaderInfoText="I value simple content structure, clean design patterns, and thoughtful interactions"
          Subjects="Things I enjoy designing:"
          SubjectText="UX, UI, Web, Apps, Logos"
          Tools="Design Tools"
          ToolsText="Figma, Sketch, Abobe XD, Pen & paper"
        />
      </AboutCardBoarder>
    </AboutCardContainer>
  );
};

export default AboutMeCard;
