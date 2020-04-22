
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  email: { type: String, required: true },
  culture: { type: String, required: true },
  description: { type: String, required: false},
  profilePicture: { type: String, required: false},
  date: { type: Date, default: Date.now }
});

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;