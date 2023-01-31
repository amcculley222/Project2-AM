// const express = require("express");
// const router = express.Router();
// const Playlist = require("../models/playlist");

// router.post("/", async (req, res) => {
//   const item = new Playlist({
//     title: req.body.title,
//     genre: req.body.genre,
//     id: req.body.id,
//     cover_image: req.body.cover_image,
//   });
//   try {
//     await item.save();
//     res.send("Item saved to database");
//   } catch (error) {
//     console.log(error);
//     res.status(500).send("Error saving item to database");
//   }
// });

// module.exports = router;
