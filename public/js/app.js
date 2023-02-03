const moodRange = document.getElementById("customRange2");

moodRange.addEventListener("change", async () => {
  try {
    await fetch(`/song?mood=${moodRange.value}`);
  } catch (error) {
    console.log(error);
  }
});

const playSong = document.getElementById("art");

playSong.addEventListener("click", () => {
  playSong.classList.toggle("animate-spin");
});
