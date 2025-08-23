
document.addEventListener('DOMContentLoaded', function () {
    const nameInputContainer = document.getElementById('name-input-container');
    const nameInput = document.getElementById('name-input');
    const submitNameBtn = document.getElementById('submit-name');
    const recipientName = document.getElementById('recipient-name');
    const letterTitle = document.getElementById('letter-title');
    const fullscreenTitle = document.getElementById('fullscreen-title');
    const fullscreenSignature = document.getElementById('fullscreen-signature');

    const envelopeWrapper = document.getElementById('envelope-wrapper');
    const envelope = document.getElementById('envelope');
    const heartsContainer = document.getElementById('hearts-container');
    const floatingHearts = document.getElementById('floating-hearts');
    const fullscreenLetter = document.getElementById('fullscreen-letter');
    const closeBtn = document.getElementById('close-btn');
    const mainContainer = document.getElementById('main-container');
    const notification = document.getElementById('notification');
    nameInput.focus();
    submitNameBtn.addEventListener('click', function () {
        const name = nameInput.value.trim() || 'Mi Amor';
        personalizeContent(name);
        nameInputContainer.style.opacity = '0';
        setTimeout(() => {
            nameInputContainer.style.display = 'none';
        }, 500);
        const audio = new Audio('https://bcodestorague.anteroteobaldob.workers.dev/share/anteroteobaldob_gmail_com/AUDIO/Buenos%20dias.mp3'); 
        audio.play().catch(e => {
            console.warn('Autoplay bloqueado por el navegador:', e);
        });
    });

    nameInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            submitNameBtn.click();
        }
    });
    function personalizeContent(name) {
        recipientName.textContent = name;
        letterTitle.textContent = name;
        fullscreenTitle.textContent = `PARA TI, ${name.toUpperCase()}`;
        fullscreenSignature.textContent = `Con todo mi amor, Tu Novia`;
        const fullscreenContent = document.querySelector('.fullscreen-letter-content');
        fullscreenContent.innerHTML = `
            <h2>PARA TI MI AMOR, ${name.toUpperCase()}</h2>
            <p>Desde que llegaste a mi vida, todo tiene más sentido.</p>
            <p>Eres mi apoyo, mi confidente y mi mejor amigo.</p>
            <p>Tu sonrisa ilumina mis días más oscuros</p>
            <p>y tu abrazo es mi lugar favorito en el mundo.</p>
            <p>Amo la persona que soy cuando estoy contigo,</p>
            <p>amo cómo me haces reír sin esfuerzo,</p>
            <p>y amo cómo me amas con todo y mis defectos.</p>
            <p>Eres el hombre más increíble que he conocido</p>
            <p>y me siento la mujer más afortunada por tenerte.</p>
            <p>¡Que tengas un día maravilloso, mi amor!</p>
            <div class="signature">Con todo mi amor, Tu Novia</div>
        `;
    }

    setTimeout(() => {
        notification.classList.add('show');
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }, 1000);

    function createFloatingHearts() {
        for (let i = 0; i < 20; i++) {
            const heart = document.createElement('div');
            heart.innerHTML = '❤️';
            heart.classList.add('floating-heart');

            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.top = Math.random() * 100 + 'vh';
            heart.style.fontSize = (Math.random() * 30 + 20) + 'px';
            heart.style.animationDelay = Math.random() * 5 + 's';

            floatingHearts.appendChild(heart);
        }
    }

    function openEnvelope() {
        envelope.classList.add('open');
        mainContainer.classList.add('open-envelope');

        setTimeout(() => {
            fullscreenLetter.classList.add('active');
            document.body.style.overflow = 'hidden';
            createHeartExplosion();
        }, 1000);

        createInitialHearts();
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

    function createInitialHearts() {
        for (let i = 0; i < 40; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.innerHTML = '❤️';
                heart.classList.add('heart-fall');

                heart.style.left = Math.random() * 100 + 'vw';
                const size = Math.random() * 30 + 15;
                heart.style.fontSize = size + 'px';
                const duration = Math.random() * 3 + 2;
                heart.style.animationDuration = duration + 's';
                heart.style.color = `hsl(${240 + Math.random() * 30}, 100%, 65%)`;

                heartsContainer.appendChild(heart);

                setTimeout(() => {
                    heart.remove();
                }, duration * 1000);
            }, i * 100);
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

        for (let i = 0; i < 100; i++) {
            const heart = document.createElement('div');
            heart.innerHTML = '❤️';
            heart.classList.add('heart-explosion');

            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 300 + 200;
            const tx = Math.cos(angle) * distance;
            const ty = Math.sin(angle) * distance;

            heart.style.setProperty('--tx', tx + 'px');
            heart.style.setProperty('--ty', ty + 'px');
            heart.style.fontSize = (Math.random() * 24 + 16) + 'px';
            heart.style.color = `hsl(${240 + Math.random() * 30}, 100%, 65%)`;

            explosionContainer.appendChild(heart);
        }

        setTimeout(() => {
            explosionContainer.remove();
        }, 1500);
    }

    const specialName = document.querySelector('.special-name');
    setInterval(() => {
        specialName.style.transform = `rotate(${Math.random() * 8 - 4}deg)`;
    }, 2000);

    createFloatingHearts();

    function playSound() {
        try {
            const context = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = context.createOscillator();
            const gainNode = context.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(context.destination);

            oscillator.type = 'sine';
            oscillator.frequency.setValueAtTime(440, context.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(880, context.currentTime + 0.3);

            gainNode.gain.setValueAtTime(0.3, context.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, context.currentTime + 0.5);

            oscillator.start();
            oscillator.stop(context.currentTime + 0.5);
        } catch (e) {
            console.log("Audio no soportado en este navegador");
        }
    }

    envelopeWrapper.addEventListener('click', playSound);
});
