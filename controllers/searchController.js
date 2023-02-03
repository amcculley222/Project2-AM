const express = require("express");
const router = express.Router();
const joi = require("joi");
const axios = require("axios");
const Song = require("../models/songs");

const token = process.env.token;

router.get("/", async (req, res) => {
  Song.find({}, (error, songs) => {
    res.json({ songs: songs });
  });
});

router.get("/:query", async (req, res) => {
  const { query } = req.params;
  const searchURL = `https://api.discogs.com/database/search?q=${query}&{?title,artist,genre,track}&token=${token}`;
  try {
    const { data } = await axios.get(searchURL);
    res.render("Search", { results: data, error: null });
  } catch (error) {
    res.render("Search", { results: null, error });
  }
});

router.post("/", async (req, res) => {
  const query = req.body.string;
  res.redirect(`/search/${query}`);
});

// Create

module.exports = router;
