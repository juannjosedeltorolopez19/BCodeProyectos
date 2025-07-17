function createDecorations() {
    const container = document.getElementById('decoration-container');
    const heartCount = 40;
    const flakeCount = 60;

    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤';
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.fontSize = `${Math.random() * 2 + 2.5}rem`;
        heart.style.animationDelay = `${Math.random() * 15}s`;
        heart.style.animationDuration = `${10 + Math.random() * 15}s`;
        container.appendChild(heart);
    }

    for (let i = 0; i < flakeCount; i++) {
        const flake = document.createElement('div');
        flake.classList.add('gold-flake');
        flake.style.left = `${Math.random() * 100}%`;
        const size = 10 + Math.random() * 25;
        flake.style.width = `${size}px`;
        flake.style.height = `${size}px`;
        if (Math.random() > 0.5) {
            flake.style.borderRadius = '3px';
            flake.style.transform = 'rotate(45deg)';
        }
        flake.style.animationDelay = `${Math.random() * 10}s`;
        flake.style.animationDuration = `${15 + Math.random() * 25}s`;
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
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.fontSize = `${Math.random() * 3 + 2}rem`;
        const colors = ['#e6c567', '#d4af37', '#f5e8c9', '#c9a227'];
        heart.style.color = colors[Math.floor(Math.random() * colors.length)];
        heart.style.animationDelay = `${Math.random() * 10}s`;
        heart.style.animationDuration = `${8 + Math.random() * 12}s`;
        container.appendChild(heart);
    }


}
function updateDateTime() {
    const start = new Date('2024-10-18T00:00:00'); 
    const now = new Date();

    
    let years = now.getFullYear() - start.getFullYear();
    let months = now.getMonth() - start.getMonth();
    let days = now.getDate() - start.getDate();

    if (days < 0) {
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
        months--;
    }

    if (months < 0) {
        months += 12;
        years--;
    }


    const diffTime = now - start;
    const totalSeconds = Math.floor(diffTime / 1000);
    const seconds = totalSeconds % 60;
    const totalMinutes = Math.floor(totalSeconds / 60);
    const minutes = totalMinutes % 60;
    const totalHours = Math.floor(totalMinutes / 60);
    const hours = totalHours % 24;

    
    document.getElementById('years').textContent = years;
    document.getElementById('months').textContent = months;
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours < 10 ? `0${hours}` : hours;
    document.getElementById('minutes').textContent = minutes < 10 ? `0${minutes}` : minutes;
    document.getElementById('seconds').textContent = seconds < 10 ? `0${seconds}` : seconds;

    
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

    modal.addEventListener('wheel', function(e) {
        const content = this.querySelector('.modal-content');
        const isAtTop = content.scrollTop === 0;
        const isAtBottom = content.scrollTop + content.clientHeight >= content.scrollHeight - 1;

        if ((isAtTop && e.deltaY < 0) || (isAtBottom && e.deltaY > 0)) {
            e.preventDefault();
        }
    });
});