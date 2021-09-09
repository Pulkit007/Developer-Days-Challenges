const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const app = express();
const task = require("./routes/task");

connectDB();

app.use(express.json({ extended: false }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Working");
});

app.use("/api/task", task);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
