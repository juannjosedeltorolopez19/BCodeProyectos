
document.addEventListener('DOMContentLoaded', function () {
    const matrix = document.getElementById('matrix');
    const explosion = document.getElementById('explosion');
    const loveWords = ["Te Amo Mary G.", "❤️", "Eres Mía", "💖", "Mi Vida", "💕", "Siempre", "💘", "Amor Eterno", "💓"];

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

    const elegantMessages = [
        "Te amo  Mary G.",
        "No sé cómo será el futuro… pero sí sé que quiero vivirlo contigo. ",  
        "Tu sonrisa es mi mejor lugar. Allí me pierdo feliz. ",  
        "Amarte no fue una decisión… fue el latido más natural de mi corazón. ",  
        "No eres parte de mi historia. Eres toda la trama. ",  
        "Tus abrazos son mi paz favorita. ",  
        "No tengo todo lo que quiero… pero tengo a quien más amo, y eso es más que suficiente. 🌸"
    ];

    function createParticles(x, y, count, color) {
        for (let i = 0; i < count; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = x + 'px';
            particle.style.top = y + 'px';
            particle.style.background = color;
            
            const angle = Math.random() * Math.PI * 2;
            const distance = 50 + Math.random() * 150;
            const tx = Math.cos(angle) * distance;
            const ty = Math.sin(angle) * distance;
            
            particle.style.setProperty('--p-tx', tx);
            particle.style.setProperty('--p-ty', ty);
            
            explosion.appendChild(particle);
            
            setTimeout(() => {
                particle.remove();
            }, 1200);
        }
    }

    function createElegantMessage(x, y) {
        const existingMessages = document.querySelectorAll('.elegant-message');
        existingMessages.forEach(msg => msg.remove());
        
        const messageContainer = document.createElement('div');
        messageContainer.className = 'elegant-message';
        
        const randomMessage = elegantMessages[Math.floor(Math.random() * elegantMessages.length)];
        
        const hue = 330 + Math.random() * 30;
        const textColor = `hsl(${hue}, 85%, 85%)`;
        const bgColor = `rgba(${160 + Math.random() * 40}, ${Math.random() * 30}, ${80 + Math.random() * 40}, 0.3)`;
        const shadowColor = `hsl(${hue}, 85%, 65%)`;
        
        messageContainer.style.color = textColor;
        messageContainer.style.background = bgColor;
        messageContainer.style.boxShadow = `0 0 25px ${shadowColor}`;
        messageContainer.style.left = x + 'px';
        messageContainer.style.top = y + 'px';
        createParticles(x, y, 30, `hsl(${hue}, 85%, 65%)`);
        const chars = randomMessage.split('');
        chars.forEach((char, index) => {
            const charSpan = document.createElement('span');
            charSpan.className = 'message-char';
            charSpan.textContent = char === ' ' ? '\u00A0' : char;
            const tx = (Math.random() - 0.5) * 200;
            const ty = (Math.random() - 0.5) * 200;
            const rotation = (Math.random() - 0.5) * 360;
            const distanceMultiplier = 1 + Math.random() * 1.5;
            
            charSpan.style.setProperty('--tx', tx);
            charSpan.style.setProperty('--ty', ty);
            charSpan.style.setProperty('--rotation', rotation);
            charSpan.style.setProperty('--distance-multiplier', distanceMultiplier);
            charSpan.style.animationDelay = (index * 0.05) + 's';
            
            messageContainer.appendChild(charSpan);
        });
        
        explosion.appendChild(messageContainer);

        setTimeout(() => {
            messageContainer.remove();
        }, 6000);
    }

    document.addEventListener('click', function (e) {
        createElegantMessage(e.clientX, e.clientY);
    });

    document.addEventListener('touchstart', function (e) {
        e.preventDefault();
        const touch = e.touches[0];
        createElegantMessage(touch.clientX, touch.clientY);
    });
});
