const router = require("express").Router();
const countryRoutes = require("./countries");

router.use("/countries", countryRoutes);

module.exports = router;
