const db = require("../models");
const Loans = db.loans;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  Loans.findAll()
  .then((data) => {
    res.send(data);
  })
  .catch((err) => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving the loans databse.",
    });
  });
};

exports.findLoans = (req, res) => {
  const id = req.params.id;

  Loans.findAndCountAll({
    where:{
        client_id: id,
        loan_status: 'Approved'
    }
  })
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find loans with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving loans with client id=" + id
      });
    });

};
// Find a single Tutorial with an id
exports.findOne = (req, res) => {};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {};
