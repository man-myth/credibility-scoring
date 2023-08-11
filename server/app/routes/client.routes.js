module.exports = app => {
    const clients = require("../controllers/clients.controller.js");
  
    var router = require("express").Router();
  
    // get all client
    router.get("/clients", clients.findAll);

  // Create a new Client
    router.post("/clients", clients.create);

  
    // // Retrieve all published Tutorials
    // router.get("/published", clients.findAllPublished);
  
    // // Retrieve a single Tutorial with id
    router.get("/clients/:id", clients.findOne);
  
    // // Update a Tutorial with id
    router.put("/clients/:id", clients.update);
  
    // // Delete a Tutorial with id
    router.delete("/clients/:id", clients.delete);
  
    app.use('/api', router);
  };