const express = require("express");
const router = express.Router();
const joi = require("joi");
const axios = require("axios");
const Song = require("../models/songs");

router.get("/", async (req, res) => {
  Song.find({}, (error, allSongs) => {
    res.render("Playlist", { songs: allSongs });
  });
});

router.post("/", async (req, res) => {
  const songInfo = req.body;
  const newSong = new Song({
    cover_image: songInfo.cover_image,
    title: songInfo.title,
    genre: songInfo.genre,
    id: songInfo.id,
  });
  await newSong.save();
  res.redirect(`/`);
});

// Delete
router.delete("/:_id", (req, res) => {
  Song.findByIdAndRemove(req.params._id, (err, data) => {
    res.redirect("/");
  });
});

//Show
router.get("/:_id", (req, res) => {
  console.log("here");
  const { _id } = req.params;
  Song.findById(_id, (error, foundSong) => {
    console.log(foundSong);
    res.render("Song", {
      song: foundSong,
    });
  });
});

module.exports = router;
