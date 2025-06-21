function createDecorations() {
    const container = document.getElementById('decoration-container');
    const heartCount = 40;
    const flowerCount = 60;

    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤';

        const colors = ['#ff8fab', '#ffb3c6', '#c77dff', '#e0bbe4'];
        heart.style.color = colors[Math.floor(Math.random() * colors.length)];

        heart.style.left = `${Math.random() * 100}%`;
        heart.style.fontSize = `${Math.random() * 2 + 2.5}rem`;
        heart.style.animationDelay = `${Math.random() * 15}s`;
        heart.style.animationDuration = `${10 + Math.random() * 15}s`;

        container.appendChild(heart);
    }

    for (let i = 0; i < flowerCount; i++) {
        const flower = document.createElement('div');
        flower.classList.add('flower');

        flower.style.left = `${Math.random() * 100}%`;
        const size = 15 + Math.random() * 25;
        flower.style.width = `${size}px`;
        flower.style.height = `${size}px`;
        flower.style.transform = `rotate(${Math.random() * 360}deg)`;
        flower.style.animationDelay = `${Math.random() * 10}s`;
        flower.style.animationDuration = `${15 + Math.random() * 25}s`;

        container.appendChild(flower);
    }
}

function createModalHearts() {
    const container = document.getElementById('modalHearts');
    const heartCount = 50;

    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤';

        const colors = ['#ff8fab', '#ffb3c6', '#c77dff', '#e0bbe4'];
        heart.style.color = colors[Math.floor(Math.random() * colors.length)];

        heart.style.left = `${Math.random() * 100}%`;
        heart.style.fontSize = `${Math.random() * 3 + 2}rem`;
        heart.style.animationDelay = `${Math.random() * 10}s`;
        heart.style.animationDuration = `${8 + Math.random() * 12}s`;

        container.appendChild(heart);
    }
}

function updateDateTime() {
    const baseDate = new Date();
    baseDate.setFullYear(baseDate.getFullYear() - 3);
    baseDate.setMonth(baseDate.getMonth() - 1);

    const now = new Date();
    const diffTime = Math.abs(now - baseDate);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    document.getElementById('years').textContent = 3;
    document.getElementById('months').textContent = 1;
    document.getElementById('days').textContent = diffDays;

    document.getElementById('current-date').textContent = now.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    document.getElementById('current-time').textContent = now.toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

document.addEventListener('DOMContentLoaded', function() {
    createDecorations();
    createModalHearts();

    updateDateTime();
    setInterval(updateDateTime, 1000);

    document.getElementById('scrollDown').addEventListener('click', function() {
        window.scrollTo({
            top: document.querySelector('.counter-section').offsetTop,
            behavior: 'smooth'
        });
    });

    const modal = document.getElementById('surpriseModal');
    const btn = document.getElementById('btnSurprise');
    const closeBtn = document.getElementById('closeModal');

    btn.addEventListener('click', function() {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});
