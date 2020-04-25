const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/beyondtheguidebook"
);

const usersSeed = [
    {
      email: "Matthew@email.com",
      username: "Matthew",
      password: "password"
    },
    {
      email: "Carissa@email.com",
      username: "Carissa",
      password: "password",
    },
    {
      email: "Stephen@email.com",
      username: "Stephen",
      password: "password",
    },
    {
      email: "Aiden@email.com",
      username: "Aiden",
      password: "password",
    }
  ]
  
    db.Users
      .remove({})
      .then(() => db.Users.collection.insertMany(usersSeed))
      .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
      })
      .catch(err => {
        console.error(err);
        process.exit(1);
      });