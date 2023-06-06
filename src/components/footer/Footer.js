import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import githubLogo from "../../assets/images/github.png";
import linkedInLogo from "../../assets/images/linkedinlogo.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-text-container">
        <div className="footer-text">Developed by Lucas Stinson</div>
      </div>
      <div className="logo-links">
        <Link to={"https://github.com/lucasstinson/"} className="github-link">
          <img className="footer-logo" src={githubLogo} alt="github logo"></img>
        </Link>
        <Link
          to={"https://www.linkedin.com/in/lucasstinson"}
          className="linkedIn-link"
        >
          <img
            className="footer-logo"
            src={linkedInLogo}
            alt="linkedIn logo"
          ></img>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
