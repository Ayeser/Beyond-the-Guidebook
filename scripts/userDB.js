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
      password: "password",
      bio: "I'm very thankful to have had the chance to travel to many different places in the world. I believe travel helps someone be more empathetic and curious.",
      homeCountry: "United States",
      placesVisited: "Australia, Bahamas, Central African Republic, Congo, Democractic Republic of Congo, France, Haiti, Jamaica, Latvia, Netherlands, New Zealand, Norway, Saint Lucia, Spain, Tanzania, United States, Bermuda",
      placesFuture: "Japan"
    },
    {
      email: "Carissa@email.com",
      username: "Carissa",
      password: "password",
      homeCountry: "United States"
    },
    {
      email: "Stephen@email.com",
      username: "Stephen",
      password: "password",
      homeCountry: "Portugal"
    },
    {
      email: "Aiden@email.com",
      username: "Aiden",
      password: "password",
      homeCountry: "United States"
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