import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { createTask } from "../api/api";
import { Row, Col, Toast } from "react-bootstrap";
import ToastContainer from "react-bootstrap/ToastContainer";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = {
      title: title,
    };
    console.log(task);
    createTask(task)
      .then((res) => {
        if (res.status === 200) {
          setShow(true);
        } else {
          alert("Something went wrong, please try again");
        }
        setTitle("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Row>
        <Col xs={6}>
          <ToastContainer position="top-end">
            <Toast
              onClose={() => setShow(false)}
              show={show}
              delay={3000}
              autohide
            >
              <Toast.Body>Task Added !</Toast.Body>
            </Toast>
          </ToastContainer>
        </Col>
      </Row>
      <h1>Add a task</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="task-input"
          autoComplete="off"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="btn">Add</button>
      </form>
      <Link to="/all">
        <button className="to-view">View all the tasks</button>
      </Link>
      <p>@Copyright Pulkit Bhargava</p>
    </div>
  );
};

export default AddTask;
