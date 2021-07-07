import React from "react";
import classes from "./Background.module.css";
import ReactTypingEffect from "react-typing-effect";
import Image from 'react-bootstrap/Image';
import ProfilePic from '../../../Assets/Images/profilePic.jpeg';

function Background() {
  return (
    <div className={classes.BackgroundContainer}>
      <h3>Hello, my name is</h3>
      <h1>Julio Rivas.</h1>
      <div className={classes.CardImg}>
            <Image src={ProfilePic} alt="Julio Rivas"  roundedCircle/>
      </div>
      <ReactTypingEffect
        className={classes.TypingEffect}
        staticText="I'm a"
        text={[
          "software developer",
          "music enthusiast",
          "technology nerd",
        ]}
        speed="100"
        typingDelay="500"
        eraseDelay="700"
      />
    </div>
  );
}

export default Background;
