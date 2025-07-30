
function createHearts() {
    const container = document.getElementById('heartsContainer');
    const heartCount = 100;
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤';
        const size = Math.random() * 30 + 20;
        heart.style.fontSize = `${size}px`;
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.top = `${Math.random() * 100 + 100}%`;
        const duration = Math.random() * 20 + 10;
        heart.style.animationDuration = `${duration}s`;
        heart.style.animationDelay = `${Math.random() * 5}s`;
        container.appendChild(heart);
    }
}
function createParticles() {
    const container = document.getElementById('particlesContainer');
    setInterval(() => {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = '100%';
        const duration = Math.random() * 5 + 3;
        particle.style.animationDuration = `${duration}s`;
        container.appendChild(particle);
        setTimeout(() => {
            particle.remove();
        }, duration * 1000);
    }, 100);
}
const MATRIX_TEXT = "TE QUIERO";
const matrixColumns = [];
let matrixAnimationId = null;
const columnWidth = 100;
function startMatrixEffect() {
    const container = document.getElementById('matrix-container');
    container.innerHTML = '';
    matrixColumns.length = 0;
    if (matrixAnimationId) {
        cancelAnimationFrame(matrixAnimationId);
        matrixAnimationId = null;
    }
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const COLUMN_COUNT = Math.ceil(screenWidth / columnWidth) + 1;
    const ITEMS_PER_COLUMN = Math.ceil(screenHeight / 40) + 5;
    for (let i = 0; i < COLUMN_COUNT; i++) {
        const column = document.createElement('div');
        column.className = 'matrix-column';
        column.style.left = `${(i * columnWidth) + Math.random() * 20}px`;
        for (let j = 0; j < ITEMS_PER_COLUMN; j++) {
            const item = document.createElement('div');
            item.className = 'matrix-item';
            item.textContent = MATRIX_TEXT;
            column.appendChild(item);
        }
        const duration = 5 + Math.random() * 10;
        column.style.animationDuration = `${duration}s`;
        column.style.animationDelay = `${Math.random() * 5}s`;
        column.style.transform = `translateY(${Math.random() * -100}%)`;
        container.appendChild(column);
        matrixColumns.push({
            element: column,
            position: Math.random() * -100,
            speed: 0.5 + Math.random() * 2,
            height: column.offsetHeight
        });
    }
    animateMatrix();
}
function animateMatrix() {
    const screenHeight = window.innerHeight;
    matrixColumns.forEach(column => {
        column.position += column.speed;
        if (column.position > screenHeight) {
            column.position = -column.height;
        }
        column.element.style.transform = `translateY(${column.position}px)`;
    });
    matrixAnimationId = requestAnimationFrame(animateMatrix);
}
function stopMatrixEffect() {
    if (matrixAnimationId) {
        cancelAnimationFrame(matrixAnimationId);
        matrixAnimationId = null;
    }
}
function createPaintEffect(e) {
    if (!document.getElementById('matrix-container').classList.contains('active')) return;
    const paintContainer = document.getElementById('paint-effect');
    const particleCount = 50;
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('paint-particle');
        particle.textContent = MATRIX_TEXT;
        const size = 16 + Math.random() * 20;
        particle.style.fontSize = `${size}px`;
        particle.style.left = `${e.clientX}px`;
        particle.style.top = `${e.clientY}px`;
        const angle = Math.random() * Math.PI * 2;
        const distance = 100 + Math.random() * 300;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;
        particle.style.setProperty('--tx', `${tx}px`);
        particle.style.setProperty('--ty', `${ty}px`);
        const duration = 0.8 + Math.random() * 0.7;
        particle.style.animationDuration = `${duration}s`;
        paintContainer.appendChild(particle);
        setTimeout(() => {
            particle.remove();
        }, duration * 1000);
    }
}
window.addEventListener('DOMContentLoaded', () => {
    createHearts();
    createParticles();
    const secretButton = document.getElementById('secretButton');
    const hiddenImage = document.getElementById('hiddenImage');
    const messageContainer = document.getElementById('messageContainer');
    const matrixContainer = document.getElementById('matrix-container');
    secretButton.addEventListener('click', function () {
        hiddenImage.classList.add('active');
        messageContainer.classList.add('hidden-message');
        matrixContainer.classList.add('active');
        startMatrixEffect();
        const audio = document.getElementById('romanticAudio');
        if (audio.paused) {
            audio.play().catch(e => console.log("Audio: ", e));
        }
    });
    hiddenImage.addEventListener('click', function () {
        this.classList.remove('active');
        messageContainer.classList.remove('hidden-message');
        matrixContainer.classList.remove('active');
        stopMatrixEffect();
    });
    document.body.addEventListener('click', function initAudio() {
        const audio = document.getElementById('romanticAudio');
        audio.play().catch(e => console.log("Audio: ", e));
        document.body.removeEventListener('click', initAudio);
    }, { once: true });
    document.addEventListener('click', createPaintEffect);
});
window.addEventListener('resize', () => {
    stopMatrixEffect();
    if (document.getElementById('matrix-container').classList.contains('active')) {
        startMatrixEffect();
    }
});
