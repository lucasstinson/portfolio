import React from "react";
import "./projects.css";
import memoryGame from "../../assets/images/memoryGamePhoneMockMobile.png";
import shoppingCart from "../../assets/images/shoppingCartDisplay.png";
import portfolioSite from "../../assets/images/portfolioDisplay.png";
import { Link } from "react-router-dom";
import hyper from "../../assets/images/hyperDisplayMobile.png";

const Projects = () => {
  return (
    <div className="Projects">
      <div className="projects-title">
        My recent <span className="highlight">Projects</span>
      </div>
      <div className="project-container hyper">
        <div className="project-info">
          <div className="project-title">Hyper</div>
          <div className="project-description">
            A mock Twitter that allows users to create a profile, post messages,
            and interact with others.
          </div>
          <div className="project-buttons-container">
            <Link to="https://lucasstinson.github.io/hyper/">
              <button className="project-live hyper-button ">Live</button>
            </Link>
            <Link to="https://github.com/lucasstinson/hyper">
              <button className="project-code hyper-button ">Code</button>
            </Link>
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
          <div className="project-title shopping-cart">Shopping cart</div>
          <div className="project-description">
            This website is a recreation of stor for computer parts. You are
            able navigate all the way to the checkout page. You can add or
            subtract items from your cart and witness the real-time cart update.
          </div>
          <div className="project-buttons-container">
            <Link to="https://lucasstinson.github.io/shopping-cart/">
              <button className="project-live shopping-cart-button">
                Live
              </button>
            </Link>
            <Link to="https://github.com/lucasstinson/shopping-cart">
              <button className="project-code shopping-cart-button">
                Code
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="project-container memory-game">
        <div className="project-info">
          <div className="project-title">Memory Game</div>
          <div className="project-description">
            This game tests your memory. You'll be presented with multiple
            images. The images will shuffle each-time they are clicked. DON'T
            click an image twice, else the score will reset. Can you get the Max
            Score?
          </div>
          <div className="project-buttons-container">
            <Link to="https://lucasstinson.github.io/memory-card-game/">
              <button className="project-live memory-game-button ">Live</button>
            </Link>
            <Link to="https://github.com/lucasstinson/memory-card-game">
              <button className="project-code memory-game-button ">Code</button>
            </Link>
          </div>
        </div>
        <div className="project-image-container memory-game">
          <img className="memory-game-image" alt="" src={memoryGame}></img>
        </div>
      </div>

      <div className="project-container portfolio">
        <div className="project-image-container portfolio">
          <img className="portfolio-image" alt="" src={portfolioSite}></img>
        </div>
        <div className="project-info">
          <div className="project-title">Portfolio</div>
          <div className="project-description">
            You're looking at it. Why not take a look around!
          </div>
          <div className="project-buttons-container">
            <Link to="https://lucasstinson.github.io/portfolio/">
              <button className="project-live portfolio-button ">Live</button>
            </Link>
            <Link to="https://github.com/lucasstinson/portfolio">
              <button className="project-code portfolio-button ">Code</button>
            </Link>
          </div>
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
