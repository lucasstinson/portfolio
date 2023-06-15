import React from "react";
import css from "../../../assets/images/tech-icons/css.png";
import firebase from "../../../assets/images/tech-icons/firebase.png";
import git from "../../../assets/images/tech-icons/git.png";
import html from "../../../assets/images/tech-icons/html.png";
import javascript from "../../../assets/images/tech-icons/javascript.png";
import jest from "../../../assets/images/tech-icons/jest.png";
import node from "../../../assets/images/tech-icons/nodejs.png";
// import linux from "../../../assets/images/tech-icons/linux.png";
import npm from "../../../assets/images/tech-icons/npm.png";
import postgres from "../../../assets/images/tech-icons/postgres.png";
import python from "../../../assets/images/tech-icons/python.png";
import reactrouter from "../../../assets/images/tech-icons/react-router.svg";
import react from "../../../assets/images/tech-icons/react.png";
import typescript from "../../../assets/images/tech-icons/typescript.png";
import webpack from "../../../assets/images/tech-icons/webpack.png";

const Skills = () => {
  const techSkills = [
    { class: "css", image: css, title: "CSS" },
    { class: "firebase", image: firebase, title: "Firebase" },
    { class: "git", image: git, title: "Git" },
    { class: "html", image: html, title: "HTML" },
    { class: "javascript", image: javascript, title: "Javascript" },
    { class: "jest", image: jest, title: "Jest" },
    { class: "node", image: node, title: "Node" },
    { class: "postgres", image: postgres, title: "Postgres" },
    { class: "npm", image: npm, title: "NPM" },
    { class: "python", image: python, title: "Python" },
    { class: "react-router", image: reactrouter, title: "React Router" },
    { class: "react", image: react, title: "React" },
    { class: "typescript", image: typescript, title: "Typescript" },
    { class: "webpack", image: webpack, title: "Webpack" },
  ];

  let skillTree = techSkills.map((skill) => (
    <img
      className={`tech-icon ${skill.class}`}
      src={`${skill.image}`}
      alt=""
      title={skill.title}
      key={skill.title}
    ></img>
  ));
  return skillTree;
};

export default Skills;
