import React from "react";
import AboutMeCardItem from "../AboutMeCardItem/AboutMeCardItem";
import { AboutCardContainer, AboutCardBoarder } from "./AboutMeCardElements";

const AboutMeCard = () => {
  return (
    <AboutCardContainer>
      <AboutCardBoarder>
        <AboutMeCardItem
          Header="Designer"
          HeaderInfoText="I value simple content structure, clean design patterns, and thoughtful interactions"
          Subjects="Things I enjoy designing:"
          SubjectText="UX, UI, Web, Apps, Logos"
          Tools="Design Tools"
          ToolsText="Figma, Sketch, Abobe XD, Pen & paper"
        />
        <AboutMeCardItem
          Header="Full-Stack Developer"
          HeaderInfoText="I value simple content structure, clean design patterns, and thoughtful interactions"
          Subjects="Things I enjoy designing:"
          SubjectText="UX, UI, Web, Apps, Logos"
          Tools="Design Tools"
          ToolsText="Figma, Sketch, Abobe XD, Pen & paper"
        />
        <AboutMeCardItem
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
