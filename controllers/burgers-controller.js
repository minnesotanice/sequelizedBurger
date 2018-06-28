var express = require("express");

var router = express.Router();

// REQUIRE MODELS
var db = require("../models");

// Create all our routes and set up logic within those routes where required.


module.exports = function(app) {

  // GET route for getting all of the burgers
  app.get("/", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Burger.findAll({}).then(function(dbBurger) {
      // We have access to the burgers as an argument inside of the callback function
      // res.json(dbBurger);

      var hbsObject = {
        burgers: dbBurger
      };

      res.render("index", hbsObject);

    });
    
  });

  // POST route for saving a new burger
  app.post("/", function(req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a burger_name
    // and eaten property
    db.Burger.create({
      burger_name: req.body.burger_name,
      eaten: req.body.eaten
    }).then(function(dbBurger) {
      // We have access to the new burger as an argument inside of the callback function
      res.json(dbBurger);


    });
  });

  // DELETE route for deleting burgers. We can get the id of the burger to be deleted from
  // req.params.id
  app.delete("/", function(req, res) {
    // We just have to specify which burger we want to destroy with "where"
    db.Burger.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbBurger) {
      res.json(dbBurger);
    });

  });

  // PUT route for updating burgers. We can get the updated burger data from req.body
  app.put("/api/burger/:id", function(req, res) {
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.Burger.update({
      eaten: req.body.eaten
    }, {
      where: {
        id: req.params.id
      }
    }).then(function(dbBurger) {
      res.json(dbBurger);
    });
  });

};