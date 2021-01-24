import React from "react";
import classes from "./Button.module.css";

const Button = ({ children, type, onClick, href }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <button className={classes.BtnStyle} onClick={onClick} type={type}>
        {children}
      </button>
    </a>
  );
};

export default Button;