const db = require("../models");
const Client = db.clients;
const Op = db.Sequelize.Op;
const fs = require('fs');
const path = require('path');


// Set the directory where you want to save the uploaded images
const uploadDirectory = path.join('./', 'uploads', 'profile-pictures');

// Create the upload directory if it doesn't exist
if (!fs.existsSync(uploadDirectory)) {
  fs.mkdirSync(uploadDirectory);
}
// Create and Save a new client

// Retrieve all clients from the database.
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

exports.create = (req, res) => {
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const base64Data = req.body.image.replace(/^data:image\/\w+;base64,/, '');
  const buffer = Buffer.from(base64Data, 'base64');

  // Generate a unique file name (you can use any logic you prefer)
  const fileName = `${Date.now()}_image.jpg`;

  // Define the path to save the file
  const filePath = path.join(uploadDirectory, fileName);
  // console.log(filePath)
  // Save the image to the specified path
  fs.writeFile(filePath, buffer, 'base64', (err) => {
    if (err) {
      console.error('Error:', err);
      res.status(500).json({ error: 'Failed to save the image' });
    } else {
      console.log(`Image saved as ${filePath}`);
    }
  });

  // Create a Client
  const client = {
    name: req.body.name,
    picture: fileName,
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
    properties: req.body.properties,

  };

  // Save client in the database
  Client.create(client)
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

exports.getImage = (req, res) => {
  const imagePath = path.join(uploadDirectory, req.params.image);
  ;
  fs.readFile(imagePath, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('no image found');
    } else {
      // Set the appropriate content type for the image
      res.contentType('image/jpeg');
      res.send(data);
    }
  });
}
// Find a single client with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Client.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Client with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Client with id=" + id
      });
    });
};

// Update a Client by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Client.update(req.body, {
    where: { client_id: id }
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

exports.delete = (req, res) => {
  const id = req.params.id;

  Client.destroy({
    where: { client_id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "client was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Client with id=${id}. Maybe client was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Client with id=" + id,
        error: err
      });
    });
};

