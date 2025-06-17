const CONFIG = {
    particles: 100,
    matrixColumns: 30,
    hearts: 20,
    waves: 5,
    colors: {
        pink: '#ff14a1',
        purple: '#c724ff',
        blue: '#24d2ff',
        yellow: '#fff924'
    },
    texts: [
        "TE AMO", "ERES MI TODO", "MI REY", "MI AMOR", 
        "❤", "💖", "💕", "💞", "💝", "💘", "💗", "💓"
    ],
    loveMessages: [
        "Para siempre", "Eternamente", "Sin fin", 
        "Más allá del tiempo", "Infinito", "Sin condiciones"
    ]
};

const loveMessage = document.getElementById('loveMessage');
const holographicImage = document.getElementById('holographicImage');

function initEffects() {
    createQuantumParticles();
    createMatrixEffect();
    createLoveHologram();
    createWaveEffect();
    setInterval(rotateLoveMessage, 5000);
}

function createQuantumParticles() {
    const container = document.getElementById('quantumParticles');
    for (let i = 0; i < CONFIG.particles; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        const colors = Object.values(CONFIG.colors);
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        const duration = 10 + Math.random() * 20;
        const delay = Math.random() * 15;
        particle.style.animation = `particleAnim ${duration}s ease-in-out ${delay}s infinite`;
        container.appendChild(particle);
    }
}

function createMatrixEffect() {
    const container = document.getElementById('holographicMatrix');
    for (let i = 0; i < CONFIG.matrixColumns; i++) {
        const column = document.createElement('div');
        column.classList.add('matrix-column');
        column.style.left = `${(i / CONFIG.matrixColumns) * 100}%`;
        let content = '';
        const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
        const length = 30 + Math.floor(Math.random() * 20);
        for (let j = 0; j < length; j++) {
            content += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        column.textContent = content;
        const speed = 5 + Math.random() * 10;
        column.style.animationDuration = `${speed}s`;
        column.style.animationDelay = `${Math.random() * 5}s`;
        column.style.opacity = 0.1 + Math.random() * 0.3;
        container.appendChild(column);
    }
}

function createLoveHologram() {
    const container = document.getElementById('loveHologram');
    setInterval(() => {
        for (let i = 0; i < CONFIG.hearts; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.classList.add('heart-particle');
                const content = CONFIG.texts[Math.floor(Math.random() * CONFIG.texts.length)];
                heart.textContent = content;
                heart.style.left = `${10 + Math.random() * 80}%`;
                heart.style.setProperty('--random-x', Math.random() * 2 - 1);
                heart.style.setProperty('--random-y', Math.random() * 2);
                const size = 0.5 + Math.random() * 2;
                heart.style.fontSize = `${size}rem`;
                const colors = Object.values(CONFIG.colors);
                heart.style.color = colors[Math.floor(Math.random() * colors.length)];
                const duration = 5 + Math.random() * 10;
                heart.style.animationDuration = `${duration}s`;
                container.appendChild(heart);
                setTimeout(() => {
                    heart.remove();
                }, duration * 1000);
            }, i * 300);
        }
    }, 2000);
}

function createWaveEffect() {
    const container = document.getElementById('waveEffect');
    for (let i = 0; i < CONFIG.waves; i++) {
        const wave = document.createElement('div');
        wave.classList.add('wave');
        const colors = Object.values(CONFIG.colors);
        wave.style.borderColor = colors[Math.floor(Math.random() * colors.length)];
        const delay = i * 1.5;
        wave.style.animationDelay = `${delay}s`;
        wave.style.animationDuration = `${CONFIG.waves * 1.5}s`;
        container.appendChild(wave);
    }
}

function rotateLoveMessage() {
    const loveText = document.querySelector('.love-text');
    const subText = document.querySelector('.sub-text');
    loveText.style.animation = 'none';
    subText.style.animation = 'none';
    setTimeout(() => {
        const randomText = CONFIG.texts[Math.floor(Math.random() * CONFIG.texts.length)];
        const randomSub = CONFIG.loveMessages[Math.floor(Math.random() * CONFIG.loveMessages.length)];
        loveText.textContent = randomText;
        subText.textContent = randomSub;
        loveText.style.animation = '';
        subText.style.animation = '';
    }, 500);
}

loveMessage.addEventListener('click', () => {
    holographicImage.classList.toggle('active');
    loveMessage.style.transform = 'translate(-50%, -50%) scale(1.1)';
    setTimeout(() => {
        loveMessage.style.transform = 'translate(-50%, -50%) scale(1)';
    }, 300);
});

document.addEventListener('mousemove', (e) => {
    const cursorGlow = document.createElement('div');
    cursorGlow.style.position = 'fixed';
    cursorGlow.style.left = `${e.clientX}px`;
    cursorGlow.style.top = `${e.clientY}px`;
    cursorGlow.style.width = '20px';
    cursorGlow.style.height = '20px';
    cursorGlow.style.borderRadius = '50%';
    cursorGlow.style.background = `radial-gradient(circle, ${CONFIG.colors.pink} 0%, transparent 70%)`;
    cursorGlow.style.transform = 'translate(-50%, -50%)';
    cursorGlow.style.zIndex = '100';
    cursorGlow.style.pointerEvents = 'none';
    document.body.appendChild(cursorGlow);
    setTimeout(() => {
        cursorGlow.style.opacity = '0';
        cursorGlow.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
        cursorGlow.style.transform = 'translate(-50%, -50%) scale(2)';
    }, 50);
    setTimeout(() => {
        cursorGlow.remove();
    }, 600);
});

initEffects();
