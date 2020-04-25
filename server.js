const express = require("express");
const session = require("express-session");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const MongoStore = require('connect-mongo')(session);
const passport = require("./passport");
const PORT = process.env.PORT || 3300;
const morgan = require('morgan');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Passport
app.use(passport.initialize())
app.use(passport.session()) 

// Add routes, both API and views
app.use("/", routes);

// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/beyondtheguidebook");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/beyondtheguidebook");

  app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });

