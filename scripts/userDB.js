const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/beyondtheguidebook"
);

const usersSeed = [
    {
      email: "Matthew@email.com",
      userName: "Matthew",
      password: "password"
    },
    {
      email: "Carissa@email.com",
      userName: "Carissa",
      password: "password",
    },
    {
      email: "Stephen@email.com",
      userName: "Stephen",
      password: "password",
    },
    {
      email: "Aiden@email.com",
      userName: "Aiden",
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