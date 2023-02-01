const session = require("express-session");
const React = require("react");
const axios = require("axios");
const Song = require("../controllers/songController");

class Show extends React.Component {
  render() {
    const { song } = this.props;

    return (
      <div className="w-full" title="Home Page">
        <h1 className="flex items-center">
          <a className="text-white p-2 ml-0" href="/">
            {"<"}
          </a>
          <span className="font-bold p-2 mx-auto">{song.title}</span>
        </h1>
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="stylesheet" href={"/css/app.css"} />
        <div className="flex align-center mx-auto">
          <img
            src={song.cover_image}
            className="w-64 h-64 object-cover mx-auto"
          />
          <div className="p-4"></div>
          <div className="text-white">{`${song.title} is in the ${song.genre} genre`}</div>
        </div>
      </div>
    );
  }
}

module.exports = Show;
