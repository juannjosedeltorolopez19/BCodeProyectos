// game.jsconst zombie = document.getElementById("zombie");
const scoreDisplay = document.getElementById("score");
const popSound = document.getElementById("pop");

let score = 0;

// Mostrar zombie en posición aleatoria
function moveZombie() {
  const x = Math.random() * (window.innerWidth - 80);
  const y = Math.random() * (window.innerHeight - 80);
  zombie.style.left = `${x}px`;
  zombie.style.top = `${y}px`;
  zombie.innerHTML = "🧟";
}

// Clic en zombie
zombie.addEventListener("click", () => {
  score++;
  scoreDisplay.textContent = score;
  popSound.currentTime = 0;
  popSound.play();
  moveZombie();

  if (score === 10) {
    alert("¡Ganaste! Eres mi heroína 💘");
  }
});

// Mover zombie cada 1.5 segundos
setInterval(moveZombie, 1500);

moveZombie();
