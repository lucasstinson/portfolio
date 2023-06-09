import React from "react";
import userLogo from "../../assets/images/characterLogo.png";
import "./home.css";
import { Link } from "react-router-dom";
import Projects from "../projects/Projects";
import css from "../../assets/images/tech-icons/css.png";
import firebase from "../../assets/images/tech-icons/firebase.png";
import git from "../../assets/images/tech-icons/git.png";
import html from "../../assets/images/tech-icons/html.png";
import javascript from "../../assets/images/tech-icons/javascript.png";
import jest from "../../assets/images/tech-icons/jest.png";
// import linux from "../../assets/images/tech-icons/linux.png";
import npm from "../../assets/images/tech-icons/npm.png";
import python from "../../assets/images/tech-icons/python.png";
import reactrouter from "../../assets/images/tech-icons/react-router.svg";
import react from "../../assets/images/tech-icons/react.png";
import webpack from "../../assets/images/tech-icons/webpack.png";

const Home = () => {
  return (
    <div className="Home">
      <div className="intro">
        <div className="intro-text">
          <div className="name-intro">
            Hi! I'm <span className="highlight">Luke</span>.
          </div>
          <div className="info-intro">I'm a self-taught web</div>
          <div className="info-intro">developer based in Nashville.</div>
          <div className="learn-more-container">
            <Link to="/about">
              <button className="learn-more">Get to Know Me</button>
            </Link>
          </div>
        </div>
        <div className="intro-image">
          <img src={userLogo} className="user-logo" alt=""></img>
        </div>
      </div>
      <div className="skills">
        <div className="skills-title">My Ever-Growing Toolbox</div>
        <div className="tech-icon-container">
          <img className="tech-icon css" src={css} alt="" title="CSS"></img>
          <img
            className="tech-icon firebase"
            src={firebase}
            alt=""
            title="Firebase"
          ></img>
          <img className="tech-icon git" src={git} alt="" title="Git"></img>
          <img className="tech-icon html" src={html} alt="" title="HTML"></img>
          <img
            className="tech-icon javascript"
            src={javascript}
            alt=""
            title="Javascript"
          ></img>
          <img className="tech-icon jest" src={jest} alt="" title="Jest"></img>
          <img className="tech-icon npm" src={npm} alt="" title="NPM"></img>
          <img
            className="tech-icon python"
            src={python}
            alt=""
            title="Python"
          ></img>
          <img
            className="tech-icon react-router"
            src={reactrouter}
            alt=""
            title="React Router"
          ></img>
          <img
            className="tech-icon react"
            src={react}
            alt=""
            title="React"
          ></img>
          <img
            className="tech-icon webpack"
            src={webpack}
            alt=""
            title="Webpack"
          ></img>
        </div>
      </div>
      <div className="web-dev-intro-container">
        <div className="web-dev-intro-title">
          If I don't know it, I find a way to do it.
        </div>
        <div className="web-dev-intro-content">
          I see web dev like a puzzle: All the pieces are there, it's just
          figuring out where they go.
        </div>
      </div>

      <Projects />
    </div>
  );
};

export default Home;
