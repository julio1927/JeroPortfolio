import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import classes from "./NavigationBar.module.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Button from "../../UI/Button/Button";

function NavigationBar() {
  return (
    <div className={classes.NavBar}>
      <Navbar expand="lg" className="navbar-dark">
        {/* Name + Logo */}
        <Navbar.Brand href="/">Jero</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {/* NavBar Home*/}
            <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>

            {/* NavBar About Me*/}
            <Nav.Item>
              <Nav.Link href="/">About Me</Nav.Link>
            </Nav.Item>

            {/* NavBar Projects*/}
            <Nav.Item>
              <Nav.Link href="/">Projects</Nav.Link>
            </Nav.Item>

            {/* NavBar Resume*/}
            <Nav.Item>
              <Nav.Link href="/">Resume</Nav.Link>
            </Nav.Item>

            {/* Button -> Github */}
            <GitHubIcon />

            {/* Button -> LinkedIn */}
            <LinkedInIcon />

            {/* NavBar option Profile*/}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
