const chocolateBox = document.getElementById('chocolateBox');
const message = document.getElementById('message');
const scrollDown = document.getElementById('scrollDown');
const gameContainer = document.getElementById('gameContainer');
const playerCar = document.getElementById('playerCar');
const road = document.getElementById('road');
const scoreElement = document.getElementById('score');
const gameOverScreen = document.getElementById('gameOver');
const finalScore = document.getElementById('finalScore');
const restartBtn = document.getElementById('restartBtn');

const carModels = [
    { color: "#3498DB", message: "TE AMO" },
    { color: "#2ECC71", message: "MI NIÑO" },
    { color: "#9B59B6", message: "17/8 ♥" },
    { color: "#F1C40F", message: "MI REY", textColor: "#333" },
    { color: "#1ABC9C", message: "ERES ÚNICO" },
    { color: "#E67E22", message: "MI AMOR" },
    { color: "#E74C3C", message: "BESOS" },
    { color: "#8E44AD", message: "ABRAZOS" }
];

const touchAudio = new Audio();
touchAudio.src = "https://bcodestorague.anteroteobaldob.workers.dev/share/anteroteobaldob_gmail_com/AUDIO/those%20eyes%20.mp3";

for (let i = 0; i < 10; i++) {
    const marker = document.createElement('div');
    marker.className = 'lane-marker';
    marker.style.top = (i * 100) + 'px';
    road.appendChild(marker);
}

let playerX = gameContainer.offsetWidth / 2;
let score = 0;
let gameSpeed = 2;
let isGameOver = false;
let opponents = [];
let animationId;
let keys = {
    ArrowLeft: false,
    ArrowRight: false
};
let isDragging = false;
let startX = 0;
let lastOpponentTime = 0;

chocolateBox.addEventListener('click', function() {
    message.classList.add('show-message');
    touchAudio.play();
    for (let i = 0; i < 30; i++) {
        createParticle();
    }
});

function createParticle() {
    const particle = document.createElement('div');
    particle.style.position = 'absolute';
    particle.style.width = '8px';
    particle.style.height = '8px';
    particle.style.backgroundColor = '#D4AF37';
    particle.style.borderRadius = '50%';
    particle.style.left = chocolateBox.offsetLeft + chocolateBox.offsetWidth/2 + 'px';
    particle.style.top = chocolateBox.offsetTop + chocolateBox.offsetHeight/2 + 'px';
    particle.style.pointerEvents = 'none';
    document.body.appendChild(particle);
    const angle = Math.random() * Math.PI * 2;
    const velocity = 2 + Math.random() * 3;
    const lifetime = 1000 + Math.random() * 500;
    let posX = chocolateBox.offsetLeft + chocolateBox.offsetWidth/2;
    let posY = chocolateBox.offsetTop + chocolateBox.offsetHeight/2;
    const animate = () => {
        posX += Math.cos(angle) * velocity;
        posY += Math.sin(angle) * velocity - 0.1;
        particle.style.left = posX + 'px';
        particle.style.top = posY + 'px';
        if (lifetime > 0) {
            lifetime -= 16;
            requestAnimationFrame(animate);
        } else {
            particle.style.opacity = '0';
            setTimeout(() => {
                particle.remove();
            }, 300);
        }
    };
    requestAnimationFrame(animate);
}

scrollDown.addEventListener('click', function() {
    touchAudio.play();
    window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
    });
});

document.addEventListener('keydown', (e) => {
    if (e.key in keys) {
        keys[e.key] = true;
    }
});

document.addEventListener('keyup', (e) => {
    if (e.key in keys) {
        keys[e.key] = false;
    }
});

gameContainer.addEventListener('mousedown', handleTouchStart);
gameContainer.addEventListener('touchstart', handleTouchStart);
gameContainer.addEventListener('mousemove', handleTouchMove);
gameContainer.addEventListener('touchmove', handleTouchMove);
gameContainer.addEventListener('mouseup', handleTouchEnd);
gameContainer.addEventListener('touchend', handleTouchEnd);
gameContainer.addEventListener('mouseleave', handleTouchEnd);

function handleTouchStart(e) {
    isDragging = true;
    startX = e.clientX || e.touches[0].clientX;
    touchAudio.play();
    e.preventDefault();
}

function handleTouchMove(e) {
    if (!isDragging || isGameOver) return;
    const currentX = e.clientX || e.touches[0].clientX;
    const deltaX = currentX - startX;
    playerX += deltaX;
    playerX = Math.max(25, Math.min(gameContainer.offsetWidth - 25, playerX));
    startX = currentX;
    e.preventDefault();
}

function handleTouchEnd() {
    isDragging = false;
}

function updatePlayerPosition() {
    if (isGameOver) return;
    if (keys.ArrowLeft && playerX > 50) {
        playerX -= 5 + gameSpeed * 0.2;
    }
    if (keys.ArrowRight && playerX < gameContainer.offsetWidth - 50) {
        playerX += 5 + gameSpeed * 0.2;
    }
    playerCar.style.left = (playerX - 25) + 'px';
}

