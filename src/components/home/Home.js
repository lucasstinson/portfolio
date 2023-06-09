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
        <div className="skills-title">My Toolbox</div>
        <div className="tech-icon-container">
          <img className="tech-icon css" src={css} alt=""></img>
          <img className="tech-icon firebase" src={firebase} alt=""></img>
          <img className="tech-icon git" src={git} alt=""></img>
          <img className="tech-icon html" src={html} alt=""></img>
          <img className="tech-icon javascript" src={javascript} alt=""></img>
          <img className="tech-icon jest" src={jest} alt=""></img>
          <img className="tech-icon npm" src={npm} alt=""></img>
          <img className="tech-icon python" src={python} alt=""></img>
          <img
            className="tech-icon react-router"
            src={reactrouter}
            alt=""
          ></img>
          <img className="tech-icon react" src={react} alt=""></img>
          <img className="tech-icon webpack" src={webpack} alt=""></img>
        </div>
      </div>
      <div className="web-dev-intro-container">
        <div className="web-dev-intro-title">
          If I don't know it, I'll find a way to do it
        </div>
        <div className="web-dev-intro-content">
          I see web development like a puzzle. The pieces are there and you just
          have to figure out where they go. Many times it feels like you have
          put this puzzle together before, but sometimes it changes and thats
          where the real fun happens.{" "}
        </div>
      </div>

      <Projects />
    </div>
  );
};

export default Home;
