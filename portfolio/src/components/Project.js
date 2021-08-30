import React from "react";
import Carousel from "react-bootstrap/Carousel";
import devhub from "./projects/devhub.png";
import relevent from "./projects/rel-event.png";
import memories from "./projects/memories.png";
import "bootstrap/dist/css/bootstrap.min.css";

const Project = () => {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="underline2"></div>
      <div className="showCase">
        <Carousel>
          <Carousel.Item>
            <img className="d-block" src={devhub} alt="First slide" />
            <div className="details">
              <h3>Devhub</h3>
              <p>
                A full stack web application created using MERN stack. This
                application allows user to create their account and post stuffs
                which they like, they can also have conversation with other
                users with the help of comment functionality.
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block" src={relevent} alt="Second slide" />
            <div className="details">
              <h3>Rel-Event</h3>
              <p>
                An event manager application created during a hackathon. It's a
                full stack application created using MERN stack. Most of the
                styling part has been done through bootstrap.
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block" src={memories} alt="Third slide" />
            <div className="details">
              <h3>Memories</h3>
              <p>
                A social-media platform with full signup/login functionality. It
                allows users to post pictures and other users can like it with
                the help of like button. It also allows user to update or delete
                their previous posts.
              </p>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Project;
