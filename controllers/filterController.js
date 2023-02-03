const express = require("express");
const router = express.Router();
const joi = require("joi");
const axios = require("axios");
const Song = require("../models/songs");
const { string } = require("joi");

//edit these to be based on slider
const moods = {
  0: ["Hip Hop", "Rap"],
  1: ["Folk, World, & Country"],
  2: ["Pop"],
  3: ["Pop"],
  4: ["Hip Hop", "Rap"],
};

//Chill
router.get("/", async (req, res) => {
  const { mood } = req.query;
  const filterMood = moods[mood];
  console.log(filterMood);
  Song.find({ $or: [{ genre: filterMood }] }, (err, songs) => {
    console.log(songs.length);
    res.render("Playlist", { songs: songs });
  });
});

module.exports = router;
