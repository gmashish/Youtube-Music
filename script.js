const musicPlayer = document.getElementById("music-player");
const musicDivs = document.querySelectorAll(".content");
const musics = [
  "Manwa-Laage",
  "MERO-SOLTA",
  "Type-shi",
  "Chiyako-Botaima",
  "AUR-TU-HAI-KAHAN.mp3",
  "Lost-Sky",
];
console.log(...musicDivs);

musicDivs.forEach((div, index) => {
  const id = index;
  div.addEventListener("click", () => {
    const path = `./assets/music/${musics[id]}.mp3`;
    musicPlayer.src = path;
    musicPlayer.play();
  });
});
