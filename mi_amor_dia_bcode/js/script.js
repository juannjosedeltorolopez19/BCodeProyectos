// script.js

const canvas = document.getElementById('hearts-canvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

const heart = '❤';
const hearts = [];
const heartCount = 100;

for (let i = 0; i < heartCount; i++) {
    hearts.push({
        x: Math.random() * canvas.width,
        y: Math.random() * -canvas.height,
        size: Math.random() * 20 + 10,
        speed: Math.random() * 0.5 + 0.2,
        opacity: Math.random() * 0.5 + 0.5
    });
}

function dibujarCorazones() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    hearts.forEach(heartObj => {
        ctx.font = `${heartObj.size}px Arial`;
        ctx.fillStyle = `rgba(255, 102, 204, ${heartObj.opacity})`;
        ctx.fillText(heart, heartObj.x, heartObj.y);

        heartObj.y += heartObj.speed;

        if (heartObj.y > canvas.height) {
            heartObj.y = -20;
            heartObj.x = Math.random() * canvas.width;
        }
    });

    requestAnimationFrame(dibujarCorazones);
}

const texto = "Feliz día mi amor";
const elementoTexto = document.getElementById('matrix-text');
let index = 0;
let textoActual = "";

function escribirMatrix() {
    if (index < texto.length) {
        textoActual += texto.charAt(index);
        elementoTexto.textContent = textoActual;
        index++;
        setTimeout(escribirMatrix, 150);
    } else {
        setTimeout(() => {
            textoActual = "";
            index = 0;
            elementoTexto.textContent = "";
            setTimeout(escribirMatrix, 1000);
        }, 3000);
    }
}

window.onload = function () {
    escribirMatrix();
    dibujarCorazones();
};
