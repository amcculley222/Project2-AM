const express = require("express");
const router = express.Router();

const queryParams = {
  [LOCALSTORAGE_KEYS.accessToken]: urlParams.get("access_token"),
  [LOCALSTORAGE_KEYS.refreshToken]: urlParams.get("refresh_token"),
  [LOCALSTORAGE_KEYS.expireTime]: urlParams.get("expires_in"),
};

router.get("/login", (req, res) => {
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("refreshToken", refreshToken);
  console.log(refreshToken);
});

module.exports = router;
