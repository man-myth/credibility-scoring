module.exports = app => {
    const scores = require("../controllers/scores.controller.js");
  
    var router = require("express").Router();
  
    // get all client
    router.get("/scores", scores.findAll);
  
  };