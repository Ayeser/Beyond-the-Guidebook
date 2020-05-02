const router = require("express").Router();
const countryRoutes = require("./countries");
const userRoutes = require("./users");

router.use("/countries", countryRoutes);
router.use("/users", userRoutes);

module.exports = router;
