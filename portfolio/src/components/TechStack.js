import React from "react";
import coder from "./coder1.svg";
import express from "./icons/expressjs.png";
import git from "./icons/git.png";
import java from "./icons/java.png";
import mongodb from "./icons/mongodb.png";
import nodejs from "./icons/nodejs.png";
import react from "./icons/react.png";
import redux from "./icons/redux.png";
import socketio from "./icons/socketio.svg";

const TechStack = () => {
  return (
    <section id="section-tech">
      <section className="tech-page">
        <div className="tech">
          <div className="image-div">
            <img className="coder" src={coder} alt="" />
          </div>
          <div className="tech-div">
            <h2>My Tech Stack</h2>
            <div className="underline"></div>
            <div className="tech-icons-div" id="tools">
              <div className="icon">
                <span className="icon-text">Node.js</span>
                <img src={nodejs} alt="node" />
              </div>
              <div className="icon">
                <span className="icon-text">React</span>
                <img src={react} alt="react" />
              </div>
              <div className="icon">
                <span className="icon-text">MongoDb</span>
                <img src={mongodb} alt="mongodb" />
              </div>
              <div className="icon">
                <span className="icon-text">Git</span>
                <img src={git} alt="git" />
              </div>
              <div className="icon">
                <span className="icon-text">GitHub</span>
                <img
                  src="https://img.icons8.com/nolan/128/github.png"
                  alt="github"
                />
              </div>
              <div className="icon">
                <span className="icon-text">JavaScript</span>
                <img
                  src="https://img.icons8.com/color/48/000000/javascript--v1.png"
                  alt="js"
                />
              </div>
              <div className="icon">
                <span className="icon-text">HTML</span>
                <img
                  src="https://img.icons8.com/color/144/000000/html-5--v1.png"
                  alt="html"
                />
              </div>
              <div className="icon">
                <span className="icon-text">CSS</span>
                <img
                  src="https://img.icons8.com/color/144/000000/css3.png"
                  alt="css"
                />
              </div>
              <div className="icon">
                <span className="icon-text">Bootstrap</span>
                <img
                  src="https://img.icons8.com/color/144/000000/bootstrap.png"
                  alt="bootstrap"
                />
              </div>
              <div className="icon">
                <span className="icon-text">Express.js</span>
                <img src={express} alt="express" />
              </div>
              <div className="icon">
                <span className="icon-text">Socket.IO</span>
                <img src={socketio} alt="socket io" />
              </div>
              <div className="icon">
                <span className="icon-text">Redux</span>
                <img src={redux} alt="redux" />
              </div>
              <div className="icon">
                <span className="icon-text">Python</span>
                <img
                  src="https://img.icons8.com/color/144/000000/python.png"
                  alt="python"
                />
              </div>
              <div className="icon">
                <span className="icon-text">C++</span>
                <img
                  src="https://img.icons8.com/color/144/4a90e2/c-plus-plus-logo.png"
                  alt="c++"
                />
              </div>
              <div className="icon">
                <span className="icon-text">Java</span>
                <img src={java} alt="java" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default TechStack;
