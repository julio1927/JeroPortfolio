import React, { useState, useEffect } from "react";
import { Nav, Navbar } from "react-bootstrap";
import classes from "./NavigationBar.module.css";
import Button from "../../UI/Button/Button";

function NavigationBar() {
  const [button, setButton] = useState(true);

  const showButton = () => {
    if (window.innerWidth <= 360) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

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
              <Nav.Link href="/AboutMe">About Me</Nav.Link>
            </Nav.Item>

            {/* NavBar Projects*/}
            <Nav.Item>
              <Nav.Link href="/Projects">Projects</Nav.Link>
            </Nav.Item>

            {/* NavBar Resume*/}
            <Nav.Item>
              <Nav.Link href="/Resume">Resume</Nav.Link>
            </Nav.Item>

            {/* Button -> Github */}
            {button && (
              <Button
                href="https://www.github.com/julio1927"
                className={classes.BtnStyle}
              >
                <i className="fab fa-github" />
              </Button>
            )}

            {/* Button -> LinkedIn */}
            {button && (
              <Button
                href="https://www.linkedin.com/in/julio-rivas"
                className={classes.BtnStyle}
              >
                <i className="fab fa-linkedin-in" />
              </Button>
            )}

            {/* NavBar option Profile*/}
            <i className="fas fa-user-circle"/>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
