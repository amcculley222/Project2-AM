require("dotenv").config();

/**
 * Requirements
 */
const mongoose = require("mongoose");
const express = require("express");
const app = express();

//include the method-override package place this where you instructor places it
const methodOverride = require("method-override");
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;

/**
 * Configuration
 */
const PORT = 8888;

/**
 * Controller requires go here ⬇️
 */

//--------------------------------

// Mongoose connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

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

// Index route
app.get("/", (req, res) => {
  res.render("Index");
});

app.get("/login", (req, res) => {
  res.redirect(
    `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}`
  );
});

// Listen on the port
app.listen(PORT, () => {
  console.log(`listening on port:${PORT} http://localhost:${PORT}/`);
});
