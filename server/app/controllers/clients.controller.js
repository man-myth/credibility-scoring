const db = require("../models");
const Client = db.clients;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  Client.findAll()
  .then((data) => {
    res.send(data);
  })
  .catch((err) => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving clients.",
    });
  });
};

exports.create = (req,res)=>{
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Tutorial
  const client = {
    name: req.body.name,
    picture: req.body.picture,
    address: req.body.address,
    gender: req.body.gender,
    birthday: req.body.birthday,
    contact: req.body.contact,
    credit_score: req.body.credit_score,
    marital_status: req.body.marital_status,
    dependents: req.body.dependents,
    education: req.body.education,
    housing: req.body.housing,
    years_residence: req.body.years_residence,
    employment: req.body.employment,
    industry: req.body.industry,
    loan_history: req.body.loan_history,
    income: req.body.income,
    expenses: req.body.expenses,
    savings: req.body.savings,
    properties: req.body.properties
  };
  console.log(client)

  // Save Tutorial in the database
  Client.create(client)
    .then(data => {
      console.log("added new client")
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while adding the client."
      });
    });
}


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
