const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/beyondtheguidebook"
);

const countriesSeed = [
    {
      name: "Afghanistan",
      culture: "Culture of Afghanistan",
      description: "Capital city is Kabul",
      profilePicture: "<img src='https://via.placeholder.com/750x500'>",
      date: new Date(Date.now())
    },
    {
      name: "Albania",
      culture: "Culture of Albania",
      description: "Capital city is Tirana",
      profilePicture: "<img src='https://via.placeholder.com/750x500'>",
      date: new Date(Date.now())
    },
    {
      name: "Algeria",
      culture: "Culture of Algeria",
      description: "Capital city is Algiers",
      profilePicture: "<img src='https://via.placeholder.com/750x500'>",
      date: new Date(Date.now())
    },
    {
      name: "Andorra",
      culture: "Culture of Andorra",
      description: "Capital city is Adorra la Vella",
      profilePicture: "<img src='https://via.placeholder.com/750x500'>",
      date: new Date(Date.now())
    },
    {
      name: "Angola",
      culture: "Culture of Angola",
      description: "Capital city is Luanda",
      profilePicture: "<img src='https://via.placeholder.com/750x500'>",
      date: new Date(Date.now())
    },
    {
      name: "Antigue and Barbuda",
      culture: "Culture of Antigue and Barbuda",
      description: "Capital city is St. John's",
      profilePicture: "<img src='https://via.placeholder.com/750x500'>",
      date: new Date(Date.now())
    },
    {
      name: "Argentina",
      culture: "Culture of Argentina",
      description: "Capital city is Buenos Aires",
      profilePicture: "<img src='https://via.placeholder.com/750x500'>",
      date: new Date(Date.now())
    },
    {
      name: "Armenia",
      culture: "Culture of Armneia",
      description: "Capital city is Yerevan",
      profilePicture: "<img src='https://via.placeholder.com/750x500'>",
      date: new Date(Date.now())
    },
    {
      name: "Australia",
      culture: "Culture of Australia",
      description: "Capital city is Canberra",
      profilePicture: "<img src='https://via.placeholder.com/750x500'>",
      date: new Date(Date.now())
    },
    {
      name: "Austria",
      culture: "Culture of Austria",
      description: "Capital city is Vienna",
      profilePicture: "<img src='https://via.placeholder.com/750x500'>",
      date: new Date(Date.now())
    }
  ];
  
  db.Countries
    .remove({})
    .then(() => db.Countries.collection.insertMany(countriesSeed))
    .then(data => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });



