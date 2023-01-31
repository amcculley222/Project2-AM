const React = require("react");

class DefaultLayout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title></title>
          <link rel="stylesheet" href={"/css/app.css"} />
        </head>
        <body>
          <h1></h1>
        </body>
      </html>
    );
  }
}

// https://img.freepik.com/premium-vector/play-button-icon-symbol-transparent-background-video-audio-player-vector-illustration_350225-118.jpg?w=2000

module.exports = DefaultLayout;
