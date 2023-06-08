import React from "react";
import "./projects.css";
import memoryGame from "../../assets/images/memoryGamePhoneMockMobile.png";
import shoppingCart from "../../assets/images/shoppingCartDisplay.png";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="Projects">
      <div className="project-container memory-game">
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
      <div className="project-container shopping-cart">
        <div className="project-image-container">
          <img className="shopping-cart-image" alt="" src={shoppingCart}></img>
        </div>
        <div className="project-info">
          <div className="project-title shopping-cart">Shopping cart</div>
          <div className="project-description">
            This website recreates a computer parts business. You are able to
            pick your computer parts and navigate all the way to the checkout
            page. You can add or subtract items from your cart and witness the
            real-time cart update.
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
