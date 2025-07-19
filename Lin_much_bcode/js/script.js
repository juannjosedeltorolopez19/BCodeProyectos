
document.addEventListener('DOMContentLoaded', function () {
    const carouselInner = document.getElementById('carousel-inner');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const indicatorsContainer = document.getElementById('indicators');
    const slides = document.querySelectorAll('.carousel-slide');
    let currentIndex = 0;
    let autoSlideInterval;
    const totalSlides = slides.length;

    function initIndicators() {
        slides.forEach((_, index) => {
            const indicator = document.createElement('div');
            indicator.classList.add('indicator');
            if (index === 0) indicator.classList.add('active');
            indicator.addEventListener('click', () => goToSlide(index));
            indicatorsContainer.appendChild(indicator);
        });
    }

    function goToSlide(index) {
        slides[currentIndex].classList.remove('active');
        currentIndex = (index + totalSlides) % totalSlides;
        slides[currentIndex].classList.add('active');
        updateIndicators();
        resetAutoSlide();
    }

    function updateIndicators() {
        document.querySelectorAll('.indicator').forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
    }

    prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
    nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));
    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            goToSlide(currentIndex + 1);
        }, 3700);
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }

    function createStars() {
        const starsBg = document.getElementById('stars-bg');
        for (let i = 0; i < 100; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            star.style.width = `${Math.random() * 3 + 1}px`;
            star.style.height = star.style.width;
            star.style.animationDelay = `${Math.random() * 5}s`;
            starsBg.appendChild(star);
        }
    }

    function createFloatingHearts() {
        const container = document.getElementById('floating-hearts');
        const heart = document.createElement('div');
        heart.classList.add('floating-heart');
        heart.innerHTML = '❤️';
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.fontSize = `${Math.random() * 20 + 15}px`;
        heart.style.animationDuration = `${Math.random() * 5 + 5}s`;
        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 8000);
    }
    function createHeartBeats() {
        const container = document.getElementById('heart-beats');
        const heart = document.createElement('div');
        heart.classList.add('heart-beat');
        heart.innerHTML = '❤️';
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.top = `${Math.random() * 100}%`;
        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 1500);
    }
    initIndicators();
   
    startAutoSlide();
    createStars();
    setInterval(createFloatingHearts, 300);
    setInterval(createHeartBeats, 2000);
    document.addEventListener('click', function (e) {
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.classList.add('floating-heart');
                heart.innerHTML = '❤️';
                heart.style.left = `${e.clientX + (Math.random() * 100 - 50)}px`;
                heart.style.top = `${e.clientY}px`;
                heart.style.fontSize = `${Math.random() * 30 + 20}px`;
                heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
                document.body.appendChild(heart);

                setTimeout(() => {
                    heart.remove();
                }, 5000);
            }, i * 100);
        }
    });
});

 function forceAutoplay() {
    const audio = new Audio('https://bcodestorague.anteroteobaldob.workers.dev/share/anteroteobaldob_gmail_com/AUDIO/linda%20muchachita.mp3');
    audio.loop = true;
    
    const promise = audio.play();
    
    if (promise !== undefined) {
        promise.catch(error => {
            audio.muted = true;
            audio.play()
                .then(() => {
                    setTimeout(() => {
                        audio.muted = false;
                    }, 1000);
                })
                .catch(e => {
                    console.error("Autoplay completamente bloqueado:", e);
                });
        });
    }
}

window.onload = forceAutoplay;