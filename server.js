require("dotenv").config();

/**
 * Requirements
 */
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const querystring = require("querystring");
const axios = require("axios");
const apiUrl = "https://api.discogs.com/";
const Discogs = require("disconnect").Client;
const session = require("express-session");

app.use(session({ secret: "secretkey" }));

const consumerKey = process.env.Consumer_Key;
const consumerSecret = process.env.Consumer_Secret;

// const playlistController = require("./controllers/Playlist");
const searchController = require("./controllers/searchController");
const songController = require("./controllers/songController");
// const playlistController = require("./controllers/playlistContoller");

//include the method-override package place this where you instructor places it
const methodOverride = require("method-override");
const { response } = require("express");
/**
 * Configuration
 */
const PORT = 3000;

/**
 * Controller requires go here ⬇️
 */

//--------------------------------

// Mongoose connection
const mdb = require("./mdb");

mdb.once("open", () => {
  console.log("connected to mongo");
});

const db = new Discogs().database();
db.getRelease(176126, function (err, data) {});

/**
 * Middleware
 */
app.use(express.static("public")); //tells express to try to match requests with files in the directory called 'public'

// Method override will allow us to use put & delete methods
app.use(methodOverride("_method"));

// Allow express to use urlencoded
app.use(express.urlencoded({ extended: true }));
// Allow express to recieve the body as json in requests
app.use(express.json());

/**
 * View engine
 */
app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());

/**
 * Controller middlewares go here ⬇️
 */

app.use("/search", searchController);
app.use("/song", songController);

// Index route
app.get("/", (req, res) => {
  res.redirect("/song");
});

// Listen on the port
app.listen(PORT, () => {
  console.log(`listening on port:${PORT} http://localhost:${PORT}/`);
});
