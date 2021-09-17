import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddTask from "./components/AddTask";
import ViewTask from "./components/ViewTask";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/add" component={AddTask} />
          <Route exact path="/all" component={ViewTask} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
