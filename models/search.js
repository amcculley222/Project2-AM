const mongoose = require("mongoose");

const searchSchema = new mongoose.Schema({
  cover_image: { type: String, required: true },
  title: { type: String, required: true },
  genre: { type: String, required: true },
  id: { type: String, required: true },
});

const Search = mongoose.model("Search", searchSchema);

module.exports = Search;
