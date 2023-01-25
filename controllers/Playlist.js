const express = require("express");
const router = express.Router();

router.get(`/v1/users/${process.env.CLIENT_ID}/playlists`);

module.exports = router;
