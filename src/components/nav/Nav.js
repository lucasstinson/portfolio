import React, { useState, useEffect } from "react";
import "./nav.css";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();

  const [url, setUrl] = useState(null);

  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  return (
    <div className="nav">
      <Link to="/" className="nav-link">
        <div className="home-logo">Lucas Stinson</div>
      </Link>
      <div className="nav-links">
        <Link to="/" className={"nav-link" + (url === `/` ? " active" : "")}>
          <div
            className="home-link"
            onMouseOver={(e) => {
              e.currentTarget.style.color = "#FFC300";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#FFFFFF";
            }}
          >
            Home
          </div>
        </Link>
        <Link
          to="/about"
          className={"nav-link" + (url === `/about` ? " active" : "")}
        >
          <div
            className="about-link"
            onMouseOver={(e) => {
              e.currentTarget.style.color = "#FFC300";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#FFFFFF";
            }}
          >
            About
          </div>
        </Link>
        <Link
          to="/projects"
          className={"nav-link" + (url === `/projects` ? " active" : "")}
        >
          <div
            className="about-link"
            onMouseOver={(e) => {
              e.currentTarget.style.color = "#FFC300";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#FFFFFF";
            }}
          >
            Projects
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
