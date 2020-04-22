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
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/af-flag.jpg",
      date: new Date(Date.now())
    },
    {
      name: "Albania",
      culture: "Culture of Albania",
      description: "Capital city is Tirana",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/al-flag.jpg",
      date: new Date(Date.now())
    },
    {
      name: "Algeria",
      culture: "Culture of Algeria",
      description: "Capital city is Algiers",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/dz-flag.jpg",
      date: new Date(Date.now())
    },
    {
      name: "Andorra",
      culture: "Culture of Andorra",
      description: "Capital city is Adorra la Vella",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/ad-flag.jpg",
      date: new Date(Date.now())
    },
    {
      name: "Angola",
      culture: "Culture of Angola",
      description: "Capital city is Luanda",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/ao-flag.jpg",
      date: new Date(Date.now())
    },
    {
      name: "Antigue and Barbuda",
      culture: "Culture of Antigue and Barbuda",
      description: "Capital city is St. John's",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/ag-flag.jpg",
      date: new Date(Date.now())
    },
    {
      name: "Argentina",
      culture: "Culture of Argentina",
      description: "Capital city is Buenos Aires",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/ar-flag.jpg",
      date: new Date(Date.now())
    },
    {
      name: "Armenia",
      culture: "Culture of Armneia",
      description: "Capital city is Yerevan",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/am-flag.jpg",
      date: new Date(Date.now())
    },
    {
      name: "Australia",
      culture: "Culture of Australia",
      description: "Capital city is Canberra",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/au-flag.jpg",
      date: new Date(Date.now())
    },
    {
      name: "Austria",
      culture: "Culture of Austria",
      description: "Capital city is Vienna",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/at-flag.jpg",
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



