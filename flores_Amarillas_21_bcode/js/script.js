
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
    controlPausa.innerHTML = '🌻';
    controlPausa.style.cssText = `
        position: fixed; top: 20px; left: 20px; width: 50px; height: 50px;
        background: transparent !important; border: 3px solid #FFD700; border-radius: 50%;
        display: flex; justify-content: center; align-items: center; font-size: 24px;
        cursor: pointer; z-index: 1000; box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    `;
    controlPausa.addEventListener('click', toggleReproduccion);
    document.body.appendChild(controlPausa);
}
function toggleReproduccion() {
    if (estaReproduciendo) {
        audio.pause();
        controlPausa.innerHTML = '🌻';
    } else {
        audio.play();
        controlPausa.innerHTML = '🌻';
    }
    estaReproduciendo = !estaReproduciendo;
}
function crearParticulas() {
    const contenedor = document.getElementById('efectoPolvo');
    const cantidad = 50;

    for (let i = 0; i < cantidad; i++) {
        const particula = document.createElement('div');
        particula.classList.add('particula');

        const tamaño = Math.random() * 5 + 2;
        const posX = Math.random() * window.innerWidth;
        const duracion = Math.random() * 5 + 5;
        const delay = Math.random() * 5;

        particula.style.width = `${tamaño}px`;
        particula.style.height = `${tamaño}px`;
        particula.style.left = `${posX}px`;
        particula.style.bottom = '0';
        particula.style.animationDuration = `${duracion}s`;
        particula.style.animationDelay = `${delay}s`;

        contenedor.appendChild(particula);
        setTimeout(() => particula.remove(), (duracion + delay) * 1000);
    }
}
document.addEventListener('DOMContentLoaded', function() {
    inicializarMusica();
    setInterval(crearParticulas, 1000);
    crearParticulas();
    
    document.querySelectorAll('.contenedor-rosa').forEach(rosa => {
        rosa.addEventListener('mouseenter', () => rosa.style.zIndex = '10');
        rosa.addEventListener('mouseleave', () => rosa.style.zIndex = '1');
    });
});