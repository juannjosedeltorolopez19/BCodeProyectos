document.addEventListener('DOMContentLoaded', function () {
    const matrix = document.getElementById('matrix');
    const loveWords = ["Te Amo", "❤️", "Eres Mía", "💖", "Mi Vida", "💕", "Siempre", "💘", "Amor Eterno", "💓"];

    function createLoveLetter() {
        const letter = document.createElement('div');
        letter.className = 'love-letter';

        if (Math.random() > 0.4) {
            letter.textContent = loveWords[Math.floor(Math.random() * loveWords.length)];
            letter.style.fontSize = (20 + Math.random() * 30) + 'px';
        } else {
            letter.textContent = "❤️";
            letter.style.fontSize = (15 + Math.random() * 25) + 'px';
        }

        letter.style.left = Math.random() * 100 + 'vw';
        letter.style.animationDuration = (5 + Math.random() * 15) + 's';
        letter.style.animationDelay = Math.random() * 5 + 's';
        letter.style.opacity = Math.random() * 0.6 + 0.1;
        letter.style.color = `hsl(${Math.random() * 30 + 330}, ${Math.random() * 30 + 70}%, ${Math.random() * 20 + 70}%)`;

        matrix.appendChild(letter);

        setTimeout(() => {
            letter.remove();
        }, 20000);
    }

    setInterval(createLoveLetter, 150);

    function createLoveExplosion(x, y) {
        const explosion = document.getElementById('explosion');
        const colors = ['#ffb6e1', '#ff9ec6', '#ff85ac', '#ff6b9e', '#ff8fab'];
        const messages = ["Te amo", "Para ti", "Mi amor", "Eres mía", "Solo tú"];

        for (let i = 0; i < 40; i++) {
            const angle = Math.random() * Math.PI * 2;
            const distance = 30 + Math.random() * 200;
            const tx = Math.cos(angle) * distance;
            const ty = Math.sin(angle) * distance;

            const love = document.createElement('div');
            love.className = 'love-explosion';
            love.textContent = messages[Math.floor(Math.random() * messages.length)];
            love.style.left = x + 'px';
            love.style.top = y + 'px';
            love.style.setProperty('--tx', tx + 'px');
            love.style.setProperty('--ty', ty + 'px');
            love.style.animationDuration = (0.8 + Math.random() * 0.7) + 's';
            love.style.color = colors[Math.floor(Math.random() * colors.length)];
            love.style.fontSize = (18 + Math.random() * 14) + 'px';

            explosion.appendChild(love);

            setTimeout(() => {
                love.remove();
            }, 1200);
        }
    }

    document.addEventListener('click', function (e) {
        createLoveExplosion(e.clientX, e.clientY);
    });

    document.addEventListener('touchstart', function (e) {
        e.preventDefault();
        const touch = e.touches[0];
        createLoveExplosion(touch.clientX, touch.clientY);
    });
});
