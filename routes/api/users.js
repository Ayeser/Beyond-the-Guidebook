const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/users/:userName"
router.route("/:userName")
  .get(userController.login)

// Matches with "/api/users/create/:userName"
router
  .route("/create/:userName")
  .get(userController.createUser)

module.exports = router;
