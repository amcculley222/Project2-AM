const React = require("react");
const DefaultLayout = require("./layout/Default");

class Login extends React.Component {
  render() {
    return (
      <div title="Log In to Spotify">
        <h1>
          <a href="https://api.spotify.com/v1/me/playlists">
            Log In to Spotify
          </a>
        </h1>
      </div>
    );
  }
}

module.exports = Login;
