const mainContent = document.querySelector('.main-content');
const heartContainer = document.querySelector('.heart-container');
const heartFill = document.querySelector('.heart-fill');
const loveCard = document.getElementById('love-card');
const closeButton = document.getElementById('close-button');
const medalLeft = document.querySelector('.medals-container .medal:first-of-type');
const medalRight = document.querySelector('.medals-container .medal:last-of-type');
const plusSign = document.querySelector('.plus-sign');
const confettiContainer = document.getElementById('confetti-container');

const CHARGE_TARGET = 50;
const CLICK_INCREMENT = 5;
const DECAY_RATE = 12;
const UPDATE_INTERVAL = 50;

let currentCharge = 0;
let isComplete = false;
let decayInterval;
let confettiInterval;

const confettiColors = ["#2ecc71", "#3498db", "#9b59b4", "#f1c40f", "#e67e22", "#e74c3c", "#f368e0"];

function dropConfetti() {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    const startX = Math.random() * window.innerWidth;
    const color = confettiColors[Math.floor(Math.random() * confettiColors.length)];
    piece.style.left = startX + 'px';
    piece.style.top = '-20px';
    piece.style.backgroundColor = color;
    confettiContainer.appendChild(piece);
    const duration = Math.random() * 3 + 4;
    const endY = window.innerHeight + 20;
    const endRotation = (Math.random() - 0.5) * 1000;
    gsap.to(piece, {
        y: endY,
        rotation: endRotation,
        duration: duration,
        ease: 'none',
        onComplete: () => piece.remove()
    });
}

function startConfetti() {
    if (!confettiInterval) {
        confettiInterval = setInterval(dropConfetti, 100);
    }
}

function stopConfetti() {
    clearInterval(confettiInterval);
    confettiInterval = null;
    confettiContainer.innerHTML = '';
}

function updateMedalPositions() {
    const progress = currentCharge / CHARGE_TARGET;
    const maxMovement = 68;
    const movement = progress * maxMovement;
    medalLeft.style.transform = `translateX(${movement}px)`;
    medalRight.style.transform = `translateX(${-movement}px)`;
    plusSign.style.opacity = 1 - progress;
}

function updateHeartVisual() {
    const progressPercent = (currentCharge / CHARGE_TARGET) * 100;
    const insetTop = Math.max(0, 100 - progressPercent);
    heartFill.style.clipPath = `inset(${insetTop}% 0 0 0)`;
    updateMedalPositions();
}

function completeChallenge() {
    isComplete = true;
    clearInterval(decayInterval);
    heartFill.style.clipPath = `inset(0% 0 0 0)`;
    mainContent.classList.add('hidden');
    loveCard.classList.add('visible');
    startConfetti();
}

function decayCharge() {
    if (isComplete) return;
    const decayAmount = (DECAY_RATE * UPDATE_INTERVAL) / 1000;
    currentCharge = Math.max(0, currentCharge - decayAmount);
    updateHeartVisual();
}

function resetGame() {
    isComplete = false;
    currentCharge = 0;
    stopConfetti();
    setTimeout(() => {
        updateHeartVisual();
    }, 100);
    loveCard.classList.remove('visible');
    mainContent.classList.remove('hidden');
    clearInterval(decayInterval);
    decayInterval = setInterval(decayCharge, UPDATE_INTERVAL);
}


function handleInteraction() {
    if (isComplete) return;
    currentCharge = Math.min(CHARGE_TARGET, currentCharge + CLICK_INCREMENT);
    updateHeartVisual();

    heartContainer.classList.add('clicked');
    setTimeout(() => heartContainer.classList.remove('clicked'), 100);

    if (currentCharge >= CHARGE_TARGET) {
        completeChallenge();
    }
}

heartContainer.addEventListener('click', (event) => {
    event.stopPropagation();
    handleInteraction();
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && !isComplete) {
        event.preventDefault();
        handleInteraction();
    }
});

closeButton.addEventListener('click', (event) => {
    event.stopPropagation();
    resetGame();
});

resetGame();