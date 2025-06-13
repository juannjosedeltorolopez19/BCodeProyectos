// script.js
document.getElementById('enterBtn').addEventListener('click', () => {
    const password = document.getElementById('password').value;
    if (password === 'teamo123') { // cámbialo a la password que desees
        document.querySelector('input').style.display = 'none';
        document.querySelector('button').style.display = 'none';
        document.querySelector("#contenido").style.display = 'block';
        lanzarConfeti();
    } else {
        alert('¡Contraseña Incorrecta!');
    }
});

// Función para confeti
function lanzarConfeti(){
    for (let i = 0; i < 100; i++) {
        let confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
        document.body.prepend(confetti);
    }