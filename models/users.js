
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');
mongoose.promise = Promise;

var usersSchema = new Schema({
  email: { type: String, lowercase: true, required: true, match: [/\S+@\S+\.\S+/, 'is invalid'], index: true },
  username: { type: String, lowercase: true, unique: true, required: [true, "Please enter a username"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true }, 
  password: { type: String },
  bio: { type: String, required: false},
  homeCountry: { type: String, required: false},
  profilePicture: { type: String, required: false},
  placesVisited: { type: String, required: false },
  placesFuture: { type: String, required: false },
  date: { type: Date, default: Date.now }
});


usersSchema.plugin(passportLocalMongoose)

const Users = mongoose.model("Users", usersSchema);

module.exports = Users