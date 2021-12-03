import React from "react";
import Card from "react-bootstrap/Card";
import classes from "../UI/Card/Card.module.css";

const AboutMeCardItem = (props) => {
  return (
    <div>
      <Card className={classes.Card}>
        <Card.Body>
          {/* Section Icon */}
          <Card.Img variant="top" src={props.icon} />
          <Card.Title className={classes.Header} as="h1">
            {/* Section Title */}
            {props.Header}
          </Card.Title>
          <Card.Text className={classes.Text}>{props.HeaderInfoText}</Card.Text>

          {/* Section Title */}
          <Card.Subtitle className={classes.Subtitle}>
            {props.Subjects}
          </Card.Subtitle>
          <Card.Text className={classes.Text}>{props.SubjectText}</Card.Text>

          {/* Section Title */}
          <Card.Subtitle className={classes.Subtitle}>
            {props.Tools}
          </Card.Subtitle>
          <Card.Text className={classes.Text}>{props.ToolsText}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AboutMeCardItem;
