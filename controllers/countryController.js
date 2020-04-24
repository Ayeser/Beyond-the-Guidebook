const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    console.log("This works yeah!");
    db.Countries
      .find({})
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByCountry: function(req, res) {
    db.Countries
      .find( { "name" : req.params.name } )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Countries
      .findOneAndUpdate({ _id: req.params.country }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
