import React from "react";
import classes from "./ResumePage.module.css";
import ResumeImg from "../../../Assets/Images/Resume.PNG";

function ResumePage() {
  return (
    <div id="ResumePage">
      <div className={classes.ResumeContainer}>
        <h1 className={classes.Heading}>My Resume</h1>
        <div className={classes.ResumeWrapper}>
          <ul className={classes.ResumeItem}>
            <img src={ResumeImg} alt="Resume" />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ResumePage;
