const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentsSchema = new Schema({
  place: { type: String, required: true },
  person: { type: String, required: true },
  advice: { type: String, required: true},
  date: { type: Date, default: Date.now }
});

const Comments = mongoose.model("Comments", commentsSchema);

module.exports = Comments;