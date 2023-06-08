import React from "react";
import "./projects.css";
import memoryGame from "../../assets/images/memorygamedisplay.png";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="Projects">
      <div className="project-container">
        <div className="project-info">
          <div className="project-title">Memory Game</div>
          <div className="project-description">
            This game puts your memory to the test. You'll be presented with
            multiple images. The images will shuffle every-time they are
            clicked. DO NOT click any images twice, else the score will reset to
            zero. The goal is to get the highest score possible.
          </div>
          <div className="project-buttons-container">
            <Link to="https://lucasstinson.github.io/memory-card-game/">
              <button className="project-live">Live</button>
            </Link>
            <Link to="https://github.com/lucasstinson/memory-card-game">
              <button className="project-code">Code</button>
            </Link>
          </div>
        </div>
        <div className="project-image-container">
          <img className="project-image" alt="" src={memoryGame}></img>
        </div>
      </div>
    </div>
  );
};

export default Projects;

// Built with React
// this game puts your memory to the test.
// You'll be presented with multiple images.
// The images will shuffle every-time they are clicked.
// DO NOT click any images twice, else the score will reset to zero.
// The goal is to get the highest score possible.
