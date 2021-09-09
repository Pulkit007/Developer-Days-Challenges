import React from "react";
import { getTasks, deleteTask } from "../api/api";
import { useEffect, useState } from "react";

const ViewTask = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks().then((res) => {
      console.log(res);
      setTasks(res);
    });
  }, []);

  if (tasks.length === 0) {
    return (
      <div>
        <h1>View Tasks</h1>
        <h3>You does not have anything in the todolist</h3>
      </div>
    );
  }
  return (
    <div>
      <h1>View Tasks</h1>
      <div className="list-container">
        {tasks.map((task) => {
          return (
            <div key={task._id} className="list">
              <h4 className="title">{task.title}</h4>
              <button
                className="remove"
                onClick={() => {
                  deleteTask(task._id);
                  window.location.reload(false);
                }}
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ViewTask;
