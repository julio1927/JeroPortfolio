import React, { useState, useEffect } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { scroller } from "react-scroll";
import classes from "./NavigationBar.module.css";
import Button from "../../UI/Button/Button";
import Logo from "../../../Assets/Images/Jero.png";

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
        <Navbar.Brand href="/">
          <img
            src={Logo}
            alt="Logo"
            className="d-inline-block align-top"
            width="80"
            height="80"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {/* NavBar Home*/}
            <Nav.Item>
              <Nav.Link
                onClick={() =>
                  scroller.scrollTo("HomePage", {
                    smooth: true,
                    offset: -70,
                    duration: 1000,
                  })
                }
              >
                Home
              </Nav.Link>
            </Nav.Item>

            {/* NavBar About Me*/}
            <Nav.Item>
              <Nav.Link
                onClick={() =>
                  scroller.scrollTo("AboutPage", {
                    smooth: true,
                    offset: -70,
                    duration: 1000,
                  })
                }
              >
                About Me
              </Nav.Link>
            </Nav.Item>

            {/* NavBar Projects*/}
            <Nav.Item>
              <Nav.Link
                onClick={() =>
                  scroller.scrollTo("ProjectsPage", {
                    smooth: true,
                    offset: -70,
                    duration: 1000,
                  })
                }
              >
                Projects
              </Nav.Link>
            </Nav.Item>

            {/* NavBar Resume*/}
            <Nav.Item>
              <Nav.Link
                onClick={() =>
                  scroller.scrollTo("ResumePage", {
                    smooth: true,
                    offset: -70,
                    duration: 1000,
                  })
                }
              >
                Resume
              </Nav.Link>
            </Nav.Item>

            {/* NavBar Contact*/}
            <Nav.Item>
              <Nav.Link
                onClick={() =>
                  scroller.scrollTo("ContactPage", {
                    smooth: true,
                    offset: -70,
                    duration: 1000,
                  })
                }
              >
                Contact
              </Nav.Link>
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
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
