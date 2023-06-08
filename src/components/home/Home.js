import React from "react";
import userLogo from "../../assets/images/characterLogo.png";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home">
      <div className="intro">
        <div className="intro-text">
          <div className="name-intro">
            Hi! I'm <span className="name">Luke</span>.
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
    </div>
  );
};

export default Home;

// Hi! I'm Luke, an aspiring web developer based in Nashville.
// Learn More - button
