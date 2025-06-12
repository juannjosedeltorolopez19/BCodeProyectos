const messages = [
  "Te amo muchísimo ❤️",
  "Gracias por estar en mi vida 🌟",
  "Eres mi persona favorita 💕",
  "Juntos por siempre 🥰",
  "Tú y yo, para siempre 💖",
  "Tu sonrisa me ilumina 💫",
  "Eres lo mejor que me ha pasado 😍",
  "Cada momento contigo es mágico ✨",
  "Siempre pienso en ti 💭",
  "Mi corazón es tuyo 💘",
  "Mi diosa 💘",
  "Mi bb 🍼",
  "Mi princesa 👑",
  "Mi luz de mis ojos ✨",
  "Mi Masha peruana 🐻",
  "Mi Minions peruana 💛",
  "Mi todo 🌎",
  "Mi mundo 🌍",
  "Mi Pucca peruana 🐰",
  "La dueña de mi corazón 💗",
  "Mi ternurita 🧸",
  "Eres mi paz en el caos 🌈",
  "Amarte es lo mejor que me ha pasado 💕",
  "No hay un solo día en que no te piense 🌙",
  "Mi compañera de aventuras 🚀",
  "Mi sol en días nublados ☀️",
  "Eres mi lugar seguro 🏡",
  "Mi razón para sonreír 😊",
  "Te pienso más de lo que imaginas 💭",
  "Contigo todo es mejor 🎆",
  "Tú haces que todo valga la pena 💝",
  "Siempre tú, solo tú 💓",
  "Mi pequeña gran razón de ser 🥹",
  "Eres un sueño hecho realidad 🌟",
  "Tú + Yo = Infinito ♾️",
  "Eres mi destino favorito ✈️",
  "Eres la canción que no dejo de escuchar 🎶",
  "Mi bomboncito dulce 🍬",
  "Eres arte 🎨",
  "Tu amor me completa 🧩"
];

let currentIndex = 0;
let shuffledMessages = shuffle([...messages]);

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function createTextBubble() {
  const bubble = document.createElement("div");
  bubble.className = "text-bubble";
  bubble.innerText = shuffledMessages[currentIndex];

  currentIndex++;
  if (currentIndex >= shuffledMessages.length) {
    currentIndex = 0;
    shuffledMessages = shuffle([...messages]); // Re-barajar para próximo ciclo
  }

  const left = Math.random() * 80 + 10;
  const top = Math.random() * 80 + 10;
  bubble.style.left = left + "vw";
  bubble.style.top = top + "vh";
  const container = document.getElementById("bubbles-text");
  container.appendChild(bubble);

  setTimeout(() => {
    const rect = bubble.getBoundingClientRect();
    if (rect.right > window.innerWidth) bubble.style.left = `${window.innerWidth - rect.width - 10}px`;
    if (rect.bottom > window.innerHeight) bubble.style.top = `${window.innerHeight - rect.height - 10}px`;
    if (rect.left < 0) bubble.style.left = "10px";
    if (rect.top < 0) bubble.style.top = "10px";
  }, 10);

  setTimeout(() => {
    bubble.remove();
  }, 8000);
}

// Cambia el intervalo si quieres más o menos frecuencia
setInterval(createTextBubble, 800);
