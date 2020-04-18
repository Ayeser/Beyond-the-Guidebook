const router = require("express").Router();
const countryController = require("../../controllers/countryController");

// Matches with "/api/country"
router.route("/")
  .get(countryController.findAll)

// Matches with "/api/country/:name"
router
  .route("/:name")
  .get(countryController.findByCountry)

module.exports = router;
