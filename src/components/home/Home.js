import React from "react";
import userLogo from "../../assets/images/characterLogo.png";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home">
      <div className="intro">
        <h2 className="name-intro">Hi! I'm Luke.</h2>
        <h1 className="info-intro">
          I'm an aspiring web developer based in Nashville.
        </h1>
        <div className="learn-more-container">
          <Link to="/about">
            <button className="learn-more">Get to Know Me</button>
          </Link>
        </div>
      </div>
      <div className="intro-image">
        <img src={userLogo} className="user-logo"></img>
      </div>
    </div>
  );
};

export default Home;

// Hi! I'm Luke, an aspiring web developer based in Nashville.
// Learn More - button
