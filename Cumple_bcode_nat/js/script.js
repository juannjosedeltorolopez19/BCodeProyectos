
document.addEventListener('DOMContentLoaded', function() {
    const particlesContainer = document.getElementById('particles');
    const colors = ['rgba(255, 105, 180, 0.7)', 'rgba(147, 112, 219, 0.7)', 'rgba(212, 175, 55, 0.7)'];
    
    for (let i = 0; i < 100; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.top = Math.random() * 100 + 'vh';
        particle.style.width = Math.random() * 4 + 1 + 'px';
        particle.style.height = particle.style.width;
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.animationDuration = Math.random() * 20 + 10 + 's';
        particle.style.animationDelay = Math.random() * 10 + 's';
        particlesContainer.appendChild(particle);
    }
    
    const openBtn = document.getElementById('openLetter');
    const closeBtn = document.getElementById('closeBtn');
    const modal = document.getElementById('letterModal');
    
    openBtn.addEventListener('click', function() {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        for (let i = 0; i < 150; i++) {
            setTimeout(() => {
                createConfetti();
            }, i * 30);
        }
    });
    
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    function createConfetti() {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.width = Math.random() * 12 + 5 + 'px';
        confetti.style.height = Math.random() * 12 + 5 + 'px';
        confetti.style.animationDuration = Math.random() * 4 + 3 + 's';
        confetti.style.opacity = Math.random() * 0.8 + 0.2;
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
});
