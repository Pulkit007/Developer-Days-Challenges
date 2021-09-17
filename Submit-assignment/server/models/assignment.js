// Calling the "mongoose" package
const mongoose = require("mongoose");

// Creating a Schema for uploaded files
const assignmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  roll: {
    type: String,
    required: true,
  },
  dept: {
    type: String,
    required: true,
  },
  submittedAt: {
    type: Date,
    default: Date.now,
  },
  file: {
    type: String,
    required: true,
  },
});

// Creating a Model from that Schema
const Assignment = mongoose.model("Assignment", assignmentSchema);

// Exporting the Model to use it in app.js File.
module.exports = Assignment;
