import React from "react";
import "./projects.css";
import ProjectCard from "./components/ProjectCard";

const Projects = () => {
  return (
    <div className="Projects">
      <div className="projects-title">
        My Recent <span className="highlight">Projects</span>
      </div>
      <ProjectCard />
    </div>
  );
};

export default Projects;
