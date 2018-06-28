// DEPENDENCIES
var express = require("express");
var bodyParser = require("body-parser");

// SETUP FOR EXPRESS APP
var app = express();
var PORT = process.env.PORT || 8083;

// STATIC DIRECTORY FOR IMAGES AND CSS 
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// ROUTES
var routes = require("./controllers/burgers-controller.js")(app);

// app.use(routes);
var db = require("./models");

db.sequelize.sync().then(function() {

});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
