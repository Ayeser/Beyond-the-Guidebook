
const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const secret = require("../package.json").secret;

const Schema = mongoose.Schema;

const usersSchema = new Schema({
  email: { type: String, lowercase: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true },
  userName: { type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true },
  hash: { type: String },
  salt: { type: String },
  bio: { type: String, required: false},
  homeCountry: { type: String, required: false},
  profilePicture: { type: String, required: false},
  placesVisited: { type: String, required: false },
  placesFuture: { type: String, required: false },
  date: { type: Date, default: Date.now }
});

usersSchema.plugin(uniqueValidator, {message: 'is already taken.'});

usersSchema.methods.setPassword = function(password){
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};

usersSchema.methods.validPassword = function(password) {
   var hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
   return this.hash === hash;
  };

  usersSchema.methods.generateJWT = function() {
      var today = new Date();
      var exp = new Date(today);
      exp.setDate(today.getDate() + 60);
    
      return jwt.sign({
        id: this._id,
        username: this.username,
        exp: parseInt(exp.getTime() / 1000),
      }, secret);
    };

    usersSchema.methods.toAuthJSON = function(){
        return {
          username: this.username,
          email: this.email,
          token: this.generateJWT(),
          bio: this.bio,
          profilePicture: this.profilePicture
        };
      };

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;