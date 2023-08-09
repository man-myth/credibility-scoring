module.exports = app => {
    const loans = require("../controllers/loans.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.get("/loans", loans.findAll);
    router.get("/loans/count/:id", loans.countLoans);
    router.get("/loans/client/:id", loans.findAllLoans);
    router.get("/loans/type/:type", loans.findLoansByType)
    
  
    // // Retrieve all Tutorials
    // router.get("/", clients.findAll);
  
    // // Retrieve all published Tutorials
    // router.get("/published", clients.findAllPublished);
  
    // // Retrieve a single Tutorial with id
    // router.get("/:id", clients.findOne);
  
    // // Update a Tutorial with id
    // router.put("/:id", clients.update);
  
    // // Delete a Tutorial with id
    // router.delete("/:id", clients.delete);
  
    // // Delete all Tutorials
    // router.delete("/", clients.deleteAll);
  
    app.use('/api', router);
  };