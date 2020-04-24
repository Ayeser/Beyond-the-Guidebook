
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const usersSchema = new Schema({
  email: { type: String, lowercase: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true },
  userName: { type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true },
  password: { type: String, required: true},
  bio: { type: String, required: false},
  homeCountry: { type: String, required: false},
  profilePicture: { type: String, required: false},
  placesVisited: { type: String, required: false },
  placesFuture: { type: String, required: false },
  date: { type: Date, default: Date.now }
});

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;