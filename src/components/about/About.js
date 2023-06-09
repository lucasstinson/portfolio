import React from "react";
import "./about.css";
import headshot from "../../assets/images/headshot.jpeg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="About">
      <div className="about-text-container">
        <div className="about-photo-intro">
          This is me. Sometimes I wear glasses, sometimes I'm clean shaven. It
          depends on the day.
        </div>
        <div className="about-education">
          I studied Economics at Rutgers, and that's when I had my first taste
          of coding. Since then, I have been in quite a few finance roles. But
          no matter where I work, I'm always more interested in the actual
          coding behind the financial tools I use.
        </div>
        <div className="about-me">
          I think of myself as an ambitious person focused on getting the job
          done, whether it's web development or learning how to start a
          homestead here in Tennessee.
        </div>
        <div className="learn-more-container ">
          <Link to="/projects">
            <button className="learn-more">Check Out My Work</button>
          </Link>
        </div>
      </div>
      <div className="about-image-container">
        <img
          className="personal-photo"
          alt="personal portrait"
          src={headshot}
        ></img>
      </div>
    </div>
  );
};

export default About;

// Hello,

// My education is in Economics and that's where I had my first taste of
// a coding language. Since then I have stepped through quite a few
// financial companies, but it has ultimately led me back into coding and more
// specifically into web development.

// I’m based in Nashville and think of my self as a person focused
// on self-improvement whether it's every project or something even more personal
// like health and exercise.

// if I dont know it I'll figure it out
