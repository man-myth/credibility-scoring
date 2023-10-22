const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./app/models");
db.sequelize.sync()
  .then(() => {
  console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });;
const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json({limit: '20mb'}));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({limit: '20mb', extended: true }));

// simple route
// app.get("/", (req, res) => {
//   // res.json({ message: "now Welcome to credit-scoring application."});
//   res.send(db.clients);

// });

require("./app/routes/client.routes")(app);
require("./app/routes/loans.routes")(app);
require("./app/routes/scores.routes")(app);


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});