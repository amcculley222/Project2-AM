const express = require("express");
const router = express.Router();
const joi = require("joi");
const axios = require("axios");
const Song = require("../models/songs");

//edit these to be based on slider

const getChill0 = () => {
  Song.find({ $or: [{ genre: ["Hip Hip", "Rap"] }] }, (err, songs) => {
    console.log(songs);
    res.redirect("/song");
  });
};

const getChill1 = () => {
  Song.find({ $or: [{ genre: ["Hip Hip", "Rap"] }] }, (err, songs) => {
    console.log(songs);
    res.redirect("/song");
  });
};

const getAll = () => {
  Song.find({ $or: [{ genre: ["Hip Hip", "Rap"] }] }, (err, songs) => {
    console.log(songs);
    res.redirect("/song");
  });
};

const getParty3 = () => {
  Song.find({ $or: [{ genre: ["Hip Hip", "Rap"] }] }, (err, songs) => {
    console.log(songs);
    res.redirect("/song");
  });
};

const getParty4 = () => {
  Song.find({ $or: [{ genre: ["Hip Hip", "Rap"] }] }, (err, songs) => {
    console.log(songs);
    res.redirect("/song");
  });
};

module.exports = router;
