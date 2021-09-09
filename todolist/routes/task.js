const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const Task = require("../model/Task");

router.post(
  "/add",
  check("title", "title is required").not().isEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors);
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const title = req.body.title;

    try {
      let task = new Task({ title });

      await task.save();

      res.status(200).json({ task });
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Server Error");
    }
  }
);

router.get("/view", async (req, res) => {
  await Task.find({}, (err, task) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    return res.status(200).json({ success: true, data: task });
  }).catch((err) => console.log(err));
});

router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  Task.findByIdAndDelete(id, function (err, docs) {
    if (err) {
      return res.json({ err });
    }
    return res.json(docs);
  });
});

module.exports = router;
