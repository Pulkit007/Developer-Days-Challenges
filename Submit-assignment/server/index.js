const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const File = require("./models/assignment");

const app = express();
dotenv.config();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello to Memories API");
});

app.post("/", async (req, res) => {
  const post = req.body;
  const newPost = new File({
    ...post,
  });
  newPost
    .save()
    .then(() => {
      return res.status(201).json(newPost);
    })
    .catch((error) => {
      console.log(error.message);
      return res.status(400).json({ error: error });
    });
});

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server is running on : ${PORT}`))
  )
  .catch((error) => console.log(error.mesage));
