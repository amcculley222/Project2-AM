const mongoose = require("mongoose");

const queryParams = {
  [LOCALSTORAGE_KEYS.accessToken]: urlParams.get("access_token"),
  [LOCALSTORAGE_KEYS.refreshToken]: urlParams.get("refresh_token"),
  [LOCALSTORAGE_KEYS.expireTime]: urlParams.get("expires_in"),
};

const userSchema = new mongoose.Schema({
  accessToken: { type: String, required: true }, // Unique index
  refreshToken: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
