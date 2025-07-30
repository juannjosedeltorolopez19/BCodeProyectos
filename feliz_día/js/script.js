
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
        heart.style.fontSize = 10 + Math.random() * 20 + 'px';
        matrixHearts.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
    
    setInterval(createMatrixHearts, 100);
    
    const heartBtn = document.getElementById('heartBtn');
    const hiddenMessage = document.getElementById('hiddenMessage');
    
    heartBtn.addEventListener('click', function() {
        hiddenMessage.style.display = 'block';
        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                const x = Math.random() * window.innerWidth;
                const y = Math.random() * window.innerHeight;
                createExplosion(x, y);
            }, i * 50);
        }
    });
    function createExplosion(x, y) {
        const explosion = document.createElement('div');
        explosion.innerHTML = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
        explosion.style.position = 'fixed';
        explosion.style.left = x + 'px';
        explosion.style.top = y + 'px';
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
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pop {
            to { transform: scale(1) translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px); }
        }
        @keyframes fadeOut {
            to { opacity: 0; transform: scale(0.5) translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px); }
        }
    `;
    document.head.appendChild(style);
});
