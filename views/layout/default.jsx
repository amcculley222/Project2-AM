const React = require("react");

class DefaultLayout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <script src="/js/app.js" defer></script>
          <script src="https://cdn.tailwindcss.com"></script>
          <link rel="stylesheet" href={"/css/app.css"} />
          <title>{this.props.title}</title>
        </head>
        <body>{this.props.children}</body>
      </html>
    );
  }
}

module.exports = DefaultLayout;
