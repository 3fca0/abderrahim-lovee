const button = document.getElementById("loveBtn");
const result = document.getElementById("result");

button.addEventListener("click", () => {
  result.textContent = "You are loved more than words can say ❤️";
  for (let i = 0; i < 12; i++) createHeart();
});

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "floating-heart";
  heart.textContent = Math.random() > 0.5 ? "❤️" : "💗";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (14 + Math.random() * 22) + "px";
  heart.style.animationDuration = (4 + Math.random() * 4) + "s";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 9000);
}
