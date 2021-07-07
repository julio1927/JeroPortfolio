import React from "react";
import CardItem from "../CardItem/CardItem";
import classes from "./Cards.module.css";
import ICMKitchener from "../../Assets/Images/ICMKitchener.png";
import JeroPortfolio from "../../Assets/Images/JeroPortfolio.png";
import GrowthWatch from "../../Assets/Images/GrowthWatch.png";

function Projects() {
  return (
    <>
      <CardItem
        src={JeroPortfolio}
        title="Portfolio Website"
        label="Frontend - Web App"
        href="https://github.com/julio1927/JeroPortfolio"
        alt="JeroPortfolio"
        Description="Designed, developed, and maintain my portfolio site using various front-end 
        technologies. Main goal of the site is to showcase a bit about myself, contact information and the 
        different technologies I know by demonstrating some of my projects."
      />
      <CardItem
        src={ICMKitchener}
        title="ICM Kitchener Church Website"
        label="Frontend - Web app"
        href="https://www.icmkitchener.org"
        Description="ICM Kitchener Church Website using React.js. "
      />

      <CardItem
        src={GrowthWatch}
        title="JWC Autonomous plant monitoring system"
        label="Full Stack - Desktop, Mobile and Web app"
        href="https://github.com/julio1927/JWCCapStone"
        Description="Repeatedly and accurately measure plant attributes without human intervention.
        JWC then uses that data gathered for analytics such as, predicting plant growth. JWC can then use the augmented reality app for better visualization."
      />
    </>
  );
}

export default Projects;
