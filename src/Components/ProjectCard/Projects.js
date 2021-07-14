import React from "react";
import CardItem from "../CardItem/CardItem";
import ReactAux from "../../hoc/ReactAux/ReactAux";

import { ProjectDiv } from "./ProjectElements/ProjectElements";

function Projects() {
  return (
    <ReactAux>
      <ProjectDiv>
        <CardItem />
      </ProjectDiv>
    </ReactAux>
  );
}

export default Projects;
