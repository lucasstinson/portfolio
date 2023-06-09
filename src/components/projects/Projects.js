import React from "react";
import "./projects.css";
import memoryGame from "../../assets/images/memoryGamePhoneMockMobile.png";
import shoppingCart from "../../assets/images/shoppingCartDisplay.png";
import portfolioSite from "../../assets/images/portfolioDisplay.png";
import hyper from "../../assets/images/hyperDisplayMobile.png";
import resumeCreator from "../../assets/images/resumeCreatorDisplay.png";

const Projects = () => {
  return (
    <div className="Projects">
      <div className="projects-title">
        My Recent <span className="highlight">Projects</span>
      </div>
      <div className="project-container hyper">
        <div className="project-info">
          <div className="project-title">Hyper Social Media App</div>
          <div className="project-description">
            A mock Twitter that allows users to create a profile, post messages,
            and interact with others.
          </div>
          <div className="project-buttons-container">
            <a href="https://lucasstinson.github.io/hyper/">
              <button className="project-live hyper-button ">Live</button>
            </a>
            <a href="https://github.com/lucasstinson/hyper">
              <button className="project-code hyper-button ">Code</button>
            </a>
          </div>
        </div>
        <div className="project-image-container hyper">
          <img className="hyper-image" alt="" src={hyper}></img>
        </div>
      </div>
      <div className="project-container shopping-cart">
        <div className="project-image-container shopping-cart">
          <img className="shopping-cart-image" alt="" src={shoppingCart}></img>
        </div>
        <div className="project-info">
          <div className="project-title shopping-cart">Shopping Cart</div>
          <div className="project-description">
            Navigate to the checkout page, add or subtract items, and see
            real-time cart updates.
          </div>
          <div className="project-buttons-container">
            <a href="https://lucasstinson.github.io/shopping-cart/">
              <button className="project-live shopping-cart-button">
                Live
              </button>
            </a>
            <a href="https://github.com/lucasstinson/shopping-cart">
              <button className="project-code shopping-cart-button">
                Code
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="project-container memory-game">
        <div className="project-info">
          <div className="project-title">Memory Game</div>
          <div className="project-description">
            Put your memory to the test! Can you get the max score?
          </div>
          <div className="project-buttons-container">
            <a href="https://lucasstinson.github.io/memory-card-game/">
              <button className="project-live memory-game-button ">Live</button>
            </a>
            <a href="https://github.com/lucasstinson/memory-card-game">
              <button className="project-code memory-game-button ">Code</button>
            </a>
          </div>
        </div>
        <div className="project-image-container memory-game">
          <img className="memory-game-image" alt="" src={memoryGame}></img>
        </div>
      </div>

      <div className="project-container resume-creator">
        <div className="project-image-container">
          <img
            className="resume-creator-image"
            alt=""
            src={resumeCreator}
          ></img>
        </div>
        <div className="project-info">
          <div className="project-title">Resume Builder</div>
          <div className="project-description">
            A quick and easy way to create your resume.
          </div>
          <div className="project-buttons-container">
            <a href="https://lucasstinson.github.io/resume-creator/">
              <button className="project-live resume-button">Live</button>
            </a>
            <a href="https://github.com/lucasstinson/resume-creator">
              <button className="project-code resume-button">Code</button>
            </a>
          </div>
        </div>
      </div>

      <div className="project-container portfolio">
        <div className="project-info">
          <div className="project-title">My Portfolio</div>
          <div className="project-description">
            You're already here, why not take a look around?!
          </div>
          <div className="project-buttons-container">
            <a href="https://github.com/lucasstinson/portfolio">
              <button className="project-code portfolio-button ">Code</button>
            </a>
          </div>
        </div>
        <div className="project-image-container portfolio">
          <img className="portfolio-image" alt="" src={portfolioSite}></img>
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
