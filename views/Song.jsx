const session = require("express-session");
const React = require("react");
const axios = require("axios");
const Song = require("../controllers/songController");
const DefaultLayout = require("./layout/default");
class Show extends React.Component {
  render() {
    const { song } = this.props;
    return (
      <DefaultLayout title={"Song"}>
        <div className="w-full flex flex-col items-center" title="Home Page">
          <h1 className="w-full flex items-center">
            <a className="text-white p-2 ml-0" href="/">
              {"<"}
            </a>
            <span className="font-bold mx-auto">{song.title}</span>
          </h1>
          <hr className="w-full" />
          <div className="flex flex-col items-center">
            <img
              src={song.cover_image}
              className="w-64 h-64 object-cover mx-auto my-4"
            />
            <div className="text-white text-center">
              <li className="text-white text-xxl">{`Song Info: ${song.title}`}</li>
              <li className="text-sm">{`Genre: ${song.genre}`}</li>
            </div>
          </div>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = Show;
