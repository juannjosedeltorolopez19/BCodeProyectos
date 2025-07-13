
const graduationDate = new Date('December 10, 2025 00:00:00').getTime();

const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const countdownContainer = document.getElementById('countdown-container');
function updateCountdown() {
    const now = new Date().getTime();
    const distance = graduationDate - now;

    if (distance < 0) {
        showGraduationDay();
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysElement.textContent = days.toString().padStart(2, '0');
    hoursElement.textContent = hours.toString().padStart(2, '0');
    minutesElement.textContent = minutes.toString().padStart(2, '0');
    secondsElement.textContent = seconds.toString().padStart(2, '0');
}

function showGraduationDay() {

    countdownContainer.innerHTML = `
                <div class="graduation-day">
                    <div class="graduation-title">¡HOY ES EL GRAN DÍA!</div>
                    <div class="graduation-subtitle">¡Felicitaciones en tu graduación, Saywa!</div>
                </div>
            `;
    document.body.style.background = 'linear-gradient(135deg, #ff6b9c, #ffd3e0, #ffb6c1)';

    document.querySelector('h1').textContent = '¡Felicidades Saywa!';
    document.querySelector('.subtitle').textContent = '¡Hoy es tu gran día!';
    const carouselItems = document.querySelectorAll('.carousel-content');
    if (carouselItems.length >= 4) {
        carouselItems[0].querySelector('h2').textContent = '¡Lo lograste!';
        carouselItems[0].querySelector('p').innerHTML = 'Hoy es el día que tanto esperabas. Estoy tan orgulloso de ti y de todo lo que has logrado. <i class="fas fa-heart heart-icon"></i>';

        carouselItems[1].querySelector('h2').textContent = 'Brillas con luz propia';
        carouselItems[1].querySelector('p').innerHTML = 'En este día tan especial, quiero que sepas que eres una inspiración para todos los que te rodean. <i class="fas fa-heart heart-icon"></i>';

        carouselItems[2].querySelector('h2').textContent = 'El futuro te espera';
        carouselItems[2].querySelector('p').innerHTML = 'Este es solo el comienzo de grandes cosas que vendrán. Estaré aquí para apoyarte en cada paso. <i class="fas fa-heart heart-icon"></i>';

        carouselItems[3].querySelector('h2').textContent = 'Con todo mi amor';
        carouselItems[3].querySelector('p').innerHTML = 'De tu mejor amigo que siempre te admirará y estará a tu lado. ¡Felicidades! <i class="fas fa-heart heart-icon"></i>';
    }

    const message = document.querySelector('.message');
    if (message) {
        message.innerHTML = `
                    <p>Saywa, hoy es un día que quedará grabado en nuestras memorias para siempre:</p>
                    <p>Verte recibir tu diploma, con esa sonrisa que ilumina todo a tu alrededor, ha sido uno de los momentos más especiales de mi vida. Cada esfuerzo, cada sacrificio, cada hora de estudio ha valido la pena para llegar a este momento.</p>
                    <p>Como tu mejor amigo, quiero que sepas que siempre estaré aquí para celebrar tus logros y apoyarte en todo lo que venga. ¡El mundo es tuyo, amiga mía!</p>
                    <div class="signature">Con todo mi cariño</div>
                    <div class="date">Para siempre, tu mejor amigo</div>
                `;
    }
    createConfetti();
}

function createConfetti() {
    const graduationDay = document.querySelector('.graduation-day');
    if (!graduationDay) return;

    const colors = ['#ff6b9c', '#ffd3e0', '#ffb6c1', '#fff', '#ff9ec4'];

    for (let i = 0; i < 150; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
        confetti.style.animationDelay = `${Math.random() * 2}s`;
        confetti.style.width = `${Math.random() * 10 + 5}px`;
        confetti.style.height = `${Math.random() * 10 + 5}px`;
        graduationDay.appendChild(confetti);
    }
}

updateCountdown();
setInterval(updateCountdown, 1000);
const carousel = document.getElementById('carousel');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const dots = document.querySelectorAll('.nav-dot');
const totalSlides = 4;
let currentIndex = 0;
let autoSlideInterval;

function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
}

function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 5000);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

prevBtn.addEventListener('click', () => {
    stopAutoSlide();
    prevSlide();
    startAutoSlide();
});

nextBtn.addEventListener('click', () => {
    stopAutoSlide();
    nextSlide();
    startAutoSlide();
});

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        stopAutoSlide();
        currentIndex = parseInt(dot.getAttribute('data-index'));
        updateCarousel();
        startAutoSlide();
    });
});

function createHearts() {
    const heartsContainer = document.getElementById('hearts');
    const heartCount = 50;

    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '<i class="fas fa-heart"></i>';
        heart.classList.add('heart');

        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDelay = `${Math.random() * 15}s`;
        heart.style.fontSize = `${Math.random() * 1 + 1}rem`;
        heart.style.color = `rgba(255, ${Math.floor(Math.random() * 107) + 107}, ${Math.floor(Math.random() * 150) + 100}, ${Math.random() * 0.5 + 0.3})`;

        heartsContainer.appendChild(heart);
    }
}

function createFloatingHearts() {
    const container = document.getElementById('floating-hearts');
    const count = 15;

    for (let i = 0; i < count; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '<i class="fas fa-heart"></i>';
        heart.classList.add('floating-heart');

        heart.style.left = `${Math.random() * 100}%`;
        heart.style.top = `${Math.random() * 100}%`;
        heart.style.animationDelay = `${Math.random() * 15}s`;
        heart.style.fontSize = `${Math.random() * 1 + 1.5}rem`;
        heart.style.color = `rgba(255, ${Math.floor(Math.random() * 100) + 100}, ${Math.floor(Math.random() * 150) + 100}, ${Math.random() * 0.4 + 0.3})`;

        container.appendChild(heart);
    }
}

window.addEventListener('DOMContentLoaded', () => {
    createHearts();
    createFloatingHearts();
    startAutoSlide();
    const audio = document.getElementById("bg-music");
    function playMusic() {
        audio.play().catch((error) => {
            console.warn("Autoplay bloqueado, esperando interacción del usuario.");
        });
        document.removeEventListener("click", playMusic);
        document.removeEventListener("touchstart", playMusic);
    }
    document.addEventListener("click", playMusic);
    document.addEventListener("touchstart", playMusic);
});