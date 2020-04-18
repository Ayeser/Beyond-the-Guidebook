const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const countrySchema = new Schema({
  name: { type: String, required: true },
  culture: { type: String, required: true },
  description: { type: String, required: false},
  profilePicture: { type: String, required: false},
  date: { type: Date, default: Date.now }
});

const Country = mongoose.model("Country", countrySchema);

module.exports = Country;
