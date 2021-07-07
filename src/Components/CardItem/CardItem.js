import React from "react";

import {
  CardContainer,
  CardWrapper,
  Card,
  CardLink,
  CardIcon,
  CardH1,
  CardH2,
  CardDescription,
  ViewSourceBtn,
  DemoBtn,
} from "../ProjectCard/CardElements";

const CardItem = (props) => {
  return (
    <>
      <CardContainer>
        <CardH1>{props.title}</CardH1>
        <CardWrapper>
          <Card>
            <CardLink href={props.href} target="_blank" rel="noreferrer" >
              <CardIcon src={props.src} />
              <CardH2>{props.label}</CardH2>
              <CardDescription>{props.Description}</CardDescription>
            </CardLink>
          </Card>
          <ViewSourceBtn>Source Code</ViewSourceBtn>
          <DemoBtn>Demo</DemoBtn>
        </CardWrapper>
      </CardContainer>
      {/* <li className={classes.CardsItem}>
        <a
          href={props.href}
          className={classes.CardsItemAnchor}
          target="_blank"
          rel="noreferrer"
        >
          <figure className={classes.CardsItemPic} data-category={props.label}>
            <img
              src={props.src}
              alt={props.alt}
              className={classes.CardsItemImg}
            />
            <div className={classes.CardsItemInfo}>
              <h5 className={classes.CardsItemText}>{props.title}</h5>
              <p className={classes.ProjDesc}>This is a test msg</p>
            </div>
          </figure>
        </a>
  </li>*/}
    </>
  );
};

export default CardItem;
