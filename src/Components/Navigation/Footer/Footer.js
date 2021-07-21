import React from "react";
import styled from "styled-components";
import { Link } from 'react-scroll';

const FooterContainer = styled.footer`
  .footer {
    background: #222831;
    padding: 30px;
    text-align: center;
  }

  .footerLink {
    color: #fff;
    cursor: pointer;
  }

  .footer .footer_menu {
    display: flex;
    margin-bottom: 15px;
    align-items: center;
    justify-content: space-between;
  }

  .footer .footer_menu .title {
    text-align: center;
    font-size: 20px;
    margin-bottom: 10px;
    color: #fff;
  }

  .footer .footer_menu ul div a {
    list-style-type: none;
    display: block;
    margin-bottom: 6px;
    color: #808080;
  }

  .footer .footer_menu ul div a:hover {
    text-decoration: underline;
    color: #fff;
  }

  .footer .social_media {
    text-align: center;
  }

  .footer .social_media ul {
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
  }

  .footer .social_media ul div a {
    display: block;
    margin: 0 5px;
    color: #fff;
    font-size: 24px;
    width: 50px;
    height: 50px;
    background: #fff;
    color: #222222;
    line-height: 50px;
    border-radius: 3px;
  }

  .footer .social_media ul div a:hover {
    color: #fff;
  }

  .footer .social_media ul div a.github:hover {
    background: #24292e;
  }

  .footer .social_media ul div a.linkedin:hover {
    background: #0077b5;
  }

  .footer .social_media {
    color: #adadad;
  }

  .ListStyle {
    list-style-image: none;
  }

  @media (max-width: 768px) {
    .footer .footer_menu {
      flex-direction: column;
      width: 220px;
      margin: 0 auto 25px;
    }
    .footer .footer_menu > div {
      margin: 10px 0;
    }
    .footer .partners ul li a {
      margin: 5px;
    }
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <div className="footer">
        <div className="footer_menu">
          <div className="col_1">
            {/* First Column Jero*/}
            <div className="title"> Jero</div>

            <ul className="list-unstyled">
              <div className="footerLink">
                <Link to="AboutPage" smooth={true} duration={1000}>About Me</Link>
              </div>
              <div className="footerLink">
                <Link to="ProjectsPage" smooth={true} duration={1000}>Projects</Link>
              </div>
              <div className="footerLink">
                <Link to="ResumePage" smooth={true} duration={1000}>Resume</Link>
              </div>
              <div className="footerLink">
                <Link to="ContactPage" smooth={true} duration={1000}>Contact</Link>
              </div>
            </ul>
          </div>

          {/* Second Column ICM Jero*/}
          <div className="social_media">
            <ul className="list-unstyled">
              <div>
                <a
                  className="github"
                  href="https://www.instagram.com/icmkitchener/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
              <div>
                <a
                  className="linkedin"
                  href="linkedin.com/in/julio-rivas"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </ul>
            {/* Footer Copy Right */}
            <p className="text-xs-center text-color">
              Jero - All Rights Reserved &copy; {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}

export default Footer;
