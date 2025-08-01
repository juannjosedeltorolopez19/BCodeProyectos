
document.addEventListener('DOMContentLoaded', function() {
    const matrixHearts = document.getElementById('matrixHearts');
    const heartSymbols = ['❤', '♥', '💖', '💗', '💘', '💓'];
    
    function createMatrixHearts() {
        const heart = document.createElement('div');
        heart.className = 'heart-matrix';
        heart.innerHTML = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = 2 + Math.random() * 3 + 's';
        heart.style.opacity = Math.random() * 0.5 + 0.3;
        heart.style.fontSize = (10 + Math.random() * 15) + 'px';
        matrixHearts.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
    
    setInterval(createMatrixHearts, 100);
    const heartBtn = document.getElementById('heartBtn');
    const letterModal = document.getElementById('letterModal');
    const closeBtn = document.getElementById('closeBtn');
    
    heartBtn.addEventListener('click', function() {
        letterModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                createHeartExplosion();
            }, i * 50);
        }
    });
    
    closeBtn.addEventListener('click', function() {
        letterModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    window.addEventListener('click', function(event) {
        if (event.target === letterModal) {
            letterModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    const audio = new Audio('https://bcodestorague.anteroteobaldob.workers.dev/share/anteroteobaldob_gmail_com/AUDIO/those%20eyes%20.mp3');
    let isPlaying = false;

    function toggleAudio() {
    if (isPlaying) {
        audio.pause();
        musicBtn.textContent = '♪';
        heartBtn.textContent = '❤️';
    } else {
        audio.play().catch(e => console.log("La reproducción automática fue prevenida. Haz clic manualmente."));
        musicBtn.textContent = '❚❚';
        heartBtn.textContent = '❚❚';
    }
    isPlaying = !isPlaying;
    }

    const musicBtn = document.getElementById('musicBtn');
    musicBtn.addEventListener('click', toggleAudio);
    heartBtn.addEventListener('click', toggleAudio);

    window.addEventListener('mousemove', function autoPlayOnce() {
    if (!isPlaying) {
        audio.play().then(() => {
        musicBtn.textContent = '❚❚';
        heartBtn.textContent = '❚❚';
        isPlaying = true;
        }).catch(e => console.log("Autoplay bloqueado por el navegador."));
    }
    window.removeEventListener('mousemove', autoPlayOnce);
    });


    function createHeartExplosion() {
        const explosion = document.createElement('div');
        explosion.innerHTML = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
        explosion.style.position = 'fixed';
        explosion.style.left = Math.random() * 100 + 'vw';
        explosion.style.top = Math.random() * 100 + 'vh';
        explosion.style.color = `hsl(${Math.random() * 30 + 330}, 100%, 70%)`;
        explosion.style.fontSize = '25px';
        explosion.style.zIndex = '100';
        explosion.style.transform = 'scale(0)';
        explosion.style.animation = `pop 0.5s forwards, fadeOut 0.5s 0.5s forwards`;
        
        document.body.appendChild(explosion);
        
        setTimeout(() => {
            explosion.remove();
        }, 1000);
    }
    
    document.addEventListener('dblclick', function(e) {
        e.preventDefault();
    }, { passive: false });
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pop {
            to { transform: scale(1); }
        }
        @keyframes fadeOut {
            to { opacity: 0; transform: scale(0.5); }
        }
    `;
    document.head.appendChild(style);
});
