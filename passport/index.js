const passport = require('passport')
const db = require('../models/')
const LocalStrategy = require('passport-local')
const bcrypt = require('bcryptjs')

// Local Strategy
passport.use(
    new LocalStrategy((username, password, done) => {
        // Match User
        db.Users.findOne({ username: username, password: password }, function(err, user) {
                return done(null, user);
              })
            }))

module.exports = passport;