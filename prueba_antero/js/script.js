// script.js

function createHearts() {
    const container = document.getElementById('hearts');
    const heartCount = 30;

    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart-particle');
        heart.innerHTML = '❤';

        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.top = `${100 + Math.random() * 20}vh`;
        heart.style.fontSize = `${Math.random() * 20 + 15}px`;
        heart.style.animationDuration = `${Math.random() * 15 + 10}s`;
        heart.style.animationDelay = `${Math.random() * 10}s`;

        container.appendChild(heart);
    }
}

function animateCounter() {
    const counter = document.getElementById('daysCount');
    const target = 1275;
    let count = 0;
    const duration = 3000;
    const increment = target / (duration / 20);

    const timer = setInterval(() => {
        count += increment;
        if (count >= target) {
            count = target;
            clearInterval(timer);
        }
        counter.textContent = Math.floor(count);
    }, 20);
}

document.getElementById('surpriseBtn').addEventListener('click', function () {
    const revealMessage = document.getElementById('revealMessage');
    revealMessage.classList.add('active');
    document.body.style.overflow = 'hidden';
});

document.getElementById('closeBtn').addEventListener('click', function () {
    const revealMessage = document.getElementById('revealMessage');
    revealMessage.classList.remove('active');
    document.body.style.overflow = 'auto';

    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤';
        heart.style.position = 'fixed';
        heart.style.fontSize = `${Math.random() * 30 + 20}px`;
        heart.style.color = '#ff6b8b';
        heart.style.left = `${50 + (Math.random() - 0.5) * 30}%`;
        heart.style.top = `${50 + (Math.random() - 0.5) * 30}%`;
        heart.style.opacity = '0';
        heart.style.zIndex = '100';
        heart.style.transform = 'translate(-50%, -50%)';

        document.body.appendChild(heart);

        heart.animate([
            { opacity: 0, transform: 'translate(-50%, -50%) scale(0)' },
            { opacity: 1, transform: 'translate(-50%, -50%) scale(1.5)' },
            { opacity: 0, transform: 'translate(-50%, -150%) scale(0.5)' }
        ], {
            duration: 2000 + Math.random() * 1000,
            easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
        });

        setTimeout(() => {
            if (heart.parentNode) {
                document.body.removeChild(heart);
            }
        }, 3000);
    }
});

function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-in');
    const windowHeight = window.innerHeight;

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.style.opacity = 1;
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    createHearts();
    animateCounter();
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
});
