const router = require("express").Router();
const db = require("../../models");

// Matches with "/api/countries"
router.get("/", (req, res) => {
  db.Countries
  .find({})
  .sort({ date: -1 })
  .then(dbModel => res.json(dbModel))
  .catch(err => res.status(422).json(err));
})

// Matches with "/api/countries/:name"
router.get("/specificCountry/:name", (req, res) => {
  db.Countries
      .find( { "name" : req.params.name } )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
})

router.get("/specificCountry/:name", (req, res) => {
  db.Countries
      .find( { "name" : req.params.name } )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
})

module.exports = router;
