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
    const startDate = new Date(2025, 5, 2);
    const now = new Date();

    const diffTime = now - startDate;
    const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    const months = Math.floor(totalDays / 30);
    const days = totalDays % 30;

    document.getElementById('months').textContent = months;
    document.getElementById('days').textContent = days;

    const anniversaryDate = new Date(startDate);
    anniversaryDate.setMonth(anniversaryDate.getMonth() + 3);
    const options = { day: 'numeric', month: 'long' };
    document.getElementById('current-date').textContent = anniversaryDate.toLocaleDateString('es-ES', options);

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('current-time').textContent = `${hours}:${minutes}:${seconds}`;
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