const session = require("express-session");
const React = require("react");
const axios = require("axios");
const Song = require("../controllers/songController");

class Show extends React.Component {
  render() {
    const { song } = this.props;

    return (
      <div className="w-full" title="Home Page">
        <h1 className="h-24 text-white flex justify-center p-4 text-xxl mx-auto">
          {song.title}
        </h1>
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="stylesheet" href={"/css/app.css"} />
        {song.cover_image}
      </div>
    );
  }
}

module.exports = Show;
