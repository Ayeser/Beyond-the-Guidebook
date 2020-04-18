const router = require("express").Router();
const bookRoutes = require("./books");
const countryRoutes = require("./countries");

router.use("/books", bookRoutes);
router.use("/countries", countryRoutes);

module.exports = router;
