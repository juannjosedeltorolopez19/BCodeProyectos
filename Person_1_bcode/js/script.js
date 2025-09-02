const mainMessage = "Hola amor, te quiero decir q te amo con td mi corazón y eres una niña muy especial, eres la persona más importante en mi vida y no se que aria sin ti, me haces muy feliz, me haces ser mejor persona, le agradezco a Dios por haberte puesto en mi camino, ya casi llevamos dos años juntos y espero que ese solo sea el comienzo de nuestro historia porque me quiero quedar contigo para siempre, eres una niña muy inteligente, bella, hermosa, valiente y siempre estás cuando te necesito, gracias por todo lo q has hecho por mí y gracias por haber estado conmigo todo este tiempo, te amoooo y te adoro con todo mi corazón, te amooo como no tenes idea, te amooo te una manera inflable, inexplicable he incomprensible, de verdad te amoo con toda mi alma, gracias por aguantar todos nuestros malos momentos, gracias por todo amor, te amoooo con todo mi corazón piolín, te adoro infinitamente, felices 1 año y 6 meses amor, te amooo 💗💗";

const modalMessage = "Hola amor, te quiero decir q te amo con td mi corazón y eres una niña muy especial, eres la persona más importante en mi vida y no se que aria sin ti, me haces muy feliz, me haces ser mejor persona, le agradezco a Dios por haberte puesto en mi camino, ya casi llevamos dos años juntos y espero que ese solo sea el comienzo de nuestro historia porque me quiero quedar contigo para siempre, eres una niña muy inteligente, bella, hermosa, valiente y siempre estás cuando te necesito, gracias por todo lo q has hecho por mí y gracias por haber estado conmigo todo este tiempo, te amoooo y te adoro con todo mi corazón, te amooo como no tenes idea, te amooo te una manera inflable, inexplicable he incomprensible, de verdad te amoo con toda mi alma, gracias por aguantar todos nuestros malos momentos, gracias por todo amor, te amoooo con todo mi corazón piolín, te adoro infinitamente, felices 1 año y 6 meses amor, te amooo 💗💗";

const signature = "Con todo mi corazón,\nTu eterno enamorado 💗";

let mainTypingComplete = false;
let modalTypingComplete = false;

function typeWriter(text, element, speed, callback) {
    let i = 0;
    let formattedText = '';
    const targetElement = document.getElementById(element);

    function type() {
        if (i < text.length) {
            if (text.charAt(i) === '\n') {
                formattedText += '<br><br>';
            } else {
                formattedText += text.charAt(i);
            }
            targetElement.innerHTML = formattedText + '<span class="cursor"></span>';
            i++;
            setTimeout(type, speed);
        } else if (callback) {
            callback();
        }
    }
    type();
}

function createHeartRain() {
    const container = document.getElementById('heart-rain');
    const characters = ['❤️', '💖', '💕', '💞', '💓', '💗', '💘', '💝'];
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart-drop';
        heart.innerHTML = characters[Math.floor(Math.random() * characters.length)];
        heart.style.left = Math.random() * 100 + 'vw';
        const duration = Math.random() * 5 + 5;
        heart.style.animationDuration = duration + 's';
        const size = Math.random() * 10 + 20;
        heart.style.fontSize = size + 'px';
        heart.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(heart);
    }
}

function createFlowers() {
    const container = document.getElementById('flowers');
    const flowers = ['🌸', '🌹', '🌺', '🌷', '💐', '🥀', '🌻', '🌼'];
    for (let i = 0; i < 15; i++) {
        const flower = document.createElement('div');
        flower.className = 'flower';
        flower.innerHTML = flowers[Math.floor(Math.random() * flowers.length)];
        flower.style.left = Math.random() * 100 + 'vw';
        flower.style.top = Math.random() * 100 + 'vh';
        flower.style.fontSize = (Math.random() * 20 + 15) + 'px';
        flower.style.opacity = Math.random() * 0.5 + 0.1;
        container.appendChild(flower);
    }
}

const musicControl = document.getElementById('musicControl');
const bgMusic = document.getElementById('bgMusic');
let musicPlaying = false;

musicControl.addEventListener('click', function () {
    if (musicPlaying) {
        bgMusic.pause();
        musicControl.innerHTML = '<i class="fas fa-music"></i>';
        musicControl.style.background = 'rgba(255, 42, 117, 0.2)';
    } else {
        bgMusic.play();
        musicControl.innerHTML = '<i class="fas fa-pause"></i>';
        musicControl.style.background = 'rgba(255, 42, 117, 0.5)';
    }
    musicPlaying = !musicPlaying;
});

document.body.addEventListener('click', function () {
    if (!musicPlaying) {
        bgMusic.play();
        musicPlaying = true;
        musicControl.innerHTML = '<i class="fas fa-pause"></i>';
        musicControl.style.background = 'rgba(255, 42, 117, 0.5)';
    }
});

function updateDate() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('date').textContent = now.toLocaleDateString('es-ES', options);
}

const modal = document.getElementById('modal');
const btn = document.getElementById('surpriseBtn');
const span = document.getElementById('closeModal');

btn.onclick = function () {
    if (mainTypingComplete) {
        modal.style.display = 'flex';
        if (!modalTypingComplete) {
            document.getElementById('modalMessage').innerHTML = '';
            typeWriter(modalMessage, 'modalMessage', 40, function () {
                modalTypingComplete = true;
            });
        }
    }
}

span.onclick = function () {
    modal.style.display = 'none';
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
        modal.style.display = 'none';
    }
    if (e.key === 'a' || e.key === 'A') {
        modal.style.display = 'flex';
    }
    if (e.key === 'm' || e.key === 'M') {
        musicControl.click();
    }
});

window.onload = function () {
    createHeartRain();
    createFlowers();
    updateDate();

    typeWriter(mainMessage, 'messageText', 30, function () {
        mainTypingComplete = true;
        document.getElementById('messageText').innerHTML += '<div class="signature">' + signature.replace(/\n/g, '<br>') + '</div>';
        document.getElementById('surpriseBtn').innerHTML = '<i class="fas fa-heart"></i> Descubre Mi Corazón';
    });
};