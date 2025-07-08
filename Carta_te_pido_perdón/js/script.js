
document.addEventListener('DOMContentLoaded', function () {
    const envelopeWrapper = document.getElementById('envelope-wrapper');
    const envelope = document.getElementById('envelope');
    const tearContainer = document.getElementById('tear-container');
    const floatingTears = document.getElementById('floating-tears');
    const fullscreenLetter = document.getElementById('fullscreen-letter');
    const closeBtn = document.getElementById('close-btn');
    const mainContainer = document.getElementById('main-container');
    const notification = document.getElementById('notification');
    const forgivenessBtn = document.getElementById('forgiveness-btn');

    function createBrokenHearts() {
        for (let i = 0; i < 8; i++) {
            const heart = document.createElement('div');
            heart.innerHTML = '💔';
            heart.classList.add('broken-heart');

            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.top = Math.random() * 100 + 'vh';
            heart.style.fontSize = (Math.random() * 30 + 20) + 'px';
            heart.style.animationDelay = Math.random() * 5 + 's';

            document.body.appendChild(heart);
        }
    }
    setTimeout(() => {
        notification.classList.add('show');
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }, 1000);
    function createFloatingTears() {
        for (let i = 0; i < 15; i++) {
            const tear = document.createElement('div');
            tear.innerHTML = '💧';
            tear.classList.add('floating-tear');

            tear.style.left = Math.random() * 100 + 'vw';
            tear.style.top = Math.random() * 100 + 'vh';
            tear.style.fontSize = (Math.random() * 30 + 20) + 'px';
            tear.style.animationDelay = Math.random() * 5 + 's';

            floatingTears.appendChild(tear);
        }
    }

    function openEnvelope() {
        envelope.classList.add('open');
        mainContainer.classList.add('open-envelope');

        setTimeout(() => {
            fullscreenLetter.classList.add('active');
            document.body.style.overflow = 'hidden';
            createTearExplosion();
        }, 1000);

        createInitialTears();
    }

    function closeFullscreenLetter() {
        fullscreenLetter.classList.remove('active');
        document.body.style.overflow = '';

        setTimeout(() => {
            envelope.classList.remove('open');
            mainContainer.classList.remove('open-envelope');
        }, 300);
    }

    envelopeWrapper.addEventListener('click', openEnvelope);
    closeBtn.addEventListener('click', closeFullscreenLetter);

    fullscreenLetter.addEventListener('click', function (e) {
        if (e.target === fullscreenLetter) {
            closeFullscreenLetter();
        }
    });

    forgivenessBtn.addEventListener('click', function () {
        this.innerHTML = '¡Gracias por tu perdón! 😭❤️';
        this.style.background = 'linear-gradient(45deg, #51cf66, #2f9e44)';
        this.style.transform = 'scale(1.1)';

        createHeartExplosion();

        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.innerHTML = '❤️';
                heart.style.position = 'fixed';
                heart.style.fontSize = (Math.random() * 30 + 20) + 'px';
                heart.style.left = Math.random() * 100 + 'vw';
                heart.style.top = '-50px';
                heart.style.zIndex = '1000';
                heart.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
                heart.style.color = `hsl(${Math.random() * 360}, 100%, 65%)`;

                document.body.appendChild(heart);

                setTimeout(() => {
                    heart.remove();
                }, 5000);
            }, i * 100);
        }

        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 300);
    });

    function createInitialTears() {
        for (let i = 0; i < 15; i++) {
            setTimeout(() => {
                const tear = document.createElement('div');
                tear.innerHTML = '😭';
                tear.classList.add('tear-fall');

                tear.style.left = Math.random() * 100 + 'vw';
                const size = Math.random() * 30 + 15;
                tear.style.fontSize = size + 'px';
                const duration = Math.random() * 3 + 2;
                tear.style.animationDuration = duration + 's';

                tearContainer.appendChild(tear);

                setTimeout(() => {
                    tear.remove();
                }, duration * 1000);
            }, i * 150);
        }
    }

    function createHeartExplosion() {
        const explosionContainer = document.createElement('div');
        explosionContainer.style.position = 'fixed';
        explosionContainer.style.top = '50%';
        explosionContainer.style.left = '50%';
        explosionContainer.style.transform = 'translate(-50%, -50%)';
        explosionContainer.style.zIndex = '100';
        document.body.appendChild(explosionContainer);

        for (let i = 0; i < 50; i++) {
            const heart = document.createElement('div');
            heart.innerHTML = '❤️';
            heart.classList.add('tear-explosion');

            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 300 + 200;
            const tx = Math.cos(angle) * distance;
            const ty = Math.sin(angle) * distance;

            heart.style.setProperty('--tx', tx + 'px');
            heart.style.setProperty('--ty', ty + 'px');
            heart.style.fontSize = (Math.random() * 24 + 16) + 'px';
            heart.style.color = `hsl(${Math.random() * 360}, 100%, 65%)`;

            explosionContainer.appendChild(heart);
        }

        setTimeout(() => {
            explosionContainer.remove();
        }, 1500);
    }
    function createTearExplosion() {
        const explosionContainer = document.createElement('div');
        explosionContainer.style.position = 'fixed';
        explosionContainer.style.top = '50%';
        explosionContainer.style.left = '50%';
        explosionContainer.style.transform = 'translate(-50%, -50%)';
        explosionContainer.style.zIndex = '100';
        document.body.appendChild(explosionContainer);

        for (let i = 0; i < 30; i++) {
            const tear = document.createElement('div');
            tear.innerHTML = '😭';
            tear.classList.add('tear-explosion');

            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 300 + 200;
            const tx = Math.cos(angle) * distance;
            const ty = Math.sin(angle) * distance;

            tear.style.setProperty('--tx', tx + 'px');
            tear.style.setProperty('--ty', ty + 'px');
            tear.style.fontSize = (Math.random() * 24 + 16) + 'px';

            explosionContainer.appendChild(tear);
        }

        setTimeout(() => {
            explosionContainer.remove();
        }, 1500);
    }


    const specialName = document.querySelector('.special-name');
    setInterval(() => {
        specialName.style.transform = `rotate(${Math.random() * 8 - 4}deg)`;
    }, 2000);

    createFloatingTears();
    createBrokenHearts();
});
