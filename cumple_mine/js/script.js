window.addEventListener("DOMContentLoaded", () => {
  console.log("🎉 Página de cumpleaños cargada.");

  const music = document.getElementById("bg-music");
  const btn = document.getElementById("music-btn");

  btn.addEventListener("click", () => {
    music.play();
    btn.textContent = "🎵 Música en reproducción";
    btn.disabled = true; // Deshabilita el botón después de hacer clic
  });
});

