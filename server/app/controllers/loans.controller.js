const db = require("../models");
const Loans = db.loans;
const Clients = db.clients;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  Loans.findAll({
    // include:[{
    //   model:Clients
    // }]
  })
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

exports.countLoans = (req, res) => {
  const id = req.params.id;

  Loans.findAndCountAll({
    where: {
      client_id: id,
    },
  })
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find loans with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving loans with client id=" + id,
      });
    });
};

exports.findAllLoans = (req, res) => {
  const id = req.params.id;

  Loans.findAll({
    where: {
      client_id: id,
    }
  })
    .then((data) => {
      if (data) {
        console.log(data)
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find loans with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving loans with client id=" + id,
      });
    });
};

exports.findLoansByType = (req, res) => {
  const type = req.params.type;
  Loans.findAll({
    where: {
      loan_status: type,
    },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving approved loans",
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Loans.destroy({
    where: { loan_id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Loan was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Loan with id=${id}. Maybe Loan was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Loan with id=" + id,
        error: err
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Loans.update(req.body, {
    where: { loan_id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Client was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Client with id=${id}. Maybe Client was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Client with id=" + id
      });
    });
 };

 exports.create = (req, res) => {
  if (!req.body.client_id) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Tutorial
  const loan = {
    client_id: req.body.client_id,
    purpose: req.body.purpose,
    loan_status: req.body.purpose.loan_status,
    loan_amount: req.body.loan_amount,
    guarantors: req.body.guarantors,
    coapplicant: req.body.coapplicant,
    duration: req.body.duration,
    validated_by: req.body.validated_by,
    loan_type: req.body.loan_type,
  };

  // Save Tutorial in the database
  Loans.create(loan)
    .then(data => {
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


// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {};
