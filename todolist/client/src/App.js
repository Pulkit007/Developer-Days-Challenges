import "./App.css";
import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import AddTask from "./components/AddTask";
import ViewTask from "./components/ViewTask";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/add" component={AddTask} />
        <Route exact path="/view" component={ViewTask} />
      </Router>
    </div>
  );
}

export default App;
