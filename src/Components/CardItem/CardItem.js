import React from "react";
import ReactAux from "../../hoc/ReactAux/ReactAux";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "../ProjectCard/ProjectElements/ProjectElements";
import { projects } from "../Constants/Constants";

const CardItem = (props) => {
  return (
    <ReactAux>
      <GridContainer>
        {projects.map((p, i) => {
          return (
            <BlogCard key={i}>
              {p.image === "" ? null : (
                  <Img src={p.image} />
                )}
              <TitleContent>
                <HeaderThree title>{p.title}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo className="card-info">{p.description}</CardInfo>
              <div>
                <TitleContent>Stack</TitleContent>
                <TagList>
                  {p.tags.map((t, i) => {
                    return <Tag key={i}>{t}</Tag>;
                  })}
                </TagList>
              </div>
              <UtilityList>
                {p.visit === "" ? null : (
                  <ExternalLinks href={p.visit}>Demo</ExternalLinks>
                )}

                {p.source === "" ? null : (
                  <ExternalLinks href={p.source}>Source</ExternalLinks>
                )}
              </UtilityList>
            </BlogCard>
          );
        })}
      </GridContainer>
    </ReactAux>
  );
};

export default CardItem;
