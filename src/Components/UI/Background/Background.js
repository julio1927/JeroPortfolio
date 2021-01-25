import React from "react";
import classes from "./Background.module.css";
import ReactTypingEffect from "react-typing-effect";

function Background() {
  return (
    <div className={classes.BackgroundContainer}>
      <h1>Hello, my name is Julio Rivas</h1>
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
        eraseDelay="1000"
      />
    </div>
  );
}

export default Background;
