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
musicDivs.forEach((div, index) => {
  div.addEventListener("click", () => {
    const path = `./assets/music/${musics[index]}.mp3`;
    musicPlayer.src = path;
    if (index == 1) musicPlayer.currentTime = 20;
    musicPlayer.play();
    musicPlayer.style.display = "block";
  });
});
