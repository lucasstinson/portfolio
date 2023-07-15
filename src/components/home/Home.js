import React from "react";
import userLogo from "../../assets/images/characterLogo.png";
import "./home.css";
import { Link } from "react-router-dom";
import Projects from "../projects/Projects";
import Skills from "./components/Skills";
import GithubContributions from "./components/GithubContributions";

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
          <Skills />
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
      {/* <GithubContributions /> github chart api down*/}
      <Projects />
    </div>
  );
};

export default Home;
