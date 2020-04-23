const db = require("../models");

module.exports = {
  login: function(req, res) {
    db.Users
      .find( { "userName" : req.params.userName } )
      .then(function(dbUser) {
        if (res.hash === req.params.hash) {
            res.json(dbUser);
            return ("Successfully logged in!")
        } else {
            return ("I'm sorry, that login information does not match our records");
        }
      })
      .catch(err => res.status(422).json(err));
  },
  createUser: function(req, req) {
      db.Users
      .create(req.body).then(function(dbCreate) {
          res.json(dbCreate);
      })
  }
};