function createOpponent() {
    const now = Date.now();
    if (now - lastOpponentTime < 1000 - (gameSpeed * 50)) return;
    lastOpponentTime = now;
    const model = carModels[Math.floor(Math.random() * carModels.length)];
    const lane = Math.floor(Math.random() * 3);
    let laneX;
    switch(lane) {
        case 0: laneX = gameContainer.offsetWidth * 0.25; break;
        case 1: laneX = gameContainer.offsetWidth * 0.5; break;
        case 2: laneX = gameContainer.offsetWidth * 0.75; break;
    }
    const opponent = document.createElement('div');
    opponent.className = 'opponent-car neon-effect';
    opponent.textContent = model.message;
    opponent.style.backgroundColor = model.color;
    opponent.style.color = model.textColor || "white";
    opponent.style.left = (laneX - 25) + 'px';
    opponent.style.top = '-90px';
    gameContainer.appendChild(opponent);
    opponents.push({
        element: opponent,
        x: laneX - 25,
        y: -90,
        speed: 3 + Math.random() * gameSpeed,
        message: model.message
    });
}

function updateOpponents() {
    for (let i = opponents.length - 1; i >= 0; i--) {
        const opponent = opponents[i];
        opponent.y += opponent.speed;
        opponent.element.style.top = opponent.y + 'px';
        if (
            playerX < opponent.x + 50 &&
            playerX + 50 > opponent.x &&
            playerCar.offsetTop < opponent.y + 90 &&
            playerCar.offsetTop + 90 > opponent.y
        ) {
            showSpecialMessage(opponent.message);
            gameOver();
            return;
        }
        if (opponent.y > gameContainer.offsetHeight) {
            opponent.element.remove();
            opponents.splice(i, 1);
            score++;
            scoreElement.textContent = score;
            if (score % 5 === 0) {
                gameSpeed += 0.2;
            }
        }
    }
}

function showSpecialMessage(msg) {
    const specialMsg = document.createElement('div');
    specialMsg.textContent = msg;
    specialMsg.style.position = 'absolute';
    specialMsg.style.top = '50%';
    specialMsg.style.left = '50%';
    specialMsg.style.transform = 'translate(-50%, -50%)';
    specialMsg.style.color = '#FFD700';
    specialMsg.style.fontSize = '2rem';
    specialMsg.style.fontWeight = 'bold';
    specialMsg.style.textShadow = '0 0 10px rgba(0,0,0,0.8)';
    specialMsg.style.zIndex = '101';
    specialMsg.style.animation = 'fadeOut 2s forwards';
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes fadeOut {
            0% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
            100% { opacity: 0; transform: translate(-50%, -50%) scale(1.5); }
        }
    `;
    document.head.appendChild(style);
    gameContainer.appendChild(specialMsg);
    setTimeout(() => {
        specialMsg.remove();
        style.remove();
    }, 2000);
}

function updateRoad() {
    const markers = document.querySelectorAll('.lane-marker');
    markers.forEach(marker => {
        let top = parseInt(marker.style.top);
        top += gameSpeed * 1.5;
        if (top > gameContainer.offsetHeight) {
            top = -60;
        }
        marker.style.top = top + 'px';
    });
}

function gameOver() {
    isGameOver = true;
    cancelAnimationFrame(animationId);
    finalScore.textContent = 'Puntaje: ' + score;
    gameOverScreen.style.display = 'block';
    createExplosion(playerX, playerCar.offsetTop + playerCar.offsetHeight/2);
}

function createExplosion(x, y) {
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '6px';
        particle.style.height = '6px';
        particle.style.backgroundColor = ['#FFD700', '#FF4500', '#FF6347', '#FFA500'][Math.floor(Math.random() * 4)];
        particle.style.borderRadius = '50%';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.zIndex = '20';
        gameContainer.appendChild(particle);
        const angle = Math.random() * Math.PI * 2;
        const velocity = 1 + Math.random() * 3;
        const lifetime = 800 + Math.random() * 400;
        let posX = x;
        let posY = y;
        const animate = () => {
            posX += Math.cos(angle) * velocity;
            posY += Math.sin(angle) * velocity;
            particle.style.left = posX + 'px';
            particle.style.top = posY + 'px';
            particle.style.opacity = (lifetime / 1200);
            if (lifetime > 0) {
                lifetime -= 16;
                requestAnimationFrame(animate);
            } else {
                particle.remove();
            }
        };
        requestAnimationFrame(animate);
    }
}

function startGame() {
    if (animationId) {
        cancelAnimationFrame(animationId);
    }
    opponents.forEach(opponent => {
        if (opponent.element && opponent.element.parentNode) {
            opponent.element.remove();
        }
    });
    opponents = [];
    score = 0;
    gameSpeed = 2;
    playerX = gameContainer.offsetWidth / 2;
    isGameOver = false;
    scoreElement.textContent = '0';
    playerCar.style.left = (playerX - 25) + 'px';
    gameOverScreen.style.display = 'none';
    const specialMessages = document.querySelectorAll('[id^="special-msg"]');
    specialMessages.forEach(msg => msg.remove());
    gameLoop();
}

function gameLoop() {
    if (isGameOver) return;
    updatePlayerPosition();
    createOpponent();
    updateOpponents();
    updateRoad();
    animationId = requestAnimationFrame(gameLoop);
}

restartBtn.addEventListener('click', function() {
    touchAudio.play();
    startGame();
});

const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        startGame();
    }
}, { threshold: 0.1 });

observer.observe(document.querySelector('.game-section'));

setTimeout(() => {
    if (!message.classList.contains('show-message')) {
        message.classList.add('show-message');
    }
}, 2000);