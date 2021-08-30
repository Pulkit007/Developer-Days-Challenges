import React from "react";
import coder from "./intro_programmer.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faCommentAlt } from "@fortawesome/free-solid-svg-icons";

const Top = () => {
  return (
    <div className="outer">
      <div className="inner">
        <div className="left about-me">
          <main>
            <h1 className="welcome">
              <span id="hi">Hi,</span> I'm Pulkit
            </h1>
            <h2 className="sean">A fullstack developer</h2>
            <div className="para">
              <div>
                <p>
                  I am a Computer Science undergraduate at Indian Institute of
                  Information Technology, Design and Manufacturing. I love
                  problem solving and frequently participate in various coding
                  contest. I am full stack developer with decent knowledge of
                  MERN stack.
                </p>
              </div>
            </div>
            <div className="btn-container">
              <a href="#section-contact">
                <button className="contact-btn">
                  <FontAwesomeIcon icon={faCommentAlt} /> GET IN TOUCH
                </button>
              </a>
              <button className="project-btn">
                <FontAwesomeIcon icon={faCode} /> SEE MY WORK
              </button>
            </div>
            <div className="social-icons">
              <a href="https://github.com/Pulkit007">
                <img
                  src="https://img.icons8.com/nolan/128/github.png"
                  alt="github"
                />
              </a>
              <a
                style={{ marginLeft: "20px" }}
                href="https://www.linkedin.com/in/pulkit-bhargava-9491231b6"
              >
                <img
                  src="https://img.icons8.com/nolan/128/linkedin-circled.png"
                  alt="linkedin"
                />
              </a>
              <a
                style={{ marginLeft: "20px" }}
                href="https://www.instagram.com/invites/contact/?i=11z4mjxpb5hwm&utm_content=2jcrh4n"
              >
                <img
                  src="https://img.icons8.com/nolan/128/instagram-new.png"
                  alt="instagram"
                />
              </a>
            </div>
          </main>
        </div>
        <div className="right programmer-image">
          <img src={coder} alt="coder" />
        </div>
      </div>
    </div>
  );
};

export default Top;
