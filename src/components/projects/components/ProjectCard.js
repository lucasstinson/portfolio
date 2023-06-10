import React from "react";
import hyper from "../../../assets/images/hyperDisplayMobile.png";
import shoppingCart from "../../../assets/images/shoppingCartDisplay.png";
import memoryGame from "../../../assets/images/memoryGamePhoneMockMobile.png";
import resumeCreator from "../../../assets/images/resumeCreatorDisplay.png";
import portfolioSite from "../../../assets/images/portfolioDisplay.png";

const ProjectCard = () => {
  const projectVariables = [
    {
      class: "hyper",
      title: "Hyper Social Media App",
      description:
        "A mock Twitter that allows users to create a profile, post messages, and interact with others.",
      buttonClass: "hyper-button",
      live: "https://lucasstinson.github.io/hyper/",
      github: "https://github.com/lucasstinson/hyper",
      imageClass: "hyper-image",
      image: hyper,
    },
    {
      class: "shopping-cart",
      title: "Shopping Cart",
      description:
        "Navigate to the checkout page, add or subtract items, and see real-time cart updates.",
      buttonClass: "shopping-cart-button",
      live: "https://lucasstinson.github.io/shopping-cart/",
      github: "https://github.com/lucasstinson/shopping-cart",
      imageClass: "shopping-cart-image",
      image: shoppingCart,
    },
    {
      class: "memory-game",
      title: "Memory Game",
      description: "Put your memory to the test! Can you get the max score?",
      buttonClass: "memory-game-button",
      live: "https://lucasstinson.github.io/memory-card-game/",
      github: "https://github.com/lucasstinson/memory-card-game",
      imageClass: "memory-game-image",
      image: memoryGame,
    },
    {
      class: "resume-creator",
      title: "Resume Builder",
      description: "A quick and easy way to create your resume.",
      buttonClass: "resume-button",
      live: "https://lucasstinson.github.io/resume-creator/",
      github: "https://github.com/lucasstinson/resume-creator",
      imageClass: "resume-creator-image",
      image: resumeCreator,
    },
    {
      class: "portfolio",
      title: "My Portfolio",
      description: "You're already here, why not take a look around?!",
      buttonClass: "ortfolio-button",
      live: undefined,
      github: "https://github.com/lucasstinson/portfolio",
      imageClass: "portfolio-image",
      image: portfolioSite,
    },
  ];

  let projectFormatted = projectVariables.map((project) => (
    <div
      className={`project-container ${project.class}`}
      key={`${project.class}`}
    >
      <div className="project-info">
        <div className="project-title">{project.title}</div>
        <div className="project-description">{project.description}</div>
        <div className="project-buttons-container">
          {project.live ? (
            <a href={project.live}>
              <button className={`project-live ${project.buttonClass}`}>
                Live
              </button>
            </a>
          ) : (
            ""
          )}

          <a href={project.github}>
            <button className={`project-live ${project.buttonClass}`}>
              Code
            </button>
          </a>
        </div>
      </div>
      <div className={`project-image-container  ${project.class}`}>
        <img
          className={project.imageClass}
          alt=""
          src={`${project.image}`}
        ></img>
      </div>
    </div>
  ));

  return projectFormatted;
};

export default ProjectCard;
