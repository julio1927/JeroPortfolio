import React from "react";
import classes from "./ResumePage.module.css";
import ResumeImg from "../../../Assets/Images/Resume1.PNG";
import ResumeImg2 from "../../../Assets/Images/Resume2.PNG";

function ResumePage() {
  return (
    <div id="ResumePage">
      <div className={classes.ResumeContainer}>
        <h1 className={classes.Heading}>My Resume</h1>
        <div className={classes.ResumeWrapper}>
          <ul className={classes.ResumeItem}>
            <img src={ResumeImg} alt="Resume" />
          </ul>
          <ul className={classes.ResumeItem}>
            <img src={ResumeImg2} alt="Resume" />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ResumePage;
