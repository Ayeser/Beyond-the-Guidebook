const passport = require('passport')
const Users = require('../models/users')
const LocalStrategy = require('passport-local')

passport.use(new LocalStrategy(
	// Our user will sign in using an email, rather than a "username"
	{
	  usernameField: "email"
	},
	function(email, password, done) {
	  // When a user tries to sign in this code runs
	  db.Users.findOne({
		where: {
		  email: email
		}
	  }).then(function(dbUser) {
		// If there's no user with the given email
		if (!dbUser) {
		  return done(null, false, {
			message: "Incorrect email."
		  });
		}
		// If there is a user with the given email, but the password the user gives us is incorrect
		else if (!dbUser.validPassword(password)) {
		  return done(null, false, {
			message: "Incorrect password."
		  });
		}
		// If none of the above, return the user
		return done(null, dbUser);
	  });
	}
  ));

// called on login, saves the id to session req.session.passport.user = {id:'..'}
passport.serializeUser((user, done) => {
	console.log('*** serializeUser called, user: ')
	console.log(user) // the whole raw user object!
	console.log('---------')
	done(null, { _id: user._id })
})

// user object attaches to the request as req.user
passport.deserializeUser((id, done) => {
	console.log('DeserializeUser called')
	Users.findOne(
		{ _id: id },
		'username',
		(err, user) => {
			console.log('*** Deserialize user, user:')
			console.log(user)
			console.log('--------------')
			done(null, user)
		}
	)
})


module.exports = passport