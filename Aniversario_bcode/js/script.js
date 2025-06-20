
AOS.init({
    duration: 1000,
    once: true,
    easing: 'ease-out-back'
});

function createDecorations() {
    const container = document.getElementById('decoration-container');
    const heartCount = 40;
    const flakeCount = 60;

    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤';

        const leftPos = Math.random() * 100;
        heart.style.left = `${leftPos}%`;

        const size = Math.random() * 2 + 2.5;
        heart.style.fontSize = `${size}rem`;

        const delay = Math.random() * 15;
        heart.style.animationDelay = `${delay}s`;

        const duration = 10 + Math.random() * 15;
        heart.style.animationDuration = `${duration}s`;

        container.appendChild(heart);
    }

    for (let i = 0; i < flakeCount; i++) {
        const flake = document.createElement('div');
        flake.classList.add('gold-flake');

        const leftPos = Math.random() * 100;
        flake.style.left = `${leftPos}%`;

        const size = 10 + Math.random() * 25;
        flake.style.width = `${size}px`;
        flake.style.height = `${size}px`;

        if (Math.random() > 0.5) {
            flake.style.borderRadius = '3px';
            flake.style.transform = 'rotate(45deg)';
        }

        const delay = Math.random() * 10;
        flake.style.animationDelay = `${delay}s`;

        const duration = 15 + Math.random() * 25;
        flake.style.animationDuration = `${duration}s`;

        container.appendChild(flake);
    }
}

function createModalHearts() {
    const container = document.getElementById('modalHearts');
    const heartCount = 50;

    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤';

        const leftPos = Math.random() * 100;
        heart.style.left = `${leftPos}%`;

        const size = Math.random() * 3 + 2;
        heart.style.fontSize = `${size}rem`;

        const colors = ['#e6c567', '#d4af37', '#f5e8c9', '#c9a227'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        heart.style.color = randomColor;

        const delay = Math.random() * 10;
        heart.style.animationDelay = `${delay}s`;

        const duration = 8 + Math.random() * 12;
        heart.style.animationDuration = `${duration}s`;

        container.appendChild(heart);
    }
}

function updateDateTime() {
    const baseDate = new Date();
    baseDate.setFullYear(baseDate.getFullYear() - 3);
    baseDate.setMonth(baseDate.getMonth() - 1);

    const now = new Date();
    const diffTime = Math.abs(now - baseDate);

    const diffSeconds = Math.floor(diffTime / 1000);
    const seconds = diffSeconds % 60;
    const diffMinutes = Math.floor(diffSeconds / 60);
    const minutes = diffMinutes % 60;
    const diffHours = Math.floor(diffMinutes / 60);
    const hours = diffHours % 24;
    const diffDays = Math.floor(diffHours / 24);

    document.getElementById('years').textContent = 3;
    document.getElementById('months').textContent = 1;
    document.getElementById('days').textContent = diffDays;
    document.getElementById('hours').textContent = hours < 10 ? `0${hours}` : hours;
    document.getElementById('minutes').textContent = minutes < 10 ? `0${minutes}` : minutes;
    document.getElementById('seconds').textContent = seconds < 10 ? `0${seconds}` : seconds;

    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    document.getElementById('current-date').textContent = now.toLocaleDateString('es-ES', options);

    const timeOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };
    document.getElementById('current-time').textContent = now.toLocaleTimeString('es-ES', timeOptions);
}

document.addEventListener('DOMContentLoaded', function () {
    createDecorations();
    createModalHearts();
    updateDateTime();

    setInterval(updateDateTime, 1000);

    document.getElementById('scrollDown').addEventListener('click', function () {
        window.scrollTo({
            top: document.querySelector('.counter-section').offsetTop,
            behavior: 'smooth'
        });
    });

    const modal = document.getElementById('surpriseModal');
    const btn = document.getElementById('btnSurprise');
    const closeBtn = document.getElementById('closeModal');

    btn.addEventListener('click', function () {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    modal.addEventListener('wheel', function (e) {
        const content = this.querySelector('.modal-content');
        const isAtTop = content.scrollTop === 0;
        const isAtBottom = content.scrollTop + content.clientHeight >= content.scrollHeight - 1;

        if ((isAtTop && e.deltaY < 0) || (isAtBottom && e.deltaY > 0)) {
            e.preventDefault();
        }
    });
});
