const { query } = require("express");
const React = require("react");
const DefaultLayout = require("./layout/default");

class Search extends React.Component {
  render() {
    const { results } = this.props.results;
    return (
      <DefaultLayout title="Search">
        <div>
          <h1 className="flex items-center">
            <a className="text-white p-2 ml-0" href="/">
              {"<"}
            </a>
            <span className="font-bold mx-auto">Search Results</span>
          </h1>
          <hr className="w-full" />

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
                        className="flex align-center mx-auto "
                        style={{
                          height: 200,
                          width: 200,
                          border: "5px solid black",
                          borderRadius: "50%",
                        }}
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
                        type="hidden"
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
      </DefaultLayout>
    );
  }
}

module.exports = Search;
