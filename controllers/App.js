const express = require("express");
import { useState, useEffect } from "react";
import { accessToken } from "../controllers/Spotify";
const router = express.Router();

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(accessToken);
  }, []);

  return (
    <div className="App">
      {!token ? (
        <a href="http://localhost:8888/login">Log In to Spotify</a>
      ) : (
        <h1>Logged In</h1>
      )}
    </div>
  );
}

module.exports = App;
