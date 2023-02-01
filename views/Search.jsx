const React = require("react");

class Search extends React.Component {
  render() {
    const { results } = this.props.results;
    return (
      <div title="Search">
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="stylesheet" href={"/css/app.css"} />
        <h1 className="flex items-center">
          <a className="text-white p-2 ml-0" href="/">
            {"<"}
          </a>
          <span className="font-bold p-2 mx-auto">Search Results</span>
        </h1>

        <div className="flex flex-wrap">
          {results ? (
            results.map((item) => {
              return (
                <div
                  className="w-full md:w-1/4 px-4 py-6 text-center"
                  key={item.id}
                >
                  <a>
                    <img
                      src={item.cover_image}
                      className="flex align-center mx-auto"
                    />
                    <div className="pt-2 break-all text-center">
                      {item.title}
                    </div>
                  </a>
                  <form
                    action="/song"
                    method="POST"
                    onSubmit={this.handleSubmit}
                  >
                    <input type="hidden" name="title" value={item.title} />
                    <input type="hidden" name="genre" value={item.genre} />
                    <input type="hidden" name="id" value={item.id} />
                    <input
                      type="submit"
                      name="cover_image"
                      value={item.cover_image}
                    />
                    <input type="submit" name="" value="Add to Playlist" />
                  </form>
                </div>
              );
            })
          ) : (
            <p>{JSON.stringify(this.props.error)}</p>
          )}
        </div>
      </div>
    );
  }
}

module.exports = Search;
