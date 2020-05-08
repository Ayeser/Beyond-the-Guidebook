const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/beyondtheguidebook"
);

const commentsSeed = [
    {
      place: "Argentina",
      person: "Matthew",
      advice: "Lionel Messi is a soccer player from Argentina considered by many (including myself) to be the best soccer player in history."
    }
  ];
  
  db.Comments
    .remove({})
    .then(() => db.Comments.insertMany(commentsSeed))
    .then(data => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });   