import React from "react";
import CardItem from "../CardItem/CardItem";
import ReactAux from "../../hoc/ReactAux/ReactAux";

import { ProjectDiv,ProjectHeader } from "./ProjectElements/ProjectElements";

function Projects() {
  return (
    <ReactAux>
      <ProjectDiv>
        <ProjectHeader>Projects</ProjectHeader>
        <CardItem />
      </ProjectDiv>
    </ReactAux>
  );
}

export default Projects;
