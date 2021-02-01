import React from "react";
import classes from "./ResumePage.module.css";
import FirstResumeImg from "../../../Assets/Images/FirstResumeImg.png";
import SecondResumeImg from "../../../Assets/Images/SecondResumeImg.png";

function ResumePage() {
  return (
    <div id="ResumePage">
      <div className={classes.ResumeContainer}>
        <h1 className={classes.Heading}>My Resume</h1>
        <div className={classes.ResumeWrapper}>
          <ul className={classes.ResumeItem}>
            <img src={FirstResumeImg} alt="Resume" />
          </ul>

          <ul className={classes.ResumeItem}>
            <img src={SecondResumeImg} alt="Resume" />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ResumePage;
