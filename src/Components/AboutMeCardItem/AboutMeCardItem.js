import React from "react";
import Card from "react-bootstrap/Card";
import classes from "../UI/Card/Card.module.css";

const AboutMeCardItem = (props) => {
  return (
    <div>
      <Card className={classes.Card}>
        <Card.Body>
          <Card.Title
            className={classes.Title}
            style={{ color: "#222831" }}
            as="h1"
          >
            {props.title}
          </Card.Title>
          <Card.Text className={classes.Text}>
            <div>
              <p>
                Hello! I'm Julio, a software developer based in Kitchener, ON
                who enjoys building things on the internet.
              </p>
              <p>
                I strive to create clean and efficient code, with a good user
                experience, which in turn helps me develop exceptional
                applications.
              </p>

              <p>
                I recently graduated from{" "}
                <a href="https://www.conestogac.on.ca">Conestoga College</a>,
                where I was introduced to various technologies, concepts and
                methods. I also had the opportunity to work on various semester
                long projects with other software developers. I applied the
                knowledge I learnt from school and also worked on some
                freelancing projects.
              </p>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AboutMeCardItem;
