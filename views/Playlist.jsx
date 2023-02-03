const session = require("express-session");
const React = require("react");
const axios = require("axios");
const Song = require("../controllers/songController");
const DefaultLayout = require("./layout/default");

class Playlist extends React.Component {
  render() {
    const { songs, mood } = this.props;
    let shuffledSongs = songs.sort(() => Math.random() - 0.5);
    // shuffledSongs = shuffledSongs?.map((el, idx) => {
    //   let filteredSongs = [];

    //   if (mood) {
    //     const vibes = moods[mood];

    //     for (let i = 0; i < vibes.length; i++) {
    //       console.log(vibes[i]);
    //       console.log(el.genre);
    //       if (el.genre === vibes[i]) {
    //         filteredSongs.push(el);
    //       }
    //     }
    //   }
    //   console.log(filteredSongs);
    //   return filteredSongs;
    // });
    return (
      <DefaultLayout title={"Home Page"}>
        <div className="w-full">
          <h1 className="h-24 text-white flex justify-center p-4 text-xxl mx-auto">
            <img
              style={{
                height: 35,
                width: 35,
                borderRadius: 0,
              }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgiQJmfHIFhfr5YGuh_4FvfT4B26A3Y2OuDg&usqp=CAU"
            />{" "}
            Listen Now
          </h1>
          <div className="flex justify-center">
            <form className="p-2 justify-center" action="/search" method="POST">
              <div></div>
              <input
                className="p-2"
                type="search"
                placeholder="Search Song"
                name="string"
              />
              <button type="search" className="p-2 bg-black">
                Search
              </button>
            </form>
          </div>
          <div className="p-4"></div>

          <div className="flex justify-center">
            <hr className="w-full" />
          </div>

          <div className="text-white flex text-xl p-4 justify-center">
            <label htmlFor="customRange2" className="form-label">
              What're you feeling?
            </label>
          </div>
          <div></div>

          <div className="text-white flex justify-center p-2 mx-3">
            <p className="p-2">Chill</p>
            <input
              type="range"
              className="form-range w-3/4"
              min={0}
              max={4}
              step={1}
              id="customRange2"
            />{" "}
            <div className="flex justify-between">
              <p className="p-2">Party</p>
            </div>
          </div>

          <div className="p-4"></div>
          <div className="flex justify-center">
            <hr className="w-full" />
          </div>
          <h2 className="flex justify-center text-white text-xl">My Songs </h2>
          <div className="p-4"></div>
          <div id="art" className="flex flex-wrap">
            {shuffledSongs?.map((song, i) => (
              <div
                key={song._id.toString()}
                aria-label={song.genre}
                className={` w-full md:w-1/4 px-4 py-6 text-center`}
              >
                <div style={{ position: "relative" }}>
                  <button type="submit" action="/playlist" method="POST">
                    <img
                      src={song.cover_image}
                      id={`record_${i}`}
                      className={`mx-auto`}
                      style={{
                        height: 200,
                        width: 200,
                        border: "5px solid black",
                        borderRadius: "50%",
                      }}
                    />
                  </button>
                </div>
                <a href={`/song/${song._id}`}>
                  <div className="pt-2 text-white break-all text-center">
                    {song.title}
                  </div>
                </a>
                <form
                  action={`/song/${song._id.toString()}?_method=DELETE`}
                  method="POST"
                >
                  {" "}
                  <input type="submit" name="" value="Remove" />
                </form>{" "}
              </div>
            ))}
          </div>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = Playlist;
