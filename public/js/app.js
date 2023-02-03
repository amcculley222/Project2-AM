const playSong = document.querySelector("#art");
const moodRange = document.getElementById("customRange2");
const moods = {
  0: ["Folk, World, & Country"],
  1: ["Hip Hop", "Funk / Soul"],
  2: [
    "Rock",
    "Folk, World, & Country",
    "Funk / Soul",
    "Electronic",
    "Hip Hop",
    "Pop",
  ],
  3: ["Pop"],
  4: ["Rock", "Electronic"],
};

moodRange.addEventListener("change", async () => {
  const songs = playSong.children;
  const vibes = moods[moodRange.value];
  try {
    let filteredSongs = [];
    await fetch(`/song?mood=${moodRange.value}`);
    for (let i = 0; i < songs.length; i++) {
      //   console.log(songs[i].ariaLabel === "Folk, World, & Country");
      for (let j = 0; j < vibes.length; j++) {
        console.log(songs[i].ariaLabel, "-", vibes[j]);
        if (songs[i].arialabel != vibes[j]) {
          //   //   console.log(
          //   //     typeof songs[i].ariaLabel,
          //   //     songs[i].ariaLabel.length,
          //   //     "-",
          //   //     vibes[j]
          //   //   );
          //   playSong.removeChild(songs[i]);
          filteredSongs.push(songs[i]);
          console.log(songs[i]);
          // } else {
          //   //   console.log("else", songs[i].ariaLabel, vibes[j]);
          //   playSong.appendChild(songs[i]);
        }
      }
    }
    console.log(filteredSongs, filteredSongs.length);
  } catch (error) {
    console.log(error);
  }
});

playSong.addEventListener("click", (e) => {
  const record = e.target.id;
  if (record.includes(`_`)) {
    const spinRecord = document.getElementById(record);
    spinRecord.classList.toggle("animate-spin");
  }
});
