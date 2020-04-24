const router = require("express").Router();
const countryController = require("../../controllers/countryController");
const db = require("../../models");

// Matches with "/api/countries"
router.get("/", (req, res) => {
  db.Countries
  .find({})
  .sort({ date: -1 })
  .then(dbModel => res.json(dbModel))
  .catch(err => res.status(422).json(err));
// countryController.findAll()
// .then(res => res.status(200).json(res))
// .catch(err => res.status(400).json(err))

})

// Matches with "/api/countries/:name"
router.route("/specificCountry/:name")
  .get(countryController.findByCountry)

module.exports = router;
