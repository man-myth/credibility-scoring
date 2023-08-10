const db = require("../models");
const Scores = db.scores;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  Scores.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while retrieving the loans databse.",
      });
    });
};
