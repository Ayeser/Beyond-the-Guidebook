const router = require("express").Router();
const userController = require("../../controllers/userController");


// Matches with "/api/users/create/:userName"
router
  .route("/create/:userName")
  .post(userController.createUser)

module.exports = router;
