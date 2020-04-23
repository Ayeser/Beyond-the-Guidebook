const router = require("express").Router();
const countryController = require("../../controllers/countryController");

// Matches with "/api/countries"
router.route("/")
  .get(countryController.findAll)

// Matches with "/api/countries/:name"
router.route("/specificCountry/:name")
  .get(countryController.findByCountry)

module.exports = router;
