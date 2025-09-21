
let audio = null;
let estaReproduciendo = false;
let controlPausa = null;

function inicializarMusica() {
    audio = new Audio('https://bcodestorague.anteroteobaldob.workers.dev/share/anteroteobaldob_gmail_com/AUDIO/Flores%20amarillas.mp3');
    audio.loop = true;
    audio.volume = 0.5;

    function iniciarReproduccion() {
        if (!estaReproduciendo) {
            audio.play();
            estaReproduciendo = true;
            crearControlPausa();
            document.removeEventListener('click', iniciarReproduccion);
            document.removeEventListener('scroll', iniciarReproduccion);
        }
    }

    document.addEventListener('click', iniciarReproduccion);
    document.addEventListener('scroll', iniciarReproduccion);
}

function crearControlPausa() {
    controlPausa = document.createElement('div');
    controlPausa.innerHTML = '🌙';
    controlPausa.style.cssText = `
                position: fixed; top: 20px; left: 20px; width: 50px; height: 50px;
                background: rgba(0, 0, 0, 0.3) !important; border: 2px solid #FFD700; border-radius: 50%;
                display: flex; justify-content: center; align-items: center; font-size: 24px;
                cursor: pointer; z-index: 1000; box-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
                color: #FFD700;
            `;
    controlPausa.addEventListener('click', toggleReproduccion);
    document.body.appendChild(controlPausa);
}

function toggleReproduccion() {
    if (estaReproduciendo) {
        audio.pause();
        controlPausa.innerHTML = '🌙';
        controlPausa.style.boxShadow = '0 0 5px rgba(255, 215, 0, 0.3)';
    } else {
        audio.play();
        controlPausa.innerHTML = '🌙';
        controlPausa.style.boxShadow = '0 0 15px rgba(255, 215, 0, 0.8)';
    }
    estaReproduciendo = !estaReproduciendo;
}

function crearEstrellas() {
    const cielo = document.getElementById('cielo-nocturno');
    const estrellasCount = 200;

    for (let i = 0; i < estrellasCount; i++) {
        const estrella = document.createElement('div');
        estrella.classList.add('estrella');
        const tamaño = Math.random();
        if (tamaño < 0.6) {
            estrella.classList.add('pequena');
        } else if (tamaño < 0.9) {
            estrella.classList.add('mediana');
        } else {
            estrella.classList.add('grande');
        }
        estrella.style.left = `${Math.random() * 100}%`;
        estrella.style.top = `${Math.random() * 80}%`;
        estrella.style.animationDelay = `${Math.random() * 4}s`;

        cielo.appendChild(estrella);
    }
}

window.onload = function () {
    const tiempoCarga = setTimeout(() => {
        document.body.classList.remove("no-cargado");
        crearEstrellas();
        const contenedorParticulas = document.getElementById('particulas');
        for (let i = 0; i < 50; i++) {
            const particula = document.createElement('div');
            particula.className = 'particula';
            particula.style.left = Math.random() * 100 + '%';
            particula.style.top = Math.random() * 100 + '%';
            particula.style.animationDelay = Math.random() * 15 + 's';
            particula.style.opacity = Math.random() * 0.5;
            contenedorParticulas.appendChild(particula);
        }

        clearTimeout(tiempoCarga);
    }, 1000);
};

document.addEventListener('DOMContentLoaded', function () {
    inicializarMusica();
});
