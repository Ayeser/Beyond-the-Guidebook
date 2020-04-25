
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;
mongoose.promise = Promise;

var usersSchema = new Schema({
  // email: { type: String, lowercase: true, required: true, match: [/\S+@\S+\.\S+/, 'is invalid'], index: true },
  // username: { type: String, lowercase: true, unique: true, required: [true, "Please enter a username"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true }, 
  email: { type: String },
  username: { type: String },
  password: { type: String },
  bio: { type: String, required: false},
  homeCountry: { type: String, required: false},
  profilePicture: { type: String, required: false},
  placesVisited: { type: String, required: false },
  placesFuture: { type: String, required: false },
  date: { type: Date, default: Date.now }
});


usersSchema.methods = {
  checkPassword: function (inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password)
  },
  hashPassword: plainTextPassword => {
    return bcrypt.hashSync(plainTextPassword, 10)
  }
};

//hooks for pre-saving
usersSchema.pre('save', function (next) {
  if (!this.password) {
    console.log('models/users.js =======NO PASSWORD PROVIDED ========')
    next()
  } else {
    console.log('models/users.js hashPassword in pre save');
    this.password = this.hashPassword(this.password);
    next()
  }
})

const Users = mongoose.model("Users", usersSchema);

module.exports = Users