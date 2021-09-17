import React, { useState } from "react";
import FileBase from "react-file-base64";
import axios from "axios";
import "./App.css";

function App() {
  const [postData, setPostData] = useState({
    name: "",
    email: "",
    roll: "",
    dept: "",
    file: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/", postData)
      .then((res) => {
        alert("Submitted!");
        console.log(res);
        postData.name = "";
        postData.email = "";
        postData.roll = "";
        postData.dept = "";
        postData.file = "";
      })
      .catch((err) => {
        alert("Please try again!");
        console.log(err.message);
        postData.name = "";
        postData.email = "";
        postData.roll = "";
        postData.dept = "";
        postData.file = "";
      });
  };
  return (
    <div className="App">
      <div className="registration-form">
        <div className="inner">
          <h1>Assignment Submission Form</h1>
          <form onSubmit={handleSubmit}>
            <div class="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Name"
                required
                value={postData.name}
                onChange={(e) =>
                  setPostData({ ...postData, name: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                className="form-control"
                id="email"
                placeholder="Email"
                required
                value={postData.email}
                onChange={(e) =>
                  setPostData({ ...postData, email: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label>Roll No</label>
              <input
                type="text"
                className="form-control"
                id="roll-no"
                placeholder="Roll No"
                required
                value={postData.roll}
                onChange={(e) =>
                  setPostData({ ...postData, roll: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label>Department</label>
              <input
                type="text"
                className="form-control"
                id="dept"
                placeholder="Department"
                required
                value={postData.dept}
                onChange={(e) =>
                  setPostData({ ...postData, dept: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label>Attach Pdf</label>
              <br />
              <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) =>
                  setPostData({ ...postData, file: base64 })
                }
              />
            </div>
            <button
              id="form-btn"
              type="submit"
              className="btn btn-primary mt-3"
              onSubmit={handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
