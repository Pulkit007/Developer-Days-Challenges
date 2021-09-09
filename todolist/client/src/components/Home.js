import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Todolist</h1>
      <h3>This is a todolist created as a challenge for Developer Days</h3>
      <div className="btn-container">
        <Link to="/add">
          <button className="btn">Add a new task</button>
        </Link>
        <Link to="/view">
          <button className="btn">View all the pending task</button>
        </Link>
      </div>
      <p>@Copyright Pulkit Bhargava</p>
    </div>
  );
};

export default Home;
