const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const countriesSchema = new Schema({
  name: { type: String, required: true },
  languages: { type: String, required: true },
  animal: { type: String, required: true },
  currency: { type: String, required: true },
  description: { type: String, required: false},
  profilePicture: { type: String, required: false},
  date: { type: Date, default: Date.now }
});

const Countries = mongoose.model("Countries", countriesSchema);

module.exports = Countries;