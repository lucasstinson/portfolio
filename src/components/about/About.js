import React from "react";
import "./about.css";
import headshot from "../../assets/images/headshot.jpeg";

const About = () => {
  return (
    <div className="About">
      <div className="about-text-container">
        <div className="Hello">Hello,</div>
        <p className="about-photo-into">
          That's a recent picture of me, but I may currently have glasses or no
          beard. It depends on the day.
        </p>
        <p className="about-education">
          My education is in Economics and that's where I had my first taste of
          a coding language. Since then I have stepped through quite a few
          financial companies, but it has ultimately led me back into coding and
          more specifically into web development.
        </p>
        <p className="about-me">
          I’m based in Nashville and think of my self as a person focused on
          self-improvement whether it's every project or something even more
          personal like health and exercise.
        </p>
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
