const mongoose = require("mongoose");
const Joi = require("joi");

const songsSchema = new mongoose.Schema({
  cover_image: { type: String, required: true },
  title: { type: String, required: true },
  genre: { type: String, required: true },
  id: { type: String, required: true },
});

const Song = mongoose.model("song", songsSchema);

module.exports = Song;
