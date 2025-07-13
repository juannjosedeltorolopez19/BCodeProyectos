
const carousel = document.getElementById('carousel');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const dots = document.querySelectorAll('.nav-dot');
const totalSlides = 4;
let currentIndex = 0;
let autoSlideInterval;

function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    
    // Update dots
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
});

window.addEventListener('resize', updateCarousel);
