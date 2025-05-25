const LINE_COUNT = 50;
const ANIMATION_DURATION = 5;
const TEXT_CONTENT = "TE AMO ";

// Generar líneas
function createLine() {
    const line = document.createElement('div');
    line.className = 'text-container';
    line.style.animation = `scroll ${ANIMATION_DURATION}s linear infinite`;
    line.textContent = TEXT_CONTENT.repeat(window.innerWidth / 50);
    return line;
}

// Inicializar
function init() {
    const container = document.getElementById('terminal');

    // Crear múltiples líneas
    for (let i = 0; i < LINE_COUNT; i++) {
        const line = createLine();
        line.style.animationDelay = `${i * 0.2}s`;
        container.appendChild(line);
    }

    // Mantener tamaño constante
    window.addEventListener('resize', () => {
        document.querySelectorAll('.text-container').forEach(line => {
            line.textContent = TEXT_CONTENT.repeat(window.innerWidth / 50);
        });
    });
}

// Iniciar animación
init();