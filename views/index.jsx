const React = require("react");
const DefaultLayout = require("./layout/Default");

class Index extends React.Component {
  render() {
    return (
      <div title="Log In to Spotify">
        <h1>
          <a href="http://localhost:8888/login">Log In to Spotify</a>
        </h1>
      </div>
    );
  }
}

module.exports = Index;
