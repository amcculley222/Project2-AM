const playSong = document.querySelector("#art");
const parent = document.querySelector("#part");
const moodRange = document.getElementById("customRange2");
const filterSong = document.querySelectorAll(".song");
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
    "Hip Hop,Pop",
  ],
  3: ["Pop", "Hip Hop,Pop"],
  4: ["Rock", "Electronic"],
};
moodRange.addEventListener("change", async () => {
  const vibes = moods[moodRange.value];
  try {
    const parentdiv = document.createElement("div");
    parentdiv.id = "art";
    let filteredSongs = [];
    const res = await fetch(`/search`);
    const data = await res.json();
    const songs = data.songs;

    for (let i = 0; i < songs.length; i++) {
      for (let j = 0; j < vibes.length; j++) {
        if (songs[i].genre === vibes[j]) {
          const outterdiv = document.createElement("div");
          const innerdiv = document.createElement("div");
          const button = document.createElement("button");
          const img = document.createElement("img");
          const a = document.createElement("a");
          const adiv = document.createElement("div");
          const form = document.createElement("form");
          const input = document.createElement("input");
          outterdiv.setAttribute("key", songs[i]._id.toString());
          outterdiv.classList.add(
            "song",
            "w-full",
            "md:w-1/4",
            "px-4",
            "py-6",
            "text-center"
          );

          innerdiv.style.position = "relative";
          button.setAttribute("type", "submit");
          button.setAttribute("action", "/playlist");
          button.setAttribute("method", "POST");
          img.setAttribute("src", songs[i].cover_image);
          img.classList.add("mx-auto");
          img.style.height = "200px";
          img.style.width = "200px";
          img.style.border = "5px solid black";
          img.style.borderRadius = "50%";
          a.setAttribute("href", `/song/${songs[i]._id}`);
          adiv.classList.add("pt-2", "text-white", "break-all", "text-center");
          adiv.textContent = songs[i].title;
          form.setAttribute(
            "action",
            `/song/${songs[i]._id.toString()}?_method=DELETE`
          );
          form.setAttribute("method", "POST");
          input.setAttribute("type", "submit");
          input.setAttribute("name", "");
          input.setAttribute("value", "Remove");

          button.appendChild(img);
          innerdiv.appendChild(button);
          a.appendChild(adiv);
          form.appendChild(input);

          outterdiv.appendChild(innerdiv);
          outterdiv.appendChild(a);
          outterdiv.appendChild(form);
          parentdiv.appendChild(outterdiv);
        }
      }
    }

    parent.replaceChild(parentdiv, parent.childNodes[0]);
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

// parent.addEventListener("click", (e) => {
//   const record = e.target.id;
//   if (record.includes(`_`)) {
//     const spinRecord = document.getElementById(record);
//     spinRecord.classList.toggle("animate-spin");
//   }
// });
