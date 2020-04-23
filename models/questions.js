const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionsSchema = new Schema({
  place: { type: String, required: true },
  person: { type: String, required: true },
  question: { type: String, required: true},
  date: { type: Date, default: Date.now }
});

const Questions = mongoose.model("Questions", questionsSchema);

module.exports = Questions;