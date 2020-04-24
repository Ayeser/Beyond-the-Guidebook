const db = require("../models");

module.exports = {
  createUser: function(req, req) {
      db.Users
      .create(req.body)
      .then(function(dbCreate) {
          res.json(dbCreate);
      })
      .catch(err => res.status(422).json(err));
  }
};
