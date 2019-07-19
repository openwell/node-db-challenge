const express = require("express");
const db = require("./projects_model");

const router = express.Router();

router.get("/", (req, res) => {
  try {
    db.getProject().then(data => {
      return res.status(200).json({
        data: data
      });
    });
  } catch (err) {
    return res.status(500).send(err);
  }
});

module.exports = router;
